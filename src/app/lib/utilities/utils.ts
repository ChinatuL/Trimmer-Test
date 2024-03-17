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
    return `${baseUrl}as/${link}`;
}

export function formatHomePageLink(link: string) {
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

export function saveLinkClick() {
    let clicks = 0;
    clicks += 1;
    console.log(clicks);
    return clicks;
}

export function generateRating(num: number) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}

export function validateFormFields(
    name?: string,
    email?: string,
    password?: string,
    newPassword?: string
) {
    let error = "";
    if (!name || !email || !password) {
        return { error: "Name, Email and password are required." };
    }
    if (password && password.length < 6) {
        return { error: "Password must be at least 6 characters long." };
    }
    return error;
}

export async function shareLink(formattedLink:string) {
    try {
      await navigator.share({
        title: formattedLink,
        text: "Check out this shortened link",
        url: formattedLink,
      })
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }
