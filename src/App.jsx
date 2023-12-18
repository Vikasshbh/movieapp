import Movielist from "./components/Movielist";
import Moviefilter from "./components/movieFilters/Moviefilter";

const App = () => {
  return (
    <div className="moviefilters">
      <Moviefilter></Moviefilter>
      <Movielist></Movielist>
    </div>
  )
}

export default App;