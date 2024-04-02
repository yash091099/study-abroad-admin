import { FunctionComponent } from "react";
import StateNotChecked from "./state-not-checked";
import CellTypeCheckbox from "./cell-type-checkbox";
import CellTypeText from "./cell-type-text";
import DataTableCell from "./data-table-cell";
import CellTypeAvatarText from "./cell-type-avatar-text";

const AppliedStudentList: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1),_0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-col items-start justify-start p-[2rem] gap-[1.5rem] text-left text-[1.5rem] text-gray1-200 font-noto-sans">
      <div className="self-stretch flex flex-row items-center justify-start gap-[2.125rem]">
        <div className="flex-1 relative font-semibold">{`Applied Student’s `}</div>
        <div className="rounded-lg flex flex-row items-center justify-start py-[0.5rem] px-[1.5rem] gap-[0.25rem] text-center text-[0.75rem] border-[1px] border-solid border-primary-1">
          <img
            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
            alt=""
            src="/sliders1.svg"
          />
          <div className="relative font-semibold">Filters</div>
        </div>
      </div>
      <div className="w-[141.188rem] bg-white flex flex-col items-start justify-start text-[0.813rem] font-light-button-2-button-default">
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
          <div className="self-stretch w-[16.688rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Application number
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
          <div className="self-stretch w-[21.375rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`University Name `}</div>
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
          <div className="self-stretch w-[27.125rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Course Name `}</div>
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
          <div className="self-stretch w-[19.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Status
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
          <div className="self-stretch w-[13.75rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
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
          <div className="self-stretch w-[14.875rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Email
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
          <div className="self-stretch w-[15.688rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Phone
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
          <div className="self-stretch w-[9.188rem] flex flex-row items-center justify-start py-[0.5rem] px-[1.25rem] box-border gap-[0.25rem]">
            <div className="flex-1 relative tracking-[1px] uppercase font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Profile
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
        <div className="self-stretch flex flex-row items-center justify-start text-[0.938rem] border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
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
          <CellTypeText
            email="98765/23-24"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="16.688rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="unset"
            tableCellTextDecoration="unset"
          />
          <DataTableCell />
          <CellTypeText
            email="MA by Research English Studies"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="27.125rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="unset"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#000"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="Conditional Offer Recieved"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="19.5rem"
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
          <CellTypeAvatarText
            studentName="/avatar@2x.png"
            onePlus7Pro="Edgar Jones"
            onePlus="Student"
            showOnePlus
            cellTypeAvatarTextPadding="0.563rem 1.25rem"
            cellTypeAvatarTextGap="0.625rem"
            cellTypeAvatarTextWidth="13.75rem"
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
            email="Ejones@gmail.com"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="14.875rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="0.8"
            tableCellBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #4b465c"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="unset"
            tableCellFontWeight="500"
            tableCellTextDecoration="unset"
          />
          <CellTypeText
            email="+91-937373638"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="15.688rem"
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
            email="View Profile"
            cellTypeTextPadding="1.125rem 1.25rem"
            cellTypeTextWidth="9.188rem"
            cellTypeTextHeight="4.938rem"
            tableCellFontSize="0.938rem"
            tableCellLineHeight="1.375rem"
            tableCellFlex="1"
            cellTypeTextFlex="unset"
            cellTypeTextOpacity="unset"
            tableCellBackground="unset"
            tableCellWebkitBackgroundClip="unset"
            tableCellWebkitTextFillColor="unset"
            tableCellColor="#ff6477"
            tableCellFontWeight="500"
            tableCellTextDecoration="underline"
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
            <div className="absolute top-[0.25rem] left-[0.438rem]">1</div>
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
  );
};

export default AppliedStudentList;
