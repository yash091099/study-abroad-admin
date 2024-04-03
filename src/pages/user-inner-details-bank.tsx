import { FunctionComponent } from "react";
import UserInfoSidebar from "../components/user-info-sidebar";
import UserWorkExpForm from "../components/user-work-exp-form";

const UserInnerDetailsBank: FunctionComponent = () => {
  return (

          <div className="self-stretch rounded-2xl bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-start justify-start py-[4rem] px-[2.063rem] gap-[2rem]">
            <div className="relative font-semibold">Edgar Jones</div>
            <div className="self-stretch rounded-md flex flex-row items-start justify-start gap-[1.875rem]">
              <UserInfoSidebar
                users="/users.svg"
                heroiconsacademicCap="/heroiconsacademiccap1.svg"
                materialSymbolsLightworkO="/materialsymbolslightworkoutline1.svg"
                fileText="/filetext.svg"
                propPadding="1.5rem"
                propBackgroundColor="#f1f0f2"
                propBackgroundColor1="#f1f0f2"
                propBackgroundColor2="#ff6477"
                propBackgroundColor3="rgba(75, 70, 92, 0.08)"
                iconBackgroundColor="rgba(75, 70, 92, 0.08)"
                fileText1="/filetext.svg"
              />
              <div className="self-stretch w-[0.063rem] relative box-border border-r-[1px] border-solid border-gainsboro-100" />
              <UserWorkExpForm />
            </div>
          </div>
  );
};

export default UserInnerDetailsBank;
