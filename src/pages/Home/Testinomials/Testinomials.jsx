
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../../components/SectionTitle";
import useToys from "../../../hooks/useToys";


const Testimonials = () => {
    const [toys] = useToys();

    return (
        <section className="my-20">
            <SectionTitle
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    toys.map(item => <SwiperSlide
                        key={item.id}
                    >
                        <div className="flex flex-col items-center ">

                            <p className="py-8">{item.details}</p>
                            <h3 className="text-2xl text-cyan-400">{item.seller_name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;