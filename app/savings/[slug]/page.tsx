import Heading from '@/components/Heading';
import { getReview, getSlugs } from '@/lib/reviews';

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

const ReviewPage = async ({ params: { slug } }: ReviewPageProps) => {
    // console.log(`[ReviewPage] props`, props);
    const review = await getReview(slug);
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-2'>{review.date}</p>
            <img
                src={review.image}
                alt='Hollow Knight'
                width='640'
                height='360'
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
