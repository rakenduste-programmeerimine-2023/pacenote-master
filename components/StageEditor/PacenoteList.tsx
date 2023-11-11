"use client";
import React, { useState } from "react";

const PacenoteList = () => {
    const [items, setItems] = useState([
        {
            action: "R6",
            Cut: true,
            DontCut: false,
            Caution: false,
            Danger: false,
            Widens: false,
            Tightens: true,
            notes: "Keep in"
        },
        {
            action: "L2",
            Cut: false,
            DontCut: true,
            Caution: false,
            Danger: false,
            Widens: true,
            Tightens: false,
            notes: "Tree inside"
        },
        {
            action: "L4",
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
        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(newIndex, 0, draggedItem);
        setItems(newItems);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <span>{item.action} </span>
                        <input type="checkbox" checked={item.Cut} readOnly /> 
                        <input type="checkbox" checked={item.DontCut} readOnly /> 
                        <input type="checkbox" checked={item.Caution} readOnly /> 
                        <input type="checkbox" checked={item.Danger} readOnly /> 
                        <input type="checkbox" checked={item.Widens} readOnly /> 
                        <input type="checkbox" checked={item.Tightens} readOnly /> 
                        <span>{item.notes} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PacenoteList;