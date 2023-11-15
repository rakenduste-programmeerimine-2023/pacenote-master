"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

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
        const { data: stageData, error: stageError } = await supabase
            .from("stages")
            .select("name")
            .eq("id", stageID)
            .single();

        if (stageError) {
            console.error("Error loading stage name:", stageError);
            return null;
        }

        // Combine pacenotes and stage name
        const result = {
            pacenotes,
            stageName: stageData ? stageData.name : null,
        };

        return result;
    } catch (error) {
        console.error("Error loading data:", error);
        return null;
    }
}