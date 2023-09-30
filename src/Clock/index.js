// const Clock = ()=> {
//
//     return
//      <p className="clock">cokolwiek
//         {myDate}</p>
// };
import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
   
    const myDate = new Date();


//    tutaj jest szkic funkcji, która będzie aktualizowała godzinę 


// const changeTime = ()=>{
//     const myDate = new Date();


// to trzeba przerobić, żeby było funkcją a nie przypisaniem Date do zmiennej, 
// tylko nie wiem jak 

//     setTimeout (changeTime,1000);
// }
// changeTime();


  //  setInterval(()=> {
  //     changeTime(); },
  // 10000);

  // set setTimeout

  useEffect(() => {
    const clockSpace= document.querySelector(".clock");
    clockSpace.innerText= `Dzisiaj jest: ${myDate.toLocaleString()}`
  });

  return <p className="clock">
    
    </p>;
};

export default Clock;
