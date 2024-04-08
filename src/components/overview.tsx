import React, { FunctionComponent, useState, ChangeEvent } from "react";

interface OverviewProps {
  onDataChange: (data: any) => void;
}

interface Cities {
  [key: string]: string[];
}

const Overview: FunctionComponent<OverviewProps> = ({ onDataChange }) => {
  const [data, setData] = useState({
    universityName: "",
    brochure:"",
    logo: "",
    banner: "",
    country: "",
    city: "",
    overview: "",
    requirements: "",
  });

  const countries = ["USA", "Canada", "Australia"]; // Example countries
  const cities: Cities = {
    USA: ["New York", "Los Angeles"],
    Canada: ["Toronto", "Vancouver"],
    Australia: ["Sydney", "Melbourne"],
  };

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    setData((prev) => {
      const updatedData = { ...prev, [name]: value };
      onDataChange(updatedData);
      return updatedData;
    });
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileData = e.target?.result;
        setData((prev) => {
          const updatedData = { ...prev, [key]: fileData };
          onDataChange(updatedData);
          return updatedData;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.188rem] gap-[2rem] max-w-full text-left text-[1.375rem] text-midnightblue font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100 mq900:gap-[1rem_2rem] mq900:pt-[1.25rem] mq900:pb-[1.25rem] mq900:box-border">
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[68.188rem] pl-[0rem] gap-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[34.063rem] mq1350:box-border mq900:gap-[2rem_1rem] mq900:pr-[17rem] mq900:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          Overview
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              University Name
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                name="universityName"
                value={data.universityName}
                onChange={handleInputChange}
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add University name"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.625rem]">
              Logo
            </div>
            <div className="h-[2.75rem] w-[25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
              {/* <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem] box-border max-w-full gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                  <div className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[5.875rem]">
                    University logo
                  </div>
                  <div className="relative text-[0.625rem] leading-[0.938rem] text-slategray-100 whitespace-nowrap">
                    acceptable formats: JPEG, JPG or PNG.
                  </div>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative"
                  loading="lazy"
                  alt=""
                  src="/fileupload.svg"
                />
              </div> */}

              <input
                className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem] box-border max-w-full gap-[1.25rem]"
                type="file"
                onChange={(e) => handleFileChange(e, "logo")}
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[4.25rem]">
              Country
            </div>
            {/* <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[5.813rem]">
                    Select country
                  </div>
                </div>
              </div>
            </div> */}
            <select
              name="country"
              value={data.country}
              onChange={handleInputChange}
              className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100"
            >
              {countries.map((country) => (
                <option
                  className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[5.813rem]"
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[2.188rem]">
              City
            </div>
            {/* <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.75rem] box-border max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[4.5rem]">
                    Select city
                  </div>
                </div>
              </div>
            </div> */}
            <select
              name="city"
              className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100"
              value={data.city}
              onChange={handleInputChange}
              disabled={!data.country}
            >
              {data.country &&
                cities[data.country]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[4.375rem_1.063rem] mq1350:flex-wrap mq900:gap-[4.375rem_2.188rem]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[7.313rem]">
              Banner Image
            </div>
            <div className="h-[2.75rem] w-[25rem] rounded-md box-border flex flex-row items-center justify-start max-w-full text-[0.875rem] font-gilroy-regular border-[1px] border-solid border-gainsboro-100">
              <div className="self-stretch flex-1 rounded-md overflow-hidden flex flex-row items-center justify-between py-[0.438rem] px-[0.875rem] box-border max-w-full gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[0.063rem]">
                  <div className="h-[1.063rem] relative leading-[1.313rem] inline-block min-w-[5.688rem]">
                    Banner image
                  </div>
                  <div className="relative text-[0.625rem] leading-[0.938rem] text-slategray-100 whitespace-nowrap">
                    acceptable formats: JPEG, JPG or PNG.
                  </div>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative"
                  loading="lazy"
                  alt=""
                  src="/fileupload.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
            <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[4.875rem]">
              Brochure
            </div>
            <div className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[1.938rem] flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.875rem] box-border font-gilroy-regular text-[0.875rem] text-midnightblue min-w-[15rem] max-w-full"
                placeholder="Add Brochure "
                type="text"
                name="brochure"
                value={data.brochure}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[0.875rem] font-gilroy-regular">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem] mq1350:flex-wrap">
            <input
              type="text"
              name="overview"
              placeholder="Add overview"
              value={data?.overview}
              onChange={handleInputChange}
              className="h-[7.125rem] w-[69.938rem] rounded-md box-border flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.75rem] max-w-full border-[1px] border-solid border-gainsboro-100"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.188rem] mq1800:flex-wrap">
            <input
              className="w-[13.125rem] [border:none] [outline:none] font-medium font-light-button-2-button-default text-[1.125rem] bg-[transparent] h-[1.313rem] relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center p-0"
              placeholder="Admission Requirements"
            />
            <textarea
              name="requirements"
              value={data.requirements}
              onChange={handleInputChange} // Now correctly typed
              placeholder="Admission Requirements"
              className="h-[7.125rem] w-[69.938rem] rounded-md box-border flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.75rem] max-w-full border-[1px] border-solid border-gainsboro-100"
              rows={4} // Correctly using a number here
              style={{ resize: "none" }} // Optionally, prevent resizing
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
