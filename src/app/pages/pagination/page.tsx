'use client';

import { useState } from 'react';
import Pagination from 'react-js-pagination';

/**
 * 1. Axios Fetching
 * 2. Data Setting
 * 3. Pass Handle Paging
 */

const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Username' },
    { id: 'email', label: 'email' },
];

const data = [
    { name: 'John', age: 30, email: 'USA@gmail.com' },
    { name: 'Alice', age: 25, email: 'Canada@naver.com' },
    { name: 'Bob', age: 35, email: 'UK@naver.com' },
];

export default function PaginationTest() {
    const [data, setData] = useState([]);
    const itemCount = 5;

    return (
        <div>
            {/* <Table/> */}
            <Pagination
                activePage={1}
                itemsCountPerPage={itemCount}
                totalItemsCount={300}
                pageRangeDisplayed={5}
                onChange={''}
            />
        </div>
    );
}
