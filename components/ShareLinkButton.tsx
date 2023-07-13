'use client';

import { LinkIcon } from '@heroicons/react/20/solid';

import { useState } from 'react';

const ShareLinkButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // console.log(`Clicked`);
        navigator.clipboard.writeText(window.location.href);
        setClicked((prev) => !prev);
        setTimeout(() => setClicked((prev) => !prev), 1500);
    };

    console.log(`[ShareLinkButton] rendering`);

    return (
        <button
            onClick={handleClick}
            className='flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'>
            <LinkIcon className='h-4 w-4' />
            {clicked ? 'Link Copied' : 'Share Link'}
        </button>
    );
};

export default ShareLinkButton;
