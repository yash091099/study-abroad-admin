import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar1 from "../components/navbar1";

const CourseManagement: FunctionComponent = () => {
  return (

          <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] lg:self-stretch lg:w-auto lg:gap-[1.5rem] lg:rounded-lg">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem]">
              <div className="flex-1 relative font-semibold">
                Course Management
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.875rem] text-center text-[0.75rem]">
                <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.5rem] border-[1px] border-solid border-primary-1">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/sliders.svg"
                  />
                  <div className="relative font-semibold">Filters</div>
                </div>
                <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.5rem] border-[1px] border-solid border-primary-1">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem]"
                    alt=""
                    src="/squareplus.svg"
                  />
                  <div className="relative font-semibold">Add</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-[0.938rem] font-light-button-2-button-default">
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
                    Duration
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
                    MAJOR
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
                    Last date
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
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[0.625rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Scholarship
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
              <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Maths 101
                    </div>
                    <div className="relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-0.125rem]">
                      Institute Name
                    </div>
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2 Years
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mathematics
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    March 15, 2024
                  </div>
                </div>
                <div className="w-[16.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                  <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    NASCOM
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
            <div className="self-stretch flex flex-row items-center justify-start gap-[34.063rem] text-right text-[0.75rem] text-darkgray-100">
              <div className="relative">Showing 1 to 10 of 57 entries</div>
              <div className="w-[16.188rem] relative h-[1.5rem] text-gray1-200">
                <div className="absolute h-full w-[9.27%] top-[0%] right-[64.86%] bottom-[0%] left-[25.87%] text-white">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/group-1777@2x.png"
                  />
                  <div className="absolute top-[0.25rem] left-[0.438rem]">
                    1
                  </div>
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
          
  );
};

export default CourseManagement;
