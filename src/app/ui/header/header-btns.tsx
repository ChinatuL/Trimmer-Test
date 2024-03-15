import LinkBtn from "@ui/link-btn";
export default function HeaderBtns() {
  return (
      <>
          <LinkBtn text='Login' href='/login' />
          <button className='w-28 py-2 text-purple border border-purple rounded-md hover:opacity-80 transitionEase'>
              Try for free
          </button>
      </>
  );
}