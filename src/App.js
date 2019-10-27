import React, { Component } from 'react'
import './FilmDetails'
import './FilmListing'
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing TMDB ={TMDB} />
        <FilmDetails TMDB= {TMDB}/>

      </div>
    )
  }
}