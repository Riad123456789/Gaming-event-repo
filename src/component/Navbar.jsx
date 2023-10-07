
import { NavLink } from 'react-router-dom';
import img from '../assets/user.png'

const Navbar = () => {

    const NavLinks = <>
        <NavLink to={'/'}><li className='font-bold'> <a>Home</a></li></NavLink>
        <NavLink to={'/about'}><li className='font-bold' > <p>About</p></li></NavLink>
        <NavLink to={'/career'}> <li className='font-bold'> <p>Career</p></li></NavLink>
        <NavLink to={'/login'}><li className='font-bold'> <p>login</p></li></NavLink>
    </>

    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {NavLinks}

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}

                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <div className="w-10 rounded-full">
                        <img src={img} />
                    </div>
                    <a className="btn btn-sm btn-outline">login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;