import Heading from '@/components/Heading';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            <Heading>Home Page</Heading>
            <p className='pb-3'>We know Stuff and Things</p>
            <div className='bg-white border rounded w-80 sm:w-full shadow sm:shadow-none hover:shadow-xl'>
                <Link
                    href='/savings/stardew-valley'
                    className='flex flex-col sm:flex-row'>
                    <img
                        src='/images/stardew-valley.jpg'
                        alt='Stardew Valley'
                        width='320'
                        height='180'
                        className='rounded-t sm:rounded-l sm:rounded-r-none'
                    />
                    <h2 className='py-1 text-center font-semibold sm:px-2'>
                        Things
                    </h2>
                </Link>
            </div>
        </>
    );
}
