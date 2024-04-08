import { FunctionComponent } from "react";

const AdminSideDashboard: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[2rem] text-center text-[1.5rem] text-gray1-200 font-noto-sans">
      <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start p-[2rem] gap-[1.5rem]">
        <div className="relative font-semibold">Admin Dashboard</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.75rem] text-black">
          <div className="flex-1 rounded-6xs bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[1.5rem] px-[1rem] gap-[0.5rem] border-[1px] border-solid border-lightgray">
            <img
              className="w-[3.438rem] relative rounded h-[3.438rem]"
              alt=""
              src="/frame-2285.svg"
            />
            <div className="rounded-lg flex flex-col items-start justify-center">
              <div className="relative font-semibold">20,000</div>
              <div className="flex flex-row items-center justify-start text-[1rem] text-gray1-200">
                <div className="relative font-medium">
                  Total no of user (student)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-6xs bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[1.5rem] px-[1rem] gap-[0.5rem] border-[1px] border-solid border-lightgray">
            <img
              className="w-[3.438rem] relative rounded h-[3.438rem]"
              alt=""
              src="/frame-2287.svg"
            />
            <div className="rounded-lg flex flex-col items-start justify-center">
              <div className="relative font-semibold">5000</div>
              <div className="flex flex-row items-center justify-start text-[1rem] text-gray1-200">
                <div className="relative font-medium">{`Total no of application `}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-6xs bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[1.5rem] px-[1rem] gap-[0.5rem] border-[1px] border-solid border-lightgray">
            <img
              className="w-[3.438rem] relative rounded h-[3.438rem]"
              alt=""
              src="/frame-2288.svg"
            />
            <div className="rounded-lg flex flex-col items-start justify-center">
              <div className="relative font-semibold">25000</div>
              <div className="flex flex-row items-center justify-start text-[1rem] text-gray1-200">
                <div className="relative font-medium">Total no of courses</div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-6xs bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start py-[1.5rem] px-[1rem] gap-[0.5rem] border-[1px] border-solid border-lightgray">
            <img
              className="w-[3.438rem] relative rounded h-[3.438rem]"
              alt=""
              src="/frame-2286.svg"
            />
            <div className="rounded-lg flex flex-col items-start justify-center">
              <div className="relative font-semibold">5000</div>
              <div className="flex flex-row items-center justify-start text-[1rem] text-gray1-200">
                <div className="relative font-medium">
                  Total no of universities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[92.063rem] relative rounded-3xs bg-white shadow-[0px_2px_6px_rgba(0,_0,_0,_0.06)] box-border h-[20.688rem] text-[1rem] text-darkgray-100 border-[1px] border-solid border-gray-200">
        <div className="absolute top-[1.188rem] left-[2.506rem] w-[85.819rem] flex flex-row items-center justify-start gap-[36.688rem] text-left">
          <div className="flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="w-[13.75rem] relative font-semibold inline-block">
              Total number of students
            </div>
            <div className="w-[15rem] relative text-[2.5rem] tracking-[-0.04em] font-medium text-primary-1 inline-block">
              250000
            </div>
          </div>
          <div className="w-[8.188rem] rounded bg-whitesmoke-100 h-[2.313rem] flex flex-row items-center justify-end py-[0.5rem] px-[1.5rem] box-border gap-[1rem] text-[0.875rem] text-gray1-200">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-center">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative font-medium">October</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/caretright3@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[1.188rem] left-[36.025rem] w-[10.944rem] h-[9.5rem] overflow-hidden text-[0.813rem] text-gray1-100">
          <div className="absolute top-[5.563rem] left-[0rem] w-[10.944rem] h-[3.938rem]">
            <div className="relative bg-white shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] [backdrop-filter:blur(3px)] w-[10.944rem] h-[3.938rem]">
              <img
                className="absolute top-[9.5rem] left-[4.444rem] w-[2.05rem] h-[0.688rem]"
                alt=""
              />
              <div className="absolute top-[5.563rem] left-[0rem] rounded-lg bg-white shadow-[0px_44px_44px_-7px_rgba(0,_0,_0,_0.08)] box-border w-[10.944rem] h-[3.563rem] border-[1px] border-solid border-gray-200" />
            </div>
            <b className="absolute top-[1.625rem] left-[2.625rem] leading-[1.375rem] inline-block w-[5.813rem]">
              $45,591
            </b>
            <div className="absolute top-[0.5rem] left-[2.625rem] text-[0.75rem] leading-[1.25rem] font-medium text-dimgray-100 inline-block w-[5.813rem]">
              July 2021
            </div>
          </div>
        </div>
        <div className="absolute top-[1.188rem] left-[2.506rem] w-[87.1rem] h-[16.063rem] overflow-hidden">
          <div className="absolute top-[6.063rem] left-[0rem] w-[87.1rem] h-[10rem]">
            <div className="absolute top-[9.969rem] left-[-0.031rem] box-border w-[87.163rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-300" />
            <div className="absolute top-[7.469rem] left-[-0.031rem] box-border w-[87.163rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-300" />
            <div className="absolute top-[4.969rem] left-[-0.031rem] box-border w-[87.163rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-300" />
            <div className="absolute top-[2.469rem] left-[-0.031rem] box-border w-[87.163rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-300" />
            <div className="absolute top-[-0.031rem] left-[-0.031rem] box-border w-[87.163rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-300" />
          </div>
        </div>
        <div className="absolute top-[1.188rem] left-[2.506rem] w-[87.1rem] h-[18.313rem] overflow-hidden text-[0.75rem] text-dimgray-200">
          <div className="absolute top-[4.188rem] left-[0rem] w-[87.1rem] h-[14.125rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[87.1rem] h-[11.813rem]"
              alt=""
              src="/bg.svg"
            />
            <div className="absolute top-[12.875rem] left-[0rem] leading-[1.25rem] font-medium text-left inline-block w-[2.625rem]">
              Feb
            </div>
            <div className="absolute top-[12.875rem] left-[7.75rem] leading-[1.25rem] font-medium inline-block w-[2.506rem]">
              Mar
            </div>
            <div className="absolute top-[12.875rem] left-[15.388rem] leading-[1.25rem] font-medium inline-block w-[2.394rem]">
              Apr
            </div>
            <div className="absolute top-[12.875rem] left-[22.913rem] leading-[1.25rem] font-medium inline-block w-[2.738rem]">
              May
            </div>
            <div className="absolute top-[12.875rem] left-[30.781rem] leading-[1.25rem] font-medium inline-block w-[2.169rem]">
              Jun
            </div>
            <div className="absolute top-[12.875rem] left-[38.075rem] leading-[1.25rem] font-medium inline-block w-[1.713rem]">
              Jul
            </div>
            <div className="absolute top-[12.875rem] left-[44.919rem] leading-[1.25rem] font-medium inline-block w-[2.625rem]">
              Aug
            </div>
            <div className="absolute top-[12.875rem] left-[52.669rem] leading-[1.25rem] font-medium inline-block w-[2.738rem]">
              Sep
            </div>
            <div className="absolute top-[12.875rem] left-[60.538rem] leading-[1.25rem] font-medium inline-block w-[2.625rem]">
              Oct
            </div>
            <div className="absolute top-[12.875rem] left-[68.288rem] leading-[1.25rem] font-medium inline-block w-[2.625rem]">
              Nov
            </div>
            <div className="absolute top-[12.875rem] left-[76.038rem] leading-[1.25rem] font-medium inline-block w-[2.738rem]">
              Dec
            </div>
            <div className="absolute top-[12.875rem] left-[83.906rem] leading-[1.25rem] font-medium inline-block w-[2.169rem]">
              Jan
            </div>
          </div>
        </div>
        <img
          className="absolute top-[1.188rem] left-[40.925rem] w-[1.138rem] h-[10.563rem] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
        <div className="absolute top-[11.719rem] left-[41.469rem] box-border w-[0.063rem] h-[5.5rem] border-r-[1px] border-solid border-gray-200" />
      </div>
      {/* Recent Students  */}
      <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] text-left">
        <div className="w-[60.188rem] flex flex-row items-center justify-start">
          <div className="flex-1 relative font-semibold">Recent Students</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[0.938rem] font-light-button-2-button-default">
          <div className="self-stretch flex flex-row items-center justify-start text-[0.813rem] border-[1px] border-solid border-gainsboro-100">
            <div className="flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem] text-[0.938rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Name
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Email
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Location
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Phone
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0.625rem] gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Date Joined
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[34.063rem] text-right text-[0.75rem] text-darkgray-100">
          <div className="relative">Showing 1 to 10 of 57 entries</div>
          <div className="w-[16.188rem] relative h-[1.5rem] text-gray1-200">
            <div className="absolute top-[0rem] left-[4.188rem] w-[1.5rem] h-[1.5rem] text-white">
              <div className="absolute h-full w-full top-[0%] right-[-100%] bottom-[0%] left-[100%] rounded-sm bg-primary-1 shadow-[0px_0px_3px_rgba(197,_196,_196,_0.27)] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <div className="absolute top-[0.25rem] left-[0.438rem]">1</div>
            </div>
            <div className="absolute top-[0.25rem] left-[6.813rem]">2</div>
            <div className="absolute top-[0.25rem] left-[8.375rem]">3</div>
            <div className="absolute top-[0.25rem] left-[9.938rem]">4</div>
            <div className="absolute top-[0.25rem] left-[11.5rem]">5</div>
            <div className="absolute top-[0.25rem] left-[13.063rem]">6</div>
            <div className="absolute top-[0.25rem] left-[0rem] text-darkgray-100">
              Previous
            </div>
            <div className="absolute top-[0.25rem] left-[14.5rem] text-darkgray-100">
              Next
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] text-left">
        <div className="w-[60.188rem] flex flex-row items-center justify-start">
          <div className="flex-1 relative font-semibold">Recent Educators</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[0.938rem] font-light-button-2-button-default">
          <div className="self-stretch flex flex-row items-center justify-start text-[0.813rem] border-[1px] border-solid border-gainsboro-100">
            <div className="flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem] text-[0.938rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Name
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Email
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Location
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Phone
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0.625rem] gap-[0.25rem]">
              <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Date Joined
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fichevronup1.svg"
                />
                <img
                  className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                  alt=""
                  src="/chevrondown2.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                  Text
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
              <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Edgar Jones
                </div>
                <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                  Student
                </div>
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Ejones@gmail.com
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Bangalore, Karnatka
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                +91-937373638
              </div>
            </div>
            <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
              <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Dec 12, 2023
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/dotsvertical.svg"
              />
              <img
                className="w-[1.375rem] relative h-[1.375rem]"
                alt=""
                src="/pencil.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[34.063rem] text-right text-[0.75rem] text-darkgray-100">
          <div className="relative">Showing 1 to 10 of 57 entries</div>
          <div className="w-[16.188rem] relative h-[1.5rem] text-gray1-200">
            <div className="absolute top-[0rem] left-[4.188rem] w-[1.5rem] h-[1.5rem] text-white">
              <div className="absolute h-full w-full top-[0%] right-[-100%] bottom-[0%] left-[100%] rounded-sm bg-primary-1 shadow-[0px_0px_3px_rgba(197,_196,_196,_0.27)] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <div className="absolute top-[0.25rem] left-[0.438rem]">1</div>
            </div>
            <div className="absolute top-[0.25rem] left-[6.813rem]">2</div>
            <div className="absolute top-[0.25rem] left-[8.375rem]">3</div>
            <div className="absolute top-[0.25rem] left-[9.938rem]">4</div>
            <div className="absolute top-[0.25rem] left-[11.5rem]">5</div>
            <div className="absolute top-[0.25rem] left-[13.063rem]">6</div>
            <div className="absolute top-[0.25rem] left-[0rem] text-darkgray-100">
              Previous
            </div>
            <div className="absolute top-[0.25rem] left-[14.5rem] text-darkgray-100">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideDashboard;
