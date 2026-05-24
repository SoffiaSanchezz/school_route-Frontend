import React from "react";
import { cn } from "../../core/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  isLoading = false,
  children, 
  ...props 
}, ref) => {
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800",
    ghost: "bg-transparent text-slate-400 hover:bg-slate-800 hover:text-white",
    danger: "bg-danger text-white hover:bg-red-600 shadow-lg shadow-danger/20",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg font-semibold",
    icon: "p-2",
  };

  return (
    <button
      ref={ref}
      disabled={isLoading || props.disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
