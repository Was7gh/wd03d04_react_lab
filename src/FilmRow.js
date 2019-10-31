import FilmPoster from "./FilmPoster";
import Fave from './Fave'
import React from 'react'


const FilmRow = (props) => {
  var film = props.film.title;
var date = props.film.release_date; 
  return (
    <div  onClick={() => props.handleDetailsClick(props.film)} className="film-row">
      <FilmPoster path={props.film.poster_path} />

      <div className="film-summary">
        <h1>{film}</h1>
        <p>{date}</p>
       
      </div>
      <Fave 
      isFave ={props.isFave} 
      onFaveToggle = {()=> props.onFaveToggle(props.listfilms)} />
    </div>
  )
}

export default FilmRow
