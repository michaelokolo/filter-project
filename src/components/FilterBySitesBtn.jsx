import { Dropdown, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

import { FaPlus } from 'react-icons/fa6';

export default function FilterBySitesBtn({ items }) {
  const [textInputValue, setTextInputValue] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextInputValue(value);
    setHighlightedText(value);
  };

  const handleSelectItem = (title) => {
    setTextInputValue(title);
  };
  return (
    <div>
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
            {[...new Set(items.map((item) => item.sites[0].title))].map(
              (title, index, array) => (
                <React.Fragment key={title}>
                  <Dropdown.Item onClick={() => handleSelectItem(title)}>
                    {title
                      .toLowerCase()
                      .includes(highlightedText.toLowerCase()) ? (
                      <>
                        <span>
                          {title.substring(
                            0,
                            title
                              .toLowerCase()
                              .indexOf(highlightedText.toLowerCase())
                          )}
                        </span>
                        <span style={{ backgroundColor: 'yellow' }}>
                          {title.substring(
                            title
                              .toLowerCase()
                              .indexOf(highlightedText.toLowerCase()),
                            title
                              .toLowerCase()
                              .indexOf(highlightedText.toLowerCase()) +
                              highlightedText.length
                          )}
                        </span>
                        <span>
                          {title.substring(
                            title
                              .toLowerCase()
                              .indexOf(highlightedText.toLowerCase()) +
                              highlightedText.length
                          )}
                        </span>
                      </>
                    ) : (
                      <span>{title}</span>
                    )}
                  </Dropdown.Item>
                  {index !== array.length - 1 && (
                    <Dropdown.Divider
                      className="mx-3"
                      key={`divider-${index}`}
                    />
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
