import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {

    var year = new Date(props.films.release_date);
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.films)}>
            <FilmPoster list={props.films} />
            <div className="film-summary">
                <Fave onFaveToggle={() => props.onFaveToggle(props.films)} isFave={props.isFave} />
                <h1>{props.films.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
        </div>
    )

}

export default FilmRow