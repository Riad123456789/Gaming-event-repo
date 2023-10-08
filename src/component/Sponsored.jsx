
import Marquee from "react-fast-marquee";



const Sponsored = () => {
    return (
        <div className="bg-black p-4">

            <div className=" text-center text-3xl text-amber-400 p-8">
                Our Sponsored
            </div>
            <Marquee speed={100}>
                <img className="h-20 pl-8 " src="https://i.ibb.co/T0pKVGB/images.png" alt="" />
                <img  className="h-20 pl-8 " src="https://i.ibb.co/5GHQnW1/images.jpg" alt="" />
                <img  className="h-20 pl-8 "  src="https://i.ibb.co/nmrrWGc/gaming-background-png-instant-gaming-logo-png-clipart-260251-pikpng.jpg" alt="" />
                <img  className="h-20 pl-8 " src="https://i.ibb.co/2Z6cH46/careerpreppresentation-190426000157-thumbnail.webp" alt="" />
                <img  className="h-20 pl-8 " src="https://i.ibb.co/hZPYTF3/maxresdefault-1.jpg" alt="" />
                <img  className="h-20 pl-8 " src="https://i.ibb.co/PMb2MSp/Valorant.jpg" alt="" />
                <img  className="h-20 pl-8 " src="https://i.ibb.co/2Z6cH46/careerpreppresentation-190426000157-thumbnail.webp" alt="" />
            </Marquee>
        
        </div>
    );
};

export default Sponsored;