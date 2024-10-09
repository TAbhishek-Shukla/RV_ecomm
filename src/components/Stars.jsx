import React from 'react';
import '../styles/stars.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
      let number = index + 0.5;
      // debugger;
      return (
        <span key={index}>
          {stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )}
        </span>
      );
    });
    return (
        <section className='stars-sect'>
          <div className="icon-style">
            {ratingStar}
            <p>({reviews} customer reviews)</p>
          </div>
        </section>
      );
    };

export default Stars;
