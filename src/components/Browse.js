import React from 'react'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearchBar from './GPTSearchBar'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryComponent from './SecondaryComponent'

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies();
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
    return (

        <div>
            {showGPTSearch ? <GPTSearchBar /> :
                <>
                    <Header />
                    <MainContainer />
                    <SecondaryComponent />
                </>
            }
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