import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SideMenuType = {
  /** Style props */
  sideMenuWidth?: CSSProperties["width"];
  sideMenuHeight?: CSSProperties["height"];
  sideMenuPadding?: CSSProperties["padding"];
  logoPadding?: CSSProperties["padding"];
  logoGap?: CSSProperties["gap"];
  iconWidth?: CSSProperties["width"];
  iconHeight?: CSSProperties["height"];
  circleDotIconWidth?: CSSProperties["width"];
  circleDotIconHeight?: CSSProperties["height"];
  navlinksPadding?: CSSProperties["padding"];
  navlinksGap?: CSSProperties["gap"];
  listPadding?: CSSProperties["padding"];
  listGap?: CSSProperties["gap"];
  smartHomeIconWidth?: CSSProperties["width"];
  smartHomeIconHeight?: CSSProperties["height"];
  dashboardFontSize?: CSSProperties["fontSize"];
  dashboardLineHeight?: CSSProperties["lineHeight"];
  chevronRightIconWidth?: CSSProperties["width"];
  chevronRightIconHeight?: CSSProperties["height"];
  listPadding1?: CSSProperties["padding"];
  listGap1?: CSSProperties["gap"];
  listDetailsIconWidth?: CSSProperties["width"];
  listDetailsIconHeight?: CSSProperties["height"];
  reportsAndAnalyticsFontSize?: CSSProperties["fontSize"];
  reportsAndAnalyticsLineHeight?: CSSProperties["lineHeight"];
  chevronRightIconWidth1?: CSSProperties["width"];
  chevronRightIconHeight1?: CSSProperties["height"];
  listPadding2?: CSSProperties["padding"];
  listGap2?: CSSProperties["gap"];
  listDetailsIconWidth1?: CSSProperties["width"];
  listDetailsIconHeight1?: CSSProperties["height"];
  instituteManagementFontSize?: CSSProperties["fontSize"];
  instituteManagementLineHeight?: CSSProperties["lineHeight"];
  chevronRightIconWidth2?: CSSProperties["width"];
  chevronRightIconHeight2?: CSSProperties["height"];
  listPadding3?: CSSProperties["padding"];
  listGap3?: CSSProperties["gap"];
  listDetailsIconWidth2?: CSSProperties["width"];
  listDetailsIconHeight2?: CSSProperties["height"];
  courseManagementFontSize?: CSSProperties["fontSize"];
  courseManagementLineHeight?: CSSProperties["lineHeight"];
  chevronDownIconWidth?: CSSProperties["width"];
  chevronDownIconHeight?: CSSProperties["height"];
  listPadding4?: CSSProperties["padding"];
  listGap4?: CSSProperties["gap"];
  listDetailsIconWidth3?: CSSProperties["width"];
  listDetailsIconHeight3?: CSSProperties["height"];
  scholarshipFontSize?: CSSProperties["fontSize"];
  scholarshipLineHeight?: CSSProperties["lineHeight"];
  chevronRightIconWidth3?: CSSProperties["width"];
  chevronRightIconHeight3?: CSSProperties["height"];
  listPadding5?: CSSProperties["padding"];
  listGap5?: CSSProperties["gap"];
  listDetailsIconWidth4?: CSSProperties["width"];
  listDetailsIconHeight4?: CSSProperties["height"];
  studentManagementFontSize?: CSSProperties["fontSize"];
  studentManagementLineHeight?: CSSProperties["lineHeight"];
  chevronRightIconWidth4?: CSSProperties["width"];
  chevronRightIconHeight4?: CSSProperties["height"];
  listPadding6?: CSSProperties["padding"];
  listGap6?: CSSProperties["gap"];
  listDetailsIconWidth5?: CSSProperties["width"];
  listDetailsIconHeight5?: CSSProperties["height"];
  applicationsFontSize?: CSSProperties["fontSize"];
  applicationsLineHeight?: CSSProperties["lineHeight"];
  chevronDownIconWidth1?: CSSProperties["width"];
  chevronDownIconHeight1?: CSSProperties["height"];
  sideMenuMarginTop?: CSSProperties["marginTop"];
  smartHomeIconMinHeight?: CSSProperties["minHeight"];
  listDetailsIconMinHeight?: CSSProperties["minHeight"];
  listDetailsIconMinHeight1?: CSSProperties["minHeight"];
  listDetailsIconMinHeight2?: CSSProperties["minHeight"];
  listDetailsIconMinHeight3?: CSSProperties["minHeight"];
  listDetailsIconMinHeight4?: CSSProperties["minHeight"];
  listDetailsIconMinHeight5?: CSSProperties["minHeight"];
  sideMenuAlignSelf?: CSSProperties["alignSelf"];
};

