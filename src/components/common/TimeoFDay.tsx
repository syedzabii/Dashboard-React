import React from "react";

const TimeOfDay = () => {
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Evening";
    } else {
      return "Night";
    }
  };

  return (
    <div>
      <h1>{getTimeOfDay()}</h1>
    </div>
  );
};

export default TimeOfDay;
