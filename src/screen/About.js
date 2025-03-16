import React from "react";
import AboutHero from "../assets/img/About/AboutHero.jpg";
import OurMission from "../assets/img/About/OurMission.jpg";
import AboutWorker from "../components/AboutWorker";
import ImageComponents from "../components/ImageComponents";
import Container from "../components/Container";
const mainHash = "L6CPYG5700-;00i_~q56-;~BNaNG";
const ourMissionHash = "LGA0qV^nDiIU%hk9ITV=InS5t8sB";

const About = () => {
  return (
    <Container className={"mt-[97px] lg:mt-[81px]"}>
      <section className="relative mb-8">
        <div className="w-full overflow-hidden aspect-[1920/520]">
          <ImageComponents
            src={AboutHero}
            hash={mainHash}
            className="object-cover w-full h-full max-h-[661px]"
          ></ImageComponents>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h2 className="w-screen max-w-[1800px] text-2xl lg:text-4xl">
            Powering the dreams of tech innovators worldwide
          </h2>
          <p className="text-secondary">
            We provide the tools, you build the future
          </p>
        </div>
      </section>

      <section className="px-4 mb-8 lg:flex gap-7 2xl:px-28">
        <article className="mb-4 text-lg lg:flex-1 lg:mb-0">
          <h2 className="mb-4 text-2xl font-semibold lg:text-4xl">
            Our Mission
          </h2>
          <p className="mb-4">
            At Cyber, we believe that digital transformation is the key to
            unlocking new opportunities for success. Our mission is to empower
            individuals by providing them with the latest innovative products
            and tools that enhance efficiency, creativity, and growth in the
            digital era. Regardless of background or experience, we welcome
            everyone to embrace the future of technology and entrepreneurship
            with us.
          </p>
          <p className="mb-4">
            Our focus is on making cutting-edge digital solutions accessible,
            equipping our customers with the resources they need to thrive in an
            ever-evolving market. From smart devices and AI-driven tools to
            automation software and e-commerce solutions, we help individuals
            and businesses stay ahead of the curve. We also emphasize the
            importance of digital literacy, strategic marketing, and business
            automation, ensuring that our customers can maximize their potential
            and achieve financial independence.
          </p>
          <p>
            As technology continues to shape industries worldwide, we are
            committed to providing innovative solutions that drive success and
            open doors to new possibilities.
          </p>
        </article>
        <ImageComponents
          src={OurMission}
          hash={ourMissionHash}
          className="object-contain mx-auto flex-1 w-max-[834px] "
        ></ImageComponents>
      </section>

      <section className="px-2 md:px-4 2xl:px-28 my-7">
        <h2 className="mb-8 text-2xl font-semibold lg:text-3xl">
          Meet Our Team
        </h2>
        <div className=" lg:items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <AboutWorker></AboutWorker>
        </div>
      </section>
    </Container>
  );
};

export default About;
