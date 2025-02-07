import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../Dashboard'
import EditTask from './Edit'
import axios from "axios"
import bin from "../../assets/bin1.png"
import pin from "../../assets/pin1.png"
import lens from "../../assets/search2.png"

const DashboardHome = () => {
    const { tasks, setTasks, formatCreatedDate, handleDelete, pendingTasks } = useContext(TaskContext);
    const [search, setSearch] = useState('')
    const [sortTask, setSortTask] = useState('')
    const filteredTasks = tasks.filter(task =>
        task.taskName.toLowerCase().includes(search.toLowerCase()))

    const sortedTasks = () => {
        let sorted = [...tasks];
        if (sortTask === "title") {
            sorted.sort((a, b) => a.taskName.localeCompare(b.taskName));
        } else if (sortTask === "date") {
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortTask === "priority") {
            const priorityOrder = { high: 1, medium: 2, low: 3 }; // Priority mapping
            sorted.sort((a, b) => priorityOrder[a.priority.toLowerCase()] - priorityOrder[b.priority.toLowerCase()]);
        }
        return sorted;
    };
    const displayedTasks = sortTask ? sortedTasks() : filteredTasks;
    return (
        <div className='flex justify-between mx-6 md:mx- my-1'>
            <div className=' min-h-screen w-full  rounded-3xl  p-5 bg-[#ffffff0f] backdrop-blur-md border border-[#ffffff1a] shadow-lg'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <h1 className=' text-xl md:text-3xl mx-6 mb-5 text-[#c47a7a]'>Task Board</h1>
                    <div className='relative w-64 mb-5 '>
                        <input className='outline-none p-1 w-full ull px-4 py-2 pr-10 rounded-lg bg-[#ffffff1a] text-white placeholder-gray-400 border
                         border-gray-500 focus:ring-2 focus:ring-[#c47a7a]' type="text" placeholder='search Tasks'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                        <button className='absolute inset-y-0 right-2 flex items-center justify-center' type='submit' >
                            <img src={lens} className='h-8 opacity-70' alt="search" /></button>

                    </div>

                    <div className='flex items-center gap-4 mb-5'>
                        <select
                            name="sort"
                            id="sort"
                            value={sortTask}
                            onChange={(e) => setSortTask(e.target.value)}
                            className='px-3 py-2 rounded-lg bg-[#ffffff1a] text-white border
                     border-gray-500 focus:ring-2 focus:ring-[#c47a7a]'>
                            <option className='text-[#000]' value="">Sort</option>
                            <option className='text-[#000]' value="title">Sort By Title</option>
                            <option className='text-[#000]' value="date">Sort By Due Date</option>
                            <option className='text-[#000]' value="priority">Sort By Priority</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    {displayedTasks.length > 0 ? (
                        displayedTasks.map((card) => (
                            <div key={card._id} className='flex flex-col overflow-auto w-64 h-[20rem] px-4 py-3 gap-4 shadow-sm m-2 border-[#b82d34] bg-gradient-to-b from-[#091513] to-[#364d48] transition-all duration-300 hover:shadow-[0_0_15px_#00ffcc] rounded-lg border-2'>
                                <h1 className='text-2xl font-bold text-[#615e5e]'>{card.taskName}</h1>
                                <p className='whitespace-normal break-words'>{card.description}</p>
                                <p>Status: {card.status}</p>
                                <p className='text-sm font-semibold text-[#1a7581]'>Due: {new Date(card.date).toLocaleDateString('en-GB')}</p>
                                <div className='flex justify-between mt-auto items-center gap-2'>
                                    <p className='text-xs font-semibold text-[#a88a25]'>{formatCreatedDate(card.createdDate)}</p>
                                    <p className='text-xs text-[#2b9e20]'>{card.priority}</p>
                                    <div className='flex items-center gap-4'>
                                        <button><img className='h-6 cursor-pointer' src={pin} alt="pin" /></button>
                                        <EditTask task={card} />
                                        <button onClick={() => handleDelete(card._id)}><img className='h-6 cursor-pointer' src={bin} alt="delete" /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-white text-lg'>No such tasks available.</p>
                    )}
                </div>
            </div>


        </div>
    )
}


export default DashboardHome