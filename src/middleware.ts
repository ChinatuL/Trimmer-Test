import { NextResponse, NextRequest } from "next/server";
import { baseUrl, fetchLongAndShortLinkFromFirestore } from "./app/lib/utilities/utils";
import { customInitApp } from "./app/lib/firebase/firebase-admin-config";
import { getLongLinkFromFirestore } from "./app/lib/firebase/test";


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
    const shortLink = request.nextUrl.pathname.split("/")[2]
    const links = await fetch(`${baseUrl}/api/links`)
    const linksResult = await links.json();
    const link = linksResult.links.find((link: any) => link.shortLink === shortLink);
    if (link) {
      return NextResponse.redirect(new URL(link.longLink, request.url));
    }
  }
}

