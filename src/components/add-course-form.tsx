import { FunctionComponent } from "react";

const AddCourseForm: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] text-left text-[1.375rem] text-midnightblue font-light-button-2-button-default">
      <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem] text-[1.5rem] text-gray1-200 font-noto-sans">
        <div className="flex-1 relative font-semibold">{`Course Management > Add`}</div>
        <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.5rem] gap-[0.25rem] text-center text-[0.75rem] border-[1px] border-solid border-primary-1">
          <img
            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
            alt=""
            src="/sliders1.svg"
          />
          <div className="relative font-semibold">Filters</div>
        </div>
      </div>
      <div className="w-[88rem] rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.25rem] gap-[2rem] border-[1px] border-solid border-gainsboro-100">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Overview
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Course Name
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add course name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                University Name
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add University name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Banner Image
              </div>
              <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                    <div className="relative">Banner image</div>
                    <div className="relative text-[0.625rem] text-slategray-100">
                      acceptable formats: JPEG, JPG or PNG.
                    </div>
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Logo
              </div>
              <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                    <div className="relative">University Logo</div>
                    <div className="relative text-[0.625rem] text-slategray-100">
                      acceptable formats: JPEG, JPG or PNG.
                    </div>
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Level
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Chose level</div>
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/chevrondown3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] opacity-[0]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Logo
              </div>
              <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                    <div className="relative">University Logo</div>
                    <div className="relative text-[0.625rem] text-slategray-100">
                      acceptable formats: JPEG, JPG or PNG.
                    </div>
                  </div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Overview
              </div>
              <div className="w-[71.188rem] rounded-md box-border h-[7.125rem] flex flex-row items-start justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add overview</div>
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Modules
              </div>
              <div className="w-[71.188rem] rounded-md box-border h-[7.125rem] flex flex-row items-start justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="relative">Add Modules</div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Requirements
              </div>
              <div className="w-[71.188rem] rounded-md box-border h-[7.125rem] flex flex-row items-start justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem]">
                  <div className="relative">Requirements</div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[88rem] rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.25rem] gap-[2rem] border-[1px] border-solid border-gainsboro-100">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Unique University Info
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Fee
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Fee Range</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Duration
              </div>
              <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start border-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Course Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="w-[12.125rem] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
                Application Deadline
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Application Deadline</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Application Fee
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Application Fee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="w-[12.125rem] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
                Upcoming Intakes
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add Upcoming Intakes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Mode of study
              </div>
              <div className="w-[25rem] rounded-md box-border h-[2.75rem] flex flex-row items-center justify-start text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Select Mode of study</div>
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

export default AddCourseForm;
