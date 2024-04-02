import { FunctionComponent } from "react";
import IELTSTestForm from "./Frame 1000003926";

const UserTestForm: FunctionComponent = () => {
  return (
    <div className="w-[72.063rem] flex flex-col items-start justify-start gap-[1.25rem] text-left text-[1.625rem] text-darkgray-200 font-light-button-2-button-default">
      <IELTSTestForm />
      <IELTSTestForm />
      <div className="self-stretch flex flex-col items-center justify-start text-[1.25rem] text-white font-poppins">
        <div className="flex flex-row items-start justify-center">
          <div className="rounded-lg bg-primary-1 box-border h-[3.125rem] flex flex-col items-center justify-center py-[0.75rem] px-[1rem] border-[1px] border-solid border-primary-1">
            <div className="h-[1.25rem] flex flex-row items-center justify-start gap-[0.5rem]">
              <img
                className="w-[1.25rem] relative h-[1.25rem] object-cover hidden"
                alt=""
                src="/icon--main1@2x.png"
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
    </div>
  );
};

export default UserTestForm;
