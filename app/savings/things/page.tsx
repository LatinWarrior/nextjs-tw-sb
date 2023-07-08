import Heading from '@/components/Heading';

const ThingsPage = () => {
    return (
        <>
            <Heading>Things Page</Heading>
            <img
                src='/images/stardew-valley.jpg'
                alt='Stardew Valley'
                width='640'
                height='360'
                className='rounded mb-2'
            />
        </>
    );
};

export default ThingsPage;
