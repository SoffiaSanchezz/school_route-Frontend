import React from "react";
import { cn } from "../../core/utils/cn";

const Badge = ({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}) => {
  const variants = {
    default: "bg-slate-800 text-slate-300",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-success/10 text-success border border-success/20",
    danger: "bg-danger/10 text-danger border border-danger/20",
    warning: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge };
