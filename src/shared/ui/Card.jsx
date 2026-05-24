import React from "react";
import { cn } from "../../core/utils/cn";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl border border-slate-800 shadow-premium overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => (
  <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className, children, ...props }) => (
  <h3
    className={cn("text-xl font-semibold leading-none tracking-tight text-white", className)}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ className, children, ...props }) => (
  <p className={cn("text-sm text-slate-400", className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ className, children, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
