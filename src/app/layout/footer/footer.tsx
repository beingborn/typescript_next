'use client';

import React, { forwardRef } from 'react';

const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
    return (
        <footer
            ref={ref}
            className="bg-blue-950 text-white flex flex-col justify-center px-4 h-[40px] w-full"
            {...props}
        >
            <div>Copyright 2025@ deserved</div>
        </footer>
    );
});

export default Footer;
