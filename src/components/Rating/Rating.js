import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Rating.module.css'

export default function Rating({ rating }) {
    const stars = [];

    for (let i = 0; i< 5; i++) {//Boucle pour transformer le nombre en étoile
        if (i < rating) {
            stars.push(<img key={i} src={`${process.env.PUBLIC_URL}/star-red.png`} alt='étoile rose' />);//si i inférieur à rating, le nombre est les étoiles rouges
        } else {
            stars.push(<img key={i} src={`${process.env.PUBLIC_URL}/star_grey.png`} alt="étoile grise" />);//si i est supérieur à rating, le nombre restant sera les étoiles grises
        }
    }

  return (
    <div className={Styles.star}>{stars}</div>
  )
};

Rating.propTypes = {
    rating: PropTypes.string,
};


