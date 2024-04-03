import { FunctionComponent } from "react";
import AdsClickStatistics from "../components/ads-click-statistics";
import RevenueChart from "../components/revenue-chart";
import SalesStatistics from "../components/sales-statistics";

const Reports: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
      <AdsClickStatistics />
      <RevenueChart />
      <SalesStatistics />
    </div>
  );
};

export default Reports;
