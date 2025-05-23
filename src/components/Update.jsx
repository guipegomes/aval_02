import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";

function Update() {
  const { apiUrl, fetchMovies } = useContext(MovieContext);
  const [id, setId] = useState("");
  const [form, setForm] = useState({ name: "", genre: "", year: "" });
  const [found, setFound] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const searchMovie = async () => {
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      setForm(res.data);
      setFound(true);
      setError("");
    } catch {
      setError("Film not found.");
      setFound(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`${apiUrl}/${id}`, form);
    fetchMovies();
    navigate("/");
  };

  const handleCancel = () => {
    setId("");
    setForm({ name: "", genre: "", year: "" });
    setFound(false);
    setError("");
  };

  return (
    <div>
      <h2>Edit Film</h2>
      {!found ? (
        <>
          <input
            placeholder="Film ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={searchMovie}>Search</button>
          <button onClick={() => navigate("/")}>Back</button>

          {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Genre"
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
          />
          <input
            placeholder="Release year"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          />
          <button type="submit">Save changes</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="button" onClick={() => navigate("/")}>Back</button>
        </form>
      )}
    </div>
  );
}

export default Update;