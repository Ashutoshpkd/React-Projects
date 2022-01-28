import React, { useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setIsLoading(true);
    // try {
      const resp = await fetch('https://swapi.dev/api/films');
      const data = await resp.json();
      const transformedMovies = data && data.results.map((movie) => (
        {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        }
      ));
      setMovies(transformedMovies);
    // } catch(error) {
    //   console.log('ERROR');
    // }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button type='button' onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
      {isLoading && 
        <DotLoader
        loading
        color='#0CE0CA'
        size={60} 
        />}
        {!isLoading && (<MoviesList movies={movies} />)}
      </section>
    </React.Fragment>
  );
}

export default App;
