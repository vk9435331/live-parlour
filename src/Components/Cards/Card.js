import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
const Card = ({ ImageUrl, body, title, style }) => {
  return (
    <div className='card-container'>
      <div className='img-Container'>
        <img src={ImageUrl} alt='dfS' />
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
        <div className='card-body'>
          <p>{body}</p>
        </div>
        <div className='btn'>
          <button>
            <a>know more</a>
          </button>
        </div>
      </div>
    </div>
  );
};
Card.PropsTypes = {
  ImageUrl: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export default Card;
