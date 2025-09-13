import Head from 'next/head';

const PageContainer = ({ children, title }) => {
    const documentTitle = `Typescript - ${title}`;

    return (
        <div className="h-full p-4 flex flex-col">
            <Head>
                <title>{documentTitle}</title>
                <meta name="description" content="Error monitoring" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
};

export default PageContainer;
