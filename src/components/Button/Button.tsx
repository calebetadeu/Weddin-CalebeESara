import React from 'react'
import './Button.scss'

type ButtonProps ={
   label:string
}

export const Button = ({label}:ButtonProps) => {
    return (
        <div className="button" >
            {label}
        </div>
    )
}
