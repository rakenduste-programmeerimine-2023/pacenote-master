"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const SaveStageToDB = async (
    pacenotes: any[],
    stageID: number | null
) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    if (stageID === null){
        stageID = await CreateNewStage();
    } else {
        await DeletePacenotesFromStage(stageID);
    }

    const SaveStage = pacenotes.map(async (pacenote, index) => {
        const order = index + 1;
        const { data, error } = await supabase
            .from("pacenotes")
            .insert([
                {
                    order: order,
                    action: pacenote["action"],
                    notes: pacenote["notes"],
                    cut: pacenote["cut"],
                    dontcut: pacenote["dontcut"],
                    caution: pacenote["caution"],
                    danger: pacenote["danger"],
                    widens: pacenote["widens"],
                    tightens: pacenote["tightens"],
                    stage_id: stageID
                }
            ])
            .select()
        // Handle errors or return data as needed
        if (error) {
            console.error("Error inserting pacenote:", error)
            return null
        }
        return data
    })
    // Wait for all insert operations to complete
    const results = await Promise.all(SaveStage)
}

export const LoadStageFromDB = async (stageID: number | null) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    try {
        const { data: pacenotes, error } = await supabase
            .from("pacenotes")
            .select("*")
            .eq("stage_id", stageID)
            .order("order", { ascending: true })

        if (error) {
            console.error("Error loading pacenotes:", error)
            return null
        }

        return pacenotes
    } catch (error) {
        console.error("Error loading pacenotes:", error)
        return null
    }
}

export const CreateNewStage = async () => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    var stageID = null
    const {
        data: { user }
    } = await supabase.auth.getUser()
    if (user) {
        const { data, error } = await supabase
            .from("stages")
            .insert([
                {
                    name: "test stage",
                    public: false,
                    creator_id: user.id
                }
            ])
            .select()

        if (error) {
            console.error("Error creating stage:", error)
            return null // or handle the error appropriately
        }
        stageID = data[0]?.id;
    } else {
        console.error("No signed-in user")
        // Handle the case when there's no signed-in user if needed
    }
    return stageID
}

export const DeletePacenotesFromStage = async (stageID: Number) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    try {
        const { data, error } = await supabase
            .from("pacenotes")
            .delete()
            .eq("stage_id", stageID);

        if (error) {
            console.error("Error deleting pacenotes:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error("Error deleting pacenotes:", error);
        return null;
    }
};
