export const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000/";

export function makeUrlShort(length: number) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

export function copyLinkToClipboard(url: string) {
    if (typeof window !== undefined) {
        navigator.clipboard.writeText(url);
    }
}


export function formatLink(link: string) {
    return `${baseUrl}s/${link}`;
}

export function saveUserToLocalStorage(user: any) {
    if (typeof window !== undefined) {
        localStorage.setItem("user", JSON.stringify(user));
    }
}

export function getUserFromLocalStorage() {
    if (typeof window !== undefined) {
        return JSON.parse(localStorage.getItem("user") || "{}");
    }
}


export function generateRating(num: number) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}


export async function shareLink(formattedLink: string) {
    try {
        await navigator.share({
            title: formattedLink,
            url: formattedLink,
        });
    } catch (error) {
        console.error("Error sharing:", error);
    }
}

export function getHeadingFromPath(pathname: string) {
    let heading = "Overview";
    if (pathname !== "/dashboard") {
        const pathArray = pathname.split("/");
        heading = pathArray[2].charAt(0).toUpperCase() + pathArray[2].slice(1);
    }
    return heading;
}

export function disableScroll() {
    if (typeof window !== "undefined" && window.document) {
        document.body.style.overflow = "hidden";
    }
}

export function enableScroll() {
    if (typeof window !== "undefined" && window.document) {
        document.body.style.overflow = "auto";
    }
}

export function getMonthName(monthIndex: number) {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return monthNames[monthIndex];
}

export function formatDay(day: number) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return `${day}st`;
    case 2:
    case 22:
      return `${day}nd`;
    case 3:
    case 23:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";