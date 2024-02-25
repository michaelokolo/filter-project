import { Button, Dropdown, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { MdMonitor } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';
import FilterBySitesBtn from './FilterBySitesBtn';
import FilterByCategoriesBtn from './FilterByCategoriesBtn';

export default function Search({ items }) {
  return (
    <div className="">
      <form className="flex gap-2 flex-wrap">
        <button
          className="text-purple-700 border 
        bg-purple-50 border-purple-700 rounded-full 
        px-4 py-1 flex items-center gap-2"
        >
          <HiArrowsUpDown /> <span>Extract Data</span>
        </button>
        <button
          className="text-purple-700 border bg-purple-50
         border-purple-700 rounded-full px-4 py-1 flex items-center gap-2"
        >
          <MdMonitor /> <span>Monitoring</span>
        </button>

        <FilterBySitesBtn items={items} />
        <FilterByCategoriesBtn items={items} />
      </form>
    </div>
  );
}
