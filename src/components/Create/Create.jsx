import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../../context/MovieContext";
import './Create.scss';

function Create() {
  const { apiUrl, fetchMovies } = useContext(MovieContext);
  const [form, setForm] = useState({ name: "", genre: "", year: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.genre.trim() || !form.year.trim()) {
      setError("Preencha todos os campos antes de cadastrar.");
      return;
    }

    try {
      await axios.post(apiUrl, form);
      fetchMovies();
      navigate("/");
    } catch (err) {
      console.error(err)
      setError("Erro ao cadastrar o filme.");
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Filmes</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Gênero"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
        />
        <input
          placeholder="Ano de lançamento"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />
        <div className="buttons-wrapper">
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={() => navigate("/")}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;