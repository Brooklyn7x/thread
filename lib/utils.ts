import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timestamp: number): string => {
  const currentDate = new Date();
  const postDate = new Date(timestamp * 1000);

  const timeDifferenceInMinutes = Math.floor(
    (currentDate.getTime() - postDate.getTime()) / 60000
  );

  const hours = Math.floor(timeDifferenceInMinutes / 60);
  const minutes = Math.abs(timeDifferenceInMinutes % 60);

  if (hours > 0) {
    if (minutes > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} ${
        minutes === 1 ? "minute" : "minutes"
      } ago`;
    } else {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }
  } else {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
};
