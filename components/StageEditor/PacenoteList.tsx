
import React, { useState } from "react";


    interface PacenoteListProps {
        pacenotes: {
            Action: string;
            Cut: boolean;
            DontCut: boolean;
            Caution: boolean;
            Danger: boolean;
            Widens: boolean;
            Tightens: boolean;
            Notes: string;
        }[];
        setPacenotes: React.Dispatch<
        React.SetStateAction<{
          Action: string;
          Cut: boolean;
          DontCut: boolean;
          Caution: boolean;
          Danger: boolean;
          Widens: boolean;
          Tightens: boolean;
          Notes: string;
        }[]>
      >;
    }
  
  const PacenoteList: React.FC<PacenoteListProps> = ({ pacenotes, setPacenotes }) => {




    const handleDragStart = (
        e: React.DragEvent<HTMLLIElement>,
        index: number
    ) => {
        e.dataTransfer.setData("text/plain", index.toString()); // Convert index to string
    };

    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
    };

    const handleDrop = (
        e: React.DragEvent<HTMLLIElement>,
        newIndex: number
    ) => {
        e.preventDefault();
        const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const newItems = [...pacenotes];
        const [draggedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(newIndex, 0, draggedItem);
        setPacenotes(newItems);
    };

    return (
        <div>
            <ul>
                {pacenotes.map((pacenote, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <span>{pacenote.Action} </span>
                        <input type="checkbox" checked={pacenote.Cut} readOnly /> 
                        <input type="checkbox" checked={pacenote.DontCut} readOnly /> 
                        <input type="checkbox" checked={pacenote.Caution} readOnly /> 
                        <input type="checkbox" checked={pacenote.Danger} readOnly /> 
                        <input type="checkbox" checked={pacenote.Widens} readOnly /> 
                        <input type="checkbox" checked={pacenote.Tightens} readOnly /> 
                        <span>{pacenote.Notes} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PacenoteList;