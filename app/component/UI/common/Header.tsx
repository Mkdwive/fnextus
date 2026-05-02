"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Search from './Search'
import { usePathname } from 'next/navigation'
const Header = () => {
   const pathname = usePathname();
   
    interface MenuItem {
        id: number,
        name: string,
        path: string,
    }
    const menu: MenuItem[] = [
        {
            id: 1,
            name: "home",
            path: "/"
        },
        {
            id: 2,
            name: "about",
            path: "/about"
        },

    ];
    const websiteName = "Fresh Nexus"
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
    }
    return (
        <header className='bg-linear-to-r from-green-600 to-emerald-500 text-white shadow-md sticky top-0 z-99 py-4 transition-all'>
            <Container className='relative'>
                <nav className={`${!toggle ? "flex items-center" : "flex-col"}`}>
                    <div className='flex items-center flex-1 justify-between'>
                            <Link href="/" className='relative flex items-center gap-lg-6 gap-3'>
                                <Image className='max-w-full h-auto' src="/logo.png" width={40} height={40} alt='logo' />
                                <span>{websiteName}</span>
                            </Link>

                      {pathname==="/" && <Search />}  

                        <div className='navbar-toggler sm:hidden ms-4 flex items-center'>
                            <button className='border-0 text-2xl' onClick={handleToggle}>
                                {
                                    !toggle ? <RxHamburgerMenu /> : <IoClose />
                                }

                            </button>
                        </div>
                    </div>

                    <ul className={`transition-all sm:mt-0 mt-6 ${!toggle ? "items-center gap-6 ms-auto hidden sm:flex " : "flex-col flex gap-4"}`}>
                        {
                            menu.map(({ id, name, path }) => (
                                <li key={id}><Link href={path}>{name}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </Container>
        </header>

    )
}

export default Header