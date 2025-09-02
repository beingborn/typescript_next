'use client';

import { useRouter } from 'next/navigation';

type Column = {
    id: string;
    label: string;
    isLink?: boolean;
    href?: string;
};

type HeaderProps = {
    column: Column;
};

export const Header = ({ column }: HeaderProps) => {
    return (
        <th className="h-10 border border-gray-300 border-collapse text-left px-2 bg-sky-100">
            {column.label}
        </th>
    );
};

// Record <Key, Value>
// 키가 Key타입이고 값이 Value 타입인 객체 타입을 생성함
interface TableProps {
    columns: Column[]; // Column 타입의 객체들을 가지는 배열롰써 선언
    data: Record<string, any>[];
    label: string;
}

const Table = ({ columns, label, data }: TableProps) => {
    const router = useRouter();

    return (
        <table className="w-full table-fixed">
            <caption className="sr-only">{label}</caption>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <Table.Header key={column.id} column={column} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td
                                key={column.id}
                                className="h-10 border border-gray-300 px-2 bg-white"
                                onClick={() => {
                                    if (column.isLink) {
                                        router.push(`/${column.href}/${row.id}`);
                                    }
                                }}
                            >
                                {row[column.id]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.Header = Header;

export default Table;
