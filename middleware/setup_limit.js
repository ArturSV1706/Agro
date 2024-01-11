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
      return usuario.value.data[0];
    };

    if (await userExists()) {
      // console.log("setup " + "true");
      return navigateTo("/");
    } else {
      // console.log("setup " + "false");
    }
  }
});
