import React, { Component } from 'react'
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing';
import TMDB from './TMDB'

export default class App extends Component {

  state ={

    films: TMDB.films,
    faves : [],
    current : {}
  }
  render() {
    return ( 
      <div className=" App">
      <div className="film-library">
  <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <FilmListing films={TMDB.films}
     faves={this.state.faves} 
    /> 
   
  </div>

  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
    <FilmDetails films={this.state.current}/>
  </div>
</div>
</div>
    )
  }
}