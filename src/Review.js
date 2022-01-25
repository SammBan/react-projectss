import React, { useState } from 'react';
import people from './data';
//import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ peoples }) => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setindex((index) => {
      if (index == 0) {
        let newIndex = people.length - 1;
        return newIndex;
      }
      let newIndex = index - 1;
      return newIndex;
    });
  };
  const nextPerson = () => {
    setindex((index) => {
      if (index == people.length - 1) {
        let newIndex = 0;
        return newIndex;
      }
      let newIndex = index + 1;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setindex(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          prev
        </button>
        <button className="next-btn" onClick={nextPerson}>
          Next
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
