import { Component } from "react";

class UpcomingMovieCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { title, genre, posterUrl, releaseDate, language } = this.props;
        return (
            <div className="UpcomingMovie_upcomingMovie__qJgwx">
                <a className="" role="" aria-label="" href="/movies/guntur-kaaram-movie-detail-161225">
                    <div className="UpcomingMovie_imgCon__NhA2K">
                        <img src={posterUrl} height="300" alt="Guntur Kaaram" />
                        <div className="UpcomingMovie_gradient__QLUoS"></div>
                        <div className="UpcomingMovie_relDateDweb__M3OjY">
                            <div className="UpcomingMovie_relDateLabel___Kejm">Release Date</div>
                            <span className="UpcomingMovie_relDate__DzlI0">{releaseDate}</span>
                        </div>
                    </div>
                    <div className="UpcomingMovie_detail__yxjWv">
                        <div className="UpcomingMovie_row1__wEyNT">{title}</div>
                        <div className="UpcomingMovie_row2__5S7GK">
                            <span>{language}</span><span>{genre}</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default UpcomingMovieCard