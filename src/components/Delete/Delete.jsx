import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import './Delete.scss'

function Delete() {
  const { apiUrl, fetchMovies } = useContext(MovieContext);
  const [id, setId] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const searchMovie = async () => {
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      setMovie(res.data);
      setError("");
    } catch {
      setError("Filme não encontrado.");
      setMovie(null);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchMovies();
      navigate("/");
    } catch {
      setError("Erro ao deletar filme.");
    }
  };

  const handleCancel = () => {
    setId("");
    setMovie(null);
    setError("");
  };

  return (
    <div className="delete-container">
      <h2>Apagar Filmes</h2>

      {!movie ? (
        <div className="search-section">
          {error && <div className="error">{error}</div>}
          <input
            placeholder="ID Filme"
            value={id}
            onChange={(e) => setId(e.target.value)} />
          <div className="buttons-wrapper">
          <button onClick={searchMovie}>Pesquisar</button>
          <button onClick={() => navigate("/")}>Voltar</button>
          </div>

        </div>
      ) : (
        <>
          <div className="result-section">
            <p><strong>Nome:</strong> {movie.name}</p>
            <p><strong>Gênero:</strong> {movie.genre}</p>
            <p><strong>Lançamento:</strong> {movie.year}</p>
          </div>
        <div className="buttons-wrapper">

          <button onClick={handleDelete}>Apagar</button>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={() => navigate("/")}>Voltar</button>
        </div>
        </>
      )}
    </div>

  );
}

export default Delete;