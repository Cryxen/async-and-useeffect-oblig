import Movie from "./Movie"

const Movies = ({movies}) => {
    console.log(movies)
    return (
        <div>
            <p>Movies component</p>
            <p></p>
            <Movie />
        </div>
    )
}
export default Movies