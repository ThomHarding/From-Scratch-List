const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzk3OTc2NSwiZXhwIjoxOTYzNTU1NzY1fQ.DqNrVOI0RfDeDiNO_Q7lOvmHQrejVeNmg4m6Nje5gcg';
const SUPABASE_URL = 'https://tfsniozmyuuijscfdqre.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getVtubers() {
    const response = await client
        .from('Virtual Youtubers')
        .select();
    return checkError(response);   
}

export async function getVtuber(id) {
    const response = await client
        .from('Virtual Youtubers')
        .select()
        .match({ id: id })
        .single();
    return checkError(response);   
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}