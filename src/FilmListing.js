import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    let allFilms = props.TMDB;
    let row = allFilms.films.map(item => <FilmRow title={item.title} id={item.id}  date ={item.release_date} path={item.poster_path}/>)
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div>{row}</div>
        </div>
    )
}

export default FilmListing