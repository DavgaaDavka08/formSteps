import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

////sitgn-up
export default function FirstPage({
  formData,
  handleChange,
  next,
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
      setFormData((prev) => ({
        ...prev,
        savedEmail: formData.email,
        savedPassword: formData.password,
      }));
      next();
    }
  };

  return (
    <div className="w-[400px] flex flex-col gap-4">
      <div>
        <Label>Username</Label>
        <Input
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <p className="text-red-500 text-sm">{formErrors.userName}</p>
      </div>
      <div>
        <Label>Email</Label>
        <Input name="email" value={formData.email} onChange={handleChange} />
        <p className="text-red-500">{formErrors.email}</p>
      </div>
      <div>
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-red-500">{formErrors.password}</p>
      </div>
      <div>
        <Label>Confirm Password</Label>
        <Input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-red-500">{formErrors.confirmPassword}</p>
      </div>
      <button text="continue 1/3" onClick={buttonClick}>
        Continue
      </button>
    </div>
  );
}
