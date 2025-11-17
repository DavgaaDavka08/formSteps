import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const FirstStep = ({ nextPage }) => {
  return (
    <div className="flex flex-col w-[400px] h-[] bg-amber-600 flex-col justify-center items-start gap-[24px]">
      <form>
        <Label>
          <Input type={"text"} plasholder="email" />
        </Label>
        <Label>
          <Input type={"text"} plasholder="email" />
        </Label>
        <Label>
          <Input type={"text"} plasholder="email" />
        </Label>
      </form>
      <Button
        onClick={(e) => {
          e.preventDefault();
          nextPage();
        }}
      >
        fdsafdsaadd
      </Button>
    </div>
  );
};

export default FirstStep;
