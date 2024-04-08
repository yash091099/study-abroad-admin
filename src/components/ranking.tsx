import { FunctionComponent } from "react";

const Ranking: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.188rem] gap-[2rem] max-w-full text-left text-[1.375rem] text-midnightblue font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100 mq900:gap-[1rem_2rem]">
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[68.188rem] pl-[0rem] gap-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[34.063rem] mq1350:box-border mq900:gap-[2rem_1rem] mq900:pr-[17rem] mq900:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          Ranking
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.625rem]">
              Logo
            </div>
            <div className="h-[2.75rem] w-[25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
              <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem] box-border max-w-full gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                  <div className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[2.125rem]">
                    Logo
                  </div>
                  <div className="relative text-[0.625rem] leading-[0.938rem] text-slategray-100 whitespace-nowrap">
                    acceptable formats: JPEG, JPG or PNG.
                  </div>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative"
                  loading="lazy"
                  alt=""
                  src="/fileupload.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.125rem]">
              Name
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
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1.125rem]">
        <div className="w-[40.563rem] flex flex-row items-start justify-start max-w-full mq450:gap-[4.375rem_1.063rem] mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem] mq900:flex-wrap">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.688rem]">
              Rank
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
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[68.188rem] pl-[0rem] gap-[1.25rem] text-primary-1 mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[34.063rem] mq1350:box-border mq900:gap-[2rem_1rem] mq900:pr-[17rem] mq900:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-medium font-inherit flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          Add more in Ranking
        </h3>
      </div>
    </div>
  );
};

export default Ranking;
