import React from 'react'
import { useContext } from 'react'
import { TaskContext } from './Dashboard'


const Calculator = () => {

    const {tasks,completedTasks , pendingTasks , plannedTasks} = useContext(TaskContext)

    return (
        <div className=' hidden md:flex flex-col gap-10  h-[70vh] bg-[#1B1F2C] rounded-2xl my-20  mx-2 items-center  '>


            <div className='bg-[#1B1F2C] rounded-2xl w-32 p-5 text-center'>
                <h1 className='text-sm text-[#999595]'>Total Tasks:</h1>
                <p className='text-green-400 text-2xl mt-2'>
                {tasks.length}
                </p>
            </div>

            <div className=' rounded-2xl p-5 w-32 text-center'>
                <h1 className='text-sm text-[#999595]'>In Progress:</h1>
                <p className='text-green-400 text-2xl mt-2'>
                {pendingTasks.length}
                </p>
            </div>
            
            <div className='rounded-2xl p-5 w-32 text-center'>
                <h1 className='text-sm text-[#999595]'>Planned:</h1>
                <p className='text-green-400 text-2xl mt-2'>
                {plannedTasks.length}
                </p>
            </div>
            
            <div className=' rounded-2xl p-5 w-32 text-center'>
                <h1 className='text-sm text-[#999595]'>Completed:</h1>
                <p className='text-green-400 text-2xl mt-2'>
                {completedTasks.length}
                </p>
            </div>
            



        </div>
    )
}

export default Calculator