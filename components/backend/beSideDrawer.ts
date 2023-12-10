"use server"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const GetUserID = async () => {
    var userID;
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const {
        data: { user }
    } = await supabase.auth.getUser()

    if (user != null) {
        userID = user.id

        return userID
    } else {
      return "0"
    }
}
