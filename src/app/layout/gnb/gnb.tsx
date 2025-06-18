const data = [
    {
        name: '서브메뉴 1',
        path: '/submenu1',
        list: [
            {
                name: '메뉴 1-1',
                path: '/submenu1/menu1-1',
            },
            {
                name: '메뉴 1-2',
                path: '/submenu1/menu1-2',
            },
        ],
    },
    {
        name: '서브메뉴 3',
        path: '/submenu3',
        list: [
            {
                name: '메뉴 3-1',
                path: '/submenu3/menu3-1',
            },
            {
                name: '메뉴 3-2',
                path: '/submenu2/menu3-2',
                list: [
                    {
                        name: '메뉴 3-2-1',
                        path: '/submenu2/menu2-2/menu3-2-1',
                    },
                    {
                        name: '메뉴 2-2-2',
                        path: '/submenu2/menu3-2/menu3-2-2',
                    },
                    {
                        name: '메뉴 2-2-3',
                        path: '/submenu2/menu2-2/menu2-2-3',
                    },
                ],
            },
        ],
    },
];

const Gnb = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <button type="button" className="px-4 bg-blue-400 text-blue-50">
                            서브 메뉴 토글 버튼
                        </button>
                        <div className="gnb-submenu inner">
                            <ul className="gnb-submenu-list ">
                                {data.map((item) => {
                                    return (
                                        <li key={item.path}>
                                            <a href="#">{item.name}</a>
                                            {item.list && (
                                                <ul>
                                                    {item.list.map((child) => (
                                                        <li
                                                            key={child.path}
                                                            className="gnb__submenu-item"
                                                        >
                                                            <a
                                                                href="#"
                                                                className="gnb__submenu-link"
                                                            >
                                                                {child.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                                {/* <li>
                                    <a href="#">서브메뉴 1depth 링크</a>
                                    <ul>
                                        <li>메뉴 1-1</li>
                                        <li>메뉴 1-2</li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">서브메뉴 1depth 링크2</a>
                                    <ul>
                                        <li>메뉴 2-1</li>
                                        <li>메뉴 2-2</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Gnb;
