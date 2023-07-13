import React from "react";
import "./Stick.css";
import { BiSolidHot } from "react-icons/bi";
import { FaHotjar } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { BsFileBarGraph } from "react-icons/bs";
const country = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Colombia",
  "Peru",
  "Chile",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Russia",
  "China",
  "Japan",
  "South Korea",
  "India",
  "Australia",
  "New Zealand",
  "South Africa",
  "Egypt",
  "Nigeria",
  "Kenya",
  "Morocco",
];

const Stick = () => {
  return (
    <div className="reddit_clone-popular_stick">
      <div className="reddit_clone-popular_stick_item">
        <FaHotjar />
        <p> Hot </p>
      </div>
      <div className="reddit_clone-popular_stick_item">
        <select>
          {country.map((e, i) => (
            <option key={i}>{e}</option>
          ))}
        </select>
      </div>
      <div className="reddit_clone-popular_stick_item">
        <CiSun />
        <p>New</p>
      </div>
      <div className="reddit_clone-popular_stick_item">
        <BsFileBarGraph />
        <p>Top</p>
      </div>
    </div>
  );
};

export default Stick;
