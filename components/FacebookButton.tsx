import { Button } from "@mui/material"
import { useSupabase } from '@/app/supabase-provider';

export const FacebookButton = () => {
    const { supabase } = useSupabase();
    async function signInWithFacebook() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'facebook',
          options: {
            redirectTo: window.location.origin
          }
        })
        console.log(data);
      }
      
    return <Button onClick={signInWithFacebook} >Iniciar Sesion con Facebbok</Button>
}