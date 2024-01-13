export default defineNuxtRouteMiddleware(async () => {
  const { supabase } = useSupabase();
  const { user } = useAuth();
  const usuario = ref();
  

  if (process.client) {
    const userExists = async () => {
      if (process.client) {
        usuario.value = await supabase
          .from("usuario")
          .select()
          .match({ user_id: user.value.id });
      }
      if(usuario.value.data == ''){
        return ''
      }else{
        return usuario.value.data[0].status;
      }
    };

    if (await userExists() == '' || usuario.value.status != 200) {
      return navigateTo("/setup");
    }else if(await userExists() != 'ativo'){
      return navigateTo("/minhaConta");
    }
  }
});
