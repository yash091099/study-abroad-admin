import { FunctionComponent } from "react";
import UserInfoSidebar from "./user-info-sidebar";
import PersonalDetailsForm from "./personal-details-form";

const UserInfoCard: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-md flex flex-row items-start justify-start gap-[1.875rem] text-left text-[0.938rem] text-grey-1 font-light-button-2-button-default">
      <UserInfoSidebar
        users="/users1.svg"
        heroiconsacademicCap="/heroiconsacademiccap1.svg"
        materialSymbolsLightworkO="/materialsymbolslightworkoutline.svg"
        fileText="/filetext.svg"
        fileText1="/filetext.svg"
      />
      <div className="self-stretch w-[0.063rem] relative box-border border-r-[1px] border-solid border-gainsboro-100" />
      <PersonalDetailsForm />
    </div>
  );
};

export default UserInfoCard;
