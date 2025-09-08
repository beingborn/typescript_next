'use client';

import React, { forwardRef } from 'react';

const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
    return (
        <header
            ref={ref}
            className="bg-blue-400 text-white flex flex-col justify-center px-4 h-[40px] w-full"
            {...props}
        >
            <div>헤더</div>
        </header>
    );
});

export default Header;
