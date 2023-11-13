"use client";
import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import { SaveStageToDB } from "@/components/backend/StageEditor/beStageEditor";
import Test from "@/components/backend/StageEditor/test"
import React, { useState, useEffect } from "react";

interface StageEditorProps {}

const StageEditor: React.FC<StageEditorProps> = props => {

  const [testData, setTestData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testResult = await Test();
        console.log("Test result: ", testResult);

        setTestData(testResult);
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
    };

    fetchData();
  }, []);


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
        }]);

    const handleFormSubmit = (formData: any) => {
        const newPacenotes = AddNewPacenoteToList(
          formData.action,
          formData.Cut,
          formData.DontCut,
          formData.Caution,
          formData.Danger,
          formData.Widens,
          formData.Tightens,
          formData.notes
        );
        setPacenotes(newPacenotes);
      };

      const handleFinishButtonClick = async () => {
        SaveStageToDB(pacenotes, 1)
      };


        // Function to add new pacenote
        const AddNewPacenoteToList = (action: string, cut: boolean, dontCut: boolean, caution: boolean, danger: boolean, widens: boolean, tightens: boolean, notes: string) => {
            const newPacenotes = [
                ...pacenotes,
                {
                    Action: action,
                    Cut: cut,
                    DontCut: dontCut,
                    Caution: caution,
                    Danger: danger,
                    Widens: widens,
                    Tightens: tightens,
                    Notes: notes,
                },
            ];
            return newPacenotes;
        };

    return (
        <div>
            <h1>Stage editor</h1>
            <h1>Your Page</h1>
            {testData && (
              <pre>{testData}</pre>
            )}
            <PacenoteList pacenotes={pacenotes} setPacenotes={setPacenotes} />
            <NewPacenoteForm  onSubmit={handleFormSubmit} />
            <button type="submit" onClick={handleFinishButtonClick}>Finish</button>
        </div>
    )
}

export default StageEditor
