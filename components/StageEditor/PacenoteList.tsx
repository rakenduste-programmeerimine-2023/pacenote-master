
import React, { useState } from "react";
import '@/styles/PacenoteList.css';

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
          dontcut: boolean;
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

    const handleDelete = (index: number) => {
        const newItems = [...pacenotes];
        newItems.splice(index, 1);
        setPacenotes(newItems);
      };
      

    return (
        <div className="pacenote-list-container">
            <ul>
                {pacenotes.map((pacenote, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <div className="icon-container">
                            <img src={`/PacenoteIcons/${pacenote.action}.png`} alt={pacenote.action} className="list-image" />
                            {pacenote.cut && <img src="/PacenoteIcons/Cut.png" alt="Cut" className="list-image" />}
                            {pacenote.dontcut && <img src="/PacenoteIcons/Dontcut.png" alt="Dontcut" className="list-image" />}
                            {pacenote.caution && <img src="/PacenoteIcons/Caution.png" alt="Caution" className="list-image" />}
                            {pacenote.danger && <img src="/PacenoteIcons/Danger.png" alt="Danger" className="list-image" />}
                            {pacenote.widens && <img src="/PacenoteIcons/Widens.png" alt="Widens" className="list-image" />}
                            {pacenote.tightens && <img src="/PacenoteIcons/Tightens.png" alt="Tightens" className="list-image" />}
                            <div className="additional-note">
                                <span>{pacenote.notes} </span>
                            </div>
                        </div> 
                        
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PacenoteList;