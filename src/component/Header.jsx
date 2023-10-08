
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { FaCalendar } from 'react-icons/fa';


const Header = () => {
    return (


        <div className="  flex bg-black pt-3  md:gap-56 ">

            <div className="flex max-w-4xl">
                <p className=" btn btn-sm btn-outline  bg-indigo-600 text-white hover:text-black">announcement </p>

                <Marquee speed={100} pauseOnHover={true}>
                    <p className="text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione accusantium provident unde .</p>
                </Marquee>

            </div>

            <div className="flex items-center gap-1 max-w-[200px] rounded-lg text-red-500 px-4 border">
                <FaCalendar className="text-white "></FaCalendar>
                <p className="text-white text-xs ">{moment().format("MMMM Do ,YY")}</p>
            </div>

        </div>



    );
};

export default Header;