'use client';

import Table from './components/table';
import Button from './components/button';
import Input from './components/input';
import { useState } from 'react';

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

export default function Home() {
    const [post, setPost] = useState('');

    const handleConsole = () => {
        console.log('Hi');
    };

    return (
        <div className="max-w-[1200] mx-auto">
            <Table columns={columns} data={data} label="First Table" />
            <Button onClick={handleConsole}>안녕</Button>
            <Input value={post} onChange={(e) => setPost(e.target.value)} />
        </div>
    );
}
