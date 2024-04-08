import React, { FunctionComponent, useState, ChangeEvent } from "react";

interface UniversityStatsProps {
  onDataChange: (data: any) => void; // Prop to pass data changes up to the parent component
}

const UniversityStats: FunctionComponent<UniversityStatsProps> = ({ onDataChange }) => {
  const [stats, setStats] = useState({
    studentsPerStaff: "",
    fullTimeStudents: "",
    internationalStudentsPercentage: "",
    studentSatisfactionRate: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStats(prevStats => {
      const updatedStats = { ...prevStats, [name]: value };
      onDataChange(updatedStats);  // Pass changes up to the parent component
      return updatedStats;
    });
  };

  return (
    <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[1.875rem] px-[1.188rem] gap-[2rem] max-w-full text-left text-[1.375rem] font-light-button-2-button-default border-[1px] border-solid border-gainsboro-100 mq900:gap-[1rem_2rem]">
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[68.188rem] pl-[0rem] gap-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:pr-[34.063rem] mq1350:box-border mq900:gap-[2rem_1rem] mq900:pr-[17rem] mq900:box-border">
        <h3 className="m-0 w-[17.313rem] relative text-inherit leading-[1.5rem] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-[1.125rem] mq450:leading-[1.188rem]">
          University Stats
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-[1.125rem]">
        {/* Each input field now includes the handleChange function to update the component's state and inform the parent component */}
        <InputField label="No. of students per staff" name="studentsPerStaff" value={stats.studentsPerStaff} onChange={handleChange} />
        <InputField label="No. of full time Students" name="fullTimeStudents" value={stats.fullTimeStudents} onChange={handleChange} />
        <InputField label="Percentage of International students" name="internationalStudentsPercentage" value={stats.internationalStudentsPercentage} onChange={handleChange} />
        <InputField label="Student Satisfaction Rate" name="studentSatisfactionRate" value={stats.studentSatisfactionRate} onChange={handleChange} />
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({ label, name, value, onChange }) => (
  <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[26.375rem] max-w-full gap-[1.25rem] mq900:flex-wrap mq900:min-w-full">
    <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
      {label}
    </div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-[25rem] rounded-md box-border flex flex-row items-center justify-start py-[0.406rem] px-[0rem] max-w-full border-[1px] border-solid border-gainsboro-100"
      placeholder="Add description"
      type="text"
    />
  </div>
);

export default UniversityStats;
