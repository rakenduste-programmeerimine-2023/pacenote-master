"use client"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { LoadProfileData } from "@/components/backend/Profile/beProfile"
import { Avatar, Typography, Theme, Box } from "@mui/material"
import Button from "@mui/material/Button"
import SideDrawer from "@/components/SideDrawer"
import { GameDetails } from "@/components/backend/Profile/beProfile"

const styles = (theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
})

interface ProfileData {
    avatarURL: string
    username: string
    description: string
    gameDetails?: GameDetails // Add this property for game details
}

interface ProfileProps {
    classes: Record<string, string>
}

export const Profile: React.FC<ProfileProps> = props => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { classes } = props
    const searchParams = useSearchParams()
    let profileID = searchParams.get("id") || null
    const [profileData, setProfileData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        document.title = "Stage Editor"
        const fetchData = async () => {
            try {
                let result = await LoadProfileData(profileID)
                if (result !== null) {
                    console.log("Profile Data:", result)
                    setProfileData(result)
                } else {
                    console.error("Error loading profile data")
                }
            } catch (error) {
                console.error("Error fetching profile data:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [profileID])

    useEffect(() => {
        // Log after the state has been updated
        console.log("profileData: ", profileData)

        // Update the document title here
        document.title = profileData
            ? `Profile: ${profileData.avatar}`
            : "Stage Editor"
    }, [profileData])

    console.log("profileID: ", profileID)

    // Add a log statement for debugging when the component renders
    console.log("Component rendered with profileData: ", profileData)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!profileData) {
        return <p>Error loading profile data</p>
    }

    return (
        <Box
            className={classes?.root}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Avatar
                sx={{ width: 100, height: 100 }}
                alt="Avatar"
                src={
                    profileData && profileData.length > 0
                        ? profileData[0].avatarURL.data.publicUrl
                        : ""
                }
            />
            <Typography variant="h5"> {profileData[0].username}</Typography>
            <Typography variant="body1">
                {" "}
                {profileData[0].description}
            </Typography>
            <div style={{ marginLeft: "auto" }}>
                <Button
                    variant="contained"
                    onClick={() => setDrawerOpen(true)}
                >
                    Menu
                </Button>
            </div>
            <SideDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            {profileData[0].gameDetails && (
                <div style={{ width: "80%", margin: "100px auto 0" }}>
                    <h3>Game Details</h3>
                    <p>Title: {profileData[0].gameDetails.name}</p>
                    <p>
                        Description:{" "}
                        {profileData[0].gameDetails.short_description}
                    </p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: profileData[0].gameDetails.pc_requirements
                                .recommended
                        }}
                    />
                    <img src={profileData[0].gameDetails.header_image} />
                    {/* Add more details as needed */}
                </div>
            )}
        </Box>
    )
}

export default Profile
