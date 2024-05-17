import React, { useState, useEffect, useRef } from 'react';

const Ex7 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Giá trị hiện tại: {count}</h1>
      <h1>Giá trị trước: {prevCountRef.current}</h1>
      <button onClick={increment}>Tăng</button>
    </div>
  );
};

export default Ex7;
