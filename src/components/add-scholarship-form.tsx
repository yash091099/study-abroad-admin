import { FunctionComponent } from "react";

const AddScholarshipForm: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[876px] flex flex-col items-start justify-start p-8 box-border gap-[24px] text-left text-5xl text-gray1-200 font-noto-sans">
      <div className="self-stretch flex flex-row items-center justify-start gap-[34px]">
        <div className="flex-1 relative font-semibold">{`Scholarship Management > Add`}</div>
        <div className="rounded-lg flex flex-row items-center justify-start py-2 px-6 gap-[4px] text-center text-xs border-[1px] border-solid border-primary-1">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/sliders1.svg"
          />
          <div className="relative font-semibold">Filters</div>
        </div>
      </div>
      <div className="w-[1408px] rounded-3xs box-border flex flex-col items-start justify-start py-[30px] px-5 gap-[32px] text-3xl text-midnightblue font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[277px] relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Overview
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg">
          <div className="self-stretch flex flex-row items-start justify-start gap-[70px]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Scholarship Name
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Scholarship name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                University Name
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add University name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[70px]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Course Name
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Scholarship name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Deadline
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add University name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[70px]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Level
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Chose level</div>
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/chevrondown3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Amount
              </div>
              <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add University name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScholarshipForm;
