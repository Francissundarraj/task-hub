import { Link, Outlet } from "react-router-dom"
import React, { useState, createContext, useEffect } from 'react'
import axios from "axios"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Dashboardnav from "./Dashboard-pages/Dashboard-nav"
import Calculator from "./Calculator"
import PopupForm from './Dashboard-pages/PopupPage'

const TaskContext = createContext();

function DashBoard() {
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

    const [favTask, setFavTask] = useState("")
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
                    Authorization: `Bearer ${token}`,  
                }
            });

            if (response.status === 200) {
              
                setTasks((prevTasks) => prevTasks.filter(task => task._id !== taskId));
            } else {
                alert("Failed to delete task: " + response.data.message || "Unknown error"); 
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Error: " + (error.response?.data?.message || error.message || "Unknown error"));
        }    }

    const formatCreatedDate = (createdDate) => {
        const now = new Date();
        const created = new Date(createdDate);
        created.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);
        const diffTime = Math.abs(now - created);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (diffDays === 0) {
            return "Today"
        } else if (diffDays === 1) {
            return "Yesterday";
        } else {
            return `${diffDays} days ago`;
        }
    };
    const activeTasks = tasks.filter(task => task.status === "No" || task.status === "Pending");
    const completedTasks = filterTasksByStatus(tasks, "Completed");
    const pendingTasks = filterTasksByStatus(tasks, "Pending");
    const plannedTasks = filterTasksByStatus(tasks, "Planned");
    const openForm = () => setShowForm(true)
    return (
        <div className="min-h-screen w-full bg-[#000] mt-1 p-1">
            <div className=" mt-5 mx-16 md:mx-44 md:mt-10  ">
                <h1 className="text-2xl text-[#a2a89d]">Welcome, <span className="text-[#52832C] font-bold">{displayName}</span> </h1>
            </div>
            <div className='flex items-center justify-between mx-10 md:mx-44 my-2 '>
                <p className='text-[#bbb9b9]'>You have <span className="text-[#d46ddd]">{activeTasks.length}</span> pending tasks</p>
                <button onClick={openForm} type='submit' className='hidden md:block bg-[#29ccab]  hover:scale-105
       text-black px-4 py-3 rounded-full  transition-transform transform 
       hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300'>Add a new Task</button>

                <button onClick={openForm} type='submit' className='bg-[#8E3B46] md:hidden hover:bg-[#A94456] hover:scale-105 
             text-white px-3 py-2 rounded-full text-sm shadow-md transition-all 
             duration-300 ease-in-out hover:shadow-xl focus:outline-none 
             focus:ring-2 focus:ring-[#ff5c8d] active:scale-95"'>Add a new Task</button>
            </div>
            <div className="flex 0 ">
                <Dashboardnav />
                <TaskContext.Provider value={{
                    tasks, setTasks, displayName, setDisplayName, formData, setFormData, showForm, setShowForm, editTask, setEditTask,
                    showEditForm, setShowEditForm, handleEditTask, count, setCount, filterTasksByStatus, formatCreatedDate, completedTasks, pendingTasks
                    , plannedTasks, handleDelete, apiUrl, openForm, activeTasks
                }}>
                    <div className="  h-full w-[87%] rounded-xl ">
                        <Outlet />
                    </div>

                    <Calculator />
                    <PopupForm />
                </TaskContext.Provider>
            </div>
        </div>
    )}
export default DashBoard
export { TaskContext }

