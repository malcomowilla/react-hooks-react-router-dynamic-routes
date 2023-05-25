import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  // call useParams to access the `params` from the url
const params = useParams()
console.log(params)
  console.log(movies);

if (!movies[params.movieId]) {
  return <h1> movie not found</h1>
}

  return (
    <div>
      {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}

        <h3>{movies[params.movieId].title}</h3>

    </div>
  );
}

export default MovieShow;