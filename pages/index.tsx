import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import EstimateForm from '../components/EstimateForm';

const Home: React.FC = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar active='estimates' />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
          <div className='container mx-auto px-6 py-8'>
            <EstimateForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
