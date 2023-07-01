import React from 'react';
import '../styles/App.css';

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const name = urlParams.get('name');
  const designation = urlParams.get('designation');

  return (
    <div className='details'>
      Employee {id} named {name} works as {designation}
    </div>
  );
};

export default App;
