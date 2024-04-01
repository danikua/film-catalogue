import React from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { BreadCrumb } from "./BreadCrumb";
import { FilmsGrid } from "./FilmsGrid";
import Spinner from "./Spinner";
import { MovieInfo } from "./MovieInfo";
import { MovieInfoBar } from "./MovieInfoBar";
import { Actor } from "./Actor";

import { useMovieFetch } from "../Hooks/useMovieFetch";

import noActorImg from '../images/no-user-image.png';
 
export const Movie = () => {
  const {movieId} = useParams();

  const {state: movie, loading, error} = useMovieFetch(movieId);

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
      <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}/>

      <FilmsGrid header='Actors'>
        {movie.actors.map(actor => {
          return (
            <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imgUrl={
              actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noActorImg
            }
            />
          )
        })}
      </FilmsGrid>
    </>
  )
};