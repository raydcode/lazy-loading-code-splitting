import React from 'react';

const Page2 = ({ onPageChange }) => {
  return    <div className="App">
     Welcome to Page2
  <button onClick={() => onPageChange('page1')}>Page 1</button>
  <button onClick={() => onPageChange('page3')}>Page 3</button>
</div>
};

export default Page2;
