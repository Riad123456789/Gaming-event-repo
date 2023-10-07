
import Marquee from "react-fast-marquee";



const Sponsored = () => {
    return (
        <div>

            <div className="border text-center text-3xl">
                Our Sponsored
            </div>
            <Marquee className="">
                <img src="https://i.ibb.co/T0pKVGB/images.png" alt="" />
                <img src="https://i.ibb.co/5GHQnW1/images.jpg" alt="" />
                <img src="https://i.ibb.co/SnbzxbC/download.png" alt="" />
                <img src="https://i.ibb.co/T0pKVGB/images.png" alt="" />
            </Marquee>
        
        </div>
    );
};

export default Sponsored;