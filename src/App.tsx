import { Routes, Route } from "react-router-dom";
import { ConfigCatProvider, createConsoleLogger, LogLevel } from "configcat-react";
import { MovieDetail } from "./pages/MovieDetail";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";
import Login from "./pages/Login";
import './App.scss'

function App() {

  const logger = createConsoleLogger(LogLevel.Info);

  return (
    <>
      <ConfigCatProvider sdkKey="kHLbCDhQW06FWD0TjMbWig/JepDyNyvs0Sn1UI2SeQczw" options={{ logger }}> 
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/movies/:movieId" element={<MovieDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ConfigCatProvider>
    </>
  )
}

export default App
