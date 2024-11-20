import React from "react";

const TransformExample = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      {/* Scale */}
      <div className="transform scale-125 bg-blue-400 text-white p-5 rounded-lg">
        Scaled Element
      </div>

      {/* Rotate */}
      <div className="transform rotate-45 bg-green-400 p-5 rounded-lg text-white">
        Rotated Element
      </div>

      {/* Translate */}
      <div className="transform bg-purple-400 p-5 rounded-lg translate-x-10">
        Translated Element
      </div>

      {/* Skew */}
      <div className="transform bg-red-500 p-5 rounded-lg skew-x-12">
        Skewed Element
      </div>
    </div>
  );
};

export default TransformExample;
