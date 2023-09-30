// const Clock = ()=> {
//     
//     return 
//      <p className="clock">cokolwiek
//         {myDate}</p>
// };
import "./style.css";


const Clock = ()=>{
    const myDate = new Date();
    const clockSpace = document.querySelector(".clock");
clockSpace.innerText = myDate.toString()
   

    return (<p className="clock">
        </p>
        )
}


export default Clock;