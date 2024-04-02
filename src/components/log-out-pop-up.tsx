import { FunctionComponent } from "react";
import TypeSecondarySizeNormalS from "./type-secondary-size-normal-s";

const LogOutPopUp: FunctionComponent = () => {
  return (
    <div className="w-[480px] rounded-2xl bg-white max-w-full flex flex-col items-center justify-start p-8 box-border tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start gap-[40px] text-left text-xl text-grey-grey-01 font-noto-sans mq416:gap-[20px_40px]">
        <img
          className="w-[120px] h-[120px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/done.svg"
        />
        <div className="w-[225px] flex flex-col items-center justify-start gap-[7px]">
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[86px] mq450:text-base mq450:leading-[22px]">
            Log out?
          </h3>
          <div className="self-stretch relative text-sm leading-[116%] font-medium">
            Are you sure you want to log out?
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-center justify-start min-w-[132px]">
            <TypeSecondarySizeNormalS
              icon="/icon.svg"
              text="Cancel"
              icon1="/icon.svg"
              showLeftIcon={false}
              showRightIcon={false}
              typeSecondarySizeNormalSBackgroundColor="unset"
              typeSecondarySizeNormalSPadding="14px 77px"
              typeSecondarySizeNormalSBorder="1px solid #ff6477"
              typeSecondarySizeNormalSGap="12px"
              typeSecondarySizeNormalSWidth="unset"
              typeSecondarySizeNormalSHeight="unset"
              iconMinHeight="16px"
              iconWidth="16px"
              iconHeight="16px"
              textFontFamily="'Noto Sans'"
              textColor="#121212"
              textMinWidth="46px"
              textFontSize="14px"
              iconMinHeight1="16px"
              iconWidth1="16px"
              iconHeight1="16px"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-center justify-start min-w-[132px]">
            <TypeSecondarySizeNormalS
              icon="/icon1.svg"
              text="Log Out"
              icon1="/icon1.svg"
              showLeftIcon={false}
              showRightIcon={false}
              typeSecondarySizeNormalSBackgroundColor="#ff6477"
              typeSecondarySizeNormalSPadding="14px 74px"
              typeSecondarySizeNormalSBorder="unset"
              typeSecondarySizeNormalSGap="12px"
              typeSecondarySizeNormalSWidth="unset"
              typeSecondarySizeNormalSHeight="unset"
              iconMinHeight="16px"
              iconWidth="16px"
              iconHeight="16px"
              textFontFamily="'Noto Sans'"
              textColor="#121212"
              textMinWidth="55px"
              textFontSize="14px"
              iconMinHeight1="16px"
              iconWidth1="16px"
              iconHeight1="16px"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LogOutPopUp;
