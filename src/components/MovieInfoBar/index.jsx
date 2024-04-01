import React from "react";
import PropTypes from 'prop-types';

// helpers
import { calcTime, convertMoney } from "../../helpers";

import { Wrapper, Content } from "./MovieInfoBar.styles";

export const MovieInfoBar = ({time, budget, revenue}) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div>
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div>
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  )
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};