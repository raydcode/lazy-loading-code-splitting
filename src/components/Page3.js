import React from 'react';

const Page3 = ({ onPageChange }) => {
  return (
    <div className="App">
      Welcome to Page3
      <button onClick={() => onPageChange('page1')}>Page 1</button>
      <button onClick={() => onPageChange('page2')}>Page 2</button>
    </div>
  );
};

export default Page3;
