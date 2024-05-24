import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Loginpage';
import Register from './pages/register/Registerpage';

function App() {
    return (
        <Router>
            <Navbar />
            <ToastContainer />

            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* Admin route */}
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
            </Routes>

        </Router>
    );
}

export default App;