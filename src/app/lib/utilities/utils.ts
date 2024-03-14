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
