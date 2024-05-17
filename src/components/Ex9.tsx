import { useState, useEffect } from 'react';

const Ex9= () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Thời gian đã trôi qua {seconds} giây</h1>
    </div>
  );
};

export default Ex9;
