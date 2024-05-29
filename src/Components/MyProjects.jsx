import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import img from "../assets/image 771.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { FiExternalLink } from "react-icons/fi";

const MyProjects = () => {
  return (
    <section id="project" className=" bg-primary pt-[60px] lg:pb-[100px] pb-[60px]">
      <Container>
        <div className=" flex   justify-center md:justify-start lg:justify-center px-4 md:px-20 ">
          <h2 className=" font-Sora text-white md:text-[48px] text-[40px] leading-[56px] tracking-[-2%] ">
            My <span className=" font-extrabold">Projects</span>
          </h2>
        </div>
        <Flex
          className={` items-center md:items-start lg:items-center lg:gap-[104px] gap-10 lg:mt-[60px] mt-10 flex-col lg:flex-row  px-4 md:px-20`}
        >
          <Image src={img} />

          <div>
            <h1 className=" font-Sora text-white  text-[48px] leading-[56px] tracking-[-2%] font-extrabold">
              01
            </h1>
            <h3 className="font-Sora text-white  text-[32px] leading-[40px] tracking-[-2%] font-bold mt-7">
              Crypto Screener Application
            </h3>
            <p className="  text-[#71717A] text-[16px] leading-6 tracking-[-2%] mt-7  ">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <FiExternalLink className="text-white text-[28px] mt-7" />
          </div>
        </Flex>
        <Flex
          className={` items-center md:items-start lg:items-center lg:gap-[104px] gap-10 lg:mt-[60px] mt-10 flex-col lg:flex-row  px-4 md:px-20`}
        >
          <Image src={img2} className={`   lg:order-2`} />

          <div>
            <h1 className=" font-Sora text-white  text-[48px] leading-[56px] tracking-[-2%] font-extrabold">
              02
            </h1>
            <h3 className="font-Sora text-white  text-[32px] leading-[40px] tracking-[-2%] font-bold mt-7">
              Euphoria - Ecommerce (Apparels) Website Template
            </h3>
            <p className="  text-[#71717A] text-[16px] leading-6 tracking-[-2%] mt-7  ">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book. when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
            <FiExternalLink className="text-white text-[28px] mt-7" />
          </div>
        </Flex>
        <Flex
          className={` items-center md:items-start lg:items-center lg:gap-[104px] gap-10 lg:mt-[60px] mt-10 flex-col lg:flex-row  px-4 md:px-20`}
        >
          <Image src={img3} />

          <div>
            <h1 className=" font-Sora text-white  text-[48px] leading-[56px] tracking-[-2%] font-extrabold">
              03
            </h1>
            <h3 className="font-Sora text-white  text-[32px] leading-[40px] tracking-[-2%] font-bold mt-7">
            Blog Website Template
            </h3>
            <p className="  text-[#71717A] text-[16px] leading-6 tracking-[-2%] mt-7  ">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            </p>
            <FiExternalLink className="text-white text-[28px] mt-7" />
          </div>
        </Flex>
        <Flex
          className={` items-center md:items-start lg:items-center lg:gap-[104px] gap-10 lg:mt-[60px] mt-10 flex-col lg:flex-row  px-4 md:px-20`}
        >
          <Image src={img2} className={`lg:order-2`} />

          <div>
            <h1 className=" font-Sora text-white  text-[48px] leading-[56px] tracking-[-2%] font-extrabold">
              04
            </h1>
            <h3 className="font-Sora text-white  text-[32px] leading-[40px] tracking-[-2%] font-bold mt-7">
              Crypto Screener Application
            </h3>
            <p className="  text-[#71717A] text-[16px] leading-6 tracking-[-2%] mt-7  ">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <FiExternalLink className="text-white text-[28px] mt-7" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default MyProjects;
