import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const DefaultWidth: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-[70vw] mx-auto", className)}>{children}</div>
  );
};

export default DefaultWidth;
