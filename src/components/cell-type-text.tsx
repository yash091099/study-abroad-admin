import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CellTypeTextType = {
  email?: string;

  /** Style props */
  cellTypeTextPadding?: CSSProperties["padding"];
  cellTypeTextWidth?: CSSProperties["width"];
  cellTypeTextHeight?: CSSProperties["height"];
  tableCellFontSize?: CSSProperties["fontSize"];
  tableCellLineHeight?: CSSProperties["lineHeight"];
  tableCellFlex?: CSSProperties["flex"];
  cellTypeTextFlex?: CSSProperties["flex"];
  cellTypeTextOpacity?: CSSProperties["opacity"];
  tableCellBackground?: CSSProperties["background"];
  tableCellWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  tableCellWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
  tableCellColor?: CSSProperties["color"];
  tableCellFontWeight?: CSSProperties["fontWeight"];
  tableCellTextDecoration?: CSSProperties["textDecoration"];
};

const CellTypeText: FunctionComponent<CellTypeTextType> = ({
  email,
  cellTypeTextPadding,
  cellTypeTextWidth,
  cellTypeTextHeight,
  tableCellFontSize,
  tableCellLineHeight,
  tableCellFlex,
  cellTypeTextFlex,
  cellTypeTextOpacity,
  tableCellBackground,
  tableCellWebkitBackgroundClip,
  tableCellWebkitTextFillColor,
  tableCellColor,
  tableCellFontWeight,
  tableCellTextDecoration,
}) => {
  const cellTypeTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: cellTypeTextPadding,
      width: cellTypeTextWidth,
      height: cellTypeTextHeight,
      flex: cellTypeTextFlex,
      opacity: cellTypeTextOpacity,
    };
  }, [
    cellTypeTextPadding,
    cellTypeTextWidth,
    cellTypeTextHeight,
    cellTypeTextFlex,
    cellTypeTextOpacity,
  ]);

  const tableCellStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: tableCellFontSize,
      lineHeight: tableCellLineHeight,
      flex: tableCellFlex,
      background: tableCellBackground,
      webkitBackgroundClip: tableCellWebkitBackgroundClip,
      webkitTextFillColor: tableCellWebkitTextFillColor,
      color: tableCellColor,
      fontWeight: tableCellFontWeight,
      textDecoration: tableCellTextDecoration,
    };
  }, [
    tableCellFontSize,
    tableCellLineHeight,
    tableCellFlex,
    tableCellBackground,
    tableCellWebkitBackgroundClip,
    tableCellWebkitTextFillColor,
    tableCellColor,
    tableCellFontWeight,
    tableCellTextDecoration,
  ]);

  return (
    <div
      className="flex flex-row items-center justify-start py-[18px] px-5 text-left text-mini font-light-button-2-button-default"
      style={cellTypeTextStyle}
    >
      <div
        className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
        style={tableCellStyle}
      >
        {email}
      </div>
    </div>
  );
};

export default CellTypeText;
