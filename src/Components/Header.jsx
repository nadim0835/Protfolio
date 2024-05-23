/* eslint-disable react/jsx-no-comment-textnodes */
import Container from "./Container";
import Flex from "./Flex";
import Man from "../assets/man.png";
import Image from "./Image";
import { FaFacebook } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

const Header = () => {
  return (
    <section className="  mx-4 lg:mx-0 lg:mt-[60px] mt-[80px] pb-9">
      <Container>
        <Flex
          className={` lg:items-center gap-y-8 md:gap-y-10  lg:flex-row flex-col `}
        >
          <div className=" order-2 ">
            <h1 className=" font-Sora lg:text-[48px] text-[28px] lg:leading-[56px]  leading-[40px] md:leading-[50px] text-primary tracking-[-2%] w-[343px] md:w-[643px] lg:w-fit ">
              Hello I’am{" "}
              <span className=" font-extrabold">Nadim Islam. Frontend</span>
              Developer Based In{" "}
              <span className=" font-extrabold">Bangladesh</span>
            </h1>
            <p className=" mt-8 font-Sora font-normal text-[16px] leading-6 tracking-[-2%] text-scendary">
              My name is Nadim Islam, and I have two years of professional
              experience as a certified front-end web developer and graduate of
              computer science. In my line of work, I design websites using HTML
              CSS, JavaScript, React, JavaScript ES6, Tailwind CSS, Bootstrap 5,
              and Figma. I'm ready to provide the same outstanding outcomes for
              // eslint-disable-next-line react/no-unescaped-entities your
              project, as I've designed the frontend for over thirty websites.
              Send me a message to start the conversation!
            </p>
            <div className=" flex items-center justify-center lg:justify-start gap-8 md:gap-10 lg:gap-8 lg:mt-[60px] mt-8 md:mt-10 cursor-pointer">
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
          <Image
            className={` order-1 lg:order-2 h-full w-full transform ml-[-25px] md:ml-[-50px] lg:ml-0 lg:translate-x-[-10.75rem]  `}
            src={Man}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
