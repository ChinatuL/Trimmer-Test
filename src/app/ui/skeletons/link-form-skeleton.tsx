import { shimmer } from "@utilities/utils";
export default function LinkFormSkeleton() {
    return (
        <div className='flex flex-col justify-center items-center gap-6 w-full border-8 border-skeletonBg rounded-xl text-center py-2 px-4 bg-analyticsBg '>
            <div className='flex flex-col items-center gap-4'>
                <div
                    className={`${shimmer} relative overflow-hidden h-6 w-40 bg-skeletonBg rounded-xl`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-6 w-60 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <div
                    className={`${shimmer} relative overflow-hidden h-6 w-32 bg-skeletonBg rounded-xl`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-6 w-16 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
            {/* <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-4 justify-center items-center w-full'
          >
              <div className='flex gap-4'>
                  <label htmlFor='link' className='sr-only'>
                      Enter your link
                  </label>
                  <input
                      type='text'
                      name='link'
                      id='link'
                      placeholder='Paste your url here'
                      className='bg-transparent border border-purple rounded-xl px-4 py-2 placeholder:text-center placeholder:text-zinc-50 placeholder:opacity-60'
                  />
              </div>
              <button
                  type='submit'
                  className=' flex gap-2 items-center bg-purple text-zinc-50 py-2 px-4 rounded-lg hover:opacity-70 transitionEase'
              >
                  {isPending ? (
                      <ButtonSpinner />
                  ) : (
                      <>
                          <span>Create Link</span>
                          <Image src={arrowIcon} alt='' />
                      </>
                  )}
              </button>
          </form> */}
        </div>
    );
}
