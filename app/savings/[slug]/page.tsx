import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';
import Image from 'next/image';

interface ReviewPageParams {
    slug: string;
}

interface ReviewPageProps {
    params: ReviewPageParams;
}

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
    const review = await getReview(slug);
    return {
        title: review.title,
    };
}

const ReviewPage = async ({ params: { slug } }: ReviewPageProps) => {
    // console.log(`[ReviewPage] props`, props);
    const review = await getReview(slug);
    return (
        <>
            <Heading>{review.title}</Heading>

            <div className='flex flex-row gap-3 items-baseline'>
                <p className='italic pb-2'>{review.date}</p>
                <ShareLinkButton />
            </div>
            <Image
                src={review.image}
                alt='Hollow Knight'
                width={640}
                height={360}
                className='rounded mb-2'
            />
            <article
                dangerouslySetInnerHTML={{ __html: review.body }}
                className='max-w-screen-sm prose prose-slate'
            />
        </>
    );
};

export default ReviewPage;
