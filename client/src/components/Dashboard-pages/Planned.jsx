import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../Dashboard';
import axios from 'axios';
import Taskcard from './Taskcard';
import EditTask from './Edit'
import bin from "../../assets/bin1.png"
import like from "../../assets/favorite2.png"


const Planned = () => {
    const { tasks, formatCreatedDate,plannedTasks,handleDelete } = useContext(TaskContext);

    return (
        <div className="p-5">
            <div className='bg-[#153436] h-[100vh] my-5 p-5 rounded-3xl '>
                <h1 className='text-2xl font-bold'>Planned Tasks</h1>
                <div className='flex  flex-wrap'>
                    {tasks && tasks.length > 0 ? (

                        plannedTasks.map((card) => (
                            <div key={card._id} className='flex flex-col overflow-auto w-80 h-[20rem] px-4 py-3 gap-4 shadow-sm m-2 bg-white rounded-lg border-2 border-white'>
                                <h1 className='text-2xl font-bold'>{card.taskName}</h1>
                                <p className='whitespace-normal break-words'>{card.description}</p>
                                <p>Status :{card.status}</p>
                                <p className='text-sm font-semibold text-[#1a7581]'>Due: {new Date(card.date).toLocaleDateString('en-GB')}</p>
                                <div className='flex justify-between mt-auto items-center gap-2'>
                                    <div>
                                        <p className='text-sm font-semibold text-[#a88a25]'>{formatCreatedDate(card.createdDate)}</p>  </div>
                                    <p className='text-sm text-[#2b9e20]'>{card.priority}</p>


                                    <div className='flex items-center gap-4 '>
                                        <div><button><img className='h-4 cursor-finger8' src={like} alt="like" /></button></div>
                                        <div><EditTask task={card} /></div>
                                        <div><button onClick={() => handleDelete(card._id)}><img className='h-4 cursor-finger8' src={bin} alt="delete" /></button></div>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tasks available.</p> // Optional: message when tasks array is empty
                    )
                    }
                </div>

            </div>

        </div>
    );
};

export default Planned;
