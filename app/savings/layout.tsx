import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const SavingsLayout = ({ children }: LayoutProps) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: 'solid red 1px' }}>[Savings menubar]</div>
            {children}
        </div>
    );
};

export default SavingsLayout;
