import moment from "moment";
import { useEffect, useState } from "react";

export default function useDate() {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = date.format("HH:mm:ss");
  const fullDate = date.format("dddd, MMMM Do YYYY");

  return { time, fullDate };
}
