import { FunctionComponent } from "react";

const BlogList: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] text-left text-[1.5rem] text-gray1-200 font-noto-sans">
      <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem]">
        <div className="flex-1 relative font-semibold">{`Applied Student’s `}</div>
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
      <div className="w-[90rem] bg-white flex flex-col items-start justify-start text-[0.938rem] text-primary-1 font-light-button-2-button-default">
        <div className="self-stretch flex flex-row items-center justify-start text-[0.813rem] border-[1px] border-solid border-gainsboro-100">
          <div className="flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem] text-[0.938rem]">
            <div className="flex flex-row items-center justify-start gap-[0.375rem]">
              <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
              <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                Text
              </div>
            </div>
          </div>
          <div className="self-stretch w-[13.063rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Date
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
          <div className="self-stretch w-[34.813rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Blog Heading
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
          <div className="self-stretch w-[37.875rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Tags
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
          <div className="w-[13.063rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
            <div className="flex-1 relative leading-[1.375rem]">23-02-2024</div>
          </div>
          <div className="w-[34.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border text-black">
            <div className="relative leading-[1.375rem] font-medium">
              Transforming the landscape of Education with revolutionary
              technology
            </div>
          </div>
          <div className="w-[39.125rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[0rem] box-border text-center text-[0.75rem] text-grey-1 font-poppins">
            <div className="flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.625rem]">
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Study in USA
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  IELTS
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Lorem
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Ipsum
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Collaborate
                </div>
              </div>
              <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div className="relative leading-[116%] font-semibold">
                  Reading
                </div>
              </div>
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
  );
};

export default BlogList;
