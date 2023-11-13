"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

    export const SaveStageToDB = async (pacenotes: any[], stageID: number) => {
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        // Use Promise.all to wait for all insert operations to complete
        const SaveStage = pacenotes.map(async pacenote => {
            const { data, error } = await supabase
                .from("pacenotes")
                .insert([
                    {
                        action: pacenote["Action"],
                        notes: pacenote["Notes"],
                        cut: pacenote["Cut"],
                        dontcut: pacenote["DontCut"],
                        caution: pacenote["Caution"],
                        danger: pacenote["Danger"],
                        widens: pacenote["Widens"],
                        tightens: pacenote["Tightens"],
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

        // results now contains the data or null for each insert operation
        console.log(results)
    }
