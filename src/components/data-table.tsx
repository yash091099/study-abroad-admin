import { FunctionComponent } from "react";
import DataTableRow from "./data-table-row";

const DataTable: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-x-auto flex flex-col items-start justify-start max-w-full text-left text-[0.813rem] font-light-button-2-button-default mq1300:self-stretch mq1300:w-auto mq1300:h-auto mq1650:self-stretch mq1650:w-auto">
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-[1px] border-solid border-gainsboro-100">
        <div className="h-[3rem] w-[3rem] flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.9167] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.25rem]">
          <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2rem]">
            Name
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start">
            <img
              className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/fichevronup.svg"
            />
            <img
              className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]"
              alt=""
              src="/chevrondown2.svg"
            />
          </div>
        </div>
        <div className="flex-[0.9167] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.25rem]">
          <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.125rem]">
            Email
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start">
            <img
              className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/fichevronup1.svg"
            />
            <img
              className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]"
              alt=""
              src="/chevrondown2.svg"
            />
          </div>
        </div>
        <div className="flex-[0.9167] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.25rem]">
          <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.375rem]">
            Address
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start">
            <img
              className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/fichevronup1.svg"
            />
            <img
              className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]"
              alt=""
              src="/chevrondown2.svg"
            />
          </div>
        </div>
        <div className="flex-[0.9167] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.25rem]">
          <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.438rem]">
            Phone
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start">
            <img
              className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/fichevronup1.svg"
            />
            <img
              className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]"
              alt=""
              src="/chevrondown2.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0.625rem] gap-[0.25rem]">
          <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.75rem]">
            Accreditation
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start">
            <img
              className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/fichevronup1.svg"
            />
            <img
              className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]"
              alt=""
              src="/chevrondown2.svg"
            />
          </div>
        </div>
      </div>
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
      <DataTableRow showOnePlus />
    </div>
  );
};

export default DataTable;
