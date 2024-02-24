import React from 'react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { MdMonitor } from 'react-icons/md';

export default function Search() {
  return (
    <div className="">
      <form className="flex gap-2">
        <button className="text-purple-700 border bg-purple-50 border-purple-700 rounded-full px-4 py-1 flex items-center gap-2">
          <HiArrowsUpDown /> <span>Extract Data</span>
        </button>
        <button className="text-purple-700 border bg-purple-50 border-purple-700 rounded-full px-4 py-1 flex items-center gap-2">
          <MdMonitor /> <span>Monitoring</span>
        </button>
      </form>
    </div>
  );
}
