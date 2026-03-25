
import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = queryTerm ? `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}` : `https://api.themoviedb.org/3/${apiPath}`;
    console.log(url);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                //Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDU0N2JiYTgyNWUyZjJkNzBhMDQwZTg1Mzk2MWY5ZiIsIm5iZiI6MTc3Mzk1NTgyOC43NzYsInN1YiI6IjY5YmM2YWY0NDQ1YWZhNTQzNWNhY2EwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hXkLO7PKkLwztTycLM0TxPqXMRmcK7Ue6GWsSInGwU0'
            }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setData(json.results))
        .catch(err => console.error(err));
    }, [url])
  return { data }
}
