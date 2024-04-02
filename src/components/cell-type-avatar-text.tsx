import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Size from "./size";

export type CellTypeAvatarTextType = {
  studentName?: string;
  onePlus7Pro?: string;
  onePlus?: string;
  showOnePlus?: boolean;

  /** Style props */
  cellTypeAvatarTextPadding?: CSSProperties["padding"];
  cellTypeAvatarTextGap?: CSSProperties["gap"];
  cellTypeAvatarTextWidth?: CSSProperties["width"];
  cellTypeAvatarTextHeight?: CSSProperties["height"];
  avatarWidth?: CSSProperties["width"];
  avatarHeight?: CSSProperties["height"];
  backgroundBackground?: CSSProperties["background"];
  onePlus7ProFontSize?: CSSProperties["fontSize"];
  onePlus7ProLineHeight?: CSSProperties["lineHeight"];
  onePlusFontSize?: CSSProperties["fontSize"];
  onePlusLineHeight?: CSSProperties["lineHeight"];
  onePlusMarginTop?: CSSProperties["marginTop"];
  cellTypeAvatarTextFlex?: CSSProperties["flex"];
  onePlus7ProMinWidth?: CSSProperties["minWidth"];
  onePlusMinWidth?: CSSProperties["minWidth"];
  onePlusWidth?: CSSProperties["width"];
};

const CellTypeAvatarText: FunctionComponent<CellTypeAvatarTextType> = ({
  studentName,
  onePlus7Pro,
  onePlus,
  showOnePlus,
  cellTypeAvatarTextPadding,
  cellTypeAvatarTextGap,
  cellTypeAvatarTextWidth,
  cellTypeAvatarTextHeight,
  avatarWidth,
  avatarHeight,
  backgroundBackground,
  onePlus7ProFontSize,
  onePlus7ProLineHeight,
  onePlusFontSize,
  onePlusLineHeight,
  onePlusMarginTop,
  cellTypeAvatarTextFlex,
  onePlus7ProMinWidth,
  onePlusMinWidth,
  onePlusWidth,
}) => {
  const cellTypeAvatarTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: cellTypeAvatarTextPadding,
      gap: cellTypeAvatarTextGap,
      width: cellTypeAvatarTextWidth,
      height: cellTypeAvatarTextHeight,
      flex: cellTypeAvatarTextFlex,
    };
  }, [
    cellTypeAvatarTextPadding,
    cellTypeAvatarTextGap,
    cellTypeAvatarTextWidth,
    cellTypeAvatarTextHeight,
    cellTypeAvatarTextFlex,
  ]);

  const size38Style: CSSProperties = useMemo(() => {
    return {
      width: avatarWidth,
      height: avatarHeight,
    };
  }, [avatarWidth, avatarHeight]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      background: backgroundBackground,
    };
  }, [backgroundBackground]);

  const onePlus7ProStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: onePlus7ProFontSize,
      lineHeight: onePlus7ProLineHeight,
      minWidth: onePlus7ProMinWidth,
    };
  }, [onePlus7ProFontSize, onePlus7ProLineHeight, onePlus7ProMinWidth]);

  const onePlusStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: onePlusFontSize,
      lineHeight: onePlusLineHeight,
      marginTop: onePlusMarginTop,
      minWidth: onePlusMinWidth,
      width: onePlusWidth,
    };
  }, [
    onePlusFontSize,
    onePlusLineHeight,
    onePlusMarginTop,
    onePlusMinWidth,
    onePlusWidth,
  ]);

  return (
    <div
      className="flex flex-row items-center justify-start py-[9px] px-5 gap-[10px] text-left text-mini font-light-button-2-button-default"
      style={cellTypeAvatarTextStyle}
    >
      <Size
        userImage="/avatar3@2x.png"
        size38Width="32px"
        size38Height="32px"
        size38Position="relative"
        backgroundBackground="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #ea5455"
        overlayHeight="80.63%"
        overlayWidth="80.63%"
        overlayTop="9.69%"
        overlayRight="9.69%"
        overlayBottom="9.69%"
        overlayLeft="9.69%"
      />
      <div className="flex flex-col items-start justify-start">
        <div
          className="relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          style={onePlus7ProStyle}
        >
          {onePlus7Pro}
        </div>
        {showOnePlus && (
          <div
            className="relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-[-2px]"
            style={onePlusStyle}
          >
            {onePlus}
          </div>
        )}
      </div>
    </div>
  );
};

export default CellTypeAvatarText;
