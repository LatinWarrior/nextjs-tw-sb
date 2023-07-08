import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const SavingsLayout = ({ children }: LayoutProps) => {
    return <div>{children}</div>;
};

export default SavingsLayout;
