"use client";
import { useState } from "react";
import Step1 from "./components/FirstStep";
import Step2 from "./components/SecondStep";

export default function Page() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // бүх input-ыг удирдах ганц функц
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Хуудас солих
  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <>
      {step === 1 && (
        <Step1 formData={formData} handleChange={handleChange} next={next} />
      )}

      {step === 2 && <Step2 formData={formData} back={back} />}
    </>
  );
}
