type Column = {
    id: string;
    label: string;
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

type TableProps = {
    columns: Column[];
    data: Record<string, any>[];
    label: string;
};

const Table = ({ columns, label, data }: TableProps) => {
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
                            <td key={column.id} className="h-10 border border-gray-300 px-2">
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
