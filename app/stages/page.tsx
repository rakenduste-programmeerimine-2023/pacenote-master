"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { DeleteStageFromDB, LoadAllStagesFromDB } from "@/components/backend/Stages/beStages"
import "@/styles/Stages.css";

interface StagesProps {}

const Stages: React.FC<StagesProps> = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [stages, setStages] = useState<any[] | undefined>(undefined);
    useEffect(() => {
        document.title = "Stages"
    }, [])

    useEffect(() => {
        const LoadAllStages = async () => {
          try {
            let stages = await LoadAllStagesFromDB();
            setStages(stages);
          } catch (error) {
            console.error("Error loading stages:", (error as Error).message);
          }
        };
    
        LoadAllStages();
      }, []);

    const handleDelete = (index: number) => {
        DeleteStageFromDB(stages![index].id);
        const newItems = [...stages!];
        newItems.splice(index, 1);
        setStages(newItems);
      };

      const drawerItems = [
        { label: 'Stages', path: '/stages' },
        { label: 'Profile', path: '/profile' },
        { label: 'New Stage', path: '/stage-editor' },
      ];

    return (
        <div className="list-width">
            <h1>Stages</h1>
            <Button variant="contained" onClick={() => setDrawerOpen(true)}>
                Open Drawer
            </Button>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {drawerItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

            <Link href={{ pathname: "/stage-editor"}}>
                <Button variant="contained">New stage</Button>
            </Link>
        <div className="stages-container">
            <ul className="stage-list">
                {stages?.map((stage, index) => (
                    <li key={index}>
                        <div className="stage-item">
                            <div className="stage-name">
                                <Link href={{ pathname: "/view-stage", query: { stage: stage.id } }}>
                                    <span>{stage.name} </span>
                                </Link>
                            </div>
                            <div className="stage-actions">
                                <Link href={{ pathname: "/stage-editor", query: { stage: stage.id } }}>
                                    <Button variant="contained">Edit stage </Button>
                                </Link>
                                <Button variant="outlined" onClick={() => handleDelete(index)}>Delete</Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Stages
