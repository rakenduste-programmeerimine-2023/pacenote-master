"use server"
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const CheckAuth = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = supabase.auth.getUser();

  // Return a flag indicating whether the user is authenticated
  return user;
};