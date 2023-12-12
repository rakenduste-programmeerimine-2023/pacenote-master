"use client"
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { LoadProfileData } from "@/components/backend/Profile/beProfile";
import { CheckAuth } from "@/components/backend/beAuth";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = props => {
    const searchParams = useSearchParams();
    let profileID = searchParams.get('id') || null;
    const [profileData, setProfileData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
          const isAuthenticated = await CheckAuth();
          if (!isAuthenticated) {
            window.location.href = '/login';
          }
        };
        checkAuthentication();
    }, []);

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
        <div>
            <p>Profile: {profileData[0].username}</p>
            <p>Description: {profileData[0].description}</p>
            <img src={profileData && profileData.length > 0 ? profileData[0].avatarURL.data.publicUrl : ""} alt="Avatar" />
        </div>
    );
};

export default Profile;