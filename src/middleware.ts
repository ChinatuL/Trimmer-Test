import { NextResponse, NextRequest } from "next/server";
import { baseUrl } from "./app/lib/utilities/utils";


export async function middleware(request: NextRequest, response: NextResponse) {
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

export const config = {
    matcher: ["/dashboard/:path*"],
};
