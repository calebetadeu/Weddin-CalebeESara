import React, { useEffect, useState } from 'react'
import { Button } from './Button/Button'
import { BarProgress, BodyProgress, Progress, ProgressDone } from './ProgressBarStyle'


type ProgressBarProps={
    max_value:number;
    value:number;
}


export const ProgressBar = ({max_value,value}:ProgressBarProps) => {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [style,setStyle]= useState({})
    const [newStyle,setNewStyle]=useState({})//style of progress
    const [background,setBackground]=useState("")//color progressbar

     const valueMax=max_value
        const Avalue=value;
        var percent!:number 
    
         percent=(Avalue /valueMax) *  100;
        const restant_value=valueMax-Avalue;
           
    
          
    useEffect(()=>{
          console.log(percent)
        if(percent ===100){
           setNewStyle({
                opacity: 1,
            width:`${percent.toString()}%`
           })
           setBackground("#0ff707")
        }
        else if (percent >=  50) {
             setNewStyle({
                opacity: 1,
            width:`${percent.toString()}%`
           })
           setBackground("linear-gradient(to left, #5198d3,#ae4bdb)")    
        }
        else{
            setNewStyle({
                opacity: 1,
            width:`${percent.toString}%`,    
        })
        setBackground("linear-gradient(to left, #F2709C,#FF9472)")
       
        }

        setStyle(newStyle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <BarProgress>
        <BodyProgress>
        <br />
      <Button  label="Contribuir" src="#payments" />
      <br />
      <br />
    
        <Progress >
             
            < ProgressDone style={{
                opacity: 1,
                width: `${percent.toString()}%`,
              
                
            }} background={background}  > R$ {Avalue} </ProgressDone> 
       <span>Faltam:R${restant_value} </span>
        </Progress> 
  
        </BodyProgress>
    
        </BarProgress>
    )
}

