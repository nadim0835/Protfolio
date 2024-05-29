import Container from "./Container";
import Flex from "./Flex";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";




const MySkill = () => {
  return (
    <section id="skills" className=" mt-4 md:mt-[60px]">
      <Container>
        <h1 className=" font-Sora font-normal text-primary text-[48px] leading-[56px] tracking-[-2%] text-center ">
          My <span className=" font-extrabold">Skills</span>
        </h1>
        <Flex
          className={` md:mt-[60px] mt-10 flex-wrap md:gap-[70px] gap-5 justify-center items-center `}
        >
          <div className=" border-2 rounded-[4px]  border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <IoLogoJavascript className=" text-[40px] mt-[35px]  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Javascript
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <TbBrandNextjs className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Next.Js
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <FaReact className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                React.Js
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <FaGitAlt className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Git
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <BiLogoTailwindCss className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Tailwind Css
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <IoLogoFirebase className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Firebase
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <FaBootstrap className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Bootstrap{" "}
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <FaSass className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                Sass/Scss
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <FaHtml5 className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
                 Html5
              </h2>
            </div>
          </div>
          <div className=" border-2 rounded-[4px] border-primary w-[160px] h-[160px] md:h-[186px] md:w-[186px] duration-300 hover:bg-primary hover:text-white cursor-pointer">
            <div className=" flex justify-center   ">
              <TbBrandVscode className=" text-[40px] mt-10  " />
            </div>
            <div className=" flex justify-center">
              <h2 className=" font-Sora font-bold text-[20px] leading-[20px] tracking-[-2%] mt-8">
               Vs code
               
              </h2>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default MySkill;
