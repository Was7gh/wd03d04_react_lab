import React, { Component } from 'react'
import './App.css';
import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails';
import axios from "axios"

export default class App extends Component {

  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.state = {
      films: TMDB.films,
      faves:[],
      current:{}
    }
  }
  
  handleFaveToggle(film){
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if(filmIndex<0){
    faves.push(film);
    console.log(`Adding ${film.title} to faves...`)
    }
    else{
      faves.splice(filmIndex, 1) 
      console.log(`Removing ${film.title} to faves...`)
    }
    this.setState({faves});
  }

 

  handleDetailsClick = (film) =>{
    // console.log(TMDB.api_key)
    const url = `https://api.themoviedb.org/3/movie/${film.id}
    ?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      // console.log(response) 

      
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })

    
}

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={this.state.films} 
          faves={this.state.faves} 
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
          />
         <FilmDetails films={this.state.current}/>
        </div>
      </div>
    )
  }
}