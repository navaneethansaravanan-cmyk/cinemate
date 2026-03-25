import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch, useTitle } from "../hooks";
export const Search = ({apiPath}) => {

  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section>
        <h1 className="text-3xl text-gray-800 dark:text-gray-200 font-bold my-7">{!movies || movies.length === 0 ? `No result found for ${queryTerm}` : `Search Result for ${queryTerm}`}</h1>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          {movies && movies.map((movie) => (
               <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}