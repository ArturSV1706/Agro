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
      console.log(usuario.value.data[0].status);
      return usuario.value.data[0].status;
    };

    if (await userExists() != 'ativo') {
      return navigateTo("/minhaConta");
    }
  }
});
