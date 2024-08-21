import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login/Loginpage';
import Register from './pages/register/Registerpage';
import AddNotes from "./pages/notes/AddNotes";
import UpdateNote from "./pages/notes/updateNotes";
function App() {
    return (
        <Router>
            <Navbar />
            <ToastContainer />

            <Routes>
                <Route>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<AddNotes />} />
                    <Route path='/note/update/:id' element={<UpdateNote />} />
                </Route>

            </Routes>

        </Router>
    );
}

export default App;