const SideMenu: FunctionComponent<SideMenuType> = ({
  sideMenuWidth,
  sideMenuHeight,
  sideMenuPadding,
  logoPadding,
  logoGap,
  iconWidth,
  iconHeight,
  circleDotIconWidth,
  circleDotIconHeight,
  navlinksPadding,
  navlinksGap,
  listPadding,
  listGap,
  smartHomeIconWidth,
  smartHomeIconHeight,
  dashboardFontSize,
  dashboardLineHeight,
  chevronRightIconWidth,
  chevronRightIconHeight,
  listPadding1,
  listGap1,
  listDetailsIconWidth,
  listDetailsIconHeight,
  reportsAndAnalyticsFontSize,
  reportsAndAnalyticsLineHeight,
  chevronRightIconWidth1,
  chevronRightIconHeight1,
  listPadding2,
  listGap2,
  listDetailsIconWidth1,
  listDetailsIconHeight1,
  instituteManagementFontSize,
  instituteManagementLineHeight,
  chevronRightIconWidth2,
  chevronRightIconHeight2,
  listPadding3,
  listGap3,
  listDetailsIconWidth2,
  listDetailsIconHeight2,
  courseManagementFontSize,
  courseManagementLineHeight,
  chevronDownIconWidth,
  chevronDownIconHeight,
  listPadding4,
  listGap4,
  listDetailsIconWidth3,
  listDetailsIconHeight3,
  scholarshipFontSize,
  scholarshipLineHeight,
  chevronRightIconWidth3,
  chevronRightIconHeight3,
  listPadding5,
  listGap5,
  listDetailsIconWidth4,
  listDetailsIconHeight4,
  studentManagementFontSize,
  studentManagementLineHeight,
  chevronRightIconWidth4,
  chevronRightIconHeight4,
  listPadding6,
  listGap6,
  listDetailsIconWidth5,
  listDetailsIconHeight5,
  applicationsFontSize,
  applicationsLineHeight,
  chevronDownIconWidth1,
  chevronDownIconHeight1,
  sideMenuMarginTop,
  smartHomeIconMinHeight,
  listDetailsIconMinHeight,
  listDetailsIconMinHeight1,
  listDetailsIconMinHeight2,
  listDetailsIconMinHeight3,
  listDetailsIconMinHeight4,
  listDetailsIconMinHeight5,
  sideMenuAlignSelf,
}) => {
  const sideMenuStyle: CSSProperties = useMemo(() => {
    return {
      width: sideMenuWidth,
      height: sideMenuHeight,
      padding: sideMenuPadding,
      marginTop: sideMenuMarginTop,
      alignSelf: sideMenuAlignSelf,
    };
  }, [
    sideMenuWidth,
    sideMenuHeight,
    sideMenuPadding,
    sideMenuMarginTop,
    sideMenuAlignSelf,
  ]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      padding: logoPadding,
      gap: logoGap,
    };
  }, [logoPadding, logoGap]);

  const icon2Style: CSSProperties = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  const circleDotIconStyle: CSSProperties = useMemo(() => {
    return {
      width: circleDotIconWidth,
      height: circleDotIconHeight,
    };
  }, [circleDotIconWidth, circleDotIconHeight]);

  const navlinksStyle: CSSProperties = useMemo(() => {
    return {
      padding: navlinksPadding,
      gap: navlinksGap,
    };
  }, [navlinksPadding, navlinksGap]);

  const listStyle: CSSProperties = useMemo(() => {
    return {
      padding: listPadding,
      gap: listGap,
    };
  }, [listPadding, listGap]);

  const smartHomeIconStyle: CSSProperties = useMemo(() => {
    return {
      width: smartHomeIconWidth,
      height: smartHomeIconHeight,
      minHeight: smartHomeIconMinHeight,
    };
  }, [smartHomeIconWidth, smartHomeIconHeight, smartHomeIconMinHeight]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: dashboardFontSize,
      lineHeight: dashboardLineHeight,
    };
  }, [dashboardFontSize, dashboardLineHeight]);

  const chevronRightIconStyle: CSSProperties = useMemo(() => {
    return {
      width: chevronRightIconWidth,
      height: chevronRightIconHeight,
    };
  }, [chevronRightIconWidth, chevronRightIconHeight]);

  const list1Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding1,
      gap: listGap1,
    };
  }, [listPadding1, listGap1]);

  const listDetailsIconStyle: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth,
      height: listDetailsIconHeight,
      minHeight: listDetailsIconMinHeight,
    };
  }, [listDetailsIconWidth, listDetailsIconHeight, listDetailsIconMinHeight]);

  const reportsAndAnalyticsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: reportsAndAnalyticsFontSize,
      lineHeight: reportsAndAnalyticsLineHeight,
    };
  }, [reportsAndAnalyticsFontSize, reportsAndAnalyticsLineHeight]);

  const chevronRightIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: chevronRightIconWidth1,
      height: chevronRightIconHeight1,
    };
  }, [chevronRightIconWidth1, chevronRightIconHeight1]);

  const list2Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding2,
      gap: listGap2,
    };
  }, [listPadding2, listGap2]);

  const listDetailsIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth1,
      height: listDetailsIconHeight1,
      minHeight: listDetailsIconMinHeight1,
    };
  }, [
    listDetailsIconWidth1,
    listDetailsIconHeight1,
    listDetailsIconMinHeight1,
  ]);

  const instituteManagementStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: instituteManagementFontSize,
      lineHeight: instituteManagementLineHeight,
    };
  }, [instituteManagementFontSize, instituteManagementLineHeight]);

  const chevronRightIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: chevronRightIconWidth2,
      height: chevronRightIconHeight2,
    };
  }, [chevronRightIconWidth2, chevronRightIconHeight2]);

  const list3Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding3,
      gap: listGap3,
    };
  }, [listPadding3, listGap3]);

  const listDetailsIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth2,
      height: listDetailsIconHeight2,
      minHeight: listDetailsIconMinHeight2,
    };
  }, [
    listDetailsIconWidth2,
    listDetailsIconHeight2,
    listDetailsIconMinHeight2,
  ]);

  const courseManagementStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: courseManagementFontSize,
      lineHeight: courseManagementLineHeight,
    };
  }, [courseManagementFontSize, courseManagementLineHeight]);

  const chevronDownIconStyle: CSSProperties = useMemo(() => {
    return {
      width: chevronDownIconWidth,
      height: chevronDownIconHeight,
    };
  }, [chevronDownIconWidth, chevronDownIconHeight]);

  const list4Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding4,
      gap: listGap4,
    };
  }, [listPadding4, listGap4]);

  const listDetailsIcon3Style: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth3,
      height: listDetailsIconHeight3,
      minHeight: listDetailsIconMinHeight3,
    };
  }, [
    listDetailsIconWidth3,
    listDetailsIconHeight3,
    listDetailsIconMinHeight3,
  ]);

  const scholarshipStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: scholarshipFontSize,
      lineHeight: scholarshipLineHeight,
    };
  }, [scholarshipFontSize, scholarshipLineHeight]);

  const chevronRightIcon3Style: CSSProperties = useMemo(() => {
    return {
      width: chevronRightIconWidth3,
      height: chevronRightIconHeight3,
    };
  }, [chevronRightIconWidth3, chevronRightIconHeight3]);

  const list5Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding5,
      gap: listGap5,
    };
  }, [listPadding5, listGap5]);

  const listDetailsIcon4Style: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth4,
      height: listDetailsIconHeight4,
      minHeight: listDetailsIconMinHeight4,
    };
  }, [
    listDetailsIconWidth4,
    listDetailsIconHeight4,
    listDetailsIconMinHeight4,
  ]);

  const studentManagementStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: studentManagementFontSize,
      lineHeight: studentManagementLineHeight,
    };
  }, [studentManagementFontSize, studentManagementLineHeight]);

  const chevronRightIcon4Style: CSSProperties = useMemo(() => {
    return {
      width: chevronRightIconWidth4,
      height: chevronRightIconHeight4,
    };
  }, [chevronRightIconWidth4, chevronRightIconHeight4]);

  const list6Style: CSSProperties = useMemo(() => {
    return {
      padding: listPadding6,
      gap: listGap6,
    };
  }, [listPadding6, listGap6]);

  const listDetailsIcon5Style: CSSProperties = useMemo(() => {
    return {
      width: listDetailsIconWidth5,
      height: listDetailsIconHeight5,
      minHeight: listDetailsIconMinHeight5,
    };
  }, [
    listDetailsIconWidth5,
    listDetailsIconHeight5,
    listDetailsIconMinHeight5,
  ]);

  const applicationsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: applicationsFontSize,
      lineHeight: applicationsLineHeight,
    };
  }, [applicationsFontSize, applicationsLineHeight]);

  const chevronDownIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: chevronDownIconWidth1,
      height: chevronDownIconHeight1,
    };
  }, [chevronDownIconWidth1, chevronDownIconHeight1]);

  return (
    <div
      className="w-[360px] h-[1360px] bg-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] max-w-full flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border text-left text-mini font-noto-sans"
      style={sideMenuStyle}
    >
      <div
        className="self-stretch flex flex-row items-center justify-center py-5 px-4 gap-[108px]"
        style={logoStyle}
      >
        <img
          className="w-[175px] relative h-[55px] object-cover"
          alt=""
          src="/5-911567@2x.png"
          style={icon2Style}
        />
        <img
          className="w-5 relative h-5"
          alt=""
          src="/circledot.svg"
          style={circleDotIconStyle}
        />
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-[4px]"
        style={navlinksStyle}
      >
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={listStyle}
        >
          <img
            className="w-[22px] relative h-[22px]"
            alt=""
            src="/smarthome.svg"
            style={smartHomeIconStyle}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={dashboardStyle}
          >
            Dashboard
          </div>
          <img
            className="w-[18px] relative h-[18px]"
            alt=""
            src="/chevronright.svg"
            style={chevronRightIconStyle}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list1Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIconStyle}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={reportsAndAnalyticsStyle}
          >
            Reports and Analytics
          </div>
          <img
            className="w-[18px] relative h-[18px]"
            alt=""
            src="/chevronright.svg"
            style={chevronRightIcon1Style}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list2Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIcon1Style}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={instituteManagementStyle}
          >
            Institute Management
          </div>
          <img
            className="w-[18px] relative h-[18px]"
            alt=""
            src="/chevronright.svg"
            style={chevronRightIcon2Style}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list3Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIcon2Style}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={courseManagementStyle}
          >
            Course Management
          </div>
          <img
            className="w-[18px] relative h-[18px] object-contain"
            alt=""
            src="/chevrondown1@2x.png"
            style={chevronDownIconStyle}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list4Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIcon3Style}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={scholarshipStyle}
          >
            Scholarship
          </div>
          <img
            className="w-[18px] relative h-[18px]"
            alt=""
            src="/chevronright.svg"
            style={chevronRightIcon3Style}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list5Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIcon4Style}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={studentManagementStyle}
          >
            Student Management
          </div>
          <img
            className="w-[18px] relative h-[18px]"
            alt=""
            src="/chevronright.svg"
            style={chevronRightIcon4Style}
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px]"
          style={list6Style}
        >
          <img
            className="w-6 relative h-6"
            alt=""
            src="/listdetails.svg"
            style={listDetailsIcon5Style}
          />
          <div
            className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            style={applicationsStyle}
          >
            Applications
          </div>
          <img
            className="w-[18px] relative h-[18px] object-contain"
            alt=""
            src="/chevrondown1@2x.png"
            style={chevronDownIcon1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
