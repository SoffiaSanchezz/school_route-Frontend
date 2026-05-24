import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely using clsx and tailwind-merge.
 * This is essential for building reusable components where classes can be overridden.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
