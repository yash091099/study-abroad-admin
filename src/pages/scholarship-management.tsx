import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar1 from "../components/navbar1";

const ScholarshipManagement: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[71.125rem] overflow-hidden text-left text-[1.5rem] text-gray1-200 font-noto-sans">
      <div className="absolute top-[-0.125rem] left-[0rem] w-[120rem] h-[71rem] flex flex-row items-start justify-start gap-[2rem]">
        <SideMenu
          sideMenuWidth="22.5rem"
          sideMenuHeight="85rem"
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
        <div className="w-[95.5rem] flex flex-col items-start justify-start py-[1rem] px-[0rem] box-border">
          <div className="w-[92rem] flex flex-col items-start justify-start gap-[1.5rem]">
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
            <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem]">
                <div className="flex-1 relative font-semibold">
                  Course Management
                </div>
                <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.5rem] gap-[0.25rem] text-center text-[0.75rem] border-[1px] border-solid border-primary-1">
                  <img
                    className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/sliders1.svg"
                  />
                  <div className="relative font-semibold">Filters</div>
                </div>
              </div>
              <div className="w-[92rem] bg-white flex flex-col items-start justify-start text-[0.938rem] font-light-button-2-button-default">
                <div className="self-stretch flex flex-row items-center justify-start text-[0.813rem] border-[1px] border-solid border-gainsboro-100">
                  <div className="flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem] text-[0.938rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-[21.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                    <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Scholarship Name
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fichevronup.svg"
                      />
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                        alt=""
                        src="/chevrondown2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch w-[15.375rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                    <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Amount
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fichevronup1.svg"
                      />
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                        alt=""
                        src="/chevrondown2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch w-[14.313rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                    <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Deadline
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fichevronup1.svg"
                      />
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                        alt=""
                        src="/chevrondown2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch w-[16.813rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                    <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      University
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fichevronup1.svg"
                      />
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                        alt=""
                        src="/chevrondown2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch w-[21.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                    <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Course
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                        alt=""
                        src="/fichevronup1.svg"
                      />
                      <img
                        className="w-[1.125rem] relative h-[1.125rem] mt-[-0.25rem]"
                        alt=""
                        src="/chevrondown2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
                  <div className="flex flex-row items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                      <div className="w-[1.125rem] rounded box-border h-[1.125rem] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                      <div className="w-[1.938rem] relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[0.563rem] px-[1.25rem] box-border gap-[0.625rem]">
                    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
                      </div>
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.375rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Aauw International Fellowship
                      </div>
                      <div className="w-[5.625rem] relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Institute Name
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.375rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`$ 57.70k `}</div>
                  </div>
                  <div className="w-[14.313rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      July 07, 2024
                    </div>
                  </div>
                  <div className="w-[16.813rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACS University
                    </div>
                  </div>
                  <div className="w-[21.25rem] h-[4.938rem] flex flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border">
                    <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UG + PG (Accelerated) Degree
                    </div>
                  </div>
                  <div className="hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] gap-[1rem]">
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/dotsvertical.svg"
                    />
                    <img
                      className="w-[1.375rem] relative h-[1.375rem]"
                      alt=""
                      src="/pencil.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-right text-[0.75rem] text-darkgray-100">
                <div className="relative">Showing 1 to 10 of 57 entries</div>
                <div className="w-[16.188rem] relative h-[1.5rem] text-gray1-200">
                  <div className="absolute h-full w-[9.27%] top-[0%] right-[64.86%] bottom-[0%] left-[25.87%] text-white">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                      alt=""
                      src="/group-17771@2x.png"
                    />
                    <div className="absolute top-[0.25rem] left-[0.438rem]">
                      1
                    </div>
                  </div>
                  <div className="absolute top-[0.25rem] left-[6.813rem]">
                    2
                  </div>
                  <div className="absolute top-[0.25rem] left-[8.375rem]">
                    3
                  </div>
                  <div className="absolute top-[0.25rem] left-[9.938rem]">
                    4
                  </div>
                  <div className="absolute top-[0.25rem] left-[11.5rem]">5</div>
                  <div className="absolute top-[0.25rem] left-[13.063rem]">
                    6
                  </div>
                  <div className="absolute top-[0.25rem] left-[0rem] text-darkgray-100">
                    Previous
                  </div>
                  <div className="absolute top-[0.25rem] left-[14.5rem] text-darkgray-100">
                    Next
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md h-[3rem] overflow-hidden shrink-0 flex flex-row items-end justify-center py-[0.75rem] px-[0rem] box-border text-[0.938rem] font-light-button-2-button-default">
              <div className="self-stretch w-[27.563rem] flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipManagement;
