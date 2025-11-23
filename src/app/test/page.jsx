"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const [hobbies, setHobbies] = useState(["swim", "run", "code"]);
  const updateHobbie = () => {
    setHobbies((prev) =>
      prev.map((item) => (item === "run" ? "runnig" : item))
    );
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="w-[500px] h-[500px] flex flex-col bg-red-200">
        <button onClick={updateHobbie}>change</button>
        {hobbies.join(", ")}
      </div>
      <input
        className="bg-blue-300"
        type="text"
        name="userName"
        value={form.userName}
        onChange={changeHandler}
      />
      <input
        className="bg-amber-300"
        type="text"
        name="email"
        value={form.email}
        onChange={changeHandler}
      />
      <input
        className="bg-red-300"
        type="text"
        name="password"
        value={form.password}
        onChange={changeHandler}
      />
      <h3>Output:</h3>
      {form.userName} - {form.email} - {form.password}
    </div>
  );
};

export default Page;
