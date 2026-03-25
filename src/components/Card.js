import { Link } from "react-router-dom"
import BackUpImg from "../assets/images/backup.png"


export const Card = ({movie}) => {
  const posterImage = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : BackUpImg
  return (
    <div className="max-w-sm border rounded-lg shadow-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white m-3">
    
        <Link to={`/movie/${movie.id}`}>
            <img className="rounded-lg" src={posterImage} alt="" />
        </Link>
        <Link to={`/movie/${movie.id}`}>
            <h5 className="mt-6 mb-2 px-3 text-2xl font-semibold tracking-tight text-heading">{movie.original_title}</h5>
        </Link>
        <p className="mb-6 text-body px-3">{movie.overview}</p>
    </div>      
  )
}
