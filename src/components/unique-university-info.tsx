import React, { FunctionComponent, useState, ChangeEvent } from "react";

interface UniqueUniversityInfoProps {
  onDataChange: (data: any) => void;  // Prop to pass data changes up to the parent component
}

const UniqueUniversityInfo: FunctionComponent<UniqueUniversityInfoProps> = ({ onDataChange }) => {
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: ""
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageData = e.target?.result;
        setImages(prevImages => {
          const updatedImages = { ...prevImages, [key]: imageData };
          onDataChange(updatedImages);  // Pass changes up to the parent component
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.188rem] gap-[2rem] max-w-full text-left text-[1.375rem] text-midnightblue font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100 mq900:gap-[1rem_2rem]">
      <h3 className="m-0 w-[17.313rem] text-inherit leading-[1.5rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        Unique University Info
      </h3>
      {/* Each image upload field now includes the handleFileChange function to update the component's state and inform the parent component */}
      {Object.keys(images).map((key, index) => (
        <div key={key} className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem]">
          <label className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Image {index + 1}
          </label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, key)}
            accept="image/png, image/jpeg"
            className="w-[25rem] rounded-md flex-row items-center justify-start py-[0.406rem] px-[0rem] border-[1px] border-solid border-gainsboro-100"
          />
        </div>
      ))}
    </div>
  );
};

export default UniqueUniversityInfo;
