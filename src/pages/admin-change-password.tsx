import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar1 from "../components/navbar1";
import ChangePassword from "../components/change-password";
import Footer from "../components/footer";

const AdminChangePassword: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[75.938rem] overflow-hidden">
      <div className="absolute top-[0rem] left-[0rem] w-[116.5rem] h-[75.938rem] flex flex-row items-start justify-start gap-[2rem]">
        {/* <SideMenu
          sideMenuWidth="22.5rem"
          sideMenuHeight="75.938rem"
          sideMenuPadding="0rem 0rem 0.625rem"
          logoPadding="1.25rem 1rem"
          logoGap="6.75rem"
          iconWidth="10.938rem"
          iconHeight="3.438rem"
          circleDotIconWidth="1.25rem"
          circleDotIconHeight="1.25rem"
          navlinksPadding="0rem 0.875rem"
          navlinksGap="0.25rem"
          listPadding="0.563rem 1rem"
          listGap="0.5rem"
          smartHomeIconWidth="1.375rem"
          smartHomeIconHeight="1.375rem"
          dashboardFontSize="0.938rem"
          dashboardLineHeight="1.375rem"
          chevronRightIconWidth="1.125rem"
          chevronRightIconHeight="1.125rem"
          listPadding1="0.563rem 1rem"
          listGap1="0.5rem"
          listDetailsIconWidth="1.5rem"
          listDetailsIconHeight="1.5rem"
          reportsAndAnalyticsFontSize="0.938rem"
          reportsAndAnalyticsLineHeight="1.375rem"
          chevronRightIconWidth1="1.125rem"
          chevronRightIconHeight1="1.125rem"
          listPadding2="0.563rem 1rem"
          listGap2="0.5rem"
          listDetailsIconWidth1="1.5rem"
          listDetailsIconHeight1="1.5rem"
          instituteManagementFontSize="0.938rem"
          instituteManagementLineHeight="1.375rem"
          chevronRightIconWidth2="1.125rem"
          chevronRightIconHeight2="1.125rem"
          listPadding3="0.563rem 1rem"
          listGap3="0.5rem"
          listDetailsIconWidth2="1.5rem"
          listDetailsIconHeight2="1.5rem"
          courseManagementFontSize="0.938rem"
          courseManagementLineHeight="1.375rem"
          chevronDownIconWidth="1.125rem"
          chevronDownIconHeight="1.125rem"
          listPadding4="0.563rem 1rem"
          listGap4="0.5rem"
          listDetailsIconWidth3="1.5rem"
          listDetailsIconHeight3="1.5rem"
          scholarshipFontSize="0.938rem"
          scholarshipLineHeight="1.375rem"
          chevronRightIconWidth3="1.125rem"
          chevronRightIconHeight3="1.125rem"
          listPadding5="0.563rem 1rem"
          listGap5="0.5rem"
          listDetailsIconWidth4="1.5rem"
          listDetailsIconHeight4="1.5rem"
          studentManagementFontSize="0.938rem"
          studentManagementLineHeight="1.375rem"
          chevronRightIconWidth4="1.125rem"
          chevronRightIconHeight4="1.125rem"
          listPadding6="0.563rem 1rem"
          listGap6="0.5rem"
          listDetailsIconWidth5="1.5rem"
          listDetailsIconHeight5="1.5rem"
          applicationsFontSize="0.938rem"
          applicationsLineHeight="1.375rem"
          chevronDownIconWidth1="1.125rem"
          chevronDownIconHeight1="1.125rem"
          sideMenuMarginTop="unset"
          smartHomeIconMinHeight="unset"
          listDetailsIconMinHeight="unset"
          listDetailsIconMinHeight1="unset"
          listDetailsIconMinHeight2="unset"
          listDetailsIconMinHeight3="unset"
          listDetailsIconMinHeight4="unset"
          listDetailsIconMinHeight5="unset"
          sideMenuAlignSelf="unset"
        /> */}
       
          <ChangePassword />
         
        </div>
      </div>
  );
};

export default AdminChangePassword;
