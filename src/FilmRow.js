import React from "react";
import FilmPoster from "./FilmPoster";
 import Fave from './Fave'

export default function FilmRow(props) {
  var film = props.listfilms.title;
  var date = props.listfilms.release_date; 

     let handleDetailsClick =(filmsa)  =>{
 
   console.log("Fetching details for "+ film)
       
   } 
  return (
    <div  onClick={() => handleDetailsClick('filmsa')} className="film-row">
      <FilmPoster path={props.listfilms.poster_path} />

      <div className="film-summary">
        <h1>{film}</h1>
        <p>{date}</p>
       
      </div>
      <Fave/>
    </div>
  );
}