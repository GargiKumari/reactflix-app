import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {

    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
      const loadPopularMovies = async () => {
        try { 
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);

        } catch (err) {
          console.log(err)
          setError("Failed to load popular movies. Please try again later.");
        } 
        finally {
          setLoading(false);
        }
      }
      loadPopularMovies();
    }, [])
    
    // const movies = [
    //     { id: 1, title: "The Shawshank Redemption", release_date: "2023" },
    //     { id: 2, title: "The Godfather", release_date: "1972" },
    //     { id: 3, title: "The Dark Knight", release_date: "2008" },
    //     { title: "Pulp Fiction", release_date: "1994" }
    // ]

    const handleSearch = async (e) => {
        e.preventDefault(); // prevent default behvior of page reload on form submit
        if (!searchText.trim()) return 
        if (loading) return

        setLoading(true);
        try {
          const searchResults = await searchMovies(searchText);
          setMovies(searchResults);
          setError(null)

        } catch (err) {
          console.log(err)
          setError("Failed to search movies...")

        } finally {
          setLoading(false);
        }
        setSearchText(""); // clear the search input after search

    }

    return <div className="home"> 
        <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder="Search for movies..." 
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div> 
      ) : ( 
        <div className="movies-grid">
          {movies.map(movie => 
            movie.title.toLowerCase().includes(searchText.toLocaleLowerCase()) && ( 
            //movie.title.toLowerCase().startsWith(searchText) && ( 
             <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        )}
    </div>
}

export default Home