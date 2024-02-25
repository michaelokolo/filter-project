import { Dropdown, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../redux/filterSlice/filterSlice';

export default function FilterBySitesBtn() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextInputValue(value);
  };

  const handleSelectItem = (title) => {
    if (!filters.includes(title)) {
      dispatch(addFilter(title));
    }
    setTextInputValue('');
  };

  const handleRemoveFilter = (item) => {
    dispatch(removeFilter(item));
  };
  return (
    <div className="flex gap-3">
      {filters ? (
        <div className="flex gap-3 items-center">
          {filters.map((item, index) => (
            <button
              className="text-purple-700 border mx-h-50 border-purple-700 rounded-full px-4 py-1 flex items-center gap-2"
              type="button"
              key={index}
            >
              <>
                {item}
                <FaTimes onClick={() => handleRemoveFilter(item)} />
              </>
            </button>
          ))}
        </div>
      ) : (
        ''
      )}
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <div className="text-gray-500 border mx-h-50 border-gray-500 rounded-full px-4 py-1 flex items-center gap-2">
            <FaPlus /> <span>Filter by Site</span>
          </div>
        }
        className="w-full sm:w-[280px]"
        scroll={true}
      >
        <TextInput
          type="search"
          className=" mx-4 mt-4 mb-4 outline-none bg-transparent flex-grow"
          placeholder="Search"
          style={{ color: 'black' }}
          onKeyDown={(e) => e.stopPropagation()}
          onChange={handleInputChange}
          value={textInputValue}
        />
        <div className="max-h-64 sm:max-h-100   text-gray-500 bg-white w-full max-w-xl p-2 overflow-y-scroll scrollbar ">
          <div className="">
            <Dropdown.Item onClick={() => handleSelectItem('LinkedIn')}>
              LinkedIn
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('ProductHunt')}>
              ProductHunt
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Google')}>
              Google
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Amazon')}>
              Amazon
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Booking')}>
              Booking
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('FDA')}>
              FDA
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Google Maps')}>
              Google Maps
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Pinterest')}>
              Pinterest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Trip Advisor')}>
              Trip Advisor
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Twitter')}>
              Twitter
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Upwork')}>
              Upwork
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Craigslist')}>
              Craigslist
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectItem('Meetup')}>
              Meetup
            </Dropdown.Item>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
