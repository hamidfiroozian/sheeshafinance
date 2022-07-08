import Image from "next/image";
import { useEffect, useState } from "react";

interface INavImage {
  name: string;
  selected?: boolean;
}
export function NavImage({ name, selected }: INavImage) {
  const [hovered, setHovered] = useState<boolean>(false);
  const dark = "default";
  const light = "selected";
  const [theme, setTheme] = useState<"default" | "selected">();
  const height = "40";
  const width = "150";

  useEffect(() => {
    switch (true) {
      case selected || hovered:
        setTheme(light);
        break;

      default:
        setTheme(dark);
        break;
    }
  }, [hovered, selected]);

  return (
    <div
      className={`flex self-end relative justify-center item-center -mx-2 md:-mx-1 lg:mx-0 text-xl text-night ${
        selected && "gray-100"
      }`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="">
        <Image
          src={`/assets/btn-header-mode-${theme}.png`}
          alt={name}
          width={width}
          height={height}
        />
      </div>
      <div
        className={`absolute pr-3 mt-1  ${
          theme === dark ? "text-night" : "text-gray-200"
        }`}
      >
        {name}
      </div>
    </div>
  );
}
