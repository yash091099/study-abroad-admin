import { FunctionComponent } from "react";

const AddBlogForm: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-8 gap-[24px] text-left text-5xl text-gray1-200 font-noto-sans">
      <div className="self-stretch flex flex-row items-center justify-start gap-[34px]">
        <div className="flex-1 relative font-semibold">{`Institute Management > Add`}</div>
        <div className="rounded-lg flex flex-row items-center justify-start py-2 px-6 gap-[4px] text-center text-xs border-[1px] border-solid border-primary-1">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/sliders1.svg"
          />
          <div className="relative font-semibold">Filters</div>
        </div>
      </div>
      <div className="w-[1408px] rounded-3xs box-border flex flex-col items-start justify-start py-[30px] px-5 gap-[24px] text-3xl text-midnightblue font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[277px] relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Overview
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[70px]">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
                <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Blog Heading
                </div>
                <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Add University name</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
                <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Date
                </div>
                <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Select city</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[70px]">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
                <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Banner Image
                </div>
                <div className="w-[400px] rounded-md box-border flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5">
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative">Banner image</div>
                      <div className="relative text-3xs text-slategray-100">
                        acceptable formats: JPEG, JPG or PNG.
                      </div>
                    </div>
                    <img
                      className="w-6 relative h-6"
                      alt=""
                      src="/fileupload.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[12px]">
                <div className="w-[649px] overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0 box-border">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Tags
                  </div>
                  <div className="w-[400px] rounded-md box-border h-11 flex flex-row items-center justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                    <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative">Add tags</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[420px] flex flex-row flex-wrap items-start justify-start py-0 px-5 box-border gap-[10px] text-center text-xs text-grey-1 font-poppins">
                  <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
                    <div className="relative leading-[116%] font-semibold">
                      Study in USA
                    </div>
                    <img className="w-3 relative h-3" alt="" src="/x1.svg" />
                  </div>
                  <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
                    <div className="relative leading-[116%] font-semibold">
                      IELTS
                    </div>
                    <img className="w-3 relative h-3" alt="" src="/x1.svg" />
                  </div>
                  <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
                    <div className="relative leading-[116%] font-semibold">
                      Lorem
                    </div>
                    <img className="w-3 relative h-3" alt="" src="/x1.svg" />
                  </div>
                  <div className="rounded-lg bg-lavenderblush flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
                    <div className="relative leading-[116%] font-semibold">
                      Ipsum
                    </div>
                    <img className="w-3 relative h-3" alt="" src="/x1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Content
              </div>
              <div className="w-[1119px] rounded-md box-border h-[114px] flex flex-row items-start justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">Add overview</div>
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 pr-5 pl-0">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Quote
              </div>
              <div className="w-[1119px] rounded-md box-border h-[114px] flex flex-row items-start justify-start text-sm font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[7px] px-3.5">
                  <div className="relative">Add Requirements</div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogForm;
