import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
  

    constructor(props) {
        super(props)
        this.state= {
          filter: 'all'
        }
      }
      handleFilterClick = (filter) => {
        if (filter === 'Faves') {
           console.log( "Setting filter to")
              }
             else{
              console.log("Setting all to")
             }
        this.setState({
          filter: filter
        })
      }
    render(props) {
      const allFilms = this.props.films.map((film) => {
        return (
        <FilmRow
        handleDetailsClick ={this.props.handleDetailsClick}
        film={film}
        key={film.id}
        isFave = {this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        />
      )
      })
      const allFave = this.props.faves.map((film) => {
        return (
        <FilmRow
        handleDetailsClick ={this.props.handleDetailsClick}
        film={film}
        key={film.id}
        isFave = {this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        />
      )
      })
  
        return (
            <div   className="film-list" >
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
                    ALL
                    <span className="section-count">{this.props.films.length} </span>
                </div>
                <div onClick={() => this.handleFilterClick('faves')}  className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}  >
                    FAVES
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>
            {this.state.filter === 'all' ? allFilms : allFave}
           
        </div>
        )
    }
}









