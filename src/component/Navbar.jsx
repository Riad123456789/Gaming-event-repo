
import { Link, NavLink } from 'react-router-dom';
import img from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { LogOut, user } = useContext(AuthContext);

    const handleSignOut = e => {
        e.preventDefault();

        LogOut()
            .then()
            .catch()
    }


    const NavLinks = <>
        <NavLink to={'/'}><li className='font-bold text-white border-l-2 border-r-2'> <p>Home</p></li></NavLink>
        <NavLink to={'/services'}><li className='font-bold text-white  border-r-2' > <p>services </p></li></NavLink>
        <NavLink to={'/about'}> <li className='font-bold text-white  border-r-2'> <p>about </p></li></NavLink>
        <NavLink to={'/register'}><li className='font-bold text-white border-r-2'> <p>Contact</p></li></NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-black  ">
                <div className="navbar-start ">
                    <div className="dropdown text-white ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black">

                            {NavLinks}

                        </ul>
                    </div>

                </div>


                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}

                    </ul>
                </div>

                <div className="navbar-end  gap-2">

                    {
                        user?.displayName ? <p className='text-white text-xs'>{user.displayName}</p> : <p></p>
                    }

                    {
                        user?.photoURL ? <div className="w-10 border rounded-full">
                            <img className='rounded-full' src={user.photoURL} />
                        </div>
                            :
                            <div className="w-10 rounded-full">
                                <img className='rounded-full' src={img} />
                            </div>
                    }


                    {
                        user ? <button onClick={handleSignOut} className="btn btn-sm btn-outline text-amber-300 hover:bg-black">Sing out</button>
                            :

                            <button  className="btn btn-sm btn-outline text-amber-300 hover:bg-black">

                                <Link to={'/login'}>login</Link>
                            </button>


                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;