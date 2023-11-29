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
                setPacenotes(result.pacenotes);
                setStageName(result.stageName);
                document.title = String(result.stageName);
            }
        };

        if (stageID !== null) {
            LoadStage();
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

        const getPacenoteIcon = (action: string) => {
            return `/PacenoteIcons/${action}.png`;
          };

    return (
        <div>
            <h1>{stageName}</h1>
            <ul>
                {displayedPacenotes.map((pacenote, index) => (
                    <li key={index}>
                        <img src={getPacenoteIcon(pacenote.action)} alt={pacenote.action} className="main-icon" />
                            {pacenote.cut && <img src="/PacenoteIcons/Cut.png" alt="Cut" className="view-image" />}
                            {pacenote.dontcut && <img src="/PacenoteIcons/Dontcut.png" alt="Dontcut" className="view-image" />}
                            {pacenote.caution && <img src="/PacenoteIcons/Caution.png" alt="Caution" className="view-image" />}
                            {pacenote.danger && <img src="/PacenoteIcons/Danger.png" alt="Danger" className="view-image" />}
                            {pacenote.widens && <img src="/PacenoteIcons/Widens.png" alt="Widens" className="view-image" />}
                            {pacenote.tightens && <img src="/PacenoteIcons/Tightens.png" alt="Tightens" className="view-image" />}
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
