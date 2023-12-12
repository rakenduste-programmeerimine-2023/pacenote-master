"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

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

    return userData;
};