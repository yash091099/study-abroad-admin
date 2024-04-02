import { FunctionComponent } from "react";
import TypeSecondarySizeNormalS from "./type-secondary-size-normal-s";

const ChangePassword: FunctionComponent = () => {
  return (
    <div className="w-[91.875rem] rounded-2xl bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] h-[62.938rem] flex flex-col items-start justify-start py-[4rem] px-[3.75rem] box-border gap-[2rem] text-left text-[1.5rem] text-gray1-200 font-semi-bold-11">
      <div className="relative font-semibold">Change Password</div>
      <div className="rounded-2xl flex flex-row items-start justify-start text-[1rem]">
        <div className="w-[33.75rem] rounded-2xl bg-white h-[52.688rem] flex flex-col items-start justify-start">
          <div className="w-[30.125rem] rounded-2xl bg-white flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative leading-[1.25rem] font-semibold">
                Old Password
              </div>
              <div className="self-stretch rounded-lg bg-white box-border h-[3.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-text border-[1px] border-solid border-lightgray">
                <div className="flex-1 relative leading-[1.5rem]">
                  ******************
                </div>
              </div>
            </div>
            <div className="w-[30.063rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-lightgray" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative leading-[1.25rem] font-semibold">
                New Password
              </div>
              <div className="self-stretch rounded-lg bg-white box-border h-[3.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-text border-[1px] border-solid border-lightgray">
                <div className="flex-1 relative leading-[1.5rem]">
                  ******************
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative leading-[1.25rem] font-semibold">
                Confirm Password
              </div>
              <div className="self-stretch rounded-lg bg-white box-border h-[3.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-text border-[1px] border-solid border-lightgray">
                <div className="flex-1 relative leading-[1.5rem]">
                  ******************
                </div>
              </div>
            </div>
            <TypeSecondarySizeNormalS
              icon="/icon1.svg"
              text="Update Password"
              icon1="/icon1.svg"
              showLeftIcon={false}
              showRightIcon={false}
              typeSecondarySizeNormalSBackgroundColor="#ff6477"
              typeSecondarySizeNormalSPadding="0rem 1.5rem"
              typeSecondarySizeNormalSBorder="unset"
              typeSecondarySizeNormalSGap="0.75rem"
              typeSecondarySizeNormalSWidth="30.125rem"
              typeSecondarySizeNormalSHeight="2.75rem"
              iconMinHeight="unset"
              iconWidth="1rem"
              iconHeight="1rem"
              textFontFamily="'Noto Sans'"
              textColor="#121212"
              textMinWidth="unset"
              textFontSize="0.875rem"
              iconMinHeight1="unset"
              iconWidth1="1rem"
              iconHeight1="1rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
