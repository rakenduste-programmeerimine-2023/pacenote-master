import NewPacenoteForm from "@/components/StageEditor/NewPacenoteForm"
import React from "react"

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = props => {
    return (
        <div>
            <h1>Stage editor</h1>
            <NewPacenoteForm/>
        </div>
    )
}

export default MyComponent
