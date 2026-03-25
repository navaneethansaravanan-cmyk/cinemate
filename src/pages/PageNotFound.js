import { Link } from "react-router-dom"
import { Button } from "../components"

import PGNotFound from "../assets/images/pagenotfound.png"
import { useTitle } from "../hooks"

export const PageNotFound = () => {
  
  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col items-center justify-center py-30">
        <div className="flex flex-col items-center my-4">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 my-5">Page Not Found</h2>
          <p className="text-gray-800 dark:text-gray-200 mb-10">The page you are looking for does not exist.</p>
          <div className="max-w-lg">
            <img src={PGNotFound} alt="Page Not Found" className="rounded" />
          </div>
        </div>
        <div>
            <Link to="/">
                <Button text="Back to Home"/>
             </Link>
        </div>
      </section>
    </main>
  )
}
