import  { FC } from 'react';


const Table: FC = (data) => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse rounded-lg">
          <thead className="text-white bg-gray-800">
            <tr>
              {columns.map(column => (
                <th key={column.key} className="py-3 px-4 font-semibold uppercase text-sm border border-gray-300">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td key={column.key} className="py-3 px-4 border border-gray-300">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;