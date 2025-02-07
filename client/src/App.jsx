
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/common pages/Navbar';
import Footer from './components/common pages/Footer';
import About from './components/About';

import DashBoard from './components/Dashboard';
import DashboardHome from './components/Dashboard-pages/Dashboard-Home';
import Completed from './components/Dashboard-pages/Completed';
import Planned from './components/Dashboard-pages/Planned';
import InProgress from './components/Dashboard-pages/InProgress';


import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard/*" element={<DashBoard />}>
            <Route path='inprogress' element={<InProgress />}></Route>
            <Route path='planned' element={<Planned />}></Route>
            <Route path='dashboardhome' element={<DashboardHome />}></Route>
            <Route path='completed' element={<Completed />}></Route>


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
