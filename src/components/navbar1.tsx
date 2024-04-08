import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Navbar1Type = {
  search?: string;
  bell?: string;

  /** Style props */
  navbarPadding?: CSSProperties["padding"];
  navbarGap?: CSSProperties["gap"];
  searchGap?: CSSProperties["gap"];
  searchIconWidth?: CSSProperties["width"];
  searchIconHeight?: CSSProperties["height"];
  searchCtrlFontSize?: CSSProperties["fontSize"];
  searchCtrlLineHeight?: CSSProperties["lineHeight"];
  rightSideGap?: CSSProperties["gap"];
  lineDivWidth?: CSSProperties["width"];
  lineDivHeight?: CSSProperties["height"];
  bellIconWidth?: CSSProperties["width"];
  bellIconHeight?: CSSProperties["height"];
  profileWidth?: CSSProperties["width"];
  profileHeight?: CSSProperties["height"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivLeft?: CSSProperties["left"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivHeight?: CSSProperties["height"];
  aTop?: CSSProperties["top"];
  aLeft?: CSSProperties["left"];
  aFontSize?: CSSProperties["fontSize"];
  aLineHeight?: CSSProperties["lineHeight"];
};

const Navbar1: FunctionComponent<Navbar1Type> = ({
  search,
  bell,
  navbarPadding,
  navbarGap,
  searchGap,
  searchIconWidth,
  searchIconHeight,
  searchCtrlFontSize,
  searchCtrlLineHeight,
  rightSideGap,
  lineDivWidth,
  lineDivHeight,
  bellIconWidth,
  bellIconHeight,
  profileWidth,
  profileHeight,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivHeight,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  aTop,
  aLeft,
  aFontSize,
  aLineHeight,
}) => {
  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      padding: navbarPadding,
      gap: navbarGap,
    };
  }, [navbarPadding, navbarGap]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      gap: searchGap,
    };
  }, [searchGap]);

  const searchIconStyle: CSSProperties = useMemo(() => {
    return {
      width: searchIconWidth,
      height: searchIconHeight,
    };
  }, [searchIconWidth, searchIconHeight]);

  const searchCtrlStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: searchCtrlFontSize,
      lineHeight: searchCtrlLineHeight,
    };
  }, [searchCtrlFontSize, searchCtrlLineHeight]);

  const rightSideStyle: CSSProperties = useMemo(() => {
    return {
      gap: rightSideGap,
    };
  }, [rightSideGap]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      width: lineDivWidth,
      height: lineDivHeight,
    };
  }, [lineDivWidth, lineDivHeight]);

  const bellIconStyle: CSSProperties = useMemo(() => {
    return {
      width: bellIconWidth,
      height: bellIconHeight,
    };
  }, [bellIconWidth, bellIconHeight]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      width: profileWidth,
      height: profileHeight,
    };
  }, [profileWidth, profileHeight]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth, groupDivHeight]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const aStyle: CSSProperties = useMemo(() => {
    return {
      top: aTop,
      left: aLeft,
      fontSize: aFontSize,
      lineHeight: aLineHeight,
    };
  }, [aTop, aLeft, aFontSize, aLineHeight]);

  return (
    <div
      className="self-stretch rounded-md bg-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row items-start justify-center py-[0.75rem] px-[1.5rem] gap-[0.625rem] text-left text-[0.938rem] text-white font-light-button-2-button-default"
      style={navbarStyle}
    >
      <div
        className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.625rem]"
        style={searchStyle}
      >
        <img
          className="w-[1.625rem] relative h-[1.625rem]"
          alt=""
          src={search}
          style={searchIconStyle}
        />
        <div
          className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          style={searchCtrlStyle}
        >
          Search (Ctrl+/)
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center gap-[2rem] font-noto-sans"
        style={rightSideStyle}
      >
        <div
          className="w-[0.063rem] relative box-border h-[3.563rem] border-r-[1px] border-solid border-black"
          style={lineDivStyle}
        />
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={bell}
          style={bellIconStyle}
        />
        <div className="w-[2rem] relative h-[2rem]" style={profileStyle}>
          <div
            className="absolute top-[0rem] left-[0rem] w-[2rem] h-[2rem]"
            style={groupDivStyle}
          >
            <div
              className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slategray-200 w-[2rem] h-[2rem]"
              style={ellipseDivStyle}
            />
            <div
              className="absolute top-[0.313rem] left-[0.688rem] leading-[1.375rem]"
              style={aStyle}
            >
              A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
