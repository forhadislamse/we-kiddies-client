// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/lego_cars_image_1.jpg'
import img2 from '../../../assets/lego_cars_image_2.jpg'
import img3 from '../../../assets/lego_cars_image_3.jpg'
import img4 from '../../../assets/lego_city_image_1.jpg'
import img5 from '../../../assets/lego_city_image_2.jpg'
import img6 from '../../../assets/lego_city_image_3.jpg'
import img7 from '../../../assets/lego_wars_image_1.jpg'
import img8 from '../../../assets/lego_wars_image_2.jpg'
import img9 from '../../../assets/lego_wars_image_3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import SectionTitle from "../../../components/SectionTitle";

const Gallery = () => {


    return (
        <>
            <SectionTitle
                heading='Gallery' >
            </SectionTitle>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="" /></SwiperSlide>

            </Swiper>
        </>

    );
};

export default Gallery;