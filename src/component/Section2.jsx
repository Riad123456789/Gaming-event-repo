import img1 from "../assets/1444082-large-4k-games-wallpaper-3840x2160-for-ios.jpg"
import img2 from "../assets/hd-assassin-s-creed-gaming-cover-h3zgkk83v6fimy4j.jpg"
import img3 from "../assets/live-gaming-bcs2rtkrdnvrq8mw.jpg"
import img4 from "../assets/7445.webp"
import img5 from "../assets/1f71e64d2805e8f78ffd8dd7f4be23ed--news-games-pc-games.jpg"
import img6 from "../assets/3034612.jpg"
import img7 from "../assets/call-of-duty-modern-warfare-3-26830-1920x1080.jpg"
import img8 from "../assets/3594a4db49d57475fbdece89d5a51096.jpg"


const Section2 = () => {
    return (
        <div className="bg-black ">
            <div className="">
                <p className="text-center text-3xl text-green-500 pt-9 ">Gaming gallery</p>
            </div>

            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-16 ">

                <div><img className="border p-4" src={img4} alt="" /></div>
                <div><img className="border p-4" src={img2} alt="" /></div>
                <div><img className="border p-4" src={img3} alt="" /></div>
                <div><img className="border p-4" src={img1} alt="" /></div>

                <div><img className="border p-4" src={img5} alt="" /></div>
                <div><img className="border p-4" src={img6} alt="" /></div>
                <div><img className="border p-4" src={img7} alt="" /></div>
                <div><img className="border p-4" src={img8} alt="" /></div>

                <div><img className="border p-4" src={img2} alt="" /></div>
                <div><img className="border p-4" src={img4} alt="" /></div>
                <div><img className="border p-4" src={img1} alt="" /></div>
                <div><img className="border p-4" src={img3} alt="" /></div>

            </div>
        </div>
    );
};

export default Section2;