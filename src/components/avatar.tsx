import { FunctionComponent } from "react";

const Avatar: FunctionComponent = () => {
  return (
    <div className="w-[2rem] relative rounded-81xl h-[2rem] overflow-hidden shrink-0">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
        <div className="absolute h-[80.63%] w-[80.63%] top-[9.69%] right-[9.69%] bottom-[9.69%] left-[9.69%] rounded-81xl bg-gray1-300" />
      </div>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
    </div>
  );
};

export default Avatar;
