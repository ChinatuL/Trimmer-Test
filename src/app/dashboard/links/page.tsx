"use client";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { QRCodeSVG } from "qrcode.react";
import { baseUrl } from "@/app/lib/utilities/utils";
export default function Page() {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    async function getLinks() {
        try {
            const res = await fetch("/api/authLinks");
            if (res.ok) {
                const result = await res.json();
                const links = result.links;
                console.log(links);
                setLinks(links);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLinks();
    }, []);
  
  // check if loading is not done
  if (loading) {
    return <p className="text-4xl">Loading...</p>
  }

  // check if loading is done and there are no links
  if (!loading && links.length === 0) { 
    return <p className="text-3xl">No links yet</p>;
  }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>
                Your Link{links.length > 1 ? "s" : ""}
            </h1>
            <div>
                {links.map((link, index) => {
                    const id = nanoid();
                    const { shortLink, longLink, timestamp } = link;
                    const createdAt = new Date(timestamp).toLocaleString();
                    return (
                        <div key={id} className='flex gap-8 items-center pb-4'>
                            <p>
                                {baseUrl}s/{shortLink}
                            </p>
                            <button>Copy</button>
                            <QRCodeSVG value={shortLink} size={60} />
                            <p>Created at: {createdAt}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
