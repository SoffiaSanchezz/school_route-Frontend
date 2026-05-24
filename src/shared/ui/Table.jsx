import React from "react";
import { cn } from "../../core/utils/cn";

const Table = ({ className, ...props }) => (
  <div className="relative w-full overflow-auto">
    <table
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
);

const TableHeader = ({ className, ...props }) => (
  <thead className={cn("[&_tr]:border-b border-slate-800", className)} {...props} />
);

const TableBody = ({ className, ...props }) => (
  <tbody
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);

const TableFooter = ({ className, ...props }) => (
  <tfoot
    className={cn(
      "border-t border-slate-800 bg-slate-900/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
);

const TableRow = ({ className, ...props }) => (
  <tr
    className={cn(
      "border-b border-slate-800 transition-colors hover:bg-slate-800/50 data-[state=selected]:bg-slate-800",
      className
    )}
    {...props}
  />
);

const TableHead = ({ className, ...props }) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }) => (
  <td
    className={cn("p-4 align-middle text-slate-300 [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
};
