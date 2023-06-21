import { Routes, Route } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import Login from "./pages/Login";
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/movies/:movieId" element={<MovieDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
