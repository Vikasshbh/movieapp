import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // For react-router-dom v6
import { moviesData } from "../../utilities/moviesdata";
import { Transition } from "react-transition-group";

const MovieDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const movie = moviesData.find((m) => m.id === parseInt(id, 10));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    const handleBookTicket = () => {
        navigate(`/seat-selection/${id}`);
    };

    return (
        <div className="container mx-auto my-8 p-4">
            <Transition in={true} timeout={300} appear={true}>
                {(status) => (
                    <div
                        className={`bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${status === "entered" ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            className="w-full h-64 object-cover object-center"
                            src={movie.posterUrl}
                            alt={movie.title}
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
                            <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
                            <p className="text-gray-600 mb-2">Length: {movie.length}</p>
                            <p className="text-gray-600 mb-2">Ticket Price: ${movie.ticketPrice}</p>
                            <p className="text-gray-600 mb-2">Rating: {movie.rating}</p>
                            <p className="text-gray-600 mb-2">Likes Percentage: {movie.likesPercentage}%</p>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-full"
                                onClick={handleBookTicket}
                            >
                                Book Ticket
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default MovieDetail;
