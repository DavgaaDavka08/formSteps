import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//signin
export default function SecondPage({
  formData,
  handleChange,
  next,
  back,
  formErrors,
  setFormErrors,
  setFormData,
}) {
  const loginClick = () => {
    let errors = {};
    if (formData.email !== formData.savedEmail) {
      errors.email = "email not fount";
    }
    if (formData.password !== formData.savedPassword) {
      errors.email = "password is wrong";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("successfull login");
      next();
    }
  };
  return (
    <div className="w-[400px] flex flex-col gap-4">
      <div>
        <Label>Email</Label>
        <Input
          value={formData.email}
          onChange={handleChange}
          type={"text"}
          placholder="email"
        />
        <p className="text-red-500">{formErrors.email}</p>
      </div>
      <div>
        <Label>password</Label>
        <Input
          value={formData.password}
          onChange={handleChange}
          type={"text"}
          placholder="password"
        />
        <p className="text-red-500">{formErrors.password}</p>
      </div>
      <Button onClick={loginClick}>add</Button>
      <Button onClick={back}>add</Button>
    </div>
  );
}
