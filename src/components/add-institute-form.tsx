import React, { FunctionComponent } from "react";
import Overview from "./overview";
import UniversityStats from "./university-stats";
import UniqueUniversityInfo from "./unique-university-info";
import Ranking from "./ranking";

type ComponentType = 'overview' | 'stats' | 'uniqueInfo' | 'ranking';

const AddInstituteForm: React.FunctionComponent = () => {

  const [overviewData, setOverviewData] = React.useState({});
  const [universityStatsData, setUniversityStatsData] = React.useState({});
  const [uniqueUniversityInfoData, setUniqueUniversityInfoData] = React.useState({});
  const [rankingData, setRankingData] = React.useState({});


  const handleDataChange = (type: ComponentType) => (newData: any) => {
    switch (type) {
      case 'overview':
        setOverviewData(newData);
        break;
      case 'stats':
        setUniversityStatsData(newData);
        break;
      case 'uniqueInfo':
        setUniqueUniversityInfoData(newData);
        break;
      case 'ranking':
        setRankingData(newData);
        break;
      default:
        // Optionally handle an unexpected type
        console.error('Unexpected component type:', type);
    }
  };


  const saveAllData = (event:any) => {
    event.preventDefault()
    const allData = {
      overviewData,
      universityStatsData,
      uniqueUniversityInfoData,
      rankingData
    };
    console.log(allData);
    // Post allData to server or handle accordingly
  };

  return (
    <>
      <Overview onDataChange={handleDataChange('overview')} />
      <UniversityStats onDataChange={handleDataChange('stats')} />
      <UniqueUniversityInfo  onDataChange={handleDataChange('uniqueInfo')}/>
      <Ranking />
      <button onClick={(e)=>saveAllData(e)}>Save All Data</button>
    </>
  );
};

export default AddInstituteForm;
