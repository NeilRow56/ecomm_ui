import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//clsx is a tiny utility for constructing className strings conditionally, out of an object with keys being the class strings, and values being booleans.
