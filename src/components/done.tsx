import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DoneType = {
  buttonText?: string;

  /** Style props */
  typeFilledSizeDefaultStyBackgroundColor?: CSSProperties["backgroundColor"];
  typeFilledSizeDefaultStyPosition?: CSSProperties["position"];
  typeFilledSizeDefaultStyTop?: CSSProperties["top"];
  typeFilledSizeDefaultStyLeft?: CSSProperties["left"];
  typeFilledSizeDefaultStyWidth?: CSSProperties["width"];
  textFontFamily?: CSSProperties["fontFamily"];
};

const Done: FunctionComponent<DoneType> = ({
  buttonText,
  typeFilledSizeDefaultStyBackgroundColor,
  typeFilledSizeDefaultStyPosition,
  typeFilledSizeDefaultStyTop,
  typeFilledSizeDefaultStyLeft,
  typeFilledSizeDefaultStyWidth,
  textFontFamily,
}) => {
  const typeFilledSizeDefaultStyStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeFilledSizeDefaultStyBackgroundColor,
      position: typeFilledSizeDefaultStyPosition,
      top: typeFilledSizeDefaultStyTop,
      left: typeFilledSizeDefaultStyLeft,
      width: typeFilledSizeDefaultStyWidth,
    };
  }, [
    typeFilledSizeDefaultStyBackgroundColor,
    typeFilledSizeDefaultStyPosition,
    typeFilledSizeDefaultStyTop,
    typeFilledSizeDefaultStyLeft,
    typeFilledSizeDefaultStyWidth,
  ]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: textFontFamily,
    };
  }, [textFontFamily]);

  return (
    <div
      className="rounded-md bg-light-solid-color-primary-primary-500-base shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center text-left text-mini text-white font-light-button-2-button-default"
      style={typeFilledSizeDefaultStyStyle}
    >
      <div className="flex flex-row items-center justify-center py-2.5 px-5">
        <div
          className="relative tracking-[0.43px] font-medium"
          style={text1Style}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default Done;
