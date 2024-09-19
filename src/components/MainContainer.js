import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return;
    const { id, title, overview } = movies[0]

    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer