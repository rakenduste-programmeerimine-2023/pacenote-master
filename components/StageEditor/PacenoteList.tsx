
import React, { useState } from "react";


    interface PacenoteListProps {
        pacenotes: {
            action: string;
            cut: boolean;
            dontcut: boolean;
            caution: boolean;
            danger: boolean;
            widens: boolean;
            tightens: boolean;
            notes: string;
        }[];
        setPacenotes: React.Dispatch<
        React.SetStateAction<{
          action: string;
          cut: boolean;
          DontCut: boolean;
          caution: boolean;
          danger: boolean;
          widens: boolean;
          tightens: boolean;
          notes: string;
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
                        <span>{pacenote.action} </span>
                        <input type="checkbox" checked={pacenote.cut} readOnly /> 
                        <input type="checkbox" checked={pacenote.dontcut} readOnly /> 
                        <input type="checkbox" checked={pacenote.caution} readOnly /> 
                        <input type="checkbox" checked={pacenote.danger} readOnly /> 
                        <input type="checkbox" checked={pacenote.widens} readOnly /> 
                        <input type="checkbox" checked={pacenote.tightens} readOnly /> 
                        <span>{pacenote.notes} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PacenoteList;