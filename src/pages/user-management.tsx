import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar2 from "../components/navbar2";
import InstituteManagementTable from "../components/institute-management-table";

const UserManagement: FunctionComponent = () => {
  return (
    <div className="w-full h-[71.125rem] relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start pt-[0.875rem] px-[0rem] pb-[1.063rem] box-border gap-[2rem] tracking-[normal] mq1300:h-auto mq1650:pl-[1.25rem] mq1650:pr-[1.25rem] mq1650:box-border mq900:gap-[2rem_1rem]">
      <SideMenu
        sideMenuWidth="22.5rem"
        sideMenuHeight="unset"
        sideMenuPadding="0rem 0rem 59.313rem"
        logoPadding="1.25rem 1.781rem"
        logoGap="1.25rem"
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
        sideMenuMarginTop="-1rem"
        smartHomeIconMinHeight="1.375rem"
        listDetailsIconMinHeight="1.5rem"
        listDetailsIconMinHeight1="1.5rem"
        listDetailsIconMinHeight2="1.5rem"
        listDetailsIconMinHeight3="1.5rem"
        listDetailsIconMinHeight4="1.5rem"
        listDetailsIconMinHeight5="1.5rem"
        sideMenuAlignSelf="unset"
      />
      <main className="w-[92rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-[calc(100%_-_392px)] shrink-0 mq1300:max-w-full mq1650:flex">
        <Navbar2 />
        <InstituteManagementTable />
        <footer className="w-[64.5rem] rounded-md overflow-hidden flex flex-row items-start justify-center py-[0.813rem] px-[1.25rem] box-border max-w-full text-left text-[0.938rem] font-light-button-2-button-default">
          <div className="w-[27.563rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-full">{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
        </footer>
      </main>
    </div>
  );
};

export default UserManagement;
