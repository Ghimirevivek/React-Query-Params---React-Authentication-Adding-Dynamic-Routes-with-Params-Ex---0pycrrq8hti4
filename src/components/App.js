import React from 'react';
import '../styles/App.css';
import { useParams } from 'react-router';

const App = () => {
  const { id, name, designation } = useParams();

  return (
    <div className='details'>
      Employee {id} named {name} works as {designation}
    </div>
  );
};

export default App;
