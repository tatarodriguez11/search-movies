import { Routes, Route } from "react-router-dom";
import './App.scss'
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movies/:movieId" element={<MovieDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
