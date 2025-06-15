import Table from './components/table';

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
    return (
        <div className="max-w-[1200] mx-auto">
            <Table columns={columns} data={data} label="First Table" />
        </div>
    );
}
