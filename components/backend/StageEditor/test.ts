"use server";
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Test() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: test } = await supabase.from("test").select("testint");
    const { data, error } = await supabase.from('test').insert([
      { testint: '99' },
      { testint: '11' },
    ]).select()
        
    console.log(data);
    return JSON.stringify(data, null, 2);
}