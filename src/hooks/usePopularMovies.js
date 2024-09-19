import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIE_API } from "../utils/constants"
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async () => {

        const data = await fetch(POPULAR_MOVIE_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
        getPopularMovies()
    }, [])
}
export default usePopularMovies;