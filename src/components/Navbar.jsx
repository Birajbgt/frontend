import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // get user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // logout Function
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <>
            <div className="container mt-2"></div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Memory <span className="text-danger">Mate</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/note">
                                    Notes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/album">
                                    Album
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {user ? (
                                <>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Welcome, {user.firstName}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="btn btn-primary">
                                        Login
                                    </Link>
                                    <Link to="/register" className="btn btn-success ms-2">
                                        Register
                                    </Link>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
