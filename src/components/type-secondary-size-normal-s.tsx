import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeSecondarySizeNormalSType = {
  icon?: string;
  text?: string;
  icon1?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;

  /** Style props */
  typeSecondarySizeNormalSBackgroundColor?: CSSProperties["backgroundColor"];
  typeSecondarySizeNormalSPadding?: CSSProperties["padding"];
  typeSecondarySizeNormalSBorder?: CSSProperties["border"];
  typeSecondarySizeNormalSGap?: CSSProperties["gap"];
  typeSecondarySizeNormalSWidth?: CSSProperties["width"];
  typeSecondarySizeNormalSHeight?: CSSProperties["height"];
  iconMinHeight?: CSSProperties["minHeight"];
  iconWidth?: CSSProperties["width"];
  iconHeight?: CSSProperties["height"];
  textFontFamily?: CSSProperties["fontFamily"];
  textColor?: CSSProperties["color"];
  textMinWidth?: CSSProperties["minWidth"];
  textFontSize?: CSSProperties["fontSize"];
  iconMinHeight1?: CSSProperties["minHeight"];
  iconWidth1?: CSSProperties["width"];
  iconHeight1?: CSSProperties["height"];
};

const TypeSecondarySizeNormalS: FunctionComponent<
  TypeSecondarySizeNormalSType
> = ({
  icon,
  text,
  icon1,
  showLeftIcon = true,
  showRightIcon = true,
  typeSecondarySizeNormalSBackgroundColor,
  typeSecondarySizeNormalSPadding,
  typeSecondarySizeNormalSBorder,
  typeSecondarySizeNormalSGap,
  typeSecondarySizeNormalSWidth,
  typeSecondarySizeNormalSHeight,
  iconMinHeight,
  iconWidth,
  iconHeight,
  textFontFamily,
  textColor,
  textMinWidth,
  textFontSize,
  iconMinHeight1,
  iconWidth1,
  iconHeight1,
}) => {
  const typeSecondarySizeNormalSStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeSecondarySizeNormalSBackgroundColor,
      padding: typeSecondarySizeNormalSPadding,
      border: typeSecondarySizeNormalSBorder,
      gap: typeSecondarySizeNormalSGap,
      width: typeSecondarySizeNormalSWidth,
      height: typeSecondarySizeNormalSHeight,
    };
  }, [
    typeSecondarySizeNormalSBackgroundColor,
    typeSecondarySizeNormalSPadding,
    typeSecondarySizeNormalSBorder,
    typeSecondarySizeNormalSGap,
    typeSecondarySizeNormalSWidth,
    typeSecondarySizeNormalSHeight,
  ]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: iconMinHeight,
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconMinHeight, iconWidth, iconHeight]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
      minWidth: textMinWidth,
      fontSize: textFontSize,
    };
  }, [textFontFamily, textColor, textMinWidth, textFontSize]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: iconMinHeight1,
      width: iconWidth1,
      height: iconHeight1,
    };
  }, [iconMinHeight1, iconWidth1, iconHeight1]);

  return (
    <div
      className="rounded-lg bg-primary-primary-07 flex flex-row items-center justify-center py-0 px-6 box-border gap-[12px] text-left text-sm text-primary-primary-01 font-small-semi-bold"
      style={typeSecondarySizeNormalSStyle}
    >
      {showLeftIcon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src={icon}
          style={iconStyle}
        />
      )}
      <div className="relative leading-[116%] font-semibold" style={textStyle}>
        {text}
      </div>
      {showRightIcon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src={icon1}
          style={icon1Style}
        />
      )}
    </div>
  );
};

export default TypeSecondarySizeNormalS;
