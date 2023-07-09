import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
    const review = await getFeaturedReview('stardew-valley');

    return (
        <>
            <Heading>Home Page</Heading>
            <p className='pb-3'>Featured Review</p>
            <div className='bg-white border rounded w-80 sm:w-full shadow sm:shadow-none hover:shadow-xl'>
                <Link
                    key={review.slug}
                    href={`/savings/${review.slug}`}
                    className='flex flex-col sm:flex-row'>
                    <Image
                        src={review.image}
                        alt={review.title}
                        width={320}
                        height={180}
                        className='rounded-t sm:rounded-l sm:rounded-r-none'
                    />
                    <h2 className='py-1 text-center font-semibold'>
                        {review.title}
                    </h2>
                </Link>
            </div>
        </>
    );
}
