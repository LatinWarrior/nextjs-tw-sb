import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <ul className='flex flex-row gap-2'>
            <li>
                <Link
                    href='/'
                    className='text-orange-800 font-bold hover:underline'>
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href='/about'
                    prefetch={false}
                    className='text-orange-800 hover:underline'>
                    About
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
