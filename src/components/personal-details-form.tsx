import { FunctionComponent } from "react";
import AddressField from "./address-field";

const PersonalDetailsForm: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start py-[1.5rem] px-[0rem] gap-[4rem] text-left text-[1.375rem] text-grey-1 font-light-button-2-button-default">
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Personal Information
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Full Name
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Karl John
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Gender
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">Female</div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Contact Number
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    +91 9876543210
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Email ID
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    abc.email
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Date of Birth
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    26 March 1998
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Marital Status
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Married
                  </div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressField mailingAddress="Mailing Address" />
      <AddressField mailingAddress="Permanent Address" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
        <div className="self-stretch h-[2.75rem] flex flex-row items-center justify-between">
          <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            Passport Information
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Passport Number
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    X9876543
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Issue Country
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">India</div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Issue Date
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    00-00-2023
                  </div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Expiry Date
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    00-00-2023
                  </div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                State of Birth
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
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Country of Birth
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] gap-[0.75rem]">
                  <div className="flex-1 relative leading-[1.5rem]">India</div>
                  <img className="w-[1.5rem] relative h-[1.5rem]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-[1.25rem] text-white font-poppins">
        <div className="rounded-lg bg-primary-1 box-border h-[3.125rem] flex flex-col items-center justify-center py-[0.75rem] px-[1rem] border-[1px] border-solid border-primary-1">
          <div className="h-[1.25rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <img
              className="w-[1.25rem] relative h-[1.25rem] object-cover hidden"
              alt=""
              src="/icon--main@2x.png"
            />
            <div className="relative leading-[1.375rem]">Next</div>
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src="/chevronsright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
