import React from 'react'
import { useState } from 'react'
import { moviesData } from '../../utilities/moviesdata';

const Searchfilter = () => {

  const [searchText, setSearchText] = useState(" ");
  const [filterMovies, setFilterMovies] = useState(moviesData);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm)

    const searchMoviesData = moviesData.filter((movie)=>movie.title.toLowerCase().includes(searchTerm.toLowerCase));
    setFilterMovies(searchMoviesData);
  }

  return (
    <div class="searcInput">
      <input type="search" name="" id="" value={searchText} onChange={searchHandler} />
    </div>
  )
}

export default Searchfilter