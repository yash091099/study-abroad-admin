import { FunctionComponent } from "react";

const Notifications: FunctionComponent = () => {
  return (
    <div className="relative rounded-2xl bg-white w-full overflow-hidden flex flex-col items-start justify-start pt-[1.813rem] pb-[1.75rem] pr-[1.438rem] pl-[1.5rem] box-border gap-[0.969rem] tracking-[normal] text-left text-[0.875rem] text-darkgray-100 font-poppins">
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] text-left text-[1.25rem] text-gray1-200 font-semi-bold-11">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[12.563rem]">
          <div className="self-stretch h-[1.563rem] flex flex-row items-start justify-start gap-[0.5rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/caretleft.svg"
            />
            <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
              Notifications
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.875rem] font-poppins">
            <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                <div className="relative tracking-[-0.04em] font-medium">
                  New Notification heading
                </div>
                <div className="w-[9.25rem] relative text-[0.75rem] inline-block">
                  2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[4.688rem] flex flex-col items-end justify-start gap-[2.688rem]">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/bookmarks.svg"
          />
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-dodgerblue" />
        </div>
      </section>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem]">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.688rem] pl-[0rem] box-border min-w-[11.063rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.04em] font-medium">
              New notification heading opened
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] font-medium inline-block">
              2 days ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.156rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-darkgray-100" />
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-gray1-200">
        <div className="flex flex-row items-start justify-start gap-[0.5rem]">
          <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="relative tracking-[-0.04em] font-medium">
                New Notification heading
              </div>
              <div className="w-[9.25rem] relative text-[0.75rem] inline-block">
                2 days ago
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.156rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-dodgerblue" />
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-gray1-200">
        <div className="flex flex-row items-start justify-start gap-[0.5rem]">
          <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="relative tracking-[-0.04em] font-medium">
                New Notification heading
              </div>
              <div className="w-[9.25rem] relative text-[0.75rem] inline-block">
                2 days ago
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.156rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-dodgerblue" />
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem]">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.688rem] pl-[0rem] box-border min-w-[11.063rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.04em] font-medium">
              New notification heading opened
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] font-medium inline-block">
              2 days ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.156rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-darkgray-100" />
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem]">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.688rem] pl-[0rem] box-border min-w-[11.063rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.04em] font-medium">
              New notification heading opened
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] font-medium inline-block">
              2 days ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.156rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.5rem] h-[0.5rem] relative rounded-[50%] bg-darkgray-100" />
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="flex flex-row items-start justify-start gap-[0.5rem] text-gray1-200">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="relative tracking-[-0.04em] font-medium">
              New Notification heading
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] inline-block">
              2 days ago
            </div>
          </div>
        </div>
      </div>
      <div className="w-[0.5rem] h-[0.5rem] absolute !m-[0] right-[1.5rem] bottom-[17.344rem] rounded-[50%] bg-dodgerblue" />
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="w-[19.688rem] flex flex-row items-start justify-start gap-[0.5rem]">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.04em] font-medium">
              New notification heading opened
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] font-medium inline-block">
              2 days ago
            </div>
          </div>
        </div>
      </div>
      <div className="w-[0.5rem] h-[0.5rem] absolute !m-[0] right-[1.5rem] bottom-[12.531rem] rounded-[50%] bg-darkgray-100" />
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="flex flex-row items-start justify-start gap-[0.5rem] text-gray1-200">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="relative tracking-[-0.04em] font-medium">
              New Notification heading
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] inline-block">
              2 days ago
            </div>
          </div>
        </div>
      </div>
      <div className="w-[0.5rem] h-[0.5rem] absolute !m-[0] right-[1.5rem] bottom-[7.719rem] rounded-[50%] bg-dodgerblue" />
      <div className="self-stretch h-[0.063rem] relative bg-gainsboro-200 box-border border-t-[1px] border-solid border-lightgray" />
      <div className="w-[19.688rem] flex flex-row items-start justify-start gap-[0.5rem]">
        <div className="h-[2.813rem] w-[2.813rem] relative rounded-581xl bg-gainsboro-200" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[-0.04em] font-medium">
              New notification heading opened
            </div>
            <div className="w-[9.25rem] relative text-[0.75rem] font-medium inline-block">
              2 days ago
            </div>
          </div>
        </div>
      </div>
      <div className="w-[0.5rem] h-[0.5rem] absolute !m-[0] right-[1.5rem] bottom-[2.906rem] rounded-[50%] bg-darkgray-100" />
    </div>
  );
};

export default Notifications;
