import { FunctionComponent } from "react";
// import SquarePlusIcon from "../pages/square-plus-icon";
import DataTable from "./data-table";

const InstituteManagementTable: FunctionComponent = () => {
  return (
    <form className="m-0 self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] box-border gap-[1.5rem] max-w-full mq1300:pt-[1.313rem] mq1300:pb-[1.313rem] mq1300:box-border mq900:pt-[1.25rem] mq900:pb-[1.25rem] mq900:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[2.125rem] max-w-full mq900:gap-[1.063rem]">
        <h2 className="m-0 flex-1 relative text-[1.5rem] font-semibold font-noto-sans text-gray1-200 text-left inline-block min-w-[13.188rem] max-w-full mq450:text-[1.188rem]">
          Institute Management
        </h2>
        <div className="flex flex-row items-center justify-start gap-[0.875rem]">
          <button className="cursor-pointer py-[0.5rem] px-[1.188rem] bg-[transparent] h-[2.25rem] rounded-lg box-border flex flex-row items-center justify-start gap-[0.5rem] border-[1px] border-solid border-primary-1 hover:bg-crimson-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-crimson-100">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
              alt=""
              src="/sliders.svg"
            />
            <div className="w-[2.313rem] relative text-[0.75rem] font-semibold font-noto-sans text-gray1-200 text-center flex items-center justify-center min-w-[2.313rem]">
              Filters
            </div>
          </button>
          <button className="cursor-pointer py-[0.5rem] px-[1.188rem] bg-[transparent] h-[2.25rem] w-[5.75rem] rounded-lg box-border flex flex-row items-center justify-start gap-[0.5rem] border-[1px] border-solid border-primary-1 hover:bg-crimson-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-crimson-100">
            {/* <SquarePlusIcon /> */}
            <div className="w-[1.5rem] relative text-[0.75rem] font-semibold font-noto-sans text-gray1-200 text-center flex items-center justify-center min-w-[1.5rem]">
              Add
            </div>
          </button>
        </div>
      </div>
      <DataTable />
      <div className="w-[60.5rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq900:flex-wrap">
        <div className="w-[10.25rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch relative text-[0.75rem] font-noto-sans text-darkgray-100 text-right">
            Showing 1 to 10 of 57 entries
          </div>
        </div>
        <div className="w-[16.188rem] flex flex-row items-start justify-start gap-[1.106rem]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-darkgray-100 text-right inline-block min-w-[3.063rem]">
              Previous
            </div>
          </div>
          <div className="w-[1.5rem] flex flex-row items-start justify-start py-[0.25rem] px-[0.438rem] box-border relative">
            <img
              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain"
              loading="lazy"
              alt=""
              src="/group-1777@2x.png"
            />
            <div className="w-[0.438rem] relative text-[0.75rem] font-noto-sans text-white text-right flex items-center min-w-[0.438rem] z-[1]">
              1
            </div>
          </div>
          <div className="w-[0.438rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-gray1-200 text-right inline-block min-w-[0.438rem]">
              2
            </div>
          </div>
          <div className="w-[0.438rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-gray1-200 text-right inline-block min-w-[0.438rem]">
              3
            </div>
          </div>
          <div className="w-[0.438rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-gray1-200 text-right inline-block min-w-[0.438rem]">
              4
            </div>
          </div>
          <div className="w-[0.438rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-gray1-200 text-right inline-block min-w-[0.438rem]">
              5
            </div>
          </div>
          <div className="w-[0.438rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-gray1-200 text-right inline-block min-w-[0.438rem]">
              6
            </div>
          </div>
          <div className="w-[1.688rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative text-[0.75rem] font-noto-sans text-darkgray-100 text-right inline-block min-w-[1.688rem]">
              Next
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InstituteManagementTable;
