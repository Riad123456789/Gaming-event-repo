import Navbar from "../component/Navbar";
import img from "../assets/7445.webp"
import img1 from "../assets/call-of-duty-modern-warfare-3-26830-1920x1080.jpg"
import img3 from "../assets/331212e60a5a281b46d47e7d05d15f8f.jpg"
import img4 from "../assets/1f71e64d2805e8f78ffd8dd7f4be23ed--news-games-pc-games.jpg"
import Foother from "../component/Foother";

const ServicesPage = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>

            <div className="pt-10">
                <p className="text-red-700 text-center font-bold text-5xl "> EXPERIENCE SOLUTIONS</p>
                <p className="text-amber-300 text-center pt-2">We work with the world’s most dynamic brands to dream, design and create strategic breakthrough experiences.</p>
            </div>

            <div className="grid gap-7 pt-20  md:grid-cols-2 ">

                <div className=" pl-20">
                    <img className="border" src={img} alt="" />
                </div>
                <div className="p-20 space-y-3">
                    <h1 className="text-red-600 text-2xl">Know it</h1>
                    <p className="text-white">Mixing primary and secondary research, our world class strategy practice ensures every experience is designed for positive human outcomes and sustainable business impact.</p>
                    <button className="btn btn-outline btn-sm text-orange-500">more</button>
                </div>

            </div>

            <div className="grid gap-7 pt-20  md:grid-cols-2 ">

                <div className="p-20 space-y-3">
                    <h1 className="text-red-600 text-2xl">Dream it</h1>
                    <p className="text-white">Big results require big thinking. Across screen, space and stage we take an audacious approach in designing experiences that thrill, inform and engage our client’s most important audiences, customers and communities.</p>
                    <button className="btn btn-outline btn-sm text-orange-500">more</button>
                </div>
                <div className=" pr-20">
                    <img className="border" src={img1} alt="" />
                </div>

            </div>

            <div className="grid gap-7 pt-20 grid-cols-1 md:grid-cols-2 ">

                <div className=" pl-20">
                    <img className="border" src={img3} alt="" />
                </div>
                <div className="p-20 space-y-3">
                    <h1 className="text-red-600 text-2xl">Make it</h1>
                    <p className="text-white">From strategic experience design and content creation, to engineering, fabrication and production, we bring ingenuity and integrity to everything we make. We sweat the big stuff and the small..</p>
                    <button className="btn btn-outline btn-sm text-orange-500">more</button>
                </div>

            </div>


            <div className="grid gap-7 pt-20  md:grid-cols-2 ">

                <div className="p-20 space-y-3">
                    <h1 className="text-red-600 text-2xl">Dream it</h1>
                    <p className="text-white">Big results require big thinking. Across screen, space and stage we take an audacious approach in designing experiences that thrill, inform and engage our client’s most important audiences, customers and communities.</p>
                    <button className="btn btn-outline btn-sm text-orange-500">more</button>
                </div>
                <div className=" pr-20">
                    <img className="border" src={img4} alt="" />
                </div>

            </div>
            <Foother></Foother>

        </div>
    );
};

export default ServicesPage;