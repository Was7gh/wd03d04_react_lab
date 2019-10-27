import React, { Component } from 'react'
import './App.css';
import FilmRow from './FilmRow'
import FilmListing from './FilmListing';
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    return ( 
      <div className=" App">
      <div className="film-library">
  <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <FilmListing TMDB={TMDB.films}/> 
  </div>

  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
  </div>
</div>
</div>
    )
  }
}