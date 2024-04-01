import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Content } from "./FilmsGrid.styles";

export const FilmsGrid = ({header, children}) => {
  return <Wrapper>
           <h1>{header}</h1>
           <Content>{children}</Content>
         </Wrapper>
};

FilmsGrid.propTypes = {
  header: PropTypes.string,
};