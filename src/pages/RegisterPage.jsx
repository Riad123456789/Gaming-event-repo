import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Foother from '../component/Foother';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from 'sweetalert';
const Register = () => {

    const { createUser, loading } = useContext(AuthContext);


    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }



    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, email, password)

        createUser(email, password, name)
            .then(result => {
                if (result.user) {
                    swal('successfully register')
                }
            })
            .catch(error => {
                console.log(error)
            })

    }



    const handleRegisterWithGoogle = e => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then()
            .catch()

    }


    return (
        <div className='bg-black'>
            <Navbar></Navbar>

            <section className="bg-black max-w-5xl mx-auto mt-10  grid  md:grid-cols-5">

                <div className='text-white text-center mt-10 col-span-2 '>
                    <h1 className='font-semibold text-3xl'>How can we help?</h1>
                </div>

                <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 col-span-3">

                    <div className="w-full bg-black shadow-gray-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text text-center font-bold leading-tight tracking-tight md:text-2xl text-amber-300">
                                Register to your account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-3" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-red-500">Your Name :</label>
                                    <input type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-red-500">photo url :</label>
                                    <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photo url :"></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-orange-500">Your email :</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-lime-500">Password :</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>

                                <div className="form-control mt-6">

                                    <button className="btn btn-outline text-orange-400">Register</button>
                                </div>

                                <div className="form-control mt-6">

                                    <button onSubmit={handleRegisterWithGoogle} className="btn btn-outline text-orange-400"><FaGoogle></FaGoogle> sign up with google</button>
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