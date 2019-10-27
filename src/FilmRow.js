import React from 'react'
import FilmPoster from './FilmPoster'

export default function FilmRow(props) {
    var film = props.title;
    var date = new Date(props.date);
    return (
        <div className="film-row">
            <FilmPoster path = {props.path}/>

            <div className="film-summary">
                <h1 className=".film-detail-poster">{film}</h1>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )
}