import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  /** Style props */
  footerWidth?: CSSProperties["width"];
  copyright2023FontFamily?: CSSProperties["fontFamily"];
};

const Footer: FunctionComponent<FooterType> = ({
  footerWidth,
  copyright2023FontFamily,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
    };
  }, [footerWidth]);

  const copyright2023Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: copyright2023FontFamily,
    };
  }, [copyright2023FontFamily]);

  return (
    <div
      className="w-[64.188rem] rounded-md h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[0rem] box-border text-left text-[0.938rem] font-noto-sans"
      style={footerStyle}
    >
      <div className="self-stretch w-[27.563rem] flex flex-row items-center justify-start">
        <div
          className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          style={copyright2023Style}
        >{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
      </div>
    </div>
  );
};

export default Footer;
