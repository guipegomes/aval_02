import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import Header from './components/Header';
import { MovieProvider } from "./context/MovieProvider";

function App() {

  return (
    <MovieProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
        <Link to={'/read/1'}>Read test</Link>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App
