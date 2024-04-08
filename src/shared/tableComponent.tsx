import React, { useState, useMemo } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

interface Column {
  key: string;
  header: string;
  width: string;
  render?: (item: any) => JSX.Element;
}

interface DataItem {
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  data: DataItem[];
}

const TableComponent: React.FC<TableProps> = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction: direction as "ascending" | "descending" });
  };

  return (
    <div className="overflow-auto">
      <div className="min-w-max">
        <div className="flex">
          {columns.map((column) => (
            <div key={column.key} className={`p-4 ${column.width}`} onClick={() => requestSort(column.key)}>
              {column.header}
              {sortConfig.key === column.key && (
                sortConfig.direction === 'ascending' ? <ChevronUpIcon className="w-4 h-4 inline" /> : <ChevronDownIcon className="w-4 h-4 inline" />
              )}
            </div>
          ))}
        </div>
        {sortedData.map((item, index) => (
          <div key={index} className="flex border-t">
            {columns.map((column) => (
              <div key={column.key} className={`p-4 ${column.width}`}>
                {column.render ? column.render(item) : item[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
