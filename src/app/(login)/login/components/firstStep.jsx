import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FirstPage({
  formData,
  handleChange,
  next,
  back,
  formErrors,
  setFormErrors,
  setFormData,
}) {
  const buttonClick = () => {
    let errors = {};

    if (!formData.userName.trim()) {
      errors.userName = "Username is required";
    }
    if (!formData.email.includes("@")) {
      errors.email = "invaild email @";
    }
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      next();
    }

    return (
      <div className="w-[400px] flex flex-col gap-4">
        gogo
        <div>
          <Label>Username</Label>
          <Input
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="">
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Confirm Password</Label>
          <Input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Button text="continue 1/3" handleChange={buttonClick}>
          Continue
        </Button>
      </div>
    );
  };
}
