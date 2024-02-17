import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImagePath(imagePath?: string, fullSize?: boolean) {
  return imagePath ? `http://image.tmdb.org/t/p/original${imagePath}` : "";
}
