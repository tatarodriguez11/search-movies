import { Link } from "react-router-dom"
import './Home.scss'
export function Home() {

  return(
    <section className="home__container">
      <div className="home__content-container">
        <h1 className="home__content-title">Bienvenido al mejor buscador de peliculas</h1>
        <p className="home__content-subtitle">Para buscar películas, por favor da click <Link to="/search">aquí</Link> </p>
      </div>
    </section>
  )
}