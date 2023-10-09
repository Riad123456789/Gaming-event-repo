import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import DetailsPage from "../pages/DetailsPage";
import AboutPage from "../pages/AboutPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('../survices.json')

            },
            {
                path: '/survic/:id',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:()=>fetch('../survices.json')
                

            },
            {
                path: '/services',
                element: <PrivateRoute><ServicesPage></ServicesPage></PrivateRoute>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:'/about',
                element:<PrivateRoute><AboutPage></AboutPage></PrivateRoute>
            }
        ]
    },
]);




export default router