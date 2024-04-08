import React from 'react';

interface Column {
  name: string;
  icons: string[];
}

interface Data {
  institute: string;
  location: string;
  email: string;
  phone: string;
  accreditation: string;
}

interface ColumnHeaderProps {
  name: string;
  icons: string[];
}

interface DataRowProps {
  avatarSrc: string;
  data: Data;
}



const ColumnHeader: React.FC<ColumnHeaderProps> = ({ name, icons }) => (
  <div className="flex-[0.9167] flex items-center justify-start py-[0.5rem] px-[1.25rem] gap-[0.25rem]">
    <div className="flex-1 relative tracking-[1px] uppercase font-semibold  bg-clip-text bg-gradient-to-r from-transparent to-transparent inline-block min-w-[2rem]">
      {name}
    </div>
    <div className="h-[2rem] flex flex-col items-start justify-start">
      <img className="w-[1.125rem] h-[1.125rem] relative overflow-hidden shrink-0" alt="" src={icons[0]} />
      <img className="w-[1.125rem] h-[1.125rem] relative z-[1] mt-[-0.25rem]" alt="" src={icons[1]} />
    </div>
  </div>
);


const DataRow: React.FC<DataRowProps> = ({ avatarSrc, data }) => (
  <div className="w-full box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-solid border-gainsboro-100 border-b-[1px]">
    <div className="h-[3.625rem] w-[3rem] flex items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
      <input className="m-0 self-stretch flex-1" type="checkbox" />
    </div>
    <div className="flex-[0.5682] flex items-center justify-start py-[1.219rem] pr-[7.188rem] pl-[1.25rem] gap-[0.625rem]">
      <div className="h-[2rem] w-[2rem] relative rounded-81xl overflow-hidden shrink-0">
        <img className="absolute h-full w-full object-cover z-[2]" alt="" src={avatarSrc} />
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="relative leading-[1.375rem] font-semibold  bg-clip-text bg-gradient-to-r from-transparent to-transparent inline-block">
          {data.institute}
        </div>
        <div className="relative text-[0.813rem] leading-[1.25rem]  bg-clip-text bg-gradient-to-r from-transparent to-transparent inline-block mt-[-0.125rem]">
          {data.location}
        </div>
      </div>
    </div>
    <div className="flex-1 flex items-center justify-start py-[1.781rem] px-[1.25rem]">
      <div className="flex-1 relative leading-[1.375rem]  bg-clip-text bg-gradient-to-r from-transparent to-transparent">
        {data.email}
      </div>
    </div>
    <div className="flex-1 flex items-center justify-start py-[1.781rem] px-[1.25rem]">
      <div className="flex-1 relative leading-[1.375rem]  bg-clip-text bg-gradient-to-r from-transparent to-transparent">
        {data.location}
      </div>
    </div>
    <div className="flex-1 flex items-center justify-start py-[1.781rem] px-[1.25rem]">
      <div className="flex-1 relative leading-[1.375rem]  bg-clip-text bg-gradient-to-r from-transparent to-transparent">
        {data.phone}
      </div>
    </div>
    <div className="flex-1 flex items-center justify-start py-[1.781rem] px-[1.25rem]">
      <div className="flex-1 relative leading-[1.375rem]  bg-clip-text bg-gradient-to-r from-transparent to-transparent">
        {data.accreditation}
      </div>
    </div>
  </div>
);

const DataTable: React.FC = () => {
  // Replace this example data with your actual data
  const rowsData = [
    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },
    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    },    {
      avatarSrc: '/avatar2@2x.png',
      data: {
        institute: 'DY Institute',
        location: 'Bangalore',
        email: 'Ejones@gmail.com',
        phone: '+91-937373638',
        accreditation: 'NASCOM'
      }
    }, 
    
    // Add more rows here as needed
  ];

const columns: Column[] = [
  { name: 'Name', icons: ['/fichevronup.svg', '/chevrondown2.svg'] },
  { name: 'Email', icons: ['/fichevronup1.svg', '/chevrondown2.svg'] },
  { name: 'Address', icons: ['/fichevronup1.svg', '/chevrondown2.svg'] },
  { name: 'Phone', icons: ['/fichevronup1.svg', '/chevrondown2.svg'] },
  { name: 'Accreditation', icons: ['/fichevronup1.svg', '/chevrondown2.svg'] },
];

  return (
    <div className="self-stretch overflow-x-auto flex flex-col items-start justify-start max-w-full text-left text-[0.938rem] font-light-button-2-button-default">
      <div className="w-full box-border flex flex-row items-center justify-start py-[0rem] pr-[3.625rem] pl-[0rem] border-solid border-gainsboro-100">
      <div className="h-[3.625rem] w-[3rem] flex items-center justify-start py-[1.25rem] pr-[0.625rem] pl-[1.25rem] box-border">
      <input className="m-0 self-stretch flex-1" type="checkbox" />
    </div>
        {columns.map((col, index) => (
          <ColumnHeader key={index} name={col?.name} icons={col?.icons} />
        ))}
      </div>
      {rowsData.map((row, index) => (
        <DataRow key={index} avatarSrc={row.avatarSrc} data={row.data} />
        
      ))}
    </div>
  );
};

export default DataTable;
