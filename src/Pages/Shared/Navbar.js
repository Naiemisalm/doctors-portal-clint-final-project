import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      }

    const menuItams = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user &&     <li><Link to='/dashboard'>Dashboard</Link></li>

        }
        <li>{ user ? <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  strokeLinecap="round"  strokeLinejoin="round"  stroewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItams}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Protal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItams}
                    </ul>
                </div>
                <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar"  className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  strokeLinecap="round"  strokeLinejoin="round"  stroewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;