"use client";
import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import React, { useState } from "react";

interface StageEditorProps {}

const StageEditor: React.FC<StageEditorProps> = props => {

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
        },
        {
            Action: "L2",
            Cut: false,
            DontCut: true,
            Caution: false,
            Danger: false,
            Widens: true,
            Tightens: false,
            Notes: "Tree inside"
        },
        {
            Action: "L4",
            Cut: false,
            DontCut: false,
            Caution: true,
            Danger: true,
            Widens: false,
            Tightens: false,
            Notes: "Uneven terrain"
        }
    ]);

    const handleFormSubmit = (formData: any) => {
        // Add new pacenote using the AddNewPacenote function or directly modify the state
        // Example using your existing AddNewPacenote function
        const newPacenotes = AddNewPacenote(
          formData.action,
          formData.Cut,
          formData.DontCut,
          formData.Caution,
          formData.Danger,
          formData.Widens,
          formData.Tightens,
          formData.notes
        );
        console.log("handleFormSubmit: ", newPacenotes)
        // Update the pacenotes state
        setPacenotes(newPacenotes);
      };

        // Function to add new pacenote
        const AddNewPacenote = (action: string, cut: boolean, dontCut: boolean, caution: boolean, danger: boolean, widens: boolean, tightens: boolean, notes: string) => {
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
            <PacenoteList pacenotes={pacenotes} setPacenotes={setPacenotes} />
            <NewPacenoteForm  onSubmit={handleFormSubmit} />
        </div>
    )
}

export default StageEditor
