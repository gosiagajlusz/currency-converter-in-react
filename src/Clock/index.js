import "./style.css";
import { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";
import { options } from "./options";


const Clock = () => {
  const date = useCurrentDate();
  return (
    <div className="clock">
      Dzisiaj jest {date.toLocaleString(undefined, options)}
    </div>
  );
};

export default Clock;
