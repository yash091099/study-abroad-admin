import { FunctionComponent } from "react";

const InfoPopup: FunctionComponent = () => {
  return (
    <div className="w-[580px] rounded-md bg-white shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] max-w-full h-[267px] text-center text-7xl text-white font-semi-bold-11">
      <div className="absolute top-[121px] left-[65px] w-[450px] h-[46px]">
        <div className="absolute top-[10px] left-[calc(50%_-_171px)] leading-[36px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Course Successfully added
        </div>
      </div>
      <div className="absolute top-[204px] left-[calc(50%_-_40px)] rounded-md bg-primary-1 shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] w-[117px] flex flex-row items-center justify-center text-left text-mini">
        <div className="flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative tracking-[0.43px] font-medium">Done</div>
        </div>
      </div>
      <div className="absolute top-[-6px] right-[-6px] rounded-md bg-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row items-start justify-end p-1.5">
        <img className="w-5 relative h-5" alt="" src="/x.svg" />
      </div>
      <img
        className="absolute top-[34px] left-[252px] w-[75px] h-[75px]"
        alt=""
        src="/iconsmessages.svg"
      />
    </div>
  );
};

export default InfoPopup;
