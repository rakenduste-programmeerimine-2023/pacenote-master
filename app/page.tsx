import NewPacenoteForm from '@/components/NewPacenoteForm';
import React from 'react';

interface MyComponentProps {

}

const MyComponent: React.FC<MyComponentProps> = (props) => {


  return (
    <div>
      <h1>This is the index page of PacenoteMaster</h1>
      <NewPacenoteForm/>
    </div>
  );
};

export default MyComponent;