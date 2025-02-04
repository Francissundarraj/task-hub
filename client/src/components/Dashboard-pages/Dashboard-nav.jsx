import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import completed from "../../assets/completed15.png"
import pending from "../../assets/todo1.png"
import star from "../../assets/star.png"
import home from "../../assets/pending3.png"
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
            <div className="  h-[100vh] bg-[#454a58] hidden md:flex flex-col items-center   rounded-xl my-16 mx-2 gap-10">

                <div className="flex m-5 items-center  relative group ">
                    <Link to="/dashboardlayout/myboard" className="inline-flex items-center">                               
                        <img className="h-7 flex-shrink-0" src={home} alt="Home" />
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        In Progress
                        </span>

                    </Link>
                </div>

                   <div className="flex m-5 items-center relative group">
                   
                    <Link  className="inline-flex items-center" to="/dashboardlayout/completed"> <img className="h-10" src={completed} alt="" />  
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Achieved
                        </span></Link>
                </div>

                <div className="flex m-5 items-center  relative group">
                    
                    <Link className="inline-flex items-center" to="/dashboardlayout/planned"><img className="h-7" src={pending} alt="" /> 
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     Planned
                        </span> </Link> 
                </div>

                <div className="flex m-5 items-center  relative group">
               
                    <Link className="inline-flex items-center" to="/dashboardlayout/favorites"><img className="h-7" src={star} alt="" />  
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 min-w-[80px] text-center text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Favorites
                        </span></Link>
                </div>


                <div className="flex justify-center my-5 text-[#ffffff] ">
                    <button className="bg-[#6C311A] px-2 py-1 rounded-xl" onClick={logout}>Signout</button>
                </div>


            </div>
            <div className=" md:hidden w-10 ">
                {!sideNav && (
                    <img onClick={showSideNav} className="h-12" src={menu} alt="" />
                )

                }

                {sideNav && (
                    <div className=" fixed top-24 left-0 flex flex-col  bg-[#353534] z-30 font-bold rounded-xl  ">

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-7" src={home} alt="" />
                            <Link to="/dashboardlayout/myboard">Home</Link>
                        </div>

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-8" src={completed} alt="" />
                            <Link to="/dashboardlayout/completed">Completed</Link>
                        </div>

                        <div className="flex m-5 items-center  gap-5">
                            <img className="h-7" src={pending} alt="" />
                           <Link to="/dashboardlayout/planned">Planned</Link>


                


                        </div>

                        <div className="flex m-5 items-center gap-5">
                            <img className="h-7" src={star} alt="" />
                            <Link to="/dashboardlayout/favorites">Favorites</Link>
                        </div>



                        <div className="flex justify-around  my-5 text-red-700 ">
                            <button onClick={hideSideNav}>Close</button> 
                            <button className="text-[#0a271c]" onClick={logout}>Signout</button>
                        </div>

                        



                    </div>
                )

                }

            </div>
        </div>
    )
}

export default Dashboardnav