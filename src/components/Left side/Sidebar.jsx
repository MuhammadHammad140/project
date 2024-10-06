import React from "react";
import Profile from "../../assets/profile.jpg";
import { FaHome, FaRegUser, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { IoIosImages } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <aside className="md:w-1/4 w-full bg-gray-800 text-white p-6 sticky top-0 h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <img
          src={Profile}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 border-[10px] border-gray-700"
        />
        <h1 className="text-2xl font-bold mb-5">Muhammad Hammad</h1>

        <div className="flex space-x-6">
          <a href="https://www.facebook.com/share/GEdXeo3Zn7anVGN7/" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-gray-300 text-4xl text-black bg-white p-1 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hammad-baa136226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="hover:text-gray-300 text-4xl text-black bg-white p-1 rounded-full" />
          </a>
          <a href="https://github.com/MuhammadHammad140/react.git" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-300 text-4xl text-black bg-white p-1 rounded-full" />
          </a>
        </div>
      </div>

      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="home" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <FaRegUser /> About
            </Link>
          </li>
          <li>
            <Link to="skill" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <GiSkills /> Skill
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <PiReadCvLogo /> Resume
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <IoIosImages /> Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="flex gap-5 text-2xl items-center">
              <MdContactMail /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
