import { FunctionComponent } from "react";
import SideMenu1 from "../components/side-menu1";
import Navbar1 from "../components/navbar1";
import BlogList from "../components/blog-list";

const BlogManagement: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 h-[71.125rem] text-left text-[0.938rem] font-light-button-2-button-default">
      <div className="absolute top-[-0.125rem] left-[0rem] w-[120rem] h-[71rem] flex flex-row items-start justify-start gap-[2rem]">
        <SideMenu1 />
        <div className="w-[95.5rem] flex flex-col items-start justify-start py-[1rem] px-[0rem] box-border">
          <div className="w-[92rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <Navbar1
              search="/search.svg"
              bell="/bell.svg"
              navbarPadding="0.75rem 1.5rem"
              navbarGap="0.625rem"
              searchGap="0.625rem"
              searchIconWidth="1.625rem"
              searchIconHeight="1.625rem"
              searchCtrlFontSize="0.938rem"
              searchCtrlLineHeight="1.375rem"
              rightSideGap="2rem"
              lineDivWidth="0.063rem"
              lineDivHeight="3.563rem"
              bellIconWidth="1.5rem"
              bellIconHeight="1.5rem"
              profileWidth="2rem"
              profileHeight="2rem"
              groupDivTop="0rem"
              groupDivLeft="0rem"
              groupDivWidth="2rem"
              groupDivHeight="2rem"
              ellipseDivTop="0rem"
              ellipseDivLeft="0rem"
              ellipseDivWidth="2rem"
              ellipseDivHeight="2rem"
              aTop="0.313rem"
              aLeft="0.688rem"
              aFontSize="0.938rem"
              aLineHeight="1.375rem"
            />
            <BlogList />
            <div className="self-stretch rounded-md h-[3rem] overflow-hidden shrink-0 flex flex-row items-end justify-center py-[0.75rem] px-[0rem] box-border">
              <div className="self-stretch w-[27.563rem] flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[1.375rem] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Copyright 2023 -
Company Name. All rights reserved. `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
