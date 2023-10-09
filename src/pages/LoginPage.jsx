import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Foother from '../component/Foother';

const LoginPage = () => {
    const { LoginUser, loading, } = useContext(AuthContext);
    const navigate = useNavigate();
    const Location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = (form.get('email'));
        const password = (form.get('password'));


        LoginUser(email, password)
            .then(
                () => {
                    navigate(Location?.state ? Location.state : "/")
                }
            )
            .catch()
    }


    return (
        <div className='bg-black'>
            <Navbar></Navbar>

            <section className="bg-black max-w-5xl mx-auto   grid  md:grid-cols-5">

                <div className='text-white text-center mt-10 col-span-2 '>
                    <h1 className='font-semibold text-3xl'>How can we help?</h1>
                </div>

                <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 col-span-3">

                    <div className="w-full bg-black shadow-gray-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text text-center font-bold leading-tight tracking-tight md:text-2xl text-amber-300">
                                Login to your account
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-orange-500">Your email :</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-lime-500">Password :</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-outline text-orange-400">Login</button>
                                </div>
                                <Link to={'/register'}>
                                    <p className="text-sm mt-4 font-light text-red-700">
                                        please  register your account ?   <a href="#" className="font-medium text-blue-500 text-primary-600 hover:underline dark:text-primary-500">register</a>
                                    </p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Foother></Foother>
        </div>
    );
};

export default LoginPage;