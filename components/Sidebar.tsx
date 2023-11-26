import React from 'react';

interface SidebarProps {
  active: string;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <aside className='w-64' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ${active === 'dashboard' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
              <span className='ml-3'>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='#' className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ${active === 'projects' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
              <span className='ml-3'>Projects</span>
            </a>
          </li>
          <li>
            <a href='#' className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ${active === 'estimates' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
              <span className='ml-3'>Estimates</span>
            </a>
          </li>
          {/* Additional menu items */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
