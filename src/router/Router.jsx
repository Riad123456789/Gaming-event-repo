import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
                loader:()=>fetch('survices.json')
                                
            },
            {
                path:'/services',
                element:<ServicesPage></ServicesPage>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
]);




export default router