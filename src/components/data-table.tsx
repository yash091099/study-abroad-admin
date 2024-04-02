import { FunctionComponent } from "react";

const DataTable: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-x-auto flex flex-col items-start justify-start max-w-full text-left text-[0.938rem] font-light-button-2-button-default mq1300:self-stretch mq1300:w-auto mq1300:h-auto mq1650:self-stretch mq1650:w-auto">
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] text-[0.813rem] border-[1px] border-solid border-gainsboro-100">
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
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
      <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
        <div className="h-[3.625rem] w-[3rem] flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
          <input className="m-0 self-stretch flex-1" type="checkbox" />
        </div>
        <div className="flex-[0.5682] flex flex-row items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
          <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
              <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300 z-[1]" />
            </div>
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
              alt=""
              src="/avatar2@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.188rem]">
              DY Institute
            </div>
            <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[3.875rem] mt-[-0.125rem]">
              Bangalore
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            Ejones@gmail.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Bangalore, Karnatka
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
            +91-937373638
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[1.781rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            NASCOM
          </div>
        </div>
        <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/dotsvertical.svg"
          />
          <img
            className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
            alt=""
            src="/pencil.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
