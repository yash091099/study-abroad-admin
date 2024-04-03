import { FunctionComponent } from "react";
import SideMenu from "./side-menu";
import Navbar1 from "./navbar1";
import AddBlogForm from "./add-blog-form";

const AddBlog: FunctionComponent = () => {
  return (
    <div className="w-[1920px] bg-whitesmoke-200 max-w-full h-[1037px] overflow-hidden text-left text-mini font-light-button-2-button-default">
      <div className="absolute top-[-2px] left-[0px] flex flex-row items-start justify-start gap-[32px]">
        {/* <SideMenu
          sideMenuWidth="360px"
          sideMenuHeight="unset"
          sideMenuPadding="0px 0px 10px"
          logoPadding="20px 16px"
          logoGap="108px"
          iconWidth="175px"
          iconHeight="55px"
          circleDotIconWidth="20px"
          circleDotIconHeight="20px"
          navlinksPadding="0px 14px"
          navlinksGap="4px"
          listPadding="9px 16px"
          listGap="8px"
          smartHomeIconWidth="22px"
          smartHomeIconHeight="22px"
          dashboardFontSize="15px"
          dashboardLineHeight="22px"
          chevronRightIconWidth="18px"
          chevronRightIconHeight="18px"
          listPadding1="9px 16px"
          listGap1="8px"
          listDetailsIconWidth="24px"
          listDetailsIconHeight="24px"
          reportsAndAnalyticsFontSize="15px"
          reportsAndAnalyticsLineHeight="22px"
          chevronRightIconWidth1="18px"
          chevronRightIconHeight1="18px"
          listPadding2="9px 16px"
          listGap2="8px"
          listDetailsIconWidth1="24px"
          listDetailsIconHeight1="24px"
          instituteManagementFontSize="15px"
          instituteManagementLineHeight="22px"
          chevronRightIconWidth2="18px"
          chevronRightIconHeight2="18px"
          listPadding3="9px 16px"
          listGap3="8px"
          listDetailsIconWidth2="24px"
          listDetailsIconHeight2="24px"
          courseManagementFontSize="15px"
          courseManagementLineHeight="22px"
          chevronDownIconWidth="18px"
          chevronDownIconHeight="18px"
          listPadding4="9px 16px"
          listGap4="8px"
          listDetailsIconWidth3="24px"
          listDetailsIconHeight3="24px"
          scholarshipFontSize="15px"
          scholarshipLineHeight="22px"
          chevronRightIconWidth3="18px"
          chevronRightIconHeight3="18px"
          listPadding5="9px 16px"
          listGap5="8px"
          listDetailsIconWidth4="24px"
          listDetailsIconHeight4="24px"
          studentManagementFontSize="15px"
          studentManagementLineHeight="22px"
          chevronRightIconWidth4="18px"
          chevronRightIconHeight4="18px"
          listPadding6="9px 16px"
          listGap6="8px"
          listDetailsIconWidth5="24px"
          listDetailsIconHeight5="24px"
          applicationsFontSize="15px"
          applicationsLineHeight="22px"
          chevronDownIconWidth1="18px"
          chevronDownIconHeight1="18px"
          sideMenuMarginTop="unset"
          smartHomeIconMinHeight="unset"
          listDetailsIconMinHeight="unset"
          listDetailsIconMinHeight1="unset"
          listDetailsIconMinHeight2="unset"
          listDetailsIconMinHeight3="unset"
          listDetailsIconMinHeight4="unset"
          listDetailsIconMinHeight5="unset"
          sideMenuAlignSelf="stretch"
        /> */}
        <div className="w-[1472px] flex flex-col items-start justify-start py-4 px-0 box-border gap-[24px]">
          <Navbar1
            search="/search.svg"
            bell="/bell.svg"
            navbarPadding="12px 24px"
            navbarGap="10px"
            searchGap="10px"
            searchIconWidth="26px"
            searchIconHeight="26px"
            searchCtrlFontSize="15px"
            searchCtrlLineHeight="22px"
            rightSideGap="32px"
            lineDivWidth="1px"
            lineDivHeight="57px"
            bellIconWidth="24px"
            bellIconHeight="24px"
            profileWidth="32px"
            profileHeight="32px"
            groupDivTop="0px"
            groupDivLeft="0px"
            groupDivWidth="32px"
            groupDivHeight="32px"
            ellipseDivTop="0px"
            ellipseDivLeft="0px"
            ellipseDivWidth="32px"
            ellipseDivHeight="32px"
            aTop="5px"
            aLeft="11px"
            aFontSize="15px"
            aLineHeight="22px"
          />
          <AddBlogForm />
          <div className="w-[1472px] rounded-md h-12 overflow-hidden shrink-0 flex flex-row items-end justify-center py-3 px-0 box-border">
            <div className="self-stretch w-[441px] flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
