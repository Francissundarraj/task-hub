import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/common pages/Navbar';
import Footer from './components/common pages/Footer';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard from './components/Dashboard';
import DashboardHome from './components/Dashboard-pages/Dashboard-Home';
import Completed from './components/Dashboard-pages/Completed';
import Planned from './components/Dashboard-pages/Planned';
import InProgress from './components/Dashboard-pages/InProgress';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
   
          <Route path="/dashboard/*" element={<ProtectedRoute><DashBoard /></ProtectedRoute>}>
            <Route path="dashboardhome" element={<DashboardHome />} />
            <Route path="inprogress" element={<InProgress />} />
            <Route path="planned" element={<Planned />} />
            <Route path="completed" element={<Completed />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
