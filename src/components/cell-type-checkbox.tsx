import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateNotChecked from "./state-not-checked";

export type CellTypeCheckboxType = {
  selectCourse?: boolean;
  selectAllCourses?: boolean;

  /** Style props */
  cellTypeCheckboxPadding?: CSSProperties["padding"];
  formCheckboxGap?: CSSProperties["gap"];
  formCheckboxButtonWidth?: CSSProperties["width"];
  formCheckboxButtonHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textFontSize?: CSSProperties["fontSize"];
  textLineHeight?: CSSProperties["lineHeight"];
  cellTypeCheckboxHeight?: CSSProperties["height"];
  cellTypeCheckboxWidth?: CSSProperties["width"];
  cellTypeCheckboxDisplay?: CSSProperties["display"];
  cellTypeCheckboxFlexDirection?: CSSProperties["flexDirection"];
  cellTypeCheckboxMargin?: CSSProperties["margin"];
  cellTypeCheckboxAlignSelf?: CSSProperties["alignSelf"];
  cellTypeCheckboxFlex?: CSSProperties["flex"];
};

const CellTypeCheckbox: FunctionComponent<CellTypeCheckboxType> = ({
  selectCourse,
  cellTypeCheckboxPadding,
  formCheckboxGap,
  formCheckboxButtonWidth,
  formCheckboxButtonHeight,
  textWidth,
  textFontSize,
  textLineHeight,
  cellTypeCheckboxHeight,
  cellTypeCheckboxWidth,
  cellTypeCheckboxDisplay,
  cellTypeCheckboxFlexDirection,
  cellTypeCheckboxMargin,
  cellTypeCheckboxAlignSelf,
  cellTypeCheckboxFlex,
  selectAllCourses,
}) => {
  const cellTypeCheckboxStyle: CSSProperties = useMemo(() => {
    return {
      padding: cellTypeCheckboxPadding,
      height: cellTypeCheckboxHeight,
      width: cellTypeCheckboxWidth,
    };
  }, [cellTypeCheckboxPadding, cellTypeCheckboxHeight, cellTypeCheckboxWidth]);

  const stateNotCheckedStyle: CSSProperties = useMemo(() => {
    return {
      gap: formCheckboxGap,
      display: cellTypeCheckboxDisplay,
      flexDirection: cellTypeCheckboxFlexDirection,
      margin: cellTypeCheckboxMargin,
      alignSelf: cellTypeCheckboxAlignSelf,
      flex: cellTypeCheckboxFlex,
    };
  }, [
    formCheckboxGap,
    cellTypeCheckboxDisplay,
    cellTypeCheckboxFlexDirection,
    cellTypeCheckboxMargin,
    cellTypeCheckboxAlignSelf,
    cellTypeCheckboxFlex,
  ]);

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
      className="flex flex-row items-center justify-start py-5 pr-2.5 pl-5"
      style={cellTypeCheckboxStyle}
    >
      <StateNotChecked
        selectAllCourses={false}
        stateNotCheckedGap="6px"
        formCheckboxButtonWidth="18px"
        formCheckboxButtonHeight="18px"
        textWidth="31px"
        textFontSize="15px"
        textLineHeight="22px"
      />
    </div>
  );
};

export default CellTypeCheckbox;
