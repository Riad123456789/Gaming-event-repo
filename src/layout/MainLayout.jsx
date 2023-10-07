import { Outlet } from "react-router-dom";
import Foother from "../component/Foother";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto border p-2">

            <div className="">
            <Outlet></Outlet>
            </div>
            <Foother></Foother>

        </div>
    );
};

export default MainLayout;