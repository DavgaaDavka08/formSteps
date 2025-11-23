import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
//signin
export default function SecondPage({
  formData,
  handleChange,
  back,
  formErrors,
  setFormErrors,
}) {
  const router = useRouter();
  const addHandler = () => {
    let Errors = {};

    if (formData.email !== formData.savedEmail) {
      Errors.email = "Email is incorrect";
    }

    if (formData.password !== formData.savedPassword) {
      Errors.password = "Password is incorrect";
    }

    setFormErrors(Errors);

    if (Object.keys(Errors).length === 0) {
      router.push("/");
    }
  };
  return (
    <div>
      <div>
        <Input name="email" onChange={handleChange} value={formData.email} />
        <p className="text-red-400 text-sm">{formErrors.email}</p>
      </div>
      <div>
        <Input
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <p className="text-red-400">{formErrors.password}</p>
      </div>
      <div>
        <Button onClick={addHandler}>Sign In</Button>
        <Button variant="secondary" onClick={back}>
          Back
        </Button>
      </div>
    </div>
  );
}
