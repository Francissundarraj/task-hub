import React, { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../Dashboard'
import EditTaskForm from './Edit'
import PopupForm from './PopupPage'
import Taskcard from './Taskcard'
import axios from "axios"




const MyBoard = () => {
    const { tasks, setTasks, formData, setFormData,
        displayName, setDisplayName, handleEditTask, editTask, setEditTask, showEditForm, setShowEditForm } = useContext(TaskContext);



    const activeTasks = tasks.filter(task => task.status === "No" || task.status === "Pending");

    return (
        <div>
            <div className='flex justify-between mx-6 md:mx-9 my-1 '>
                <div >
                    <p className='t'>You have {activeTasks.length} pending tasks</p>
                    
                </div>
                <div>
                    <PopupForm />
                </div>
            </div>

            <Taskcard tasks={activeTasks} />




        </div>
    )
}

export default MyBoard
