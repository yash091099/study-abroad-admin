import { FunctionComponent } from "react";
import CellTypeCheckbox from "./cell-type-checkbox";
import CellTypeAvatarText from "./cell-type-avatar-text";
import CellTypeText from "./cell-type-text";

export type DataTableRowType = {
  showText?: boolean;
  showText1?: boolean;
  selectCourse?: boolean;
  selectAllCourses?: boolean;
  showOnePlus?: boolean;
};

const DataTableRow: FunctionComponent<DataTableRowType> = ({
  showText,
  showText1,
  selectCourse,
  selectAllCourses,
  showOnePlus,
}) => {
  return (
    <div className="w-[88rem] box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
      <CellTypeCheckbox
        cellTypeCheckboxPadding="1.25rem 0.625rem 1.25rem 1.25rem"
        formCheckboxGap="unset"
        cellTypeCheckboxHeight="3.625rem"
        cellTypeCheckboxWidth="3rem"
        cellTypeCheckboxDisplay="unset"
        cellTypeCheckboxFlexDirection="unset"
        cellTypeCheckboxMargin="0"
        cellTypeCheckboxAlignSelf="stretch"
        cellTypeCheckboxFlex="1"
      />
      <CellTypeAvatarText
        studentName="/avatar2@2x.png"
        onePlus7Pro="DY Institute"
        onePlus="Bangalore"
        showOnePlus
        cellTypeAvatarTextPadding="1.219rem 7.188rem 1.219rem 1.25rem"
        cellTypeAvatarTextGap="0.625rem"
        cellTypeAvatarTextWidth="unset"
        cellTypeAvatarTextHeight="unset"
        avatarWidth="2rem"
        avatarHeight="2rem"
        backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367f0"
        onePlus7ProFontSize="0.938rem"
        onePlus7ProLineHeight="1.375rem"
        onePlusFontSize="0.813rem"
        onePlusLineHeight="1.25rem"
        onePlusMarginTop="-0.125rem"
        cellTypeAvatarTextFlex="0.5682"
        onePlus7ProMinWidth="5.188rem"
        onePlusMinWidth="3.875rem"
        onePlusWidth="unset"
      />
      <CellTypeText
        email="Ejones@gmail.com"
        cellTypeTextPadding="1.781rem 1.25rem"
        cellTypeTextWidth="unset"
        cellTypeTextHeight="unset"
        tableCellFontSize="0.938rem"
        tableCellLineHeight="1.375rem"
        tableCellFlex="1"
        cellTypeTextFlex="1"
        cellTypeTextOpacity="unset"
        tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
        tableCellWebkitBackgroundClip="unset"
        tableCellWebkitTextFillColor="unset"
        tableCellColor="unset"
        tableCellFontWeight="unset"
        tableCellTextDecoration="unset"
      />
      <CellTypeText
        email="Bangalore, Karnatka"
        cellTypeTextPadding="1.781rem 1.25rem"
        cellTypeTextWidth="unset"
        cellTypeTextHeight="unset"
        tableCellFontSize="0.938rem"
        tableCellLineHeight="1.375rem"
        tableCellFlex="unset"
        cellTypeTextFlex="1"
        cellTypeTextOpacity="unset"
        tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
        tableCellWebkitBackgroundClip="unset"
        tableCellWebkitTextFillColor="unset"
        tableCellColor="unset"
        tableCellFontWeight="unset"
        tableCellTextDecoration="unset"
      />
      <CellTypeText
        email="+91-937373638"
        cellTypeTextPadding="1.781rem 1.25rem"
        cellTypeTextWidth="unset"
        cellTypeTextHeight="unset"
        tableCellFontSize="0.938rem"
        tableCellLineHeight="1.375rem"
        tableCellFlex="1"
        cellTypeTextFlex="1"
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
        cellTypeTextPadding="1.781rem 1.25rem"
        cellTypeTextWidth="unset"
        cellTypeTextHeight="unset"
        tableCellFontSize="0.938rem"
        tableCellLineHeight="1.375rem"
        tableCellFlex="1"
        cellTypeTextFlex="1"
        cellTypeTextOpacity="unset"
        tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
        tableCellWebkitBackgroundClip="unset"
        tableCellWebkitTextFillColor="unset"
        tableCellColor="unset"
        tableCellFontWeight="unset"
        tableCellTextDecoration="unset"
      />
      <div className="h-[3.625rem] hidden flex-row items-center justify-start py-[1.125rem] px-[1.25rem] box-border gap-[1rem]">
        <img
          className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
          alt=""
          src="/dotsvertical.svg"
        />
        <img
          className="h-[1.375rem] w-[1.375rem] relative min-h-[1.375rem]"
          alt=""
          src="/pencil.svg"
        />
      </div>
    </div>
  );
};

export default DataTableRow;
