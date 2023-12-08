"use client"
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { LoadProfileData } from "@/components/backend/Profile/beProfile";
import { Avatar, Typography, Theme, Box } from '@mui/material';
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Link from "next/link"


const styles = (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

interface ProfileProps {
    classes: Record<string, string>;
}

export const Profile: React.FC<ProfileProps> = props => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { classes } = props;
    const searchParams = useSearchParams();
    let profileID = searchParams.get('id') || null;
    const [profileData, setProfileData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Stage Editor';
        const fetchData = async () => {
            try {
                let result = await LoadProfileData(profileID);
                if (result !== null) {
                    console.log("Profile Data:", result);
                    setProfileData(result);
                } else {
                    console.error("Error loading profile data");
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [profileID]);

    useEffect(() => {
        // Log after the state has been updated
        console.log("profileData: ", profileData);
    
        // Update the document title here
        document.title = profileData ? `Profile: ${profileData.avatar}` : 'Stage Editor';
    }, [profileData]);

    console.log("profileID: ", profileID);
    
    // Add a log statement for debugging when the component renders
    console.log("Component rendered with profileData: ", profileData);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!profileData) {
        return <p>Error loading profile data</p>;
    }

    const drawerItems = [
        { label: "Stages", path: "/stages" },
        { label: "Profile", path: "/profile" },
        { label: "New Stage", path: "/stage-editor" }
    ]

    return (
        <Box className={classes?.root}>
      <Avatar
        sx={{ width: 100, height: 100 }}
        alt="Avatar"
        src={profileData && profileData.length > 0 ? profileData[0].avatarURL.data.publicUrl : ""}
      />
      <Typography variant="h5"> {profileData[0].username}</Typography>
      <Typography variant="body1"> {profileData[0].description}</Typography>
      <Button
                variant="contained"
                onClick={() => setDrawerOpen(true)}
                style={{ marginLeft: "80%" }}
            >
                Menu
            </Button>
      <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <List>
                    {drawerItems.map((item, index) => (
                        <Link
                            href={item.path}
                            key={index}
                        >
                            <ListItem
                                button
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
    </Box>
    );
};

export default Profile;