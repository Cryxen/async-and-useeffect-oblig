import { useEffect, useState } from "react"
import Movies from "./Movies"
import Search from "./Search"
import axios from "axios"

const Main = () => {
    const [movies, setMovies] = useState([]);
    
    //API: http://www.omdbapi.com/?i=tt3896198&apikey=fedfefc7
    useEffect(() => {

        const fetchStarWars = async () => {
        const result =  await axios.get('http://www.omdbapi.com/?s=star-wars&apikey=fedfefc7')
        console.log(result.data.Search)
        const starWarsFromAPI = result.data.Search
        for (let i = 0; i<5; i++) {
            setMovies((prev) => [...prev, starWarsFromAPI[i]])
        }
        console.log("I fire once")

        }
        fetchStarWars()

    }, [])

    console.log(movies)
    return(
        <div>
            <Search />
            <Movies movies={movies}/>
            <p>Main compontent</p>
        </div>
    )
}
export default Main