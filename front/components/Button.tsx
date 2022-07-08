import Image from "next/image";
import { useEffect, useState } from "react";

interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  kind: "dark" | "light";
  lock?:
    | "icon-addstake"
    | "icon-extendstake"
    | "icon-claim"
    | "icon-stake"
    | "icon-extendstake-selected";
  content: string;
  full?: boolean;
}

export function Button({
  kind = "light",
  lock,
  content,
  full,
  ...props
}: IButton) {
  const light = "bg-cardbg-light text-gray-900  border-gray-900";
  const dark = "bg-cardbg-dark text-gray-100  border-gray-100";
  const [selected, setSelected] = useState<boolean>(false);
  const [lockTheme, setLockTheme] = useState<"default" | "selected">();
  const mlight = "border-gray-100";
  const mdark = "border-black";
  const [middleBorder, setMiddleBorder] = useState<string>();
  const [style, setStyle] = useState<string>();

  useEffect(() => {
    switch (true) {
      case kind === "light" && selected === false:
        setLockTheme("default");
        setStyle(light);
        setMiddleBorder(mdark);
        break;
      case kind === "light" && selected === true:
        setLockTheme("selected");
        setStyle(dark);
        setMiddleBorder(mlight);
        break;
      case kind === "dark" && selected === false:
        setLockTheme("selected");
        setStyle(dark);
        setMiddleBorder(mlight);
        break;
      case kind === "dark" && selected === true:
        setLockTheme("default");
        setStyle(light);
        setMiddleBorder(mdark);
        break;

      default:
        console.error("something is wrong");
        break;
    }
  }, [kind, selected, lockTheme, style]);

  return (
    <button
      {...props}
      onMouseOver={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={`flex flex-1 flex-row h-10  ${
        full ? "w-full" : "w-max"
      } justify-between border-2  hover:opacity-100 ${style}`}
    >
      <div className="flex-1 self-center text-center w-max px-2 text-lg">
        {content}
      </div>
      {lock && (
        <div
          className={`flex h-max self-center p-1 -700 border-l-2 ${middleBorder}`}
        >
          <Image
            src={`/assets/${lock}-${lockTheme}.png`}
            alt="lock"
            width="30"
            height="30"
            className="h-full self-center bg-red"
          />
        </div>
      )}
    </button>
  );
}
