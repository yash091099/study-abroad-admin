import React, { FunctionComponent } from 'react';

interface PaginationProps {
  currentPage: number;
  totalEntries: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="w-full flex flex-row items-start justify-between gap-[1.25rem] max-w-full flex-wrap">
      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch relative text-[0.75rem] font-noto-sans text-darkgray-100 text-right">
          Showing {Math.min((currentPage - 1) * entriesPerPage + 1, totalEntries)} to {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.106rem]">
        <button className="flex-1 text-[0.75rem] font-noto-sans text-darkgray-100 text-right inline-block min-w-[3.063rem]" onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
          Previous
        </button>
        {pages.map((page: number) => (
          <button key={page} className={`w-[1.5rem] flex items-center justify-center py-[0.25rem] px-[0.438rem] box-border relative text-[0.75rem] font-noto-sans ${currentPage === page ? 'text-white bg-blue-500' : 'text-gray1-200'} cursor-pointer`}
            onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
        <button className="w-[1.688rem] flex items-center justify-center pt-[0.25rem] px-[0rem] pb-[0rem] box-border text-[0.75rem] font-noto-sans text-darkgray-100 inline-block" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
