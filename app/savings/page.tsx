import Link from 'next/link';

export default function SavingsPage() {
    return (
        <>
            <ul className='flex flex-col gap-3'>
                <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
                    <Link href='/savings/stuff'>
                        <h2 className='py-1 text-center'>Stuff</h2>
                        <img
                            src='/images/hellblade.jpg'
                            alt='Hell Blade'
                            width='640'
                            height='360'
                            className='mb-2 rounded-t'
                        />
                    </Link>
                </li>
                <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
                    <Link href='/savings/things'>Things</Link>
                </li>
            </ul>
        </>
    );
}
