'use client';

import { useSupabase } from '@/app/supabase-provider';
import { FacebookButton } from '@/components/FacebookButton';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthUI() {
  const { supabase } = useSupabase();
  return (
    <div className="flex flex-col space-y-4">
      <FacebookButton/>
      {/* <Auth
        supabaseClient={supabase}
        providers={['facebook']}
        redirectTo={`https://llvycgsxqpebqcbggyba.supabase.co/auth/v1/callback`}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#52525b'
              }
            }
          }
        }}
        theme="dark"
        localization={{
          variables: {
            sign_in: {
              email_label: 'Ingresa tu direccion de email',
              email_input_placeholder: 'Email',
              password_label: 'Tu contraseña',
              password_input_placeholder: 'Contraseña',
              button_label: 'Ingresar',
              link_text: 'Ya tiene una cuenta? Ingresa',
            },
            sign_up: {
              email_label: 'Ingresa tu direccion de email',
              email_input_placeholder: 'Email',
              password_label: 'Tu contraseña',
              password_input_placeholder: 'Contraseña',
              button_label: 'Registrarse',
              link_text: 'No tiene una cuenta? Registrate!',
            }
          },
        }}
      /> */}
    </div>
  );
}
