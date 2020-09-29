import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0,onTimeout} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    function getElement()
{
    if(minutes===0 && seconds===0)
       {
        onTimeout();
        return <h3>Timeout</h3>
       } 
    else
    {
        return <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3> 
    }
}

    return (
        <div>
        { getElement()
        }
        </div>
    )
}

export default Timer;