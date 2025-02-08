import React, { useEffect, useState } from 'react';
import banner from "../assets/lm8.jpg"
import { useNavigate } from 'react-router-dom';
import auth from '../Config';
import { signInWithEmailAndPassword } from 'firebase/auth';



function Login() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        user.getIdToken().then((token) => {
          localStorage.setItem("firebaseToken", token)
          console.log(token)
        })

        navigate('dashboard/dashboardhome')
      }


    })
  }, [])

  function loginUser(event) {
    event.preventDefault();
    setErrorMsg("");

    signInWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            userCredential.user.getIdToken().then((token) => {
                localStorage.setItem("firebaseToken", token);
                navigate("/dashboard/dashboardhome");  // ✅ Navigate after successful login
            });
        })
        .catch(() => {
            setErrorMsg("Login Failed. Please try again.");
        });
}

  function enterSignup() {
    navigate('/signup')
  }

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
  return (
    <div className='flex flex-col md:flex-row gap-40 cursor-c4 bg-black relative'
      style={{
        boxShadow: "0 -20px 40px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(255, 255, 255, 0.2)"
      }}>

      <div className='mx-10 hidden md:block'>
        <img className=' custom-image rounded-2xl m-20  ' src={banner} alt="" />
      </div>


      <div className='text-white  flex items-center text-center flex-col  p-3 h-[100vh] md:flex-col md:items-start md:text-left justify-center'>
        <h1 className='text-4xl font-bold mb-4'>Unlock the possibilities by managing your schedule .</h1>

        <div className='flex gap-2 items-center mb-6'>
          <h1 className='text-lg'>Dont have an account ? </h1>
          <button onClick={enterSignup} className='bg-[#6E9FAB] p-2 rounded-xl cursor-c21  text-black font-bold'>Create One</button>
        </div>

        <form onSubmit={loginUser} action="">

          <input onChange={(e) => { setUser(e.target.value) }} className='block m-3 p-3 w-full md:w-full rounded-xl bg-[#242629]
           hover:bg-[#4e5257] transition duration-500 ease-in-out border-2 border-transparent hover:border-green-500 focus:outline-none '
            style={{ boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.2)" }} type="email" required placeholder='  Username' />

          <div className="relative">
            <input
              onChange={(e) => setPass(e.target.value)}
              required
              className='block m-3 p-3 w-full md:w-full rounded-xl bg-[#242629] hover:bg-[#4e5257] transition duration-500 ease-in-out border-2 border-transparent hover:border-green-500 focus:outline-none'
              style={{ boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.2)" }}
              type={passwordVisible ? "text" : "password"}
              placeholder='Password'
            />
            <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3 text-white text-sm"   >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <button type='submit' className='mx-28 mt-4  text-xl bg-[#456066] py-2 px-6 rounded-xl text-black font-bold cursor-c1 '>Login</button>

        </form>

        <p className='text-red-600 text-sm mx-14 my-3'>{errorMsg}</p>
        <p className="text-xs cursor-c-14  text-gray-500 m-4">
          By signing In, you agree to <a href="/terms" className="text-blue-500 underline hover:text-blue-700 hover:cursor-c14">GoalGetter's Terms of Service</a>,<br />
          <a href="/privacy" className="text-blue-500 underline hover:text-blue-700 hover:cursor-c14">Privacy Policy</a>,
          and <a href="/data-usage" className="text-blue-500 underline hover:text-blue-700 hover:cursor-c14">Data Usage Policy</a>.
        </p>
      </div>


    </div>
  )
}

export default Login

