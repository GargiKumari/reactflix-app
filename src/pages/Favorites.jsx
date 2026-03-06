import '../css/Favorites.css'
import { useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorite() {
    const {favorites} = useMovieContext();

    if(favorites) {
        return (
        <div className="favorites">
           <h2> Your Favorite Movies </h2>
           <div className="movies-grid">
            {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
           </div>
        </div>
        );
    }

    return <div className="favorite-empty">
        <h2> No favorite movie yet </h2> 
        <p> Add some movies to your favorites </p>
    </div>
}

export default Favorite