import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

        const data = await fetch(url, API_OPTIONS)
        const json = await data.json();
        dispatch(addPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies