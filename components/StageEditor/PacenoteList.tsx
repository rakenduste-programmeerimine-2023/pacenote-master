"use client";
import React, { useState } from "react";

const PacenoteList = ({}) => {


    const [pacenotes, setPacenotes] = useState([
        {
            Action: "R6",
            Cut: true,
            DontCut: false,
            Caution: false,
            Danger: false,
            Widens: false,
            Tightens: true,
            notes: "Keep in"
        },
        {
            Action: "L2",
            Cut: false,
            DontCut: true,
            Caution: false,
            Danger: false,
            Widens: true,
            Tightens: false,
            notes: "Tree inside"
        },
        {
            Action: "L4",
            Cut: false,
            DontCut: false,
            Caution: true,
            Danger: true,
            Widens: false,
            Tightens: false,
            notes: "Uneven terrain"
        }
    ]);

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
                        <span>{pacenote.notes} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PacenoteList;