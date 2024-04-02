import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type UserInfoSidebarType = {
  users?: string;
  heroiconsacademicCap?: string;
  materialSymbolsLightworkO?: string;
  fileText?: string;
  fileText1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  iconBackgroundColor?: CSSProperties["backgroundColor"];
};

const UserInfoSidebar: FunctionComponent<UserInfoSidebarType> = ({
  users,
  heroiconsacademicCap,
  materialSymbolsLightworkO,
  fileText,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  iconBackgroundColor,
  fileText1,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const icon3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const icon4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const icon5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const icon6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const icon7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: iconBackgroundColor,
    };
  }, [iconBackgroundColor]);

  return (
    <div
      className="self-stretch w-[13.313rem] flex flex-row items-start justify-start p-[1.5rem] box-border text-left text-[0.938rem] font-light-button-2-button-default"
      style={cardStyle}
    >
      <div className="w-[15rem] flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div
            className="rounded-md bg-primary-1 flex flex-row items-start justify-start p-[0.5rem]"
            style={icon3Style}
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src={users}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Personal Details
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Completed
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div
            className="rounded-md bg-whitesmoke-400 shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-start justify-start p-[0.5rem]"
            style={icon4Style}
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src={heroiconsacademicCap}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Academic Profile
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Completed
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div
            className="rounded-md bg-dimgray-400 flex flex-row items-start justify-start p-[0.5rem]"
            style={icon5Style}
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src={materialSymbolsLightworkO}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Work Backgrounds
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Completed
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div
            className="rounded-md bg-dimgray-400 flex flex-row items-start justify-start p-[0.5rem]"
            style={icon6Style}
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src={fileText}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Tests
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Completed
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div
            className="rounded-md bg-dimgray-400 flex flex-row items-start justify-start p-[0.5rem]"
            style={icon7Style}
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src={fileText1}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Documents
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Completed
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
          <div className="rounded-md bg-whitesmoke-400 shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-start justify-start p-[0.5rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src="/filecheck.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Consent Form
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[1.25rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Incomplete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoSidebar;
