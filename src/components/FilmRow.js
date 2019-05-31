import React from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

export default function FilmRow(props) {
  const { film, isFave}=props;
  return (
      <div 
        className="film-row"
        onClick={() => props.handleDetailsClick(film)}
      >
       <FilmPoster film={props.film} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{new Date(props.film.release_date).getFullYear()}</p>
      </div>
      <Fave
      isFave={isFave}
      onFavToggle={()=>props.onFavToggle(film)}
      />
    </div>
  )
}