import React,{ useEffect } from 'react'
import{ Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
    let history = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        history("/login")
    }
    let location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "eNotebook - Home";
        } else {
            document.title = "eNotebook - " + location.pathname.slice(1);
        }
    }, [location]);
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} navbar bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">eNotebook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            {!localStorage.getItem('token')? <form className="d-flex" role="search">
                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>: <button onClick={handleLogout} className="btn btn-primary mx-1">Logout </button>}
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
