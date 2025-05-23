import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

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
      setError("Film not found.");
      setMovie(null);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchMovies();
      navigate("/");
    } catch {
      setError("Error deleting the film.");
    }
  };

  const handleCancel = () => {
    setId("");
    setMovie(null);
    setError("");
  };

  return (
    <div>
      <h2>Delete Films</h2>

      {!movie ? (
        <>
          <input
            placeholder="Film ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={searchMovie}>Search</button>
          <button onClick={() => navigate("/")}>Back</button>

          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {error}
            </div>
          )}
        </>
      ) : (
        <>
          <div style={{ marginBottom: "10px" }}>
						<h4>Search result:</h4>
            <p><strong>Name:</strong> {movie.name}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.year}</p>
          </div>

          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default Delete;