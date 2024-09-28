import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function giveToast(message: string, icon: string) {
  return toast(message, {
    duration: 2000,
    position: "top-left",
    icon: icon,
  });
}
