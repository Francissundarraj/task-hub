import React, {  useContext } from 'react';
import { TaskContext } from '../Dashboard';
import axios from 'axios';
import EditTask from './Edit'
import bin from "../../assets/bin1.png"
import like from "../../assets/favorite2.png"
import pin from "../../assets/pin1.png"


const Planned = () => {
    const { tasks, formatCreatedDate,plannedTasks,handleDelete } = useContext(TaskContext);

    return (
        <div >
            <div className='min-h-screen   rounded-3xl mx-5 p-5 bg-[#ffffff0f] backdrop-blur-md border border-[#ffffff1a] shadow-lg '>
                <h1 className='text-2xl font-bold mx-6 mb-5 text-[#c47a7a]'>Planned Tasks</h1>
                <div className='flex  flex-wrap'>
                    {tasks && tasks.length > 0 ? (
                        plannedTasks.map((card) => (
                            <div key={card._id} className='flex flex-col overflow-auto  w-80 h-[20rem] px-4 py-3 gap-4 shadow-sm m-2                            
                            border-[#b82d34] bg-gradient-to-b from-[#091513] to-[#364d48] transition-all duration-300
                             hover:shadow-[0_0_15px_#00ffcc] rounded-lg border-2 '>
                                <h1 className='text-2xl font-bold text-[#615e5e]'>{card.taskName}</h1>
                                <p className='whitespace-normal break-words'>{card.description}</p>
                                <p>Status :{card.status}</p>
                                <p className='text-sm font-semibold text-[#1a7581]'>Due: {new Date(card.date).toLocaleDateString('en-GB')}</p>
                                <div className='flex justify-between mt-auto items-center gap-2'>
                                    <div>
                                        <p className='text-sm font-semibold text-[#a88a25]'>{formatCreatedDate(card.createdDate)}</p>  </div>
                                    <p className='text-sm text-[#2b9e20]'>{card.priority}</p>
                                    <div className='flex items-center gap-4 '>
                                        <div><button><img className='h-4 cursor-finger8' src={pin} alt="like" /></button></div>
                                        <div><EditTask task={card} /></div>
                                        <div><button onClick={() => handleDelete(card._id)}><img className='h-4 cursor-finger8' src={bin} alt="delete" /></button></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tasks available.</p> 
                    )
                    }
                </div>
            </div>
        </div>
    );
};
export default Planned;
