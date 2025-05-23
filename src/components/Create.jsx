import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";

function Create() {
	const { apiUrl, fetchMovies } = useContext(MovieContext);
  const [form, setForm] = useState({ name: "", genre: "", year: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(apiUrl, form);
    fetchMovies();
    navigate("/");
  };

	return (
		<div>
      <h2>Register Films</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
	)
}

export default Create;