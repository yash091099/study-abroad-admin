import React, { FunctionComponent, MouseEvent, useState } from "react";
import DataTable from "./data-table";
import Pagination from "./pagination";
import AddInstituteForm from "./add-institute-form";

const InstituteManagementTable: FunctionComponent = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalEntries = 57;
  const entriesPerPage = 10;

  const toggleFormVisibility = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setFormVisible(!isFormVisible);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <form className="m-0 self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] box-border gap-[1.5rem] max-w-full">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[2.125rem]">
        <h2 className="m-0 flex-1 relative text-[1.5rem] font-semibold text-gray1-200 inline-block min-w-[13.188rem]">
          {isFormVisible ? `Institute Management > Add` : `Institute Management`}
        </h2>
        <div className="flex flex-row items-center justify-start gap-[0.875rem]">
          <button className="cursor-pointer py-[0.5rem] px-[1.188rem] bg-[transparent] h-[2.25rem] rounded-lg flex flex-row items-center justify-start gap-[0.5rem] border-[1px] border-solid border-primary-1 hover:bg-crimson-200">
            <img className="h-[1.25rem] w-[1.25rem]" alt="Filters" src="/sliders.svg" />
            <span className="w-[2.313rem] text-[0.75rem] font-semibold text-gray1-200 flex items-center justify-center">
              Filters
            </span>
          </button>
          <button onClick={toggleFormVisibility} className="cursor-pointer py-[0.5rem] px-[1.188rem] bg-[transparent] h-[2.25rem] w-[5.75rem] rounded-lg flex flex-row items-center justify-start gap-[0.5rem] border-[1px] border-solid border-primary-1 hover:bg-crimson-200">
            <span className="w-[1.5rem] text-[0.75rem] font-semibold text-gray1-200 flex items-center justify-center">
              {isFormVisible ? "Back" : "Add"}
            </span>
          </button>
        </div>
      </div>
      {isFormVisible ? (
        <AddInstituteForm />
      ) : (
        <>
          <DataTable />
          <Pagination
            currentPage={currentPage}
            totalEntries={totalEntries}
            entriesPerPage={entriesPerPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </form>
  );
};

export default InstituteManagementTable;
