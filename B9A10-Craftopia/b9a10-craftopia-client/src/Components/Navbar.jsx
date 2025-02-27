import { NavLink } from "react-router-dom";
import UseAuth from "../Layouts/UseAuth";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOut } = UseAuth();
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold"><NavLink to="/allartcraft">All Arts & Crafts</NavLink></li>
        <li className="font-semibold"><NavLink to={user ? "/addcraft" : "/login"}>Add Craft Item</NavLink></li>
        <li className="font-semibold"><NavLink to={user ? "/mylist" : "/login"}>My Arts & Craft List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 border-y-2 border-[#0000007a] my-2 flex-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn text-black text-sm md:text-2xl font-bold bg-white" data-tooltip-id="my-tooltip" data-tooltip-content="Welcome Artists!">
                    Crafto-Pia ◕‿◕
                </a><Tooltip id="my-tooltip" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <div className="dropdown dropdown-end ">
                            <div className="flex items-center">
                                {/* <h2 className="btn bg-[#C2EEB9] text-[#201919] p-2">{user?.email || "User"}</h2> */}
                                <h3 className="btn bg-[#C2EEB9] text-[#201919] p-2">{user?.email || "User"}</h3>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.email || "User"}>
                                            <img className="hover:'hi'" src={user?.photoURL || "../../public/img/user.png"} />
                                        </a><Tooltip id="my-tooltip" />

                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/addcraft">Add Craft Items</NavLink>
                                </li>
                                <li><NavLink to="/mylist">My Art&Craft List</NavLink></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <NavLink to="/login">
                                <button className="btn btn-secondary">Login</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="btn btn-secondary">Register</button>
                            </NavLink>
                        </div>
                }

            </div>
        </div >
    );
};

export default Navbar;