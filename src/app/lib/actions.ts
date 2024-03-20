import { Links } from "./definitions";
export function getTotalLinks(links: Links[]) {
    let totalLinks = 0;
    links.forEach((link) => {
        totalLinks++;
    });
    return totalLinks;
}

export function getTotalClicks(links: Links[]) {
    let totalClicks = 0;
    links.forEach((link) => {
        link.views.forEach((view) => {
            totalClicks++;
        });
    });
    return totalClicks;
}
