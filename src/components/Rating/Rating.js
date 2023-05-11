import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Rating.module.css'

export default function Rating({ rating }) {
    const stars = [];

    for (let i = 0; i< 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} src={`${process.env.PUBLIC_URL}/star-red.png`} alt='étoile rose' />);
        } else {
            stars.push(<img key={i} src={`${process.env.PUBLIC_URL}/star_grey.png`} alt="étoile grise" />);
        }
    }

  return (
    <div className={Styles.star}>{stars}</div>
  )
};

Rating.propTypes = {
    rating: PropTypes.string,
};


