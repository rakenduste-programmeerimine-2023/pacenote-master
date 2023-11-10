// Import React and any other necessary libraries
import React from 'react';

interface PacenoteFormComponentProps  {
  type: string;
  name: string;
  value: string;
  label: string;
}


// Define your component
const PacenoteFormComponent: React.FC<PacenoteFormComponentProps> = (props) => {
  const { type, name, value, label } = props;
  return (
    <label>
      <input type={type} name={name} value={value} /> {label}
    </label>
    );
};

// Export your component
export default PacenoteFormComponent;