import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../Dashboard';
import axios from 'axios';
import edit from "../../assets/edit10.png";
import close from "../../assets/close.png"; // Assuming you have a close icon for closing the form

const EditTaskForm = ({ task }) => {
    const { setTasks,apiUrl } = useContext(TaskContext);
    const [formData, setFormData] = useState({
        taskName: '',
        description: '',
        date: '',
        priority: '',
        status: '',
    });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (task) {
            setFormData(task); // Populate form with task data if editing
        } else {
            setFormData({
                taskName: '',
                description: '',
                date: '',
                priority: '',
                status: '',
            });
        }
    }, [task]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!formData.taskName || !formData.description || !formData.date || !formData.priority || !formData.status) {
            alert("Please fill out all fields!");
            return;
        }

        try {
            const token = localStorage.getItem('firebaseToken');
            const response = await axios.put(`${apiUrl}/tasks/${task._id}`,
                { ...formData },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Task updated successfully:", response.data);
            alert("Task updated successfully");

            // Update the tasks in state after successful update
            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t._id === task._id ? { ...t, ...formData } : t
                )
            );

            setShowForm(false); 
        } catch (error) {
            console.error("Error updating task:", error);
            alert("There was an error while updating the task.");
        }
    };

    const handleCloseForm = () => {
        setShowForm(false); // Close the form when the close button is clicked
    };

    return (
        <div>
            {/* Edit Button */}
            <button onClick={() => setShowForm(true)}>
                <img className='h-4 cursor-finger8' src={edit} alt="edit" />
            </button>

            {/* Form */}
            {showForm && (
                <div className="edit-form-container ">
                    <div className="form-overlay " onClick={handleCloseForm}></div> {/* Optional: Overlay to close form when clicked outside */}
                    <div className="form-content">
                        <img className='absolute h-8 top-2 right-2 cursor-pointer' src={close} alt="close" onClick={handleCloseForm} />

                        <form className='p-10 text-white' onSubmit={handleUpdate}>
                            <div  className='my-5'>
                                <label  className='block'> Title</label>
                                <input className='w-full rounded-xl bg-[#53575C] p-1 transition duration-500 ease-in-out border-2 
                border-transparent hover:border-green-500 focus:outline-none' 
                                    type="text"
                                    name="taskName"
                                    value={formData.taskName}
                                    onChange={handleInputChange}
                                />
                            </div> 
                            <div className='my-5'>
                                <label  className='block'>Description</label>
                                <textarea className='w-full rounded-xl bg-[#53575C] p-1 transition duration-500 ease-in-out border-2 
                border-transparent hover:border-green-500 focus:outline-none' 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='my-5'>
                                <label  className='block'>Priority</label>
                                <select className='w-full rounded-xl bg-[#53575C] p-1 transition duration-500 ease-in-out border-2 
                border-transparent hover:border-green-500 focus:outline-none' 
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                            <div className='my-5'>
                                <label  className='block'>Due Date</label>
                                <input className='w-full rounded-xl bg-[#53575C] p-1 transition duration-500 ease-in-out border-2 
                border-transparent hover:border-green-500 focus:outline-none' 
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='my-5'>
                                <label  className='block'>Task Status</label>
                                <select className='w-full rounded-xl bg-[#53575C] p-1 transition duration-500 ease-in-out border-2 
                border-transparent hover:border-green-500 focus:outline-none' 
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Planned">Planned</option>
                                </select>
                            </div>
                            <div className='flex gap-5'>
                            <button className='bg-[#1b7a43] w-full p-2 rounded-xl ' type="submit">Update Task</button> 
                            </div>
                            
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditTaskForm;
