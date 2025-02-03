
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/common pages/Navbar';
import Footer from './components/common pages/Footer';
import About from './components/About';

import DashBoardLayout from './components/Dashboard';
import Dashboardnav from './components/Dashboard-pages/Dashboard-nav';
import Completed from './components/Dashboard-pages/Completed';
import Favourites from './components/Dashboard-pages/Favourites';
import Planned from './components/Dashboard-pages/Planned';
import MyBoard from './components/Dashboard-pages/My-Board';

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/dashboardlayout/*" element={<DashBoardLayout />}>
        <Route path='myboard' element={<MyBoard/>}></Route>
         <Route path='planned' element={<Planned/>}></Route>         
         <Route path='dashboardnav' element={<Dashboardnav/>}></Route>
         <Route path='favorites' element={<Favourites/>} ></Route>
         <Route path='completed' element={<Completed/>}></Route>
         

         </Route>
         
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
         
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;
