import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Partner() {
    const partnerLogo = ["logo1.svg", "logo2.svg", "logo3.svg", "logo4.svg", "logo5.svg", "logo1.svg"];
  return (
    <section className="py-14 px-4">
      <div className="mx-auto max-w-7xl bg-[#F3EFEC] px-[68px] py-[46px] flex items-center">
        <Swiper className=""
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >

          {
            partnerLogo.map( (logo, index)=>(
                <SwiperSlide key={index}>
                    <img src={`./images/${logo}`} alt="" />
                </SwiperSlide>

            ) )
          }
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;
