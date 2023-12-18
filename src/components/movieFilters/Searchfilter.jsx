import React from 'react'
import { useState } from 'react'

const Searchfilter = () => {

  const [searchText, setSearchText] = useState(" ");

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm)
  }

  return (
    <div class="searcInput">
      <input type="search" name="" id="" value={searchText} onChange={searchHandler} />
    </div>
  )
}

export default Searchfilter