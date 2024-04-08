import { FunctionComponent } from "react";
import PersonalInfo from "./personal-info";

const UserAcademicDetailsForm: FunctionComponent = () => {
  return (
    <div className="w-[67.125rem] flex flex-col items-start justify-start gap-[4rem] text-left text-[1.375rem] text-darkgray-200 font-light-button-2-button-default">
      <PersonalInfo th="10th" />
      <PersonalInfo
        th="Senior Secondary (11th-12th)"
        propWidth="unset"
        propDisplay="inline-block"
      />
      <PersonalInfo
        th="UG (Undergraduate)"
        propWidth="unset"
        propDisplay="inline-block"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[17.313rem] relative leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0">
            PG (Postgraduate)
          </div>
          <div className="w-[7.125rem] h-[3rem]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Institution Name
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Enter your Institution name
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Board
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start border-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                    <div className="flex-1 relative leading-[1.5rem]">
                      Enter Board name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Score (%)
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Enter your Score
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Year of completion
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Enter year of completion
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Specialization
              </div>
              <div className="w-[21.625rem] rounded-md box-border flex flex-row items-center justify-start text-[0.938rem] border-[1px] border-solid border-gainsboro-100">
                <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem]">
                  <div className="flex-1 relative leading-[1.5rem]">
                    Enter Specialization
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-[1.313rem] overflow-hidden" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center text-[1.25rem] text-white font-poppins">
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

export default UserAcademicDetailsForm;
