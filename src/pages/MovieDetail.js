
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {Button} from "../components"
import Backup from "../assets/images/backup.png"
import { useTitle } from "../hooks"

export const MovieDetail = () => {
    const [movie, setMovie] = useState([]);
    const movieParam = useParams();
    console.log(movie.id);
    const url = `https://api.themoviedb.org/3/movie/${movieParam.id}`;
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : Backup;
    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDU0N2JiYTgyNWUyZjJkNzBhMDQwZTg1Mzk2MWY5ZiIsIm5iZiI6MTc3Mzk1NTgyOC43NzYsInN1YiI6IjY5YmM2YWY0NDQ1YWZhNTQzNWNhY2EwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hXkLO7PKkLwztTycLM0TxPqXMRmcK7Ue6GWsSInGwU0'
          }
        };

        fetch(url, options)
          .then(res => res.json())
          .then(json => setMovie(json))
          .catch(err => console.error(err));
    }, [url])    

    useTitle(movie.title)

    return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className = "rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h2 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h2>
          <p className="my-4">{movie.overview}</p>
            <p className="flex flex-wrap my-7 gap-2">
              {movie.genres && movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 dark:border-gray-700 p-2 rounded" key={genre.id}>{genre.name}</span>
              ))}
            </p>
          <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
              <p className="ms-2 text-sm font-bold text-heading">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
              <span class="text-sm font-medium text-heading underline hover:no-underline">{movie.view_count}</span>
          </div>

          <p className="my-4 flex flex-col">
            <span className="my-1">Runtime: {movie.runtime}</span>
            <span className="my-1">Buget: {movie.budget}</span>
            <span className="my-1">Revenue: {movie.revenue}</span>
            <span className="my-1">Release Date: {movie.release_date}</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">
              <span className="mr-2">IMDB Code:</span>
              <span className="underline">{movie.imdb_id}</span>
            </a>
            <span className="my-1">Origin Country: {movie.origin_country}</span>
            <span className="my-1">Status: {movie.status}</span>
          </p>
          
          <Link to="/">
            <Button text = "Back to Home" />
          </Link>
        </div>
      </section>
    </main>
  )
}
