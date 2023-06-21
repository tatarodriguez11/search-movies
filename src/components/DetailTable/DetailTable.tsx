import { DetailTableProps } from "./iDetailTable";
import './DetailTable.scss'

export function DetailTable({year, actors, country, language, genre, plot, director, poster, title}: DetailTableProps){
  return(
    <div className="table__container">
      <img className="table__poster" src={poster} alt={title} />
      <p className="table__description">{plot}</p>
      <div className="table__content-wrapper">
        <table>
          <tr className="table__content-container">
            <td> <strong>Director:</strong>  {director}</td>
            <td><strong>Actors:</strong>  {actors}</td>
            <td><strong>Genre:</strong> {genre}</td>
            <td><strong>Country:</strong> {country}</td>
            <td><strong>Language:</strong>  {language}</td>
            <td><strong>Year:</strong> {year}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}