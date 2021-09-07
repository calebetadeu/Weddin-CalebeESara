import React from 'react'
import './Button.scss'

type ButtonProps ={
   label:string
   src:string
 
}

export const Button = ({label,src}:ButtonProps) => {
    return (
        <button className="button"  >
          <a href={src}> {label} </a>  
        </button>
    )
}
