"use client"

import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { LoadStageFromDB } from "@/components/backend/ViewStage/beViewStage"

interface ReadStageProps {}
interface Pacenote {
    action: string
    cut: boolean
    dontcut: boolean
    caution: boolean
    danger: boolean
    widens: boolean
    tightens: boolean
    notes: string
}

const ReadStage: React.FC<ReadStageProps> = props => {
    const searchParams = useSearchParams()
    let stageID =
        searchParams.get("stage") !== null
            ? Number(searchParams.get("stage"))
            : null
    const [pacenotes, setPacenotes] = useState<Array<Pacenote>>([])
    const [currentGroup, setCurrentGroup] = useState<number>(0);
    let [stageName, setStageName] = useState<string | null>(null);



    useEffect(() => {
        const LoadStage = async () => {
            const result = await LoadStageFromDB(Number(stageID))
            if (result !== null) {
                stageName = result.stageName;
                setPacenotes(result.pacenotes);
            }
        }
        if (stageID !== null) {
            LoadStage()
            document.title = String(stageName)
        }
    }, [stageID])

        // Calculate the range of pacenotes to display based on the current group
        const startIndex = currentGroup;
        const endIndex = Math.min(currentGroup + 3, pacenotes.length);
    
        // Filter the pacenotes based on the current group
        const displayedPacenotes = pacenotes.slice(startIndex, endIndex);
    
        const handlePrevious = () => {
            // Ensure we don't go below 0
            setCurrentGroup(Math.max(0, currentGroup - 1));
        };
    
        const handleNext = () => {
            // Ensure we don't go beyond the pacenotes length
            setCurrentGroup(Math.min(currentGroup + 1, pacenotes.length - 3));
        };

    return (
        <div>
            <h1>{stageName}</h1>
            <ul>
                {pacenotes.map((pacenote, index) => (
                    <li key={index}>
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
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}
export default ReadStage
