"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import axios from 'axios';

/*export const LoadProfileData = async (profileID: string | null) => {
    if (profileID === null) {
        console.error("Invalid profile ID");
        return null;
    }
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: { user }
    } = await supabase.auth.getUser();
    
    let userData;

    if (user) {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("user_id", profileID);

        if (error) {
            console.error("Error loading user data:", error);
            return null;
        }

        userData = data;
    } else {
        console.error("No signed-in user");
    }

    return userData;
};*/

export type GameDetails = {
    // Define the properties you expect in the game details
    name: string;
    short_description: string;
    pc_requirements: {
        recommended: string;
    }
    header_image: string;
}

const getSteamGameDetails = async (appId: string): Promise<GameDetails | null> => {
    const apiUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}`;

    try {
        const response = await axios.get<{ [key: string]: { success: boolean; data: GameDetails } }>(apiUrl);
        const gameDetails = response.data[appId];

        if (gameDetails.success) {
            return gameDetails.data;
        } else {
            console.error('Steam API request was not successful:', gameDetails);
            return null;
        }
    } catch (error) {
        console.error('Error fetching Steam game details:', error);
        return null;
    }
};

export const LoadProfileData = async (profileID: string | null) => {
    if (profileID === null) {
        console.error("Invalid profile ID");
        return null;
    }

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: { user }
    } = await supabase.auth.getUser();

    let userData: any[] = [];

    if (user) {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("user_id", profileID);

        if (error) {
            console.error("Error loading user data:", error);
            return null;
        }

        userData = data;

        // Fetch image URL and add it to the user data
        if (userData && userData.length > 0) {
            const avatarURL = await supabase
                .storage
                .from('Avatars')
                .getPublicUrl(`${userData[0].avatar}`);
            
            // Add the avatar URL to the user data
            userData[0].avatarURL = avatarURL;
        }
    } else {
        console.error("No signed-in user");
    }

    const appId = '1849250'; // Replace with the desired app ID
    const gameDetails = await getSteamGameDetails(appId);

    if (gameDetails) {
        // Do something with the gameDetails, e.g., add it to the userData object
        userData[0].gameDetails = gameDetails;
    }

    return userData;
};