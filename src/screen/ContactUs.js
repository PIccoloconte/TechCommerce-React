import React, { useState } from "react";
import ContactUsImage from "../assets/img/ContactUs/ContactUsImage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import ImageComponents from "../components/ImageComponents";
import Container from "../components/Container";
const mainHash = "LFFY$24nNH%M-oT1nNf6_Nn%WXV@";

//Placeholder contacts
const cardContacts = [
  {
    icon: <FiPhoneCall className="w-8 h-8 m-auto" />,
    title: "CALL US",
    subTitle: "+39 366 933818",
  },
  {
    icon: <LuMailOpen className="w-8 h-8 m-auto" />,
    title: "EMAIL",
    subTitle: "cyber@cybershop.it",
  },
  {
    icon: <MdOutlineLocationOn className="w-8 h-8 m-auto" />,
    title: "ADDRESS",
    subTitle: "+39 366 933818",
  },
];

const ContactUs = () => {
  const [people, setPeople] = useState([]);

  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    textarea: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      person.name &&
      person.surname &&
      person.email &&
      person.tel &&
      person.textarea
    ) {
      setPeople([
        ...people,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...person,
        },
      ]);
      setPerson({
        name: "",
        surname: "",
        email: "",
        tel: "",
        textarea: "",
      });
    } else {
      alert("fill the form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  return (
    <Container className="mt-[97px] lg:mt-[81px]">
      {/*Hero section*/}
      <section className="relative overflow-hidden">
        <div className="w-full aspect-[1920/520]">
          {/* old aspect-[1585/556] */}
          <ImageComponents
            src={ContactUsImage}
            hash={mainHash}
            className="object-cover w-full h-full max-h-[661px]"
          ></ImageComponents>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute w-full text-center text-white -translate-x-1/2 -translate-y-1/2 xl:text-left left-1/2 top-1/2 0 ">
          <h2 className="mb-3 text-2xl font-semibold md:text-5xl">
            Contact Us
          </h2>
          <p className="w-full text-sm md:text-2xl text-secondary">
            Got a question? We had love to hear from you.<br></br> Send us a
            message and we will respond as soon as possible.
          </p>
        </div>
      </section>

      {/*Card section */}
      <section className="px-4 mb-10 2xl:px-28">
        <h2 className="my-4 text-2xl font-semibold text-center uppercase md:text-4xl">
          Contact Us
        </h2>
        <div className="md:flex md:justify-between md:items-center max-w-[1200px] mx-auto md:gap-7">
          {cardContacts.map((card) => {
            return (
              <article
                key={card.title}
                className="flex-1 py-5 text-center rounded-xl"
              >
                <div className="mb-2">{card.icon}</div>
                <h5 className="mb-2 text-2xl font-semibold">{card.title}</h5>
                <p className="text-xl text-secondary">{card.subTitle}</p>
              </article>
            );
          })}
        </div>
      </section>
      {/*Form section*/}
      <section className="px-4 2xl:px-28">
        <h2 className="mb-4 text-2xl font-semibold text-center uppercase md:text-4xl">
          Get in Touch
        </h2>
        <p className="w-full mb-4 font-semibold text-center text-secondary md:text-xl">
          Whether you’re looking for solutions or want to explore opportunities,
          we’re here to collaborate with you.
        </p>
        <form className="mb-4 max-w-[1000px] mx-auto">
          <div className="flex flex-col mb-4 md:flex-row md:gap-8">
            <input
              className="flex-1 px-4 py-2 mb-4 border border-black rounded-lg md:mb-0"
              type="text"
              name="name"
              placeholder="First Name"
              value={person.name}
              onChange={handleChange}
            ></input>
            <input
              className="flex-1 px-4 py-2 border border-black rounded-lg "
              type="text"
              name="surname"
              placeholder="Last Name"
              value={person.surname}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col mb-4 md:flex-row md:gap-8">
            <input
              className="flex-1 px-4 py-2 mb-4 border border-black rounded-lg md:mb-0 "
              type="email"
              name="email"
              placeholder="Email"
              value={person.email}
              onChange={handleChange}
            ></input>
            <input
              className="flex-1 px-4 py-2 border border-black rounded-lg "
              type="number"
              name="tel"
              placeholder="Phone Number"
              value={person.tel}
              onChange={handleChange}
            ></input>
          </div>
          <textarea
            className="w-full px-4 py-2 mb-4 border border-black rounded-lg "
            rows={4}
            cols={40}
            placeholder="Ask something..."
            name="textarea"
            value={person.textarea}
            onChange={handleChange}
          ></textarea>
          <button
            className="px-10 py-4 border border-black rounded-lg "
            onClick={handleSumbit}
          >
            Submit
          </button>
        </form>
      </section>
    </Container>
  );
};

export default ContactUs;
