"use client"
import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import { SaveStageToDB } from "@/components/backend/StageEditor/beStageEditor"
import React, { useState, useEffect } from "react"
import Test from "@/components/backend/StageEditor/test"

interface StageEditorProps {}

const StageEditor: React.FC<StageEditorProps> = props => {
    /*const [testData, setTestData] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testResult = await Test()
                console.log("Test result: ", testResult)

                setTestData(testResult)
            } catch (error) {
                console.error("Error fetching test data:", error)
            }
        }

        fetchData()
    }, [])*/

    const [pacenotes, setPacenotes] = useState([
        {
            Action: "R6",
            Cut: true,
            DontCut: false,
            Caution: false,
            Danger: false,
            Widens: false,
            Tightens: true,
            Notes: "Keep in"
        }
    ])

    const HandleAddNewPacenoteToList = (newPacenoteFromForm: any) => {
      setPacenotes(pacenotes => [
          ...pacenotes,
          {
              Action: newPacenoteFromForm.Action,
              Cut: newPacenoteFromForm.Cut,
              DontCut: newPacenoteFromForm.DontCut,
              Caution: newPacenoteFromForm.Caution,
              Danger: newPacenoteFromForm.Danger,
              Widens: newPacenoteFromForm.Widens,
              Tightens: newPacenoteFromForm.Tightens,
              Notes: newPacenoteFromForm.Notes
          }
      ]);
  }

    const HandleFinishButtonClick = async () => {
        SaveStageToDB(pacenotes, 1)
    }

    return (
        <div>
            <h1>Stage editor</h1>
            {/*{testData && (
              <pre>{testData}</pre>
            )}*/}
            <PacenoteList pacenotes={pacenotes} setPacenotes={setPacenotes}/>
            <NewPacenoteForm onSubmit={HandleAddNewPacenoteToList} />
            <button type="submit" onClick={HandleFinishButtonClick}>
                Finish
            </button>
        </div>
    )
}

export default StageEditor
