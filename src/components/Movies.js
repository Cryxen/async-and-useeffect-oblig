import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div className="movieSection">
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
};
export default Movies;
