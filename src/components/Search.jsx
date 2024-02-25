import React, { useState } from 'react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { MdMonitor } from 'react-icons/md';
import FilterBySitesBtn from './FilterBySitesBtn';
import FilterByCategoriesBtn from './FilterByCategoriesBtn';

export default function Search({ items }) {
  const [extractData, setExtractData] = useState(false);
  const [monitoring, setMonitoring] = useState(false);

  const handleExtractData = () => {
    setExtractData(!extractData);
  };
  const handleMonitoring = () => {
    setMonitoring(!monitoring);
  };

  return (
    <div className="">
      <form className="flex gap-2 flex-wrap">
        <button
          type="button"
          className={
            extractData
              ? 'text-purple-700 border bg-purple-50 border-purple-700 rounded-full px-4 py-1 flex items-center gap-2'
              : 'text-gray-500 border bg-white border-gray-500 rounded-full px-4 py-1 flex items-center gap-2'
          }
          onClick={handleExtractData}
        >
          <HiArrowsUpDown /> <span>Extract Data</span>
        </button>
        <button
          type="button"
          className={
            monitoring
              ? 'text-purple-700 border bg-purple-50 border-purple-700 rounded-full px-4 py-1 flex items-center gap-2'
              : 'text-gray-500 border bg-white border-gray-500 rounded-full px-4 py-1 flex items-center gap-2'
          }
          onClick={handleMonitoring}
        >
          <MdMonitor /> <span>Monitoring</span>
        </button>

        <FilterBySitesBtn items={items} />
        <FilterByCategoriesBtn items={items} />
      </form>
    </div>
  );
}
