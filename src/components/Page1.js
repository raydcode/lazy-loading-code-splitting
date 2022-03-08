import React from 'react';

const Page1 = ({ onPageChange }) => {
  return (
    <div className="App">
      Welcome to Page1
      <button onClick={() => onPageChange('page2')}>Page 2</button>
      <button onClick={() => onPageChange('page3')}>Page 3</button>
    </div>
  );
};
export default Page1;
