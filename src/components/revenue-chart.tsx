import { FunctionComponent } from "react";

const RevenueChart: FunctionComponent = () => {
  return (
    <div className="self-stretch relative h-[20.625rem] text-center text-[0.75rem] text-dimgray-200 font-semi-bold-11">
      <div className="absolute top-0 left-0 rounded-3xs bg-white shadow-[0px_2px_6px_rgba(0,_0,_0,_0.06)] box-border w-full h-full border-[1px] border-solid border-gray-200" />
      <div className="absolute top-[35%] left-[3%] right-[3%] w-auto h-[48%]">
        <div className="h-full w-full border-t-[1px] border-solid border-whitesmoke-300 grid grid-cols-1 divide-y divide-whitesmoke-300">
          {/* Horizontal grid lines (created with CSS grid) */}
        </div>
        <img
          className="absolute bottom-0 left-0 w-full h-[85%]"
          alt=""
          src="/bg.svg"
        />
        {/* Labels for months */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-[1%] pb-[1.5rem] text-left font-medium">
          <div>Feb</div>
          <div>Mar</div>
          <div>Apr</div>
          <div>May</div>
          <div>Jun</div>
          <div>Jul</div>
          <div>Aug</div>
          <div>Sep</div>
          <div>Oct</div>
          <div>Nov</div>
          <div>Dec</div>
          <div>Jan</div>
        </div>
      </div>
      <div className="absolute top-[5%] left-[50%] translate-x-[-50%] bg-primary-1 box-border w-[1.388rem] h-[0.875rem] border-[2px] border-solid border-white rounded-full" />
      <div className="absolute top-[55%] left-[50%] translate-x-[-50%] box-border w-[0.063rem] h-[5.5rem] border-r-[1px] border-solid border-gray-200" />
      <div className="absolute top-[5%] left-[3%] right-[3%] flex justify-between items-center">
        <div className="flex flex-col">
          <div className="font-semibold">
            Revenue
          </div>
          <div className="text-[2.5rem] font-medium text-primary-1">
            ₹250,000
          </div>
        </div>
        <div className="rounded bg-whitesmoke-100 flex items-center justify-end py-[0.5rem] px-[1.5rem] gap-[1rem] text-gray1-200">
          <div>October</div>
          <img
            className="w-[1rem] h-[1rem] object-contain"
            alt=""
            src="/caretright1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[40%] left-[45%] bg-white shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] backdrop-filter:blur(3px) w-[10.944rem] h-[3.938rem]">
        <b className="absolute top-[1.625rem] left-[2.619rem]">
          $45,591
        </b>
        <div className="absolute top-[0.5rem] left-[2.619rem] font-medium">
          July 2021
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
