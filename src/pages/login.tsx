import { FunctionComponent } from "react";

const Login: FunctionComponent = () => {
  return (
    <div className="w-full relative h-[67.5rem] text-left text-[2rem] text-gray1-200 font-semi-bold-11">
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[120rem] h-[67.5rem] overflow-hidden flex flex-row items-center justify-start gap-[15.5rem]">
        <img
          className="w-[40.688rem] relative h-[40.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hreo-side.svg"
        />
        <div className="overflow-hidden flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[3rem]">
            <img
              className="w-[10.938rem] relative h-[3.438rem] object-cover"
              alt=""
              src="/5-911567@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[2rem]">
              <div className="relative font-semibold">Login</div>
              <div className="w-[31.25rem] flex flex-col items-center justify-center gap-[2rem] text-[1rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <div className="relative leading-[1.25rem] font-semibold">
                      Admin ID
                    </div>
                    <div className="self-stretch rounded-lg bg-white box-border h-[3.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-[0.75rem] text-text border-[1px] border-solid border-lightgray">
                      <div className="flex-1 relative leading-[1.5rem]">
                        Enter Admin ID
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <div className="relative leading-[1.25rem] font-semibold">
                      Password
                    </div>
                    <div className="self-stretch rounded-lg bg-white box-border h-[3.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] gap-[0.5rem] text-[0.75rem] text-text border-[1px] border-solid border-lightgray">
                      <div className="flex-1 relative leading-[1.5rem] flex items-center h-[1.25rem]">
                        Enter password
                      </div>
                      <img
                        className="w-[1.5rem] relative h-[1.5rem]"
                        alt=""
                        src="/image-eyeicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-primary-1 h-[3.5rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1rem] box-border">
                  <div className="relative leading-[1.5rem] font-semibold">
                    Login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
