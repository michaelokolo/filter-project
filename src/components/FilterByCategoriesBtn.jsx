import { Dropdown } from 'flowbite-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/filterSlice/filterSlice';

export default function FilterByCategoriesBtn() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);

  const handleSelectItem = (title) => {
    if (!filters.includes(title)) {
      dispatch(addFilter(title));
    }
  };

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
            <Dropdown.Item
              onClick={() => handleSelectItem('Competitive Intelligence')}
            >
              Competitive Intelligence
            </Dropdown.Item>
            <Dropdown.Divider className="mx-3" />
            <Dropdown.Item onClick={() => handleSelectItem('SEO')}>
              SEO
            </Dropdown.Item>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
