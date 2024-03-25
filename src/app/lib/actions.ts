import { Link } from "./definitions";
export function getTotalLinks(links: Link[]) {
    let totalLinks = 0;
    links.forEach((link) => {
        totalLinks++;
    });
    return totalLinks;
}

export function getTotalClicks(links: Link[]) {
    let totalClicks = 0;
    links.forEach((link) => {
        link.views.forEach((view) => {
            totalClicks++;
        });
    });
    return totalClicks;
}
