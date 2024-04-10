import React, { useContext } from "react";
import PropTypes from 'prop-types';

import { Thumb } from "../Thumb";
import { Rate } from "../Rate";

import {POSTER_SIZE, IMAGE_BASE_URL} from '../../config';

import noImg from '../../images/no_image.jpg';

import { Wrapper, Content, Text, Directors, Score, Info } from "./MovieInfo.styles";

//Context
import { Context } from "../../context";

//API
import API from "../../API";

export const MovieInfo = ({movie}) => {
  const [user] = useContext(Context);

  const handleRate = async value => {
    const rate = await API.rateMovie(
      user.sessionId,
      movie.id,
      value
    );
    console.log(rate);
  }

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <div>
          <Thumb 
          image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: noImg}
          clickable={false}
          />
        </div>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <Info>
            <div>
              <h3>RAITING</h3>
              <Score>{movie.vote_average.toFixed(2)}</Score>
            </div>
            <Directors>
              <h3>DIRECTOR{movie.directors_length > 1 ? 'S' : ''}</h3>
              {movie.directors.map(director => {
                return (
                  <p key={director.credit_id}>{director.name}</p>
                )
              })}
            </Directors>
          </Info>
            {user && (
              <div>
                <p>Rate Movie</p>
                <Rate callback={handleRate}/>
              </div>
            )}
        </Text>
      </Content>
    </Wrapper>
  )
};

MovieInfo.propTypes = {
  movie: PropTypes.object
};