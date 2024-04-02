import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar1 from "../components/navbar1";
import ApplicationInformation from "../components/application-information";

const ApplicationDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[67.5rem] overflow-hidden text-left text-[0.938rem] font-light-button-2-button-default">
      <div className="absolute top-[0rem] left-[0rem] w-[116.5rem] flex flex-row items-start justify-start gap-[2rem]">
        <SideMenu
          sideMenuWidth="22.5rem"
          sideMenuHeight="61.75rem"
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
        />
        <div className="w-[88.313rem] flex flex-col items-start justify-start py-[1rem] px-[0rem] box-border gap-[1.5rem]">
          <Navbar1
            search="/search.svg"
            bell="/bell.svg"
            navbarPadding="0.75rem 1.5rem"
            navbarGap="0.625rem"
            searchGap="0.625rem"
            searchIconWidth="1.625rem"
            searchIconHeight="1.625rem"
            searchCtrlFontSize="0.938rem"
            searchCtrlLineHeight="1.375rem"
            rightSideGap="2rem"
            lineDivWidth="0.063rem"
            lineDivHeight="3.563rem"
            bellIconWidth="1.5rem"
            bellIconHeight="1.5rem"
            profileWidth="2rem"
            profileHeight="2rem"
            groupDivTop="0rem"
            groupDivLeft="0rem"
            groupDivWidth="2rem"
            groupDivHeight="2rem"
            ellipseDivTop="0rem"
            ellipseDivLeft="0rem"
            ellipseDivWidth="2rem"
            ellipseDivHeight="2rem"
            aTop="0.313rem"
            aLeft="0.688rem"
            aFontSize="0.938rem"
            aLineHeight="1.375rem"
          />
          <ApplicationInformation />
        </div>
      </div>
      <div className="absolute top-[62.75rem] left-[29.25rem] rounded-md w-[80.813rem] h-[3rem] overflow-hidden flex flex-row items-end justify-center py-[0.75rem] px-[0rem] box-border">
        <div className="self-stretch w-[27.563rem] flex flex-row items-center justify-start">
          <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
