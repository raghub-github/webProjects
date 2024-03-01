import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="flex p-14 self-center justify-center align-middle mx-auto w-full max-w-[1000px]">
      <div className="max-w-[400px] text-left text-3xl font-normal ">Sign up and get exclusive special deals</div>
      <div className="relative mx-auto mr-8 pb-10 flex w-full max-w-[300px]">
        <Input
          type="email"
          value={email}
          onChange={onChange}
          className="max-w-[300px] border-black rounded h-[48px] pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 bg-blue-800 top-1 rounded"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
