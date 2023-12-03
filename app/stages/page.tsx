"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { DeleteStageFromDB, LoadAllStagesFromDB } from "@/components/backend/Stages/beStages"
import "@/styles/Stages.css";
interface StagesProps {}

const Stages: React.FC<StagesProps> = (props) => {
    const [stages, setStages] = useState<any[] | undefined>(undefined);
    useEffect(() => {
        document.title = "Stages"
    }, [])

    useEffect(() => {
        const LoadAllStages = async () => {
          try {
            let stages = await LoadAllStagesFromDB();
            setStages(stages);
          } catch (error) {
            console.error("Error loading stages:", (error as Error).message);
          }
        };
    
        LoadAllStages();
      }, []);

    const handleDelete = (index: number) => {
        DeleteStageFromDB(stages![index].id);
        const newItems = [...stages!];
        newItems.splice(index, 1);
        setStages(newItems);
      };

    return (
        <div className="list-width">
        <h1>Stages</h1>
            <Link href={{ pathname: "/stage-editor"}}>
                <button>New stage</button>
            </Link>
        <div className="stages-container">
            <ul className="stage-list">
                {stages?.map((stage, index) => (
                    <li key={index}>
                        <div className="stage-item">
                            <div className="stage-name">
                                <Link href={{ pathname: "/view-stage", query: { stage: stage.id } }}>
                                    <span>{stage.name} </span>
                                </Link>
                            </div>
                            <div className="stage-actions">
                                <Link href={{ pathname: "/stage-editor", query: { stage: stage.id } }}>
                                    <button>Edit stage </button>
                                </Link>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Stages
