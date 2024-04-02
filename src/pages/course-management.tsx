import { FunctionComponent } from "react";
import SideMenu from "../components/side-menu";
import Navbar1 from "../components/navbar1";
import StateNotChecked from "../components/state-not-checked";
import CellTypeCheckbox from "../components/cell-type-checkbox";
import CellTypeAvatarText from "../components/cell-type-avatar-text";
import CellTypeText from "../components/cell-type-text";

const CourseManagement: FunctionComponent = () => {
  return (
    <div className="w-full h-[71.125rem] relative bg-whitesmoke-200 overflow-hidden text-left text-[1.5rem] text-gray1-200 font-noto-sans">
      <div className="absolute top-[-0.125rem] left-[0rem] w-[120rem] h-[71.188rem] flex flex-row items-start justify-start gap-[2rem]">
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
        <div className="w-[95.5rem] flex flex-col items-start justify-start py-[1rem] px-[0rem] box-border gap-[1.5rem]">
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
          <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] lg:self-stretch lg:w-auto lg:gap-[1.5rem] lg:rounded-lg">
            <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem]">
              <div className="flex-1 relative font-semibold">
                Course Management
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.875rem] text-center text-[0.75rem]">
                <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.5rem] border-[1px] border-solid border-primary-1">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/sliders.svg"
                  />
                  <div className="relative font-semibold">Filters</div>
                </div>
                <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.5rem] border-[1px] border-solid border-primary-1">
                  <img
                    className="w-[1.25rem] relative h-[1.25rem]"
                    alt=""
                    src="/squareplus.svg"
                  />
                  <div className="relative font-semibold">Add</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-[0.813rem] font-light-button-2-button-default">
              <div className="self-stretch flex flex-row items-center justify-start border-[1px] border-solid border-gainsboro-100">
                <div className="flex flex-row items-center justify-start py-[0.938rem] pr-[0.625rem] pl-[1.25rem]">
                  <StateNotChecked
                    selectAllCourses={false}
                    stateNotCheckedGap="0.375rem"
                    formCheckboxButtonWidth="1.125rem"
                    formCheckboxButtonHeight="1.125rem"
                    textWidth="1.938rem"
                    textFontSize="0.938rem"
                    textLineHeight="1.375rem"
                  />
                </div>
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Name
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
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Duration
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
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    MAJOR
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
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Last date
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
                <div className="self-stretch w-[16.25rem] flex flex-row items-center justify-start py-[0.5rem] px-[0.625rem] box-border gap-[0.25rem]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Scholarship
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
                <CellTypeCheckbox
                  selectCourse={false}
                  cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
                  formCheckboxGap="0.375rem"
                  formCheckboxButtonWidth="1.125rem"
                  formCheckboxButtonHeight="1.125rem"
                  textWidth="1.938rem"
                  textFontSize="0.938rem"
                  textLineHeight="1.375rem"
                  cellTypeCheckboxHeight="unset"
                  cellTypeCheckboxWidth="unset"
                  cellTypeCheckboxDisplay="flex"
                  cellTypeCheckboxFlexDirection="row"
                  cellTypeCheckboxMargin="unset"
                  cellTypeCheckboxAlignSelf="unset"
                  cellTypeCheckboxFlex="unset"
                  selectAllCourses={false}
                />
                <CellTypeAvatarText
                  studentName="/avatar1@2x.png"
                  onePlus7Pro="Maths 101"
                  onePlus="Institute Name"
                  showOnePlus
                  cellTypeAvatarTextPadding="0.563rem 1.25rem"
                  cellTypeAvatarTextGap="0.625rem"
                  cellTypeAvatarTextWidth="16.25rem"
                  cellTypeAvatarTextHeight="4.938rem"
                  avatarWidth="2rem"
                  avatarHeight="2rem"
                  backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
                  onePlus7ProFontSize="0.938rem"
                  onePlus7ProLineHeight="1.375rem"
                  onePlusFontSize="0.813rem"
                  onePlusLineHeight="1.25rem"
                  onePlusMarginTop="-0.125rem"
                  cellTypeAvatarTextFlex="unset"
                  onePlus7ProMinWidth="unset"
                  onePlusMinWidth="unset"
                  onePlusWidth="unset"
                />
                <CellTypeText
                  email="2 Years"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="Mathematics"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="unset"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="March 15, 2024"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
                <CellTypeText
                  email="NASCOM"
                  cellTypeTextPadding="1.125rem 1.25rem"
                  cellTypeTextWidth="16.25rem"
                  cellTypeTextHeight="4.938rem"
                  tableCellFontSize="0.938rem"
                  tableCellLineHeight="1.375rem"
                  tableCellFlex="1"
                  cellTypeTextFlex="unset"
                  cellTypeTextOpacity="unset"
                  tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
                  tableCellWebkitBackgroundClip="unset"
                  tableCellWebkitTextFillColor="unset"
                  tableCellColor="unset"
                  tableCellFontWeight="unset"
                  tableCellTextDecoration="unset"
                />
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
            <div className="self-stretch flex flex-row items-center justify-start gap-[34.063rem] text-right text-[0.75rem] text-darkgray-100">
              <div className="relative">Showing 1 to 10 of 57 entries</div>
              <div className="w-[16.188rem] relative h-[1.5rem] text-gray1-200">
                <div className="absolute h-full w-[9.27%] top-[0%] right-[64.86%] bottom-[0%] left-[25.87%] text-white">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/group-1777@2x.png"
                  />
                  <div className="absolute top-[0.25rem] left-[0.438rem]">
                    1
                  </div>
                </div>
                <div className="absolute top-[0.25rem] left-[6.813rem]">2</div>
                <div className="absolute top-[0.25rem] left-[8.375rem]">3</div>
                <div className="absolute top-[0.25rem] left-[9.938rem]">4</div>
                <div className="absolute top-[0.25rem] left-[11.5rem]">5</div>
                <div className="absolute top-[0.25rem] left-[13.063rem]">6</div>
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
  );
};

export default CourseManagement;
