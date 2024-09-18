import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            <MainContainer />
        </div>

        /*
            MainContainer
                - VideoBackground
                - Video Title
            SecondaryContainer
                - Movies List * n
                - Cards * n 
        */

    )
}

export default Browse