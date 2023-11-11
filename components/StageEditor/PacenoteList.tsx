"use client";
import React, { useState } from 'react';

const DraggableList = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    // Add more items as needed
  ]);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString()); // Convert index to string
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, newIndex: number) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(newIndex, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;