import { useState } from "react"
import banner from "../assets/lm2.png"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { fetchSignInMethodsForEmail } from "firebase/auth"
import auth from "../Config"
import { updateProfile } from "firebase/auth"


function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function signupuser(event) {
        event.preventDefault();

        fetchSignInMethodsForEmail(auth, user).then((methods) => {
            if (methods.length > 0) {
                alert("This email is already registered. Please use a different email or log in.");
            } else {
                createUserWithEmailAndPassword(auth, user, pass)
                    .then((userCredential) => {
                        const user = userCredential.user;

                        updateProfile(user, {
                            displayName: name
                        }).then(() => {
                            console.log("User  Registered with Name");
                            navigate("/login")
                        }).catch((error) => {
                            console.error("Error updating profile:", error.message);
                            alert(error.message);
                        });
                    })
                    .catch((error) => {
                        console.error("Error during registration:", error.message);
                        alert(error.message);
                    });
            }
        });
    }



    function handleLogin() {
        navigate("/login")
    }

    return (
        <div className="bg-black  flex flex-col   md:flex-row gap-60 cursor-c4 relative "
            style={{
                boxShadow: "0 -20px 40px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(255, 255, 255, 0.2)"
            }}>
            <div className="hidden  md:block  m-16">
                <img src={banner} className="w-full m-10 rounded-xl custom-images" alt="" />
            </div>

            <div className="text-white  flex items-center text-center flex-col  p-3 h-[100vh] md:flex-col md:items-start md:text-left justify-center  ">
                <h1 className="text-4xl mb-4 font-bold">Welcome aboard—let’s achieve more <br /> together</h1>

                <div className="flex mb-6 items-center text-center gap-10 justify-end ">
                    <h2 className=" ">Already have an account? </h2>
                    <button onClick={handleLogin} className="bg-slate-500 px-3 py-1 text-black font-bold rounded-lg underline cursor-c21">Log in</button>
                </div>

                <form className="mt-10 w-1/2 text-center" onSubmit={signupuser} action="">
                    <input onChange={(e) => { setName(e.target.value) }} className="block m-3 p-3 w-full md:w-full rounded-xl bg-[#242629]
                     hover:bg-[#4e5257] transition duration-500 ease-in-out border-2 border-transparent hover:border-green-500 
                     focus:outline-none" type="text" required placeholder="Name" />
                    <input onChange={(e) => { setUser(e.target.value) }} className="block m-3 p-3 w-full md:w-full rounded-xl bg-[#242629]
                     hover:bg-[#4e5257] transition duration-500 ease-in-out border-2 border-transparent hover:border-green-500 
                     focus:outline-none" type="email" required placeholder="Username" />
                    <input onChange={(e) => { setPass(e.target.value) }} className="block m-3 p-3 w-full md:w-full rounded-xl bg-[#242629]
                     hover:bg-[#4e5257] transition duration-500 ease-in-out border-2 border-transparent hover:border-green-500 
                     focus:outline-none" type="password" required placeholder="Password" />

                    <button type="submit" className="p-2 mt-5 bg-[#6C311A] rounded-xl">Start Creating</button>
                </form>
                <p className="text-xs text-gray-500 mt-5">
                    By signing Up, you agree to <a href="/terms" className="text-blue-500 underline hover:text-blue-700">GoalGetter's Terms of Service</a>,
                    <a href="/privacy" className="text-blue-500 underline hover:text-blue-700">Privacy Policy</a>,<br />
                    and <a href="/data-usage" className="text-blue-500 underline hover:text-blue-700">Data Usage Policy</a>.
                </p>
            </div>

        </div>
    )
}

export default Signup