import Container from "./Container";
import Flex from "./Flex";
import { FaFacebook } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { IoIosCall } from "react-icons/io";



const Letstalk = () => {
  return (
    <section id="Contact" className=" lg:mt-[120px] md:mt-10 mb-[40px] ">
      <Container>
        <Flex
          className={` items-center md:items-stretch  lg:gap-[108px] gap-5 lg:flex-row flex-col px-6 lg:px-4`}
        >
          <div>
            <div
              className="border-[2px]  border-solid border-primary md:w-[608px]  w-[320px] mb-5
                rounded-[4px]"
            >
              <input
                placeholder="Your name"
                className=" px-6 py-[18px] bg-transparent placeholder:text-[#71717A] w-full"
                type="text"
              />
            </div>
            <div
              className=" border-[2px]  border-solid border-primary md:w-[608px]  w-[320px] mb-5
                rounded-[4px]"
            >
              <input
                placeholder="Email"
                className=" px-6 py-[18px] bg-transparent placeholder:text-[#71717A] w-full"
                type="text"
              />
            </div>
            <div
              className=" border-[2px]  border-solid border-primary md:w-[608px]  w-[320px] mb-5
                rounded-[4px]"
            >
              <input
                placeholder="Your website (If exists)"
                className=" px-6 py-[18px] bg-transparent placeholder:text-[#71717A] w-full"
                type="text"
              />
            </div>
            <textarea
              className="md:w-[608px]  rounded-[4px]  border-[2px] placeholder:text-[#71717A] border-primary w-[320px] px-6 py-[18px]   "
              placeholder="How can I help?*"
              name=""
              id=""
            ></textarea>
            <div className=" flex md:items-center gap-8 md:gap-10 lg:gap-6 md:flex-row flex-col items-start mt-5 ">
              <a
                href="#"
                className="font-Sora font-semiabold text-[20px] tracking-[2%] text-white leading-[24px] px-5 py-5 bg-primary inline-block rounded-[4px] hover:bg-white hover:text-primary duration-300 border-[2px] border-primary"
              >
                Get In Touch
              </a>

              <div className=" flex items-center justify-center lg:justify-start gap-8 md:gap-10 lg:gap-6  cursor-pointer">
                <div className=" w-[56px] h-[56px] border-[2px] rounded-[4px] border-primary flex justify-center items-center duration-300 hover:bg-primary hover:text-white ">
                  <a href="https://www.facebook.com/921395nadim/">
                    <FaFacebook className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" w-[56px] h-[56px] border-[2px] rounded-[4px] border-primary flex justify-center items-center duration-300 hover:bg-primary hover:text-white ">
                  <a href="https://www.linkedin.com/in/nadim-islam-b41418264/">
                    <FiLinkedin className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" w-[56px] h-[56px] border-[2px] rounded-[4px] border-primary flex justify-center items-center duration-300 hover:bg-primary hover:text-white ">
                  <a href="https://github.com/nadim0835">
                    <FaGithub className=" h-5 w-5" />
                  </a>
                </div>
                <div className=" w-[56px] h-[56px] border-[2px] rounded-[4px] border-primary flex justify-center items-center duration-300 hover:bg-primary hover:text-white ">
                  <a href="https://twitter.com/NadimTaohid">
                    <RiTwitterLine className=" h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" md:mt-5 font-Sora font-extrabold text-[48px] tracking-[-2%] text-primary leading-[56px] mb-3 ">
              Let’s <span className=" ">talk </span> for
            </h1>
            <h1 className=" font-Sora font-extrabold text-[48px] tracking-[-2%] text-primary leading-[56px] ">
              Something special
            </h1>
            <p className=" mt-5 font-Sora text-[16px] leading-6 tracking-[-2%]  text-[#71717A] md:w-[600px] w-auto  mb-5   ">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className=" flex items-center gap-2 mb-2">
            <SiMinutemailer className=" text-[35px]" />
            <a
              href="mailto:nadim0835@gmail.com"
              className=" font-Sora font-semibold md:text-[28px] text-[23px] tracking-[-2%] text-primary leading-[32px] duration-300 hover:text-scendary   "
            >
              nadim0835@gmail.com
            </a>
            </div>
            <div className=" flex items-center gap-2">
            <IoIosCall className=" text-[35px]" />
            <h1
              className=" font-Sora font-semibold md:text-[28px] text-[23px] tracking-[-2%] text-primary leading-[32px] duration-300 hover:text-scendary   "
            >
              +880176225419
            </h1>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Letstalk;
