import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';

const HollowKnightPage = async () => {
    const review = await getReview('hollow-knight');
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

export default HollowKnightPage;
