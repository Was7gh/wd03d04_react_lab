import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
  var allFilms = props.TMDB.map((item)=>{
       return  <FilmRow key = {item.id} listfilms={item} />
  })
    return (
        <div>
            {allFilms}
        </div>
    )
}

export default FilmListing