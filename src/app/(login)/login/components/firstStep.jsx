import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Step1({ formData, handleChange, next }) {
  return (
    <div className="w-[400px] flex flex-col gap-4">
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

      <div>
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

      <Button onClick={next}>Continue</Button>
    </div>
  );
}
