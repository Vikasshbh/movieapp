import { Component } from "react";
import UpcomingMovieCard from "./upcomingMoviesComponent/UpcomingMoviesCard";
import { upcomingMoviesData } from "../../utilities/upcomingMovieData";


class UpcomingMovies extends Component {
    constructor() {
        super()
        this.state = {
            movies: (upcomingMoviesData)
        }
    }
    // async componentDidMount() {
    //     const data = await fetch("https://paytm.com/movies/_next/data/xpAurcaHuf3FJVDzMtUAi/upcoming-movies.json?city=chandigarh");
    //     const json = await data.json();
    //     console.log(json);
    // }


    render() {
        const { movies } = this.state;
        return (
            <div className="container">
                <div className="upcoming-movie-list flex gap-4 justify-center">{
                    movies.map((movie) => (
                        <UpcomingMovieCard {...movie}></UpcomingMovieCard>
                    ))
                }</div>
            </div>
        )
    }
}

export default UpcomingMovies;