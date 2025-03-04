import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getdate = (ipdate: string | undefined) => {
    if (!ipdate) {
        return "NA";
    }
    const date = new Date(ipdate);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = `${yyyy}-${mm}-${dd}, ${hh}:${min}:${ss}`;
    return formattedDate;
};
