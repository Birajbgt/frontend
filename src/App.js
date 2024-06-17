import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./pages/ProductList";
import Test from "./pages/Test";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateProduct from "./pages/admin/update_product/UpdateProduct";
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Loginpage';
import Profile from "./pages/profile/Profile";
import Register from './pages/register/Registerpage';
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";

function App() {
    return (
        <Router>
            <Navbar />
            <ToastContainer />

            <Routes>
                <Route>
                    <Route path='/test' element={<Test />} />
                    <Route path='/product' element={<ProductList />} />
                    <Route path='/' element={<Homepage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Route>

                {/* Admin route */}
                <Route element={<AdminRoutes />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    <Route path='/admin/update/:id' element={<UpdateProduct />} />
                </Route>

                {/* user routes */}
                <Route element={<UserRoutes />}>
                    <Route path='/profile' element={<Profile />} />
                </Route>

            </Routes>

        </Router>
    );
}

export default App;