import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

function Home() {
	const { movies } = useContext(MovieContext);
	console.log(movies);
	return (
		<div>
      <h1>Film Catalog</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id} - {movie.name} 
            <Link to={`/read/${movie.id}`} className="detail-btn">
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
	)
}

export default Home;