import Moviecard from "./Moviecard";
import { moviesData } from "../utilities/moviesdata";
import { useState } from "react";
import { Link } from "react-router-dom";

const Movielist = () => {
    const [searchText, setSearchText] = useState(" ");
    const [filterMovies, setFilterMovies] = useState(moviesData);
    const searchHandler = (e) => {
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        const searchMoviesData = moviesData.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterMovies(searchMoviesData);
    }
    return (
        <>
            <div className="filters">
                <div class="searcInput">
                    <input type="search" name="" id="" value={searchText} onChange={searchHandler} />
                </div>
            </div>
            <div className="flex flex-wrap max-w-screen-lg mx-auto">
                {filterMovies.map(
                    (movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <Moviecard movieInfo={movie} />
                    </Link>)
                    )}
            </div>
        </>
    );
};

export default Movielist;
