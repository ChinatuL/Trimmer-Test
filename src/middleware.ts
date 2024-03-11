import { NextResponse, NextRequest } from "next/server";
import { baseUrl } from "./app/lib/utilities/utils";

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
        const links = await fetch(`${baseUrl}/api/links`);
        const linksResult = await links.json();
        const link = linksResult.links.find(
            (link: any) => {
              console.log(link)
              return link.shortLink === shortLink
            }
        );
        // console.log(linksResult);
        // console.log(linksResult.links);
        // console.log({ shortLink, link });
        if (link) {
            return NextResponse.redirect(new URL(link.longLink, request.url));
        }
        return NextResponse.redirect(
            new URL("https://google.com", request.url)
        );
    }
}
