import React from "react";



//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import { BackgroundImg } from "./BackgroundImg";
import { FilmsGrid } from "./FilmsGrid";
import { Thumb } from "./Thumb";
import Spinner from "./Spinner";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";
//Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

//IMG

import noImg from '../images/no_image.jpg';

export const Home = () => {
  const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();

  if(error) return <div>Something went wrong...</div>;

  return (
    <main>
      {state.results[0] ?
      <BackgroundImg
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />
      : null}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <FilmsGrid header={searchTerm ? 'Search Result' : 'Popular movies'}>
        {state.results.map(movie => {
          return <Thumb
          key={movie.id}
          clickable
          image={movie.poster_path 
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : noImg}
          movieId={movie.id} />
        })}
      </FilmsGrid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </main>
  )
};
