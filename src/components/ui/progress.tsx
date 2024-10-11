import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <div>
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 xl:h-3 w-full overflow-hidden rounded-full bg-primary/20",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 rounded-full bg-primary-t200 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
    <p
      style={{ transform: `translateX(+${1 + (value ? value - 5 : 0)}%)` }}
      className="text-primary-100 flex-1  transition-all text-sm "
    >
      {value}%
    </p>
  </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
