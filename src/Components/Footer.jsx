import Container from "./Container"
import Flex from "./Flex"
import logo from "../assets/Frame 16.png";
import Image from './Image';


const Footer = () => {
  return (
   <footer className=" bg-primary mb-1 ">
    <Container>
        <Flex className={` justify-between items-center py-[30px] lg:px-0 px-4 `}>
        <a href=""> <Image src={logo} /></a>
        <div>
            <p className=" font-Sora font-semibold md:text-[16px] text-[12px]  tracking-[-2%] text-white ">@ 2019-2023 Personal</p>
            <p className=" text-end font-Sora font-semibold md:text-[16px] text-[12px] tracking-[-2%] text-white">
            Made In Figma
            </p>
        </div>
        </Flex>
    </Container>
   </footer>
  )
}

export default Footer