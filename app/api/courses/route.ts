import { NextResponse, NextRequest } from 'next/server'
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseAdmin } from '@/utils/supabase-admin';

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method !== 'GET') {
    return new Response('Wrong request', {
      status: 405
    })
  }

  try {
    const { data: courses, error } = await supabaseAdmin
      .from('courses')
      .select('*');

    if (error) throw error;

    return NextResponse.json( courses )
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
