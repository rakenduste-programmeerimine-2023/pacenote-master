import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import PacenoteList from "@/components/StageEditor/PacenoteList"
import React from "react"

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = props => {
    return (
        <div>
            <h1>Stage editor</h1>
            <PacenoteList/>
            <NewPacenoteForm/>
        </div>
    )
}

export default MyComponent
