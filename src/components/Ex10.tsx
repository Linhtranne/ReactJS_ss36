import React, { useState, useEffect } from 'react';

const Ex10 = () => {
  const [key, setKey] = useState<string>('');
  const [keyCode, setKeyCode] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    setKey(event.key);
    setKeyCode(event.keyCode);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {key && keyCode !== null && (
        <p>
          Bạn đã nhấn phím: {key}, Mã phím: {keyCode}
        </p>
      )}
    </div>
  );
};

export default Ex10;
