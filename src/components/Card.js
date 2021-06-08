import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/Card.css';

function Card({img, title, date, buttonUrl }) {
    return (
        <div className="card bg-dark text-light animate__animated animate__fadeInUp">
            <figure>
                <img src={img} alt="hola" className="card__img" />
            </figure>
            <div className="card-body">
                <h6 className="card__title">{title}</h6>
                <p className="card-text text-info">
                    {
                        date ? date : 'Still no date'
                    }
                </p>
                <div className="text-end">
                    <a href={buttonUrl} className="btn btn-secondary btn-sm text-uppercase" target="_blank" rel="noopener noreferrer">trailer</a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string
}

export default Card;
