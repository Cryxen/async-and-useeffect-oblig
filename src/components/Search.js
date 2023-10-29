import { useState } from "react"

const Search = ({handleSearch}) => {
    const [search, setSearch] = useState('')
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSearch(search)
    }
    return (
        <div>
            <form>
                <label htmlFor="searchField">Søk etter film:</label>
                <input id="searchField" type="input" onChange={handleSearchChange}/>
                <button type="submit" onClick={handleSubmit}>Søk</button>
            </form>
            <p>Search compontent</p>
        </div>
    )
}
export default Search