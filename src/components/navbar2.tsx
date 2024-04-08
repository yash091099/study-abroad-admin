import { FunctionComponent } from "react";

const Navbar2: FunctionComponent = () => {
  return (
    <section className="self-stretch rounded-md bg-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row flex-wrap items-start justify-start py-[0.75rem] px-[1.5rem] box-border gap-[0.625rem] max-w-full text-left text-[0.938rem] text-white font-light-button-2-button-default">
      <div className="h-[2.563rem] flex flex-col items-start justify-start pt-[0.938rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[1.625rem] h-[1.625rem] relative"
          loading="lazy"
          alt=""
          src="/search.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem] box-border min-w-[51.125rem] max-w-full mq1300:min-w-full">
        <div className="self-stretch relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Search (Ctrl+/)
        </div>
      </div>
      <div className="h-[3.5rem] w-[7.5rem] flex flex-row items-start justify-between gap-[1.25rem] font-noto-sans">
        <div className="self-stretch w-[0.063rem] relative box-border border-r-[1px] border-solid border-black" />
        <div className="h-[2.5rem] w-[1.5rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/bell.svg"
          />
        </div>
        <div className="w-[2rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch h-[2rem] relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slategray-200 w-full h-full" />
            <div className="absolute top-[0.313rem] left-[0.688rem] leading-[1.375rem] inline-block min-w-[0.625rem] z-[1]">
              A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar2;
