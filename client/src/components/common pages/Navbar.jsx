import { Link } from "react-router-dom"
import logo from "../../assets/logo4.png"
import menu from "../../assets/menu.png"
import { useEffect, useState } from "react"
import auth from "../../Config"
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                setShowLogin(false)
            }
            else {
                setShowLogin(true)
            }
        })
    })

    return (
        <div className="flex justify-between items-center text-xl m-2 ">

            <div className="flex flex-row items-center card gap-2 p-2">
                <img className="h-14 mx-2" src={logo} alt="" />
                <h1 className="text-4xl font-medium text-[#7c7b7b]  rounded-lg">GoalGetter</h1>
            </div>

            {/* Main Navbar */}

            <div className=" hidden md:flex  justify-between  ">
                <Link className=" hover:text-red-700 px-8 underline decoration-transparent hover:decoration-[#1d1c1c]  underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/"}>Home</Link>
                <Link className="  hover:text-red-700 px-8 underline decoration-transparent hover:decoration-[#1d1c1c]  underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/about"}>About</Link>
                <Link className="  hover:text-red-700 px-8 underline decoration-transparent hover:decoration-[#1d1c1c]  underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/contact"}>Contact</Link>
                {
                    showLogin ? <Link className=" hover:text-red-700 px-8 underline decoration-transparent hover:decoration-[#1d1c1c]  underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/login"} >Login</Link> : ""
                }
            </div>

            {/* Side Navbar */}
            <div onClick={toggleMenu} className="cursor-c10 md:hidden">
                <img className="h-10 " src={menu} alt="" />
            </div>
            {isMenuOpen && (
                <div className=" fixed flex items-center mt-1  text-center justify-center top-20 right-0 w-32
                   bg-[#414346] shadow-lg z-50 rounded-xl  md:hidden">
                    <div className=" text-lg font-bold flex flex-col gap-5 items-center text-center justify-center underline md:hidden  ">
                        <Link className=" px-2 underline decoration-transparent hover:decoration-[#5af0e8] underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/"}>Home</Link>
                        <Link className=" px-2 underline decoration-transparent hover:decoration-[#5af0e8] underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/about"}>About</Link>
                        <Link className=" px-2 underline decoration-transparent hover:decoration-[#5af0e8] underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/contact"}>Contact</Link>
                        {
                            showLogin ? <Link className=" px-2 underline decoration-transparent hover:decoration-[#5af0e8] underline-offset-4 transition-all
                         ease-in-out duration-500 cursor-c5" to={"/login"} >Login</Link> : ""
                        }
                    </div>

                </div>
            )

            }




        </div>
    )
}

export default Navbar

