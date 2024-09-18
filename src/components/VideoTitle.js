import React from 'react'

function VideoTitle({ title, overview }) {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white from-black bg-gradient-to-r'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
        </div>
    )
}

export default VideoTitle