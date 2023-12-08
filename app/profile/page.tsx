"use client"
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { LoadProfileData } from "@/components/backend/Profile/beProfile";
import { CircularProgress, Avatar, Typography, Container, Theme, Box } from '@mui/material';


const styles = (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginBottom: theme.spacing(2),
    },
  });

interface ProfileProps {
    classes: Record<string, string>;
}

export const Profile: React.FC<ProfileProps> = props => {
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

    return (
        <Box className={classes?.root}>
      <Avatar
        className={classes?.avatar}
        alt="Avatar"
        src={profileData && profileData.length > 0 ? profileData[0].avatarURL.data.publicUrl : ""}
      />
      <Typography variant="h5">Username: {profileData[0].username}</Typography>
      <Typography variant="body1">Description: {profileData[0].description}</Typography>
    </Box>
    );
};

export default Profile;