"use client"
import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import { SaveStageToDB, LoadStageFromDB } from "@/components/backend/StageEditor/beStageEditor"
import React, { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'


import Test from "@/components/backend/StageEditor/test"

interface StageEditorProps {}

interface Pacenote {
  action: string;
  cut: boolean;
  dontcut: boolean;
  caution: boolean;
  danger: boolean;
  widens: boolean;
  tightens: boolean;
  notes: string;
}

const StageEditor: React.FC<StageEditorProps> = props => {
    const searchParams = useSearchParams()
    const stageID = searchParams.get('stage')

    const [pacenotes, setPacenotes] = useState<Array<Pacenote>>([]);

    /*const [testData, setTestData] = useState<string | null>(null)*/

    useEffect(() => {
      const LoadStage = async () => {
        const result = await LoadStageFromDB(Number(stageID));
        if (result !== null){
          setPacenotes(result as Pacenote[]);
        }
      };
      if (stageID !== null){
        LoadStage();
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
      ]);
  }

    const HandleFinishButtonClick = async () => {
        SaveStageToDB(pacenotes, Number(stageID))
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
