import React from "react";

const SecondStep = ({ backPage }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          backPage();
        }}
      >
        back
      </button>
    </div>
  );
};

export default SecondStep;
