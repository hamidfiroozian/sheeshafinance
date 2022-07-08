import React from "react";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ handleChange, ...props }: Props) {
  return (
    <input
      className="text-cardbg-dark text-center"
      {...props}
      onChange={handleChange}
    />
  );
}
