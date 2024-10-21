import React, { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value); // Set the default active tab

  return (
    <div className="flex flex-col w-full">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
              activeTab === tab.value
                ? 'bg-blue-500 text-white font-bold'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="border border-gray-300 rounded-lg p-4">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`transition-opacity duration-300 ${
              activeTab === tab.value ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
