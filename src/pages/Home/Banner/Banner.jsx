// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider4 from '../../../assets/slider4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper lg:h-[600px]">

            <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>

        </Swiper>
    );
};

export default Banner;