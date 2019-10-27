import React from 'react'
import FilmPoster from './FilmPoster'

export default function FilmRow(props) {
    var film = props.listfilms.title;
    var date = new Date(props.listfilms.release_date);
    return (
        <div className="film-row">
        <FilmPoster path={props.listfilms.poster_path}/>

        <div className="film-summary">
            <h1>{film}</h1>
            <p>{date.getFullYear}</p>
        </div>
</div>
    )
}