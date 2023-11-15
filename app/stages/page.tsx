"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { DeleteStageFromDB, LoadAllStagesFromDB } from "@/components/backend/Stages/beStages"
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
        <div>
            <h1>Stages</h1>
            <Link href={{ pathname: "/stage-editor"}}>
                <button>New stage</button>
            </Link>
            <ul>
                {stages?.map((stage, index) => (
                    <li key={index}>
                        <div>
                            <Link href={{ pathname: "/view-stage", query: { stage: stage.id } }}>
                            <span>{stage.name} </span>
                            </Link>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stages
