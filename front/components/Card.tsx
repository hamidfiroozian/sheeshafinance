interface ICard extends React.ComponentPropsWithoutRef<"div"> {
  children: any;
  dark?: boolean;
}
export function Card({ children, dark, ...props }: ICard) {
  return (
    <div
      {...props}
      className={`flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-3 w-full justify-between border-2  hover:opacity-100 px-3 py-5 text-base ${
        dark
          ? "bg-cardbg-dark text-gray-100  border-gray-100"
          : "bg-cardbg-light text-gray-900  border-gray-900"
      }`}
    >
      {children}
    </div>
  );
}
