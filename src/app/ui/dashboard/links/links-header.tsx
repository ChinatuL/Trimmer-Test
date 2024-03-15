export default function LinksHeader() {
    return (
        <div className='px-4 pt-1'>
            <div className='grid grid-cols-5 place-items-center  bg-[#131033] py-4 px-8 border-b-2 border-b-purple rounded-lg'>
                <div>
                    <p>Shortened Url</p>
                </div>
                <div>
                    <p>QR Code</p>
                </div>
                <div >
                    <p>Date Created</p>
                </div>
                <div >
                    <p>Views</p>
                </div>
                <div >
                    <p>Last Viewed Location</p>
                </div>
            </div>
        </div>
    );
}
