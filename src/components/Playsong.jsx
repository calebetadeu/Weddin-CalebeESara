import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Song from "./songs/song.mp3"
export const Playsong = () => {
    return (
     <ReactAudioPlayer  
     src={Song}   
     autoPlay={true}
     
     
        />
        
       
    )
}
