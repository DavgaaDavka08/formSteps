"use client";

import { useState } from "react";
import SecondStep from "./components/secondStep";
import FirstStep from "./components/firstStep";

const page = () => {
  const [changePage, setChangePage] = useState(0);
  const FormSteps = [FirstStep, SecondStep][changePage];
  const nextPage = () => {
    setChangePage(changePage + 1);
  };
  const backPage = () => {
    setChangePage(changePage - 1);
  };
  console.log("nextPage :>> ", nextPage);
  return (
    <div>
      <FormSteps nextPage={nextPage} backPage={backPage} />
    </div>
  );
};

export default page;
