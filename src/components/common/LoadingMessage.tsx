import React from "react";

const LoadingMessage = () => {
  return (
    <div className="text-center animate-pulse p-4">
      <p className="text-gray-600 mt-2 font-semibold">
        Initial loading might take over 50 seconds... because we're running on
        the free plan. Hey, even servers need to budget! 🆓
      </p>
      <p className="text-sm text-gray-500 mt-2 italic">
        *grabbing coffee recommended ☕
      </p>
    </div>
  );
};

export default LoadingMessage;
