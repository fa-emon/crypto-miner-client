import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BiSolidUserCircle } from 'react-icons/bi';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const isUserLoggedIn = !!user;

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/mining'}>Mining</Link></li>
        {
            user ?
                <>
                    <li><button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button></li>
                </> :
                <>
                    <li><Link to={'/login'}>Log In</Link></li>
                    <li><Link to={'/register'}>Sign Up</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar rounded bg-gradient-to-r from-violet-300 to-fuchsia-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 heading-font">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl heading-font">Crypto Miner</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 heading-font">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    isUserLoggedIn ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                <img
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                            </div>
                        </>
                        :
                        <>
                            <div className="tooltip tooltip-left" data-tip={'No User Found'}>
                                <BiSolidUserCircle className="w-10 h-10 rounded-full mr-2 bg-slate-200"></BiSolidUserCircle>
                            </div>
                        </>
                }
            </div>
        </div>

    );
};


export default NavBar;