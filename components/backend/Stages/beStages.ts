"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const LoadAllStagesFromDB = async () => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const {
        data: { user }
    } = await supabase.auth.getUser()

    if (user) {
        const { data: stages, error } = await supabase
            .from("stages")
            .select("*")
            .eq("creator_id", user.id)
        if (error) {
            console.error("Error fetching stages:", error.message)
            return []
        }
        return stages || []
    }
}

export const DeleteStageFromDB = async (stageID: number) => {
    try {
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
  
      const { data, error } = await supabase
        .from("stages")
        .delete()
        .eq("id", stageID);
  
      if (error) {
        console.error("Error deleting stage:", error.message);
        return false;
      }
  
      console.log("Stage deleted successfully:", data);
      return true;
    } catch (error) {
      console.error("Error in DeleteStageFromDB:", (error as Error).message);
      return false; 
    }
  };
