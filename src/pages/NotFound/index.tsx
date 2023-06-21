import { Link } from "react-router-dom"
import './NotFound.scss'
export function NotFound(){
  return(
    <div className="notFound__container">
      <div className="notFound__content-container">
        <h1 className="notFound__content-title">OOPS! pareces algo perdido</h1>
        <p className="notFound__content-subtitle">Para seguir buscando pelis, entra <Link to="/search">aquí</Link></p>
      </div>
    </div>
  )
}
