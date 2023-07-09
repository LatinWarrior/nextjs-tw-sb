import Link from 'next/link';

export default function SavingsPage() {
    return (
        <>
            <ul className='flex flex-col gap-3'>
                <li className='bg-white border rounded w-80 shadow hover:shadow-xl'>
                    <Link href='/savings/hollow-knight'>
                        <img
                            src='/images/hollow-knight.jpg'
                            alt='Hollow Knight'
                            width='320'
                            height='180'
                            className='rounded-t mb-2'
                        />
                        <h2 className='py-1 text-center font-semibold'>
                            Hollow Knight
                        </h2>
                    </Link>
                </li>
                <li className='bg-white border rounded w-80 shadow hover:shadow-xl'>
                    <Link href='/savings/stardew-valley'>
                        <img
                            src='/images/stardew-valley.jpg'
                            alt='Stardew Valley'
                            width='320'
                            height='180'
                            className='rounded-t mb-2'
                        />
                        <h2 className='py-1 text-center font-semibold'>
                            Stardew Valley
                        </h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}
