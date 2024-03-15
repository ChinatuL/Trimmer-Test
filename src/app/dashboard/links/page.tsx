"use client";
import { useEffect, useState } from "react";
import LinksList from "@dashboard/links/links-list";
export default function Page() {
    const [links, setLinks] = useState([] as any[]);
    const [loading, setLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [linkId, setLinkId] = useState("");
    const [error, setError] = useState("");
    async function getLinks() {
        try {
            const res = await fetch("/api/authLinks");
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                const links = result.links;
                console.log(links);
                setLinks(links);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    

    async function updateLink(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const customName = new FormData(e.currentTarget).get("custom-link");
        const id = linkId;
        try {
            const res = await fetch("/api/updateLink", {
                method: "POST",
                body: JSON.stringify({ id, customName }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setLinkId("");
                getLinks();
                setIsUpdating(false);
            }
        } catch (error) {
            console.error(error);
            const errResponse = await error.json();
            setError(errResponse.error);
        }
    }

    async function deleteLink() {
        const id = linkId;
        try {
            const res = await fetch("/api/deleteLink", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setLinkId("");
                getLinks();
                setIsDeleting(false);
            }
        } catch {}
    }

    useEffect(() => {
        getLinks();
    }, []);

    // check if loading is not done
    if (loading) {
        return <p className='text-4xl'>Loading...</p>;
    }

    // check if loading is done and there are no links
    if (!loading && links.length === 0) {
        return <p className='text-3xl'>No links yet</p>;
    }

    return (
        // <div className='relative'>
        //     <h1 className='text-3xl font-semibold'>
        //         Your Link{links.length > 1 ? "s" : ""}
        //     </h1>
        //     <div>
        //         {links.map((link) => {
        //             const { shortLink, longLink, timestamp, id } = link;
        //             const createdAt = new Date(timestamp).toLocaleString();
        //             return (
        //                 <div key={id} className='flex gap-8 items-center pb-4'>
        //                     <p>
        //                         {baseUrl}as/{shortLink}
        //                     </p>
        //                     <QRCodeSVG value={shortLink} size={60} />
        //                     <p>Created at: {createdAt}</p>
        //                     <button
        //                         onClick={(e) => handleCopy(e, shortLink)}
        //                         className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
        //                     >
        //                         Copy
        //                     </button>
        //                     <button
        //                         onClick={() => {
        //                             openModal(id);
        //                         }}
        //                         className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
        //                     >
        //                         Edit
        //                     </button>
        //                     <button
        //                         onClick={() => openDeleteModal(id)}
        //                         className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
        //                     >
        //                         Delete
        //                     </button>
        //                 </div>
        //             );
        //         })}
        //     </div>
        //     <div>
        //         {isUpdating && (
        //             <div className='absolute top-0 bg-zinc-950 z-20 w-full h-full'>
        //                 <button onClick={() => setIsUpdating(false)}>
        //                     Close
        //                 </button>
        //                 <form onSubmit={updateLink}>
        //                     <div className='flex gap-4'>
        //                         <label htmlFor='domain'>Domain</label>
        //                         <input
        //                             type='text'
        //                             name='domain'
        //                             id='domain'
        //                             defaultValue={`${baseUrl}as/`}
        //                             className='bg-transparent border border-zinc-50 px-4 py-2'
        //                             disabled
        //                         />
        //                     </div>
        //                     <div className='flex gap-4'>
        //                         <label htmlFor='custom-link'>
        //                             Customize Link
        //                         </label>
        //                         <input
        //                             type='text'
        //                             name='custom-link'
        //                             id='custom-link'
        //                             placeholder='Enter a name'
        //                             className='bg-transparent border border-zinc-50 px-4 py-2'
        //                         />
        //                     </div>
        //                     <button
        //                         type='submit'
        //                         className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
        //                     >
        //                         Save
        //                     </button>
        //                 </form>
        //             </div>
        //         )}
        //     </div>
        //     <div>
        //         {isDeleting && (
        //             <div className='absolute top-0 bg-zinc-950 z-20 w-full h-full'>
        //                 <button onClick={() => setIsDeleting(false)}>
        //                     Cancel
        //                 </button>
        //                 <p className='text-4xl'>
        //                     Are you sure you want to delete this link?
        //                 </p>
        //                 <button
        //                     onClick={deleteLink}
        //                     type='submit'
        //                     className='bg-red-700 text-zinc-50 py-2 px-2 w-auto'
        //                 >
        //                     Delete
        //                 </button>
        //             </div>
        //         )}
        //     </div>
        // </div>
        <section className='bg-darkBlue h-full rounded-lg'>
            <LinksList links={links} />
        </section>
    );
}
