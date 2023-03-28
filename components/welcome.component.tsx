import { getTimeStatement } from "@/util/time.util";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [timeStatement, setTimeStatement] = useState<String>();

  useEffect(() => {
      setTimeStatement(getTimeStatement());
  }, []);

  return (
    <>
      <h1>Des Moines Showpage</h1>
      <p>Welcome to Des Moines Showpage.</p>
      <p>
        Based off of{" "}
        <a href="https://stlshowpage.com/" target="_blank">
          St Louis Showpage
        </a>
      </p>
      <p>{timeStatement}</p>
      <p>More coming soon...</p>
    </>
  );
}
