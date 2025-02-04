import { useEffect } from "react"
import banner from "../assets/b3.png"
import { useNavigate } from "react-router-dom"

import auth from "../Config"


function Home() {
  const navigate = useNavigate()

  useEffect(() => {
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
          <h1 className=" my-10 text-[#a5fdf6]   text-4xl font-semibold ">Make Every Goal a Reality.</h1>
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



      <div className="flex flex-wrap justify-center gap-8 mt-10">

        {/* Total Tasks */}
        <div className="bg-gradient-to-br from-[#427a8f] to-[#0088CC] text-[#ffff] p-6 rounded-2xl shadow-lg w-64 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_#00AEEF80]">
          <h3 className="text-2xl font-bold">Total Tasks</h3>
          <p className="text-4xl font-extrabold mt-2">185000</p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-gradient-to-br from-[#60b17d] to-[#22C55E] text-white p-6 rounded-2xl shadow-lg w-64 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_#4ADE8080]">
          <h3 className="text-2xl font-bold">Completed Tasks</h3>
          <p className="text-4xl font-extrabold mt-2">132000</p>
        </div>

        {/* Pending Tasks */}
        <div className="bg-gradient-to-br from-[#867c52] to-[#EAB308] text-white p-6 rounded-2xl shadow-lg w-64 text-center 
                  transform transition duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_#FACC1580]">
          <h3 className="text-2xl font-bold">Pending Tasks</h3>
          <p className="text-4xl font-extrabold mt-2">46521</p>
        </div>

      </div>

      <h1 className="text-3xl  text-[#C56F41] font-bold mt-12 m-5 ">  Workflows for any project, big or small </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5 mb-10">

    {/* Project management */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00AEEF]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M3 13h18M3 6h18M3 18h18M7 6h1v12H7z" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Project management</h3>
        <p className="text-gray-400">Keep tasks in order, deadlines on track, and team members aligned.</p>
    </div>

    {/* Meetings */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00FF00]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M6 2v4M18 2v4M4 6h16c1.104 0 2 0.896 2 2v12c0 1.104-0.896 2-2 2H4c-1.104 0-2-0.896-2-2V8c0-1.104 0.896-2 2-2z" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Meetings</h3>
        <p className="text-gray-400">Empower your team meetings to be more productive, empowering, and fun.</p>
    </div>

    {/* Onboarding */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#FFD700]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M12 5v14M5 12h14M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Onboarding</h3>
        <p className="text-gray-400">Onboarding to a new company or project is a snap with Goalgetter's visual layout of to-dos, resources.</p>
    </div>

    {/* Task Deadlines */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#8A2BE2]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#8A2BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M17 8h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2" />
            <path d="M12 14h.01" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Task Deadlines</h3>
        <p className="text-gray-400">Set due dates for your tasks to stay on track.</p>
    </div>

    {/* Notifications */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#FF6347]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#FF6347]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M12 2a6 6 0 0 1 6 6v4a4 4 0 0 1 4 4v6H2v-6a4 4 0 0 1 4-4V8a6 6 0 0 1 6-6z" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Notifications</h3>
        <p className="text-gray-400">Get reminders for upcoming tasks and deadlines.</p>
    </div>

    {/* Task Categories */}
    <div className="bg-[#0D1117] p-6 rounded-xl shadow-lg text-center border border-gray-800
        transition transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#FF1493]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#FF1493]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M5 3v18h14V3H5zm4 14h6v2H9v-2z" />
        </svg>
        <h3 className="text-xl font-bold mt-4 text-white">Task Categories</h3>
        <p className="text-gray-400">Organize tasks into categories for better tracking.</p>
    </div>

</div>



    </div>
  )
}

export default Home