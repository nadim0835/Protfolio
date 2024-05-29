import Container from "./Container";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import Image from "./Image";
import testi1 from "../assets/test1.png";

const MyTestimonial = () => {
  var settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className=" lg:mt-[60px] mb-5 lg:mb-[60px] mt-10">
      <Container>
        <main>
          <div className=" flex justify-center ">
            <h1 className=" font-Sora text-[48px] leading-[56px] tracking-[-2%] text-primary lg:mb-10  mb-4  ">
              My <span className=" font-extrabold">Testimonial</span>
            </h1>
          </div>

          <Slider {...settings}>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
            <div>
          <div className=" w-[370px] flex justify-center items-center flex-col shadow-lg border border-[rgba(113,113,122,19%)]">
            <Image
              className={`w-[96px] h-[96px] rounded-[50%] mt-10`}
              src={testi1}
              alt={"test"}
            />

            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] mt-6">
              I recently had to jump on 10+
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different calls across eight
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              different countries to find the
            </p>
            <p className=" font-Sora text-[16px] text-[#404040] leading-5 tracking-[2%] ">
              right owner.
            </p>
            <div className="  w-[120px] border border-primary mt-6 "></div>
            <h2 className=" font-Sora font-semibold text-[20px] leading-6 tracking-[-2%] mt-6 text-[#404040]">
              Evren Shah
            </h2>
            <h2 className=" font-Sora font-semibold text-[16px] leading-5 tracking-[-2%] mt-6 text-[#71717A] mb-10">
              Designer
            </h2>
          </div>
            </div>
          </Slider>
        </main>
      </Container>
    </section>
  );
};

export default MyTestimonial;
