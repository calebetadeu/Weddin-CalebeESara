import React from 'react'
import './Button.scss'

type ButtonProps ={
   label:string
   href:string
 
}

export const Button = ({label,href}:ButtonProps) => {
    return (
        <button className="button"  >
          <a href={href}> {label} </a>  
        </button>
    )
}
