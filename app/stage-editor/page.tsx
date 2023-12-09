"use client"
import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import {
    LoadStageName,
    SaveStageToDB,
    LoadStageFromDB
} from "@/components/backend/StageEditor/beStageEditor"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import SideDrawer from "@/components/SideDrawer"

interface StageEditorProps {}

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

const StageEditor: React.FC<StageEditorProps> = props => {
    const searchParams = useSearchParams()
    let stageID =
        searchParams.get("stage") !== null
            ? Number(searchParams.get("stage"))
            : null

    const [pacenotes, setPacenotes] = useState<Array<Pacenote>>([])
    const [stageName, setStageName] = useState<string | null>(null)
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        document.title = "Stage Editor"
    }, [])

    useEffect(() => {
        const LoadStage = async () => {
            const result = await LoadStageFromDB(Number(stageID))
            if (result !== null) {
                setPacenotes(result as Pacenote[])
            }
            const loadedStageName = await LoadStageName(stageID)
            setStageName(loadedStageName ? loadedStageName[0]?.name : null)
        }
        if (stageID !== null) {
            LoadStage()
        }
    }, [stageID])

    const HandleAddNewPacenoteToList = (newPacenoteFromForm: Pacenote) => {
        setPacenotes(pacenotes => [
            ...pacenotes,
            {
                action: newPacenoteFromForm.action,
                cut: newPacenoteFromForm.cut,
                dontcut: newPacenoteFromForm.dontcut,
                caution: newPacenoteFromForm.caution,
                danger: newPacenoteFromForm.danger,
                widens: newPacenoteFromForm.widens,
                tightens: newPacenoteFromForm.tightens,
                notes: newPacenoteFromForm.notes
            }
        ])
    }

    const HandleFinishButtonClick = async () => {
        await SaveStageToDB(pacenotes, stageID, stageName)
    }

    const drawerItems = [
        { label: "Stages", path: "/stages" },
        { label: "Profile", path: "/profile" },
        { label: "New Stage", path: "/stage-editor" }
    ]

    return (
        <div style={{ width: "100%" }}>
            <h1>Stage editor</h1>
            <TextField
                id="outlined-basic"
                label="Stage name"
                variant="outlined"
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
                type="text"
                value={stageName ?? ""}
                onChange={e => setStageName(e.target.value)}
            />

            <Button
                variant="contained"
                onClick={() => setDrawerOpen(true)}
                style={{ marginLeft: "80%" }}
            >
                Menu
            </Button>

            <SideDrawer drawerItems={drawerItems} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

            <PacenoteList
                pacenotes={pacenotes}
                setPacenotes={setPacenotes}
            />
            <Link href={{ pathname: "/stages" }}>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={HandleFinishButtonClick}
                >
                    Finish
                </Button>
            </Link>
            <NewPacenoteForm onSubmit={HandleAddNewPacenoteToList} />
        </div>
    )
}

export default StageEditor
