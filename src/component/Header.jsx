
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { FaCalendar } from 'react-icons/fa';


const Header = () => {
    return (

    
            <div className=" flex bg-black rounded-lg  md:gap-56 ">

                <div className="flex max-w-4xl">
                    <button className="btn  bg-red-800 text-white hover:text-black"> braking news</button>
                    <Marquee speed={100} pauseOnHover={true}>
                        <p className="text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione accusantium provident unde .</p>
                    </Marquee>

                </div>

                <div className="flex items-center gap-2 max-w-[200px] rounded-lg bg-red-900 px-4">
                    <FaCalendar className="text-white"></FaCalendar>
                    <p className="text-white text-xs ">{moment().format("MMMM Do ,YY")}</p>
                </div>

            </div>



    );
};

export default Header;