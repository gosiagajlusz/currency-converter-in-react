// const Clock = ()=> {
//     
//     return 
//      <p className="clock">cokolwiek
//         {myDate}</p>
// };
import "./style.css";


const Clock = ()=>{
    const myDate = new Date();
    const myClock = myDate.toLocaleString();
    const clockSpace = document.querySelector(".clock");

clockSpace.innerText = myClock;
   

    return (<p className="clock">
        </p>
        )
}


export default Clock;