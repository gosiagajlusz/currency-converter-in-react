import "./style.css";
import { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";

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
  const date = useCurrentDate();
  return (
    <div className="clock">
      Dzisiaj jest {date.toLocaleString(undefined, options)}
    </div>
  );
};

export default Clock;
