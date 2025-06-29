import styles from './page-container.module.css';
import Head from 'next/head';
import clsx from 'clsx';

type PageContainerProps = {
    children: React.ReactNode;
    title: string;
};

export function PageContainer({ children, title }: PageContainerProps) {
    const documentTitle = `Typescript - ${title}`;

    return (
        <div className="px-4 flex flex-col">
            <Head>
                <title>{documentTitle}</title>
                <meta name="description" content="Error monitoring" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
}
