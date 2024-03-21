import { NextResponse, NextRequest } from "next/server";
import { baseUrl } from "@utilities/utils";

export async function middleware(request: NextRequest, response: NextResponse) {
    if (request.nextUrl.pathname === "/dashboard") {
        const session = request.cookies.get("session");

        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        const responseAPI = await fetch(`${baseUrl}/api/login`, {
            headers: {
                Cookie: `session=${session?.value}`,
            },
        });

        if (responseAPI.status !== 200) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return NextResponse.next();
    }

    if (request.nextUrl.pathname.startsWith("/s/")) {
        const shortLink = request.nextUrl.pathname.split("/")[2];
        const links = await fetch(`${baseUrl}/api/links`, {
            next: { revalidate: 0 },
        });
        const linksResult = await links.json();
        const link = linksResult.links.find(
            (link: any) => link.shortLink === shortLink
        );
        if (link) {
            return NextResponse.redirect(new URL(link.longLink, request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/as/")) {
        const session = request.cookies.get("session");
        const location = `${request.geo?.city}, ${request.geo?.region}, ${request.geo?.country}`;

        const shortLink = request.nextUrl.pathname.split("/")[2];
        const links = await fetch(`${baseUrl}/api/authLinks`, {
            next: { revalidate: 0 },
            headers: {
                Cookie: `session=${session?.value}`,
            },
        });
        const linksResult = await links.json();
        const link = linksResult.links.find(
            (link: any) => link.shortLink === shortLink
        );
        if (link) {
            const linkId = link.id;
            const update = await fetch(`${baseUrl}/api/updateClicks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: `session=${session?.value}`,
                },
                body: JSON.stringify({ id: linkId, location }),
            });
            const result = await update.json();
            return NextResponse.redirect(new URL(link.longLink, request.url));
        }
        return NextResponse.next();
    }
}
