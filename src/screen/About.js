import React from "react";
import AboutHero from "../assets/img/About/AboutHero.jpg";
import OurMission from "../assets/img/About/OurMission.jpg";
import AboutWorker from "../components/AboutWorker";

const About = () => {
  return (
    <div className="mt-[97px] lg:mt-[81px]">
      <section className="relative mb-8">
        <div className="w-full overflow-hidden aspect-[1615/566]">
          <img
            className="object-cover w-full h-full"
            src={AboutHero}
            alt="AboutHero"
            width="1920"
            height="1080"
          ></img>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h2 className="w-screen text-2xl lg:text-4xl">
            Powering the dreams of tech innovators worldwide
          </h2>
          <p>We provide the tools, you build the future</p>
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
        <img
          src={OurMission}
          alt="Our Mission"
          className="flex-1 mx-auto rounded-3xl h-fit"
          loading="lazy"
        ></img>
      </section>

      <section className="px-2 md:px-4 2xl:px-28 my-7">
        <h2 className="mb-8 text-2xl font-semibold lg:text-3xl">
          Meet Our Team
        </h2>
        <div className=" lg:items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <AboutWorker></AboutWorker>
        </div>
      </section>
    </div>
  );
};

export default About;
