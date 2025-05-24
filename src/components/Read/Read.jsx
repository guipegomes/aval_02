import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import './Read.scss';

function Read() {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <div className="movie-info">
      <div className="showcase">
        <p>Detalhes do Filme</p>
      </div>
      <p className="italic">Id: {movie.id}</p>
      <h1>{movie.name}</h1>
      <p className="italic">{movie.genre}, {movie.year}</p>

      <Link to="/" className="detail-btn">
        Voltar
      </Link>
    </div>

  )
}

export default Read;