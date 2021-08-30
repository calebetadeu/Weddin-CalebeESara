import React, { Fragment } from 'react'
import '../CountDown/Countdown.css'

type CountDownProps ={
timerDays:Number;
timerHours:Number;
timerMinutes:Number;
timerSeconds:Number;
}

export const Countdown = ( {timerDays,timerHours,timerMinutes,timerSeconds}:CountDownProps )  => {

    return (
        <Fragment>
            <section className= "timer-container" >
                <section className="timer" >
                    <h1>Contagem regressiva para o grande dia:</h1>
                    <div  >
                        <div className="timer-clock" >
                        <section className="containerClock"> 
                        <div className="top" >
                            <span>{timerDays} </span> 
                            </div>
                               </section>
                                <small>Dias </small>  
                                  </div>
                                  <div className="timer-clock" >
                         <section className="containerClock" >
                             <div className="top" >
                            <span > {timerHours} </span> 
                            </div>   
                        </section>
                        <small>Horas</small>   </div>
                        <div className="timer-clock" >
                         <section className="containerClock" >
                           <div className="top" >
                            <span> {timerMinutes} </span> 
                            </div>
                           
                        </section> <small>Minutos</small>  </div>  
                        <div className="timer-clock" >
                         <section className="containerClock" >
                             <div className="top" >
                            <span > {timerSeconds} </span> 
                            </div>
                              
                        </section><small>Segundos</small>  </div>
                    </div>
                </section>
            </section>
        </Fragment>

    )
}
