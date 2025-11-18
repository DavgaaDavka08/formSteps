"use client";
import { useState } from "react";
import FirstPage from "./components/firstStep";
import SecondPage from "./components/secondStep";

export default function Page() {
  const [stepPage, setStepPage] = useState(0);
  const FormStep = [FirstPage, SecondPage][stepPage];
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => setStepPage(stepPage + 1);
  const back = () => setStepPage(stepPage - 1);

  return (
    <div>
      <FormStep
        formData={formData}
        handleChange={handleChange}
        next={next}
        back={back}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        setFormData={setFormData}
      />
    </div>
  );
}
