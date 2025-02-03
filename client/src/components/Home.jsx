import { useEffect } from "react"
import banner from "../assets/b3.png"
import { useNavigate } from "react-router-dom"

import auth from "../Config"


function Home() {
  const navigate = useNavigate()

useEffect(()=>{
auth.onAuthStateChanged(function (user) {
  if (user) {
      console.log("Logged IN")
      navigate('/DashBoardLayout')
  }

  else {
      console.log("Logged Out")
  }
})
})


  function handleStarted() {
    navigate('/signup')
  }

  function knowMore() {
    navigate("/about")
  }

  return (
    <div >



      <div className="flex relative bg-[#F1EFFB] ">
        <div className=" w-full top-16 md:top-0 lef items-center text-center absolute flex flex-col  md:w-2/5  gap-6 ">
          <h1 className=" my-48 text-[#a5fdf6]   text-4xl font-semibold ">Make Every Goal a Reality.</h1>
          <p className="hidden md:block text-xl font-medium text-[#0f141a]">
            At Goalgetter, we believe that achieving your goals starts with organization.
            Our task manager is designed to help you stay focused, motivated, and in control.
            Whether you're working on personal projects, managing work tasks, or simply keeping track of daily activities,
            our app provides you with the tools you need to stay on top of everything.
          </p>
          <button onClick={knowMore} className="hidden md:block bg-[#474B4E] p-2 rounded-xl font-bold">Know more</button>

        </div>
        <div className="absolute top-3/4  left-1/3 md:top-1/2 md:left-3/4">
          <button onClick={handleStarted} className="bg-[#145e70]  mt-4 rounded-xl p-2 text-3xl cursor-pointer "> Get started </button>

        </div>
        <div className=" md:block  banner-pic">
          <img className="md:h-[70vh] md:w-[100vw] rounded-xl banner-pic " src={banner} alt="Banner" />
        </div>
      </div>



      <div class="flex space-x-8 justify-center mt-10">

        <div class="bg-blue-500 text-white  p-6 rounded-lg shadow-lg w-64 text-center">
          <h3 class="text-2xl font-bold">Total Tasks</h3>
          <p class="text-4xl font-extrabold">25</p>
        </div>


        <div class="bg-green-500 text-white p-6 rounded-lg shadow-lg w-64 text-center">
          <h3 class="text-2xl font-bold">Completed Tasks</h3>
          <p class="text-4xl font-extrabold">15</p>
        </div>


        <div class="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-64 text-center">
          <h3 class="text-2xl font-bold">Pending Tasks</h3>
          <p class="text-4xl font-extrabold">10</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M17 8h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2" />
            <path d="M12 14h.01" />
          </svg>
          <h3 class="text-xl font-bold mt-4">Task Deadlines</h3>
          <p class="text-gray-500">Set due dates for your tasks to stay on track.</p>
        </div>


        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M12 2a6 6 0 0 1 6 6v4a4 4 0 0 1 4 4v6H2v-6a4 4 0 0 1 4-4V8a6 6 0 0 1 6-6z" />
          </svg>
          <h3 class="text-xl font-bold mt-4">Notifications</h3>
          <p class="text-gray-500">Get reminders for upcoming tasks and deadlines.</p>
        </div>


        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M5 3v18h14V3H5zm4 14h6v2H9v-2z" />
          </svg>
          <h3 class="text-xl font-bold mt-4">Task Categories</h3>
          <p class="text-gray-500">Organize tasks into categories for better tracking.</p>
        </div>
      </div>

    </div>
  )
}

export default Home