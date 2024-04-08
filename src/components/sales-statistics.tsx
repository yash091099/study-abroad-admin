import { FunctionComponent } from "react";

const SalesStatistics: FunctionComponent = () => {
  // Hardcoded data for the bars to simulate heights
  const barHeights = [60, 70, 80, 55, 85, 75, 50, 90, 100, 65, 80, 70]; // Example percentages of bar heights
  
  return (
    <div className="flex flex-col h-[20rem] w-[95%] bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Sales Statistics</h2>
          <p className="text-2xl text-primary-1 font-medium">52,233</p>
        </div>
        <div className="rounded bg-whitesmoke-100 flex items-center justify-end py-[0.5rem] px-[1.5rem] gap-[1rem] text-[0.875rem] text-gray1-200">
          <span>October</span>
          <img
            className="w-[1rem] h-[1rem]"
            alt="Dropdown arrow"
            src="/dropdown-arrow.svg" // Replace with your actual dropdown arrow image
          />
        </div>
      </div>
      <div className="relative flex-grow">
        <div className="flex h-full items-end justify-between">
          {barHeights.map((height, index) => (
            <div
              key={index}
              className="bg-primary-1"
              style={{ width: '2%', height: `${height}%` }} // Adjust width as per the required thickness of the bars
              title={`Value: ${height}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
            <span key={month} className="text-xs text-gray-600">{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesStatistics;
