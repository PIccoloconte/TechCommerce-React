import React from "react";
import Worker1 from "../assets/img/About/Worker1.png";
import Worker2 from "../assets/img/About/Worker2.png";
import Worker3 from "../assets/img/About/Worker3.png";
import Worker4 from "../assets/img/About/Worker4.png";
import Worker5 from "../assets/img/About/Worker5.png";
import Worker6 from "../assets/img/About/Worker6.png";
import { SocialLink } from "../utils/Links";

const workers = [
  {
    name: "Carlo Verdi",
    role: "CEO",
    img: Worker1,
  },
  {
    name: "Anna Rossi",
    role: "Social Manager",
    img: Worker2,
  },
  {
    name: "Luca neri",
    role: "Developer",
    img: Worker3,
  },
  {
    name: "Carlotta vanni",
    role: "Artist",
    img: Worker4,
  },
  {
    name: "Marco Bianchi",
    role: "Developer",
    img: Worker5,
  },
  {
    name: "Pino Esposito",
    role: "HR",
    img: Worker6,
  },
];

const AboutWorker = () => {
  return (
    <>
      {workers.map((worker) => {
        return (
          <article key={worker.name} className="m-auto w-[320px] pb-8 md:pb-0">
            <img
              src={worker.img}
              alt={worker.name}
              className="w-full h-[350px] rounded-t-xl"
            ></img>
            <div className="p-3 bg-product_bg rounded-b-xl">
              <h4 className="mb-1 text-2xl font-medium">{worker.name}</h4>
              <p className="mb-2 text-xl font-medium text-secondary">
                {worker.role}
              </p>
              <ul className="flex gap-2">
                {SocialLink.map((el) => {
                  return (
                    <li key={el.url} className="text-xl">
                      <a href={el.url}>{el.icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default AboutWorker;
