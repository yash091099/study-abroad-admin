import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SizeType = {
  userImage?: string;

  /** Style props */
  size38Width?: CSSProperties["width"];
  size38Height?: CSSProperties["height"];
  size38Position?: CSSProperties["position"];
  backgroundBackground?: CSSProperties["background"];
  overlayHeight?: CSSProperties["height"];
  overlayWidth?: CSSProperties["width"];
  overlayTop?: CSSProperties["top"];
  overlayRight?: CSSProperties["right"];
  overlayBottom?: CSSProperties["bottom"];
  overlayLeft?: CSSProperties["left"];
};

const Size: FunctionComponent<SizeType> = ({
  userImage,
  size38Width,
  size38Height,
  size38Position,
  backgroundBackground,
  overlayHeight,
  overlayWidth,
  overlayTop,
  overlayRight,
  overlayBottom,
  overlayLeft,
}) => {
  const size38Style: CSSProperties = useMemo(() => {
    return {
      width: size38Width,
      height: size38Height,
      position: size38Position,
    };
  }, [size38Width, size38Height, size38Position]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      background: backgroundBackground,
    };
  }, [backgroundBackground]);

  const overlayStyle: CSSProperties = useMemo(() => {
    return {
      height: overlayHeight,
      width: overlayWidth,
      top: overlayTop,
      right: overlayRight,
      bottom: overlayBottom,
      left: overlayLeft,
    };
  }, [
    overlayHeight,
    overlayWidth,
    overlayTop,
    overlayRight,
    overlayBottom,
    overlayLeft,
  ]);

  return (
    <div
      className="w-[38px] rounded-81xl h-[38px] overflow-hidden"
      style={size38Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#ea5455]"
          style={backgroundStyle}
        />
        <div
          className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl bg-gray1-300"
          style={overlayStyle}
        />
      </div>
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={userImage}
      />
    </div>
  );
};

export default Size;
