import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Create from './components/Create/Create.jsx';
import Read from './components/Read/Read.jsx';
import Update from './components/Update/Update.jsx';
import Delete from './components/Delete/Delete.jsx';
import Header from './components/Header/Header.jsx';
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
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App
