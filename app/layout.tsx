import type { Metadata } from 'next';
import { roboto, exo2 } from '@/app/fonts';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

import './globals.css';

export const metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer',
    },
};

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang='en' className={`${roboto.variable} ${exo2.variable} `}>
            <body className='font-roboto bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
                <header>
                    <NavBar />
                </header>
                <main className='grow py-3'>{children}</main>
                <footer className='border-t py-3 text-center text-xs text-slate-500'>
                    Data and images courtesy of Stuff and Things...
                </footer>
            </body>
        </html>
    );
}
