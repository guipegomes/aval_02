import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../../context/MovieContext";
import './Update.scss'

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
      setError("Filme não encontrado.");
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
    <div className="edit-container">
      <h2>Editar Filmes</h2>

      {!found ? (
        <div className="search-section">
          {error && <div className="error">{error}</div>}
          <input
            placeholder="ID Filme"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div className="buttons-wrapper">
            <button onClick={searchMovie}>Pesquisar</button>
            <button onClick={() => navigate("/")}>Voltar</button>
          </div>

        </div>
      ) : (
        <form onSubmit={handleUpdate}>
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
            <button type="submit">Salvar alterações</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
            <button type="button" onClick={() => navigate("/")}>Voltar</button>
          </div>
        </form>
      )}
    </div>

  );
}

export default Update;