import { FunctionComponent } from "react";

const AdminProfileOptions: FunctionComponent = () => {
  return (
    <div className="w-[300px] rounded-2xl bg-white flex flex-col items-center justify-start p-8 box-border tracking-[normal]">
      <section className="self-stretch h-[100px] flex flex-col items-center justify-start gap-[16px] text-left text-mini font-noto-sans">
        <div className="self-stretch flex-1 rounded-md flex flex-row items-center justify-start py-[9px] px-0 gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/lock.svg"
          />
          <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Change Password
          </div>
          <img
            className="h-[18px] w-[18px] relative object-contain"
            loading="lazy"
            alt=""
            src="/chevrondown@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 rounded-md flex flex-row items-center justify-start py-[9px] px-0 gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/signout.svg"
          />
          <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Log Out
          </div>
          <img
            className="h-[18px] w-[18px] relative object-contain"
            loading="lazy"
            alt=""
            src="/chevrondown@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default AdminProfileOptions;
