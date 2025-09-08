import Head from 'next/head';
import React, { forwardRef } from 'react';

type PageContainerProps = {
    children: React.ReactNode;
    title: string;
    height: string;
};

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
    ({ children, title, height }, ref) => {
        const documentTitle = `Typescript - ${title}`;

        return (
            <div ref={ref} className="px-4 flex flex-col" style={{ height: height }}>
                <Head>
                    <title>{documentTitle}</title>
                    <meta name="description" content="Error monitoring" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
            </div>
        );
    },
);

export default PageContainer;
