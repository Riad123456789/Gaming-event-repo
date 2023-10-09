import Header from "../component/Header";
import Navbar from "../component/Navbar";
import img from "../assets/pngtree-game-volcano-advertising-background-picture-image_979719.jpg"
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import Sponsored from "../component/Sponsored";
import Section1 from "../component/section1";
import Section2 from "../component/Section2";
import Foother from "../component/Foother";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const HomePage = () => {

    const suevices = useLoaderData()
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }


    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className=" ">
                <img className="w-[1300px] h-80" src={img} alt="" />

                <div style={{ marginTop: "-270px" }} className="text-center text-pink-600 text-3xl    ">
                    <p className="font-semibold "> GAMING EVENTS AND ACTIVATIONS</p>
                    <div className="pt-10">
                        <p className="font-semibold  btn btn-outline btn-sm  text-white hover:bg-red-500 "> GAMING & EVENTS </p>
                    </div>
                </div>

            </div>

            <div className="bg-black mt-28">
                <div className=" text-center pt-20 ">
                    <p className=" btn btn-outline  text-3xl"><span className="text-orange-500">Esports</span> <span className="text-teal-500">and Gaming </span><span className="text-red-700 font-bold">services</span> </p>
                </div>

                <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 bg-black  shadow-lg rounded-lg pt-6 pb-4 ">
                    {
                        suevices.map(survic => <Card survic={survic} key={survic.id}></Card>)
                    }
                </div>
            </div>

            <Section1></Section1>
            <Sponsored></Sponsored>
            <Section2></Section2>
            <Foother></Foother>



        </div>
    );
};

export default HomePage;