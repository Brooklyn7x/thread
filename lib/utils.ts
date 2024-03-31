import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timestamp: number): string => {
  const currentDate = new Date();
  const postDate = new Date(timestamp);

  const timeDifferenceInMilliseconds =
    currentDate.getTime() - postDate.getTime();

  // Handle negative timestamps
  if (timeDifferenceInMilliseconds < 0) {
    return "Just now";
  }

  // Convert milliseconds to seconds
  const timeDifferenceInSeconds = Math.floor(
    timeDifferenceInMilliseconds / 1000
  );

  // Define time intervals in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  if (timeDifferenceInSeconds < minute) {
    return `${timeDifferenceInSeconds} second${
      timeDifferenceInSeconds !== 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceInSeconds < hour) {
    const minutes = Math.floor(timeDifferenceInSeconds / minute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < day) {
    const hours = Math.floor(timeDifferenceInSeconds / hour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < week) {
    const days = Math.floor(timeDifferenceInSeconds / day);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else {
    // For longer intervals, return the date
    return postDate.toLocaleDateString();
  }
};
