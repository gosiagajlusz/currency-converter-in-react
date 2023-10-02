import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const clockSpace = document.querySelector(".clock");

  const [date,setDate]= useState(new Date());

  clockSpace.innerText = `Dzisiaj jest: ${date.toLocaleString()}`;

  useEffect(() =>{
    const intervalId = setInterval(()=>{
      setDate(new Date());
    },1000);

    return ()=> {
      clearInterval(intervalId);
    };
  }, [date]
   );
    

  return <p className="clock">
    </p>;
};

export default Clock;
