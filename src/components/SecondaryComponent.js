import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryComponent = () => {
    console.log("secondary")
    const movies = useSelector((store) => store.movies)
    if (!movies.nowPlayingMovies) return;
    return (
        movies.nowPlayingMovies &&
        (<div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-20'>
                <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
                <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
                <MovieList title="Polular Movies" movies={movies?.popularMovies} />
            </div>
        </div>)
    )
}

export default SecondaryComponent