import React from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import PropTypes from 'prop-types';

import { Image } from "./Thumb.styles";

export const Thumb = ({image, movieId, clickable}) => {
  return <>
          {clickable ? (
            <Link to={`/${movieId}`}>
              <Image src={image} alt='movie-thumb'/>
            </Link>
          ) : (
           <Image src={image} alt='movie-thumb'style={{pointerEvents: 'none'}} />
          )}
         </>
};
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};