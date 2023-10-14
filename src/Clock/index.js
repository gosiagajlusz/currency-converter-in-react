import { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";
import { options } from "./options";
import {DivClock} from "./styled"


const Clock = () => {
  const date = useCurrentDate();
  return (
    <DivClock>
      Dzisiaj jest {date.toLocaleString(undefined, options)}
    </DivClock>
  );
};

export default Clock;
