import { Link, Outlet } from "react-router-dom"
import React, { useState, createContext, useEffect } from 'react'
import axios from "axios"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Dashboardnav from "./Dashboard-pages/Dashboard-nav"
import Calculator from "./Calculator"



const TaskContext = createContext();

function DashBoardLayout() {
    const [tasks, setTasks] = useState([])
    const [displayName, setDisplayName] = useState("")
    const [formData, setFormData] = useState({ taskName: "", description: "", date: "", priority: "", completed: "" },)
    const [showForm, setShowForm] = useState(false)
    const [editTask, setEditTask] = useState("null")
    const [showEditForm, setShowEditForm] = useState("")
    const [count, setCount] = useState()
    const filterTasksByStatus = (tasks, status) => {
        return tasks.filter(task => task.status === status);
    };
    
    const handleEditTask = () => { 
        setFormData(tasks)
        setEditTask(tasks)
        setShowForm(true)
    }

const [favTask,setFavTask] = useState("")
const apiUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';


    useEffect(() => {
            const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    axios.get(`${apiUrl}/tasks`, { 
                        
                        headers: {
                            Authorization: `Bearer ${token}`, 
                        },
                        
                    })
                    
                        .then((data) => {
                            setTasks(data.data); 
                        })
                        .catch((error) => {
                            console.error("Error fetching tasks:", error);
                        });
                });
                setDisplayName(user.displayName || "Guest");
            } else {
                setDisplayName("Guest");
            }
        });

     
        return () => unsubscribe();
    }, [])


    const handleDelete = async (taskId) => {
        try {
            const token = localStorage.getItem("firebaseToken");
            console.log(token)
            if (!token) {
                alert("No authentication token found. Please log in again.");
                return;
            }

            const response = await axios.delete(`${apiUrl}/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,  // Attach the token for authentication
                }
            });

            if (response.status === 200) {
                // Successfully deleted task, update the UI by removing the task from the list
                setTasks((prevTasks) => prevTasks.filter(task => task._id !== taskId));
            } else {
                alert("Failed to delete task: " + response.data.message || "Unknown error");  // Handle error from backend
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Error: " + (error.response?.data?.message || error.message || "Unknown error"));
        }
    };


    const formatCreatedDate = (createdDate) => {
        const now = new Date();
        const created = new Date(createdDate);
        created.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);
        const diffTime = Math.abs(now - created);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (diffDays === 0) {
            return "Today";
        } else if (diffDays === 1) {
            return "Yesterday";
        } else {
            return `${diffDays} days ago`;
        }
    };
    const completedTasks = filterTasksByStatus(tasks, "Completed");
    const pendingTasks = filterTasksByStatus(tasks, "Pending");
    const plannedTasks = filterTasksByStatus(tasks, "Planned");
    return (
        <div className="min-h-screen w-full bg-[#ffffff] mt-1 p-1 ">


            <div className=" mt-5 mx-16 md:mx-32 md:mt-10  ">
                <h1 className="text-2xl">Welcome, <span className="text-[#1f756a] font-bold">{displayName}</span> </h1>
            </div>

            <div className="flex  ">
                <Dashboardnav />
                <TaskContext.Provider value={{
                    tasks, setTasks, displayName, setDisplayName, formData, setFormData, showForm, setShowForm, editTask, setEditTask,
                    showEditForm, setShowEditForm, handleEditTask ,count, setCount, filterTasksByStatus , formatCreatedDate , completedTasks , pendingTasks
                    , plannedTasks, handleDelete, apiUrl
                }}>
                    <div className="  h-full w-[87%] rounded-xl ">
                        <Outlet />
                    </div>
                    <Calculator/>

                </TaskContext.Provider>

               

            </div>


        </div>

    )
}

export default DashBoardLayout

export { TaskContext }

