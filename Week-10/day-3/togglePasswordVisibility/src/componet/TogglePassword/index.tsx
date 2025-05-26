"use client";
import { ComponentPropsWithRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
type Props = ComponentPropsWithRef<"input">;
const PasswordInputTailwind = (props: Props) => {
  const [shown, setShown] = useState(false);
  const type = shown ? "text" : "password";
  const Icon = shown ? EyeIcon : EyeSlashIcon;
  return (
    <div className="border flex items-center in rounded-md overflow-hidden">
      <input {...props} type={type} className="p-2 border-r outline-none" />
      <button onClick={() => setShown(!shown)} className="p-2 ">
        <Icon className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
};
export default PasswordInputTailwind;
