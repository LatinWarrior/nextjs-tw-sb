import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Heading = ({ children }: LayoutProps) => {
    return <h1 className='font-bold pb-3 text-2xl'>{children}</h1>;
};

export default Heading;
