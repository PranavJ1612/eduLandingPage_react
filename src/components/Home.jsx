import React from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/hero.svg";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt ">
      <div className="md:w-2/4 text-center pt-4">
        <h2 className=" text-5xl font-semibold leading-tight" >
          Knowledge with
          <span className="text-green-500"> eStudy</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
