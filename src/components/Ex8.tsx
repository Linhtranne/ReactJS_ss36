import React from 'react';

const getSeason = (month: number): string => {
  if (month >= 1 && month <= 3) {
    return 'Xuân';
  } else if (month >= 4 && month <= 6) {
    return 'Hạ';
  } else if (month >= 7 && month <= 9) {
    return 'Thu';
  } else {
    return 'Đông';
  }
};

const Ex8 = () => {
  const currentMonth = new Date().getMonth();
  const currentSeason = getSeason(currentMonth);

  return (
    <div>
        <h1>Bây giờ là tháng: {currentMonth}</h1>
      <h1>Mùa hiện tại: {currentSeason}</h1>
    </div>
  );
};

export default Ex8;
