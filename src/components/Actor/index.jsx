import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Image } from "./Actor.styles";

export const Actor = ({name, character, imgUrl}) => {
  return(
    <Wrapper>
      <Image src={imgUrl} alt='actor-thumb'/>
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imgUrl: PropTypes.string
};