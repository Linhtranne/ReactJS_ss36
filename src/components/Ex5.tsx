import React, { useEffect, useState } from "react";

export default function Ex5() {
  const [currentTime, setCurrrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <p>Thời gian hiện tại: {currentTime}</p>
    </div>
  );
}