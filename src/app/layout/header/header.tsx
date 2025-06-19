'use client';

import { useState } from 'react';
import Loading from '@/app/components/Loading';

const Header = () => {
    const [isReady, setIsReady] = useState(false);

    return (
        <header>
            {isReady && <Loading size="md" message="로딩중에 있습니다." />}
            <button
                onClick={() => {
                    setIsReady(true);
                    setTimeout(() => {
                        setIsReady(false);
                    }, 3000);
                }}
            >
                로딩중 걸기
            </button>
        </header>
    );
};

export default Header;
