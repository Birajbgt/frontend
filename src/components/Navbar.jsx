import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // get user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // logout Function
    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }

    return (
        <>
            <div className="container mt-2"></div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
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
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/note">
                                    notes
                                </a>
                            </li><li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/album">
                                    Album
                                </a>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            {user ? (
                                <>
                                    <div class="dropdown">
                                        <button
                                            class="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Welcome, {user.firstName}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to={"/login"} class="btn btn-primary" type="submit">
                                        Login
                                    </Link>
                                    <Link
                                        to={"/Register"}
                                        class="btn btn-success ms-2"
                                        type="submit"
                                    >
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