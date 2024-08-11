import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-4 py-4 sm:px-4 sm:py-8 lg:px-8 lg:py-10",
        className
      )}
    >
      <div className="mx-auto sm:max-w-2xl lg:max-w-none">{children}</div>
    </div>
  );
}

export default Container;
