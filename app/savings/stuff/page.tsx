import Heading from '@/components/Heading';

const StuffPage = () => {
    return (
        <>
            <Heading>Stuff Page</Heading>
            <img
                src='/images/hollow-knight.jpg'
                alt='Hollow Knight'
                width='640'
                height='360'
                className='rounded mb-2'
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                ad, a nobis officia impedit nam.
            </p>
        </>
    );
};

export default StuffPage;
