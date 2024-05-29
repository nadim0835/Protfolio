import { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import logo from "/Logo.svg";
import { TiThMenuOutline } from "react-icons/ti";

const Navber = () => {
  const [dDown, setdDown] = useState();
  let handleClick = () => {
    setdDown(!dDown);
  };
  return (
    <nav className=" relative lg:mt-6 mt-4 mx-4 lg:mx-0 ">
      <Container>
        <Flex className={`  lg:items-center items-start  lg:gap-[243px]`}>
          <a href=""> <Image src={logo} /></a>
          
          <div
            className={`flex lg:items-center items-start gap-y-4 lg:gap-[243px] lg:flex-row flex-col absolute top-14 left-[50%] transform translate-x-[-50%] lg:translate-x-0 duration-300  ${
              dDown ? "top-16" : "top-[-590px]"
            }  w-[94%] lg:w-fit   lg:static`}
          >
            <div>
              <ul className=" flex lg:items-center items-start gap-y-4 lg:gap-8  lg:flex-row flex-col ">
                <li>
                  <a
                    className=" font-Sora font-semibold text-primary text-[20px] leading-6 tracking-[-2px] duration-300 hover:text-scendary"
                    href="#"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    className=" font-Sora font-semibold text-primary text-[20px] leading-6 tracking-[-2px] duration-300 hover:text-scendary"
                    href="#"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className=" font-Sora font-semibold text-primary text-[20px] leading-6 tracking-[-2px] duration-300 hover:text-scendary"
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    className=" font-Sora font-semibold text-primary text-[20px] leading-6 tracking-[-2px] duration-300 hover:text-scendary"
                    href="#"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
            <button className=" font-Sora font-semibold text-white text-[20px] leading-6 tracking-[-2px] px-[2.75rem] py-4 bg-primary rounded-[4px] hidden lg:block">
              Resume
            </button>
          </div>
        </Flex>
        <div
          className=" lg:hidden absolute top-3 right-1"
          onClick={handleClick}
        >
          <TiThMenuOutline className=" w-5 h-5" />
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
