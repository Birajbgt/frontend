import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./pages/login/Loginpage";
import RegisterPage from "./pages/register/Registerpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;