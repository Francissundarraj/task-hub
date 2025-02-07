import { Link, useNavigate } from "react-router-dom"
import completed from "../../assets/completed15.png"
import todo from "../../assets/todo1.png"

import pending from "../../assets/pending3.png"
import home from "../../assets/home1.png"
import menu from "../../assets/menu4.png"
import { useState } from "react"
import auth from "../../Config"
import { signOut } from "firebase/auth"

function Dashboardnav() {
    const [sideNav, setSideNav] = useState(false)
    const navigate = useNavigate()
    const showSideNav = () => {
        setSideNav(true)
    }
    const hideSideNav = () => {
        setSideNav(false)
    }

    function logout() {
        signOut(auth).then(() => {
            navigate("/login")
        })
    }

    return (
        <div>
            {/* Main Navbar */}

            <div className="  h-[80vh]  hidden md:flex flex-col  items-center w-32  rounded-xl my-10  gap-4">

                <div className="flex m-5 items-center  relative group  ">
                    <Link to="/dashboard/dashboardhome" className="inline-flex items-center">
                        <img className="h-10 flex-shrink-0 cursor-finger1" src={home} alt="Home" />
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Dashboard
                        </span>

                    </Link>
                </div>

                <div className="flex m-5 items-center  relative group  ">
                    <Link to="/dashboard/inprogress" className="inline-flex items-center">
                        <img className="h-7 flex-shrink-0 cursor-finger1" src={pending} alt="Home" />
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            In Progress
                        </span>

                    </Link>
                </div>

                <div className="flex m-5 items-center relative group">

                    <Link className="inline-flex items-center" to="/dashboard/completed"> <img className="h-10 cursor-finger1" src={completed} alt="" />
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Completed
                        </span></Link>
                </div>

                <div className="flex m-5 items-center  relative group">

                    <Link className="inline-flex items-center" to="/dashboard/planned"><img className="h-7 cursor-finger1" src={todo} alt="" />
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Planned
                        </span> </Link>
                </div>

                <div className="flex justify-center my-5 text-[#ffffff] ">
                    <button className="bg-[#5c2a16] px-2 py-1 rounded-xl text-sm text-[#d6c7c7]" onClick={logout}>Signout</button>
                </div>

            </div>

            {/* Side Navbar */}
            <div className=" md:hidden w-10 ">
                {!sideNav && (
                    <img onClick={showSideNav} className="h-12" src={menu} alt="" />
                )             }

                {sideNav && (
                    <div className=" fixed top-24 left-0 flex flex-col  bg-[#353534]/80 z-30 font-bold rounded-md  ">

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-8" src={home} alt="" />
                            <Link className="text-[#ececec]" to="/dashboard/dashboardhome">Dashboard</Link>
                        </div>

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-8" src={pending} alt="" />
                            <Link className="text-[#ececec]" to="/dashboard/inprogress">In Progress</Link>
                        </div>

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-8" src={completed} alt="" />
                            <Link className="text-[#ececec]" to="/dashboard/completed">Completed</Link>
                        </div>

                        <div className="flex m-5 items-center  gap-5">
                            <img className="h-7" src={todo} alt="" />
                            <Link className="text-[#ececec]" to="/dashboard/planned">Planned</Link>

                        </div>

                        <div className="flex justify-around  my-5  ">
                            <button className="text-[#2adb88]" onClick={hideSideNav}>Close</button>
                            <button className="text-[#dc6fe6]" onClick={logout}>Signout</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Dashboardnav