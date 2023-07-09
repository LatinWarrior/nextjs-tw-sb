import Link from 'next/link';
import { getReviews } from '@/lib/reviews';
import Heading from '@/components/Heading';
import Image from 'next/image';

export default async function SavingsPage() {
    const reviews = await getReviews();

    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flew-row flex-wrap gap-3'>
                {reviews.map((review) => (
                    <li
                        key={review.slug}
                        className='bg-white border rounded w-80 shadow hover:shadow-xl'>
                        <Link href={`/savings/${review.slug}`}>
                            <Image
                                src={review.image}
                                alt={review.title}
                                width={320}
                                height={180}
                                className='rounded-t mb-2'
                            />
                            <h2 className='py-1 text-center font-semibold'>
                                {review.title}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
