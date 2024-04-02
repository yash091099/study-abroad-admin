import { FunctionComponent } from "react";
import Overview from "./overview";
import UniversityStats from "./university-stats";
import UniqueUniversityInfo from "./unique-university-info";
import Ranking from "./ranking";

const AddInstituteForm: FunctionComponent = () => {
  return (
    <section className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] box-border gap-[1.5rem] max-w-full text-left text-[1.375rem] text-midnightblue font-light-button-2-button-default mq1350:pt-[1.313rem] mq1350:pb-[1.313rem] mq1350:box-border mq900:pt-[1.25rem] mq900:pb-[1.25rem] mq900:box-border">
      <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem] max-w-full text-[1.5rem] text-gray1-200 font-noto-sans mq1350:flex-wrap mq900:gap-[2.125rem_1.063rem]">
        <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[16.75rem] max-w-full mq450:text-[1.188rem]">{`Institute Management > Add`}</h2>
        <button className="cursor-pointer py-[0.5rem] px-[1.438rem] bg-[transparent] h-[2rem] rounded-lg box-border flex flex-row items-center justify-start gap-[0.25rem] border-[1px] border-solid border-primary-1 hover:bg-crimson-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-crimson-100">
          <img
            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
            alt=""
            src="/sliders1.svg"
          />
          <div className="w-[2.313rem] relative text-[0.75rem] font-semibold font-noto-sans text-gray1-200 text-center flex items-center justify-center min-w-[2.313rem]">
            Filters
          </div>
        </button>
      </div>
      <Overview />
      <UniversityStats />
      <UniqueUniversityInfo />
      <Ranking />
    </section>
  );
};

export default AddInstituteForm;
