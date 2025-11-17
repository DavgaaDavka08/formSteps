import { Button } from "@/components/ui/button";
import React from "react";

const FirstStep = ({ nextPage }) => {
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          nextPage();
        }}
      >
        fdsafdsaadd
      </Button>
    </div>
  );
};

export default FirstStep;
