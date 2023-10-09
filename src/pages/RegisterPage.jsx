import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Foother from '../component/Foother';


const Register = () => {

    const { createUser, name,loading } = useContext(AuthContext);
    console.log(createUser, name);

    
    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }



    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = (form.get('name'));
        const email = (form.get('email'));
        const password = (form.get('password'));

        createUser(email, password, name)
            .then()
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
                                Register to your account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-red-500">Your Name :</label>
                                    <input type="name" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-orange-500">Your email :</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-lime-500">Password :</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-emerald-400">Remember me</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline text-orange-400">Register</button>
                                </div>
                                <Link to={'/login'}>
                                    <p className="text-sm mt-4 font-light text-red-700">
                                        Already have an account ? <a href="#" className="font-medium text-blue-500 text-primary-600 hover:underline dark:text-primary-500">Login</a>
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

export default Register;