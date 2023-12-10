import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Link from "next/link"
import { GetUserID } from "./backend/beSideDrawer"
import { Button } from "@mui/material"

interface SideDrawerProps {
    drawerItems: { label: string; path: string }[]
    isOpen: boolean
    onClose: () => void
}

const drawerItems = [
    { label: "Stages", path: "/stages" },
    { label: "Profile", path: "/profile" },
    { label: "New Stage", path: "/stage-editor" }
]

const SideDrawer: React.FC<SideDrawerProps> = ({
    drawerItems,
    isOpen,
    onClose

}) => {
    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
        >
            <List style={{display: "flex", flexDirection: "column", gap: "20px", }}>
                <Link
                    href={{
                        pathname: "/profile",
                        query: { id: GetUserID }
                    }}
                >
                   <Button variant="contained">Profile</Button> 
                </Link>
                <Link
                    href={{ 
                        pathname: "/stages",
                        
                     }}>
                    <Button variant="contained">Stages</Button>
                </Link>
                <Link
                    href={{ 
                        pathname: "/stage-editor",
                        
                    }}>
                    <Button variant="contained">New stage</Button>
                </Link>
            </List>
        </Drawer>
    )
}

export default SideDrawer
