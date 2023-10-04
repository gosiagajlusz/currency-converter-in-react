import "./style.css";
import { useState, useEffect } from "react";

const options = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
const Clock = () => {
  const [date, setDate] = useState(new Date());
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      Dzisiaj jest {date.toLocaleString(undefined, options)}
    </div>
  );
};

export default Clock;
