import img from "../assets/98612331.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = () => {
    return (
        <div className='max-w-6xl mx-auto p-10'>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Pagination, Scrollbar, A11y]}

                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img className=" h-36 md: h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-96 w-56" src={img} alt="" /></SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Slider;