import { FunctionComponent } from "react";
import Avatar from "./avatar";

const DataTableCell: FunctionComponent = () => {
  return (
    <div className="w-[21.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem] text-left text-[0.938rem] font-light-button-2-button-default">
      <Avatar />
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          University name
        </div>
        <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
          Manchester UK
        </div>
      </div>
    </div>
  );
};

export default DataTableCell;
