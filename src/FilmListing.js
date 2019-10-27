import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
    // let handleFilterClick =(filter)  =>{
    //     console.log("Setting filter to")
    //    } 

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
        let allFilms = this.props.films.map((item , index)=>{
            return  <FilmRow key = {item.id} listfilms={item} />
       })
    //    console.log(props.TMDB);
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
                    <span className="section-count">0</span>
                </div>
            </div>
        
            {allFilms}
        </div>
        )
    }
}









