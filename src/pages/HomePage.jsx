import Header from "../component/Header";
import Navbar from "../component/Navbar";
import img from "../assets/pngtree-game-volcano-advertising-background-picture-image_979719.jpg"
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import Sponsored from "../component/Sponsored";


const HomePage = () => {

    const suevices = useLoaderData()

    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className="border relative">
                <img className="w-[1300px] h-80" src={img} alt="" />
            </div>

            <div className="bg-black">
                <div className=" text-center pt-8 ">
                    <p className="  text-3xl"><span className="text-orange-500">Esports</span> <span className="text-teal-500">and Gaming </span><span className="text-red-700 font-bold">services</span> </p>
                </div>

                <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 bg-black  shadow-lg rounded-lg pt-6 pb-4 ">
                    {
                        suevices.map(survic => <Card survic={survic} key={survic.id}></Card>)
                    }
                </div>
            </div>


            {/* <Sponsored></Sponsored> */}
        </div>
    );
};

export default HomePage;