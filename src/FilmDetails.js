import React from 'react'

const FilmDetails = (props) => {

    var isClicked = props.films.id;
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.films.backdrop_path}`
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.films.poster_path}`


    var notClicked = <div className="film-detail">
        <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
             {isClicked}
        </p>
    </div>;

    var clicked = <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
            <img src={backdropUrl} alt="" />
            <h1 className="film-title">{props.films.title}</h1>
        </figure>
        <div className="film-meta">
            <h2 className="film-tagline">{props.films.tagline}</h2>
            <p className="film-detail-overview">
                <img src={posterUrl} className="film-detail-poster" alt={props.films.title} />
                {props.films.overview}
            </p>
        </div>
    </div>

    let details= isClicked != null ? clicked : notClicked

    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {details}
        </div>
    )
}

export default FilmDetails