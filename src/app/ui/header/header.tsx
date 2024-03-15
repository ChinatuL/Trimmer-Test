"use client"
import { useState } from "react";
import TrimmerLogo from "@ui/trimmer-logo";
import Navlinks from "./nav-links";
import HeaderBtns from "./header-btns";
import NavOpenBtn from "./nav-open-btn";
import NavCloseBtn from "./nav-close-btn";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function openNav() {
    setIsNavOpen(true)
  }

  function closeNav() {
    setIsNavOpen(false)
  }

    return (
        <header className='flex justify-center items-center w-full h-14 px-8 md:px-16 lg:px-24 bg-darkBlue text-zinc-50 bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <div className='flex justify-between max-w-[1300px] items-center w-full'>
                <TrimmerLogo />
                <nav className='hidden lg:flex lg:justify-between lg:w-[35%]'>
                    <Navlinks />
                </nav>
                <div className='hidden lg:flex lg:gap-8'>
                    <HeaderBtns />
                </div>
                {isNavOpen && (
                    <div className='flex flex-col absolute top-0 right-0 pt-4 px-8 bg-darkBlue z-10 w-[80vw] min-h-[100vh] h-full backdrop-blur-sm'>
                        <NavCloseBtn closeNav={closeNav} />
                        <nav className='flex flex-col gap-4 lg:hidden'>
                            <Navlinks />
                            <HeaderBtns />
                        </nav>
                    </div>
                )}
                <NavOpenBtn openNav={openNav} />
            </div>
        </header>
    );
}
