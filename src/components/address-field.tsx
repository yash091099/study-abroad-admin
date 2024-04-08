import { FunctionComponent } from "react";

export type AddressFieldType = {
  mailingAddress?: string;
};

const AddressField: FunctionComponent<AddressFieldType> = ({
  mailingAddress,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-left text-[1.375rem] text-grey-1 font-light-button-2-button-default">
      <div className="self-stretch h-[2.75rem] flex flex-row items-center justify-between">
        <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
          {mailingAddress}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Address line 1
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                <div className="flex-1 relative leading-[1.5rem]">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Address line 2
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                <div className="flex-1 relative leading-[1.5rem]">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Country
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                <div className="flex-1 relative leading-[1.5rem]">India</div>
                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              State
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                <div className="flex-1 relative leading-[1.5rem]">
                  Karnataka
                </div>
                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              City
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                <div className="flex-1 relative leading-[1.5rem]">
                  Bengaluru
                </div>
                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Pincode
            </div>
            <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                <div className="flex-1 relative leading-[1.5rem]">560045</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressField;
