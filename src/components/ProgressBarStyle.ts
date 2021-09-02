
import styled from 'styled-components'

type CurrentProps= {
  background:any;
}

export const BarProgress =styled.div `
padding-top:0 ;

@media screen and (max-width:768px){
  padding-bottom: 85px;
}

`

export const BodyProgress =styled.div `
    
    padding-left: 11px;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin: 0;
    font-family: 'Montserrat',sans-serif;
    @media screen and (max-width:768px){
      span{
        font: 25px;
      }
    }
`
export const Progress= styled.div `
    background-color: #fff;
    border-radius: 20px 0 0 25px;
    height: 30px;
    width: 329px;
    color: black;
    @media screen and (max-width:768px){
      width: 205px;
    }
    span{
      color: #000;
    font-size: 18px;
    font-family: 'Noto Serif', serif;
    }
    
    
`
export const ProgressDone= styled.div<CurrentProps> `
     height: 100%;
    width: 100px;
    background: ${(props=>props.background)};
    box-shadow: 0 3px 3px -5px #F2709c,0 2px 5px #F2709C;
    border: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 1s ease 0.3s;
`