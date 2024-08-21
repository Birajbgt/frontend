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
import CreateAlbum from "./pages/album/CreateAlbum";
import AlbumDetails from "./pages/album/AlbumDetails";
import UpdateAlbum from "./pages/album/UpdateAlbum";
function App() {
    return (
        <Router>
            <Navbar />
            <ToastContainer />

            <Routes>
                <Route>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/note' element={<AddNotes />} />
                    <Route path='/album' element={<CreateAlbum />} />
                    <Route path='/note/update/:id' element={<UpdateNote />} />
                    
                    <Route path='/seealbum' element={<AlbumDetails />} />
                    <Route path='/albums/:id' element={<UpdateAlbum />} />
                </Route>

            </Routes>

        </Router>
    );
}

export default App;