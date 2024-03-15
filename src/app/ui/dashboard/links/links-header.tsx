export default function LinksHeader() {
    return (
        <div className='px-4 pt-1'>
            <div className='grid grid-cols-[30%_25%_1fr_1fr_1fr] gap-4 bg-[#131033] py-4 px-8 border-b-2 border-b-purple rounded-lg'>
                <div>
                    <p>Original Url</p>
                </div>
                <div>
                    <p>Shortened Url</p>
                </div>
                <div className='justify-self-center'>
                    <p>QR Code</p>
                </div>
                <div className='justify-self-center'>
                    <p>Date Created</p>
                </div>
                <div className='justify-self-center'>
                    <p>Clicks</p>
                </div>
            </div>
        </div>
    );
}
