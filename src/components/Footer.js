import React from "react";
import { Link } from "react-router-dom";
import { SocialComponent } from "../utils/Links";

const Footer = () => {
  return (
    <div className="px-8 py-12 text-center bg-[#181313] xl:px-40 xl:text-start">
      <div className="xl:flex xl:justify-between">
        <div className="mb-8 xl:text-start">
          <h2 className="text-2xl">
            <strong className="text-white">Cyber</strong>
          </h2>
          <p className="text-secondary">
            I'am a web developer firm located in Italy.
          </p>
        </div>
        <div className="mb-8 xl:text-start">
          <h3 className="font-semibold text-white">Services</h3>
          <Link className="text-secondary block mb-2 leading-8">
            Bonus program
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Gift cards
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Credit and payment
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Service contract
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            No cash account
          </Link>
          <Link className="text-secondary block mb-2 leading-8">Payment</Link>
        </div>
        <div className="mb-8 xl:text-start">
          <h3 className="font-semibold text-white">Assistance to the buyer</h3>
          <Link className="text-secondary block mb-2 leading-8">
            Find an order
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Terms of delivery
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Exchange and return of goods
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            Frequently asked question
          </Link>
          <Link className="text-secondary block mb-2 leading-8">
            terms of use of the site
          </Link>
        </div>
      </div>
      <SocialComponent></SocialComponent>
    </div>
  );
};

export default Footer;
