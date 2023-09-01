import React, { useState } from 'react';
import './Stars.css'

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating); // Initial rating state


  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
          onClick={() => {}}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      <div className="stars-container">{renderStars()}</div>
    </div>
  );
};

export default StarRating;
