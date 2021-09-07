import React from 'react'

import Song from "./songs/song.mp3"
import Sound from 'react-audio-player'




export const Playsong = () => {
    return (
     <Sound 
     src={Song}
     autoPlay={true}
     controls={true}
     />
    )
}
