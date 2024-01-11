export default defineNuxtRouteMiddleware(async () => {
  const { supabase } = useSupabase();
  const { user } = useAuth();
  const usuario = ref();

  if (process.client && user.value) {
    const userExists = async () => {
      if (process.client) {
        usuario.value = await supabase
          .from("usuario")
          .select()
          .match({ user_id: user.value.id });
      }
      // console.log(usuario.value.data[0]);
      return usuario.value.data[0];
    };

    if (await userExists()) {
      // console.log("setup " + "true");
    } else {
        return navigateTo("/setup");
      // console.log("setup " + "false");
    }
  }
});
