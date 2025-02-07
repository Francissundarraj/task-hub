const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { getAuth } = require("firebase-admin/auth");
const admin = require("firebase-admin");
require('dotenv').config()

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL.split(","),
  methods: 'GET,POST,PUT,DELETE',  
  allowedHeaders : 'Content-Type,Authorization',
  credentials: true,
}));


app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CREDENTIALS))
});

mongoose .connect(process.env.MONGO_URI)
  .then(function () {
    console.log("Database connected");
  })
  .catch(function () {
    console.log("DB not connected");
  });


const taskSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    createdDate: { type: Date, default: Date.now },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
    status: { type: String, enum: ["Completed", "Pending","Planned"], default: "No" },
    userId: { type: String, required: true },
   
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema, "tasks");


const authenticateUser = async (req, res, next) => {
  const idToken = req.headers.authorization?.split(" ")[1];
  if (!idToken) {
    
    console.log("No token provided");
    return res.status(403).send("Unauthorized");}

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.userId = decodedToken.uid;
    next();
  } catch (error) {
    return res.status(403).send("Unauthorized");
  }
};


app.get("/tasks", authenticateUser, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
});


app.post("/addtask", authenticateUser, async (req, res) => {
  try {
    const { taskName, description, date, priority, status  } = req.body.newtask;

    const newTask = new Task({
      taskName,
      description,
      date,
      priority,
      status,
      userId: req.userId,
      
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task" }); 
  }
});


app.put("/tasks/:taskId", authenticateUser, async (req, res) => {
  const { taskId } = req.params;
  const { taskName, description, dueDate, status } = req.body;

  try {
    const task = await Task.findOneAndUpdate({ _id: taskId, userId: req.userId },

        {
            taskName: taskName || undefined,
            description: description || undefined,
            status: status || undefined,
            dueDate : dueDate || undefined ,
            
           
        },

        {
            new:true
        }

    );
    if (!task) {
        return res.status(404).send("Task not found");
    }
    

     res.status(200).json(task);
  } catch (error) {
    res.status(500).send("Error updating task");
  }
});

app.delete("/tasks/:taskId", authenticateUser, async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: taskId, userId: req.userId });
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).send("Error deleting task");
  }
});

const PORT = 3000

app.listen(PORT, function () {
  console.log("Server started on port 3000");
});
