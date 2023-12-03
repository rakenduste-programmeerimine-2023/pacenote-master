"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Button from '@mui/material/Button'
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
                <Button variant="contained">New stage</Button>
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
                                    <Button variant="contained">Edit stage </Button>
                                </Link>
                                <Button variant="outlined" onClick={() => handleDelete(index)}>Delete</Button>
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
