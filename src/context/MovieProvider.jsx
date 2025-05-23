import { useEffect, useState } from "react";
import axios from "axios";
import { MovieContext } from "./MovieContext";

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const apiUrl = 'https://68308d886205ab0d6c398b84.mockapi.io/api/movies';

  const fetchMovies = async () => {
    try {
      const response = await axios.get(apiUrl);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, fetchMovies, apiUrl }}>
      {children}
    </MovieContext.Provider>
  );
};
