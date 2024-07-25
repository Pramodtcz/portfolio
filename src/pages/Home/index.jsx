import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../component/Banner";
import Partner from "../../component/Partner";
import Services from "../../component/Services";
import Portfolio from "../../component/Portfolio";
// Import Swiper styles
import "swiper/css";
import Modal from "../../component/Modal";


function Home() {
  const bannerData=[
    {
      title:"Branding | Image making",
      heading:"Visual Designer",
      paragraph:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      image:"./images/img1.svg",
    },
    {
      title:"Branding | Image making 2",
      heading:"UI/UX Designer",
      paragraph:"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      image:"./images/img1.svg",
    }
  ]
  return (
    <>
    <section className="py-14 px-4">
      <div className="mx-auto max-w-7xl">
        <Swiper className="mySwiper">

        {
          bannerData.map( (item, index)=> (
            <SwiperSlide key={index}>
              <Banner 
                title={item.title}
                heading={item.heading}
                paragraph={item.paragraph}
                image={item.image}
              />
            </SwiperSlide>
          ) )
        }

        </Swiper>
      </div>
    </section>
    <Partner />
    <Services />
    <Portfolio />
    <Modal />
    </>
  );
}

export default Home;
