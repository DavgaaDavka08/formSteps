"use client";

import { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

const Page = () => {
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

export default Page;
