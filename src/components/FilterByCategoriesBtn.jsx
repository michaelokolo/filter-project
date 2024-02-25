import { Dropdown } from 'flowbite-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function FilterByCategoriesBtn({ items }) {
  return (
    <div>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <div className="text-gray-500 border mx-h-50 border-gray-500 rounded-full px-4 py-1 flex items-center gap-2">
            <FaPlus /> <span>Filter by Category</span>
          </div>
        }
        className="w-full sm:w-[280px]"
        scroll={true}
      >
        <div className="  text-gray-500 bg-white w-full max-w-xl p-2 overflow-y-scroll scrollbar ">
          <div className="">
            <Dropdown.Item>Competitive Intelligence</Dropdown.Item>
            <Dropdown.Divider className="mx-3" />
            <Dropdown.Item>SEO</Dropdown.Item>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
