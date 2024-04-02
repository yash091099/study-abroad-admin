import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StateNotCheckedType = {
  selectAllCourses?: boolean;

  /** Style props */
  stateNotCheckedGap?: CSSProperties["gap"];
  formCheckboxButtonWidth?: CSSProperties["width"];
  formCheckboxButtonHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textFontSize?: CSSProperties["fontSize"];
  textLineHeight?: CSSProperties["lineHeight"];
};

const StateNotChecked: FunctionComponent<StateNotCheckedType> = ({
  selectAllCourses,
  stateNotCheckedGap,
  formCheckboxButtonWidth,
  formCheckboxButtonHeight,
  textWidth,
  textFontSize,
  textLineHeight,
}) => {
  const stateNotCheckedStyle: CSSProperties = useMemo(() => {
    return {
      gap: stateNotCheckedGap,
    };
  }, [stateNotCheckedGap]);

  const formCheckboxButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: formCheckboxButtonWidth,
      height: formCheckboxButtonHeight,
    };
  }, [formCheckboxButtonWidth, formCheckboxButtonHeight]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      width: textWidth,
      fontSize: textFontSize,
      lineHeight: textLineHeight,
    };
  }, [textWidth, textFontSize, textLineHeight]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[6px] text-left text-mini font-light-button-2-button-default"
      style={stateNotCheckedStyle}
    >
      <div
        className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
        style={formCheckboxButtonStyle}
      />
      {selectAllCourses && (
        <div
          className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          style={text2Style}
        >
          Text
        </div>
      )}
    </div>
  );
};

export default StateNotChecked;
