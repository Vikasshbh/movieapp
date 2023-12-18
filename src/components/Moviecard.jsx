const Moviecard = (props) => {
    const { movieInfo } = props
    const { title, genre, length, likesPercentage, posterUrl } = movieInfo;

    return (
        <div className="movie-card">
            <img src={posterUrl} alt="Movie Poster" class="poster" />
            <div className="movie-details">
                <h2 className="title">{title}</h2>
                <p className="genre">{genre}</p>
                <p className="length">{length}</p>
                <div className="likes">
                    <svg className="like-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    <p className="likes-percentage">{likesPercentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default Moviecard