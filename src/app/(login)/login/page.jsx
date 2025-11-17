"use client";
import { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
const Page = () => {
  const [changePage, setChangePage] = useState(0);
  const FormSteps = [FirstStep, SecondStep][changePage];
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const nextPage = () => {
    setChangePage(changePage + 1);
  };
  const backPage = () => {
    setChangePage(changePage - 1);
  };
  console.log("nextPage :>> ", nextPage);
  return (
    <div className="">
      <FormSteps
        formValues={formValues}
        setFormValues={setFormValues}
        nextPage={nextPage}
        backPage={backPage}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
      />
    </div>
  );
};

export default Page;
