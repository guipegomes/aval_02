import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Read() {
	const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div>Filme não encontrado</div>;
  }

	return (
		<div>
      <h2>Detalhes do Filme</h2>
      <p><strong>Title:</strong> {movie.name}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release year:</strong> {movie.year}</p>
      <Link to="/">Back</Link>
    </div>
	)
}

export default Read;