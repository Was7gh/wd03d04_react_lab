import React, { Component } from 'react'
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing';
import TMDB from './TMDB'
import axios from 'axios'

export default class App extends Component {
constructor(){
  super()

  this.handleFaveToggle = this.handleFaveToggle.bind(this)

  this.state ={
   
    films: TMDB.films,
    faves : [],
    current : {}
 
  }
}



  handleFaveToggle(film){
    const faves =  this.state.faves.slice()
    const filmIndex = this.state.faves.indexOf(film)

    if(filmIndex < 0){
    
      faves.push(film)
      console.log("Adding "+ film.title + "to faves")
    }else {
      console.log("Romove "+ film.title + "from faves")
      faves.splice(filmIndex, 1)
    }
        this.setState({faves});
  }


  handleDetailsClick =(filmsa)  =>{

    this.setState({current : filmsa});

    const url = `https://api.themoviedb.org/3/movie/${filmsa.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${filmsa.title}`);
      this.setState({ current: response.data })
    })
     console.log("Fetching details for "+ filmsa.title)

        
    }
 

  render() {
    return ( 
      <div className=" App">
      <div className="film-library">
  
    <FilmListing 

    handleDetailsClick ={this.handleDetailsClick}
    onFaveToggle={this.handleFaveToggle}
    films={this.state.films}
     faves={this.state.faves} 
    /> 
   


  <div className="film-details">
    <h1 className="section-title">DETAILS</h1>
    <FilmDetails films={this.state.current}/>
  </div>
</div>
</div>
    )
  }
}