import { FunctionComponent } from "react";

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
            <div className="rounded-lg flex flex-row items-center justify-center py-3.5 px-[77px] gap-[12px] border-[1px] border-solid border-primary-1">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                alt=""
                src="/icon.svg"
              />
              <div className="relative text-sm leading-[116%] font-semibold font-noto-sans text-gray1-200 text-left inline-block min-w-[46px]">
                Cancel
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                alt=""
                src="/icon.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-center justify-start min-w-[132px]">
            <div className="rounded-lg bg-primary-1 flex flex-row items-center justify-center py-3.5 px-[74px] gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                alt=""
                src="/icon1.svg"
              />
              <div className="relative text-sm leading-[116%] font-semibold font-noto-sans text-gray1-200 text-left inline-block min-w-[55px]">
                Log Out
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                alt=""
                src="/icon1.svg"
              />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LogOutPopUp;
