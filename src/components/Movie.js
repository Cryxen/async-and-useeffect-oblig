const Movie = ({movie}) => {
    return (
        <div className="movieCard">
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} alt="Movieposter"/>
            <p>{movie.Year} </p>
            <p>{movie.Type}</p>
        </div>
    )
}
export default Movie