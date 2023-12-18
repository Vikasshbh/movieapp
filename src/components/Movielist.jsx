import Moviecard from "./Moviecard";
import { moviesData } from "../utilities/moviesdata";

const Movielist = () => {
    return (
        <div className="flex flex-wrap max-w-screen-lg mx-auto">
            {moviesData.map((movie) => (<Moviecard key={movie.id} movieInfo={movie} />))}
        </div>
    );
};

export default Movielist;
