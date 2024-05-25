import Container from "./Container";
import { CiShoppingCart } from "react-icons/ci";
import { MdBusiness } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";

const MyExperience = () => {
  return (
    <section className=" bg-primary pt-[60px] lg:pb-[100px] pb-[60px] mt-[100px]">
      <Container>
        <div className=" flex justify-center items-center">
          <h2 className=" font-Sora text-white text-[48px] leading-[56px] tracking-[-2%] ">
            My <span className=" font-extrabold">Experience</span>
          </h2>
        </div>
        <main className=" flex flex-col items-center justify-center px-4 ">
          <div className=" md:px-6 px-4 py-[30px] mt-[60px]  border border-[#71717A] rounded-[10px] duration-300 hover:bg-[#27272A] cursor-pointer ">
            <div className=" flex justify-between md:items-center md:flex-row flex-col items-end gap-4 md:gap-0">
              <div className=" flex items-center md:gap-7 gap-10 ">
                <CiShoppingCart className=" text-white md:text-[30px] text-[60px]" />
                <h4 className=" text-white font-Sora font-semibold text-[24px] leading-[28px] tracking-[-2%] ">
                  Orebi E-Commerce Website
                </h4>
              </div>
              <p className=" text-[#D4D4D8] text-[16px] leading-5 tracking-[-2%] font-semibold  ">
                May 2024 - Present
              </p>
            </div>
            <p className=" mt-7 text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
              Main Features : ES6+,React,Tailwind Css,Google Fonts
            </p>
            <p className="  text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
            In the ever-evolving realm of online retail, the Orebi e-commerce website emerges as a robust platform designed to offer a seamless shopping experience to its users. Blending innovative technology with user-centric design, Orebi aims to redefine the standards of online shopping.
            </p>
          </div>

          <div className=" md:px-6 px-4 py-[30px] mt-8  border border-[#71717A] rounded-[10px] duration-300 hover:bg-[#27272A] cursor-pointer ">
            <div className="  flex justify-between md:items-center md:flex-row flex-col items-end gap-4 md:gap-0">
              <div className=" flex items-center md:gap-7 gap-10 ">
                <MdBusiness className=" text-white md:text-[30px] text-[80px]" />
                <h4 className=" text-white font-Sora font-semibold text-[24px] leading-[28px] tracking-[-2%] ">
                  Managing Business Website Using API Fetch
                </h4>
              </div>
              <p className=" text-[#D4D4D8] text-[16px] leading-5 tracking-[-2%] font-semibold  ">
                Sep 2023 - Oct 2024
              </p>
            </div>
            <p className=" mt-7 text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
              Main Features : ES6+,React,Tailwind Css,React icons
            </p>
            <p className="  text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
            In the contemporary digital landscape, managing a business website efficiently and effectively is paramount to ensuring seamless operations and a competitive edge. One of the key technologies enabling this streamlined management is the use of API fetch. API (Application Programming Interface) fetch allows for real-time data retrieval and integration, significantly enhancing the functionality and responsiveness of business websites.
            </p>
          </div>

          <div className=" md:px-6 px-4 py-[30px] mt-8 mx-auto  border border-[#71717A] rounded-[10px] duration-300 hover:bg-[#27272A] cursor-pointer ">
            <div className="  flex justify-between md:items-center md:flex-row flex-col items-end gap-4 md:gap-0">
              <div className=" flex items-center md:gap-7 gap-10 ">
                <FaPrayingHands className=" text-white md:text-[30px] text-[70px]" />
                <h4 className=" text-white font-Sora font-semibold text-[24px] leading-[28px] tracking-[-2%] ">
                BECOME A PART OF OUR COMMUNITY
                </h4>
              </div>
              <p className=" text-[#D4D4D8] text-[16px] leading-5 tracking-[-2%] font-semibold  ">
              Nov 2023 - Dec 2024
              </p>
            </div>
            <p className=" mt-7 text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
              Main Features : ES6+,React,Tailwind Css,Google Fonts
            </p>
            <p className="  text-[#D4D4D8] text-[16px] leading-6 tracking-[-2%]  ">
            In today's interconnected world, communities are the heartbeat of shared experiences, mutual support, and collective growth. By joining our community, you open the door to a world of opportunities, enriching interactions, and invaluable resources. Here’s why you should consider becoming a part of our vibrant and dynamic community.
            </p>
          </div>
          
        </main>
      </Container>
    </section>
  );
};

export default MyExperience;
