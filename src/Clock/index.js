// const Clock = ()=> {
//
//     return
//      <p className="clock">cokolwiek
//         {myDate}</p>
// };
import "./style.css";

const Clock = () => {

const myDate = new Date();

// const changeTime = ()=>{
//    const myTime = myDate.toLocaleString();
//    console.log(myTime);
//  }

// changeTime();

//  setInterval(()=> {
//     changeTime(); },
// 10000);


  return <p className="clock" >{myDate.toLocaleString()}</p>;
};

export default Clock;
