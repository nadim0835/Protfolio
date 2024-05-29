import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Me from "../assets/me.png";

const AboutMe = () => {
  return (
    <section id="aboutme" className=" mt-[60px]">
      <Container>
        <Flex className={`px-5 md:px-0  pb-[60px] lg:gap-[93px] lg:flex-row flex-col items-center lg:items-stretch`}>
          <div>
            <Image src={Me} />
          </div>
          <div className=" mt-5 ">
            <h1 className=" font-Sora text-[48px] leading-[56px] tracking-[-2%] text-primary  ">
              About <span className=" font-extrabold">Me</span>
            </h1>
            <div className=" mt-5">
              <p className=" mt-5 font-Sora text-[16px] leading-6 tracking-[-2%]  text-[#71717A] md:w-[600px] w-auto  ">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className=" font-Sora text-[16px] leading-6 tracking-[-2%]  text-[#71717A] md:w-[600px] w-auto mt-5 ">
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </p>
              <p className=" font-Sora text-[16px] leading-6 tracking-[-2%]  text-[#71717A] md:w-[600px] w-auto mt-5 ">
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default AboutMe;
