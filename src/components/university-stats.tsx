import { FunctionComponent } from "react";

const UniversityStats: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.188rem] gap-[2rem] max-w-full text-left text-[1.375rem] font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100 mq900:gap-[1rem_2rem]">
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[68.188rem] pl-[0rem] gap-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[34.063rem] mq1350:box-border mq900:gap-[2rem_1rem] mq900:pr-[17rem] mq900:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          University Stats
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              No. of students per staff
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add  description"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              No. of full time Students
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add  description"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="w-[12.125rem] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
              Percentage of International students
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add  description"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[0.688rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Student Satisfaction Rate
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add  description"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStats;
