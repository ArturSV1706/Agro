import Stripe from "stripe";

export default defineNuxtRouteMiddleware(async () => {
  const { supabase } = useSupabase();
  const { user } = useAuth();

  const usuario = ref();
  const res =ref();

  if (process.client) {
    res.value = await $fetch('/api/stripeService', {
      method: 'POST',
      body: {
          email: user.value.email
      }
  })

    // const stripe = new Stripe(
    //   "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"
    // );
    // const customers = await stripe.customers.search({
    //   query: `email:'${user.value.email}'`,
    //   expand: ["data.subscriptions"],
    // });

    
        if (
          res.value.subscription.status === "active" ||
          res.value.subscription.status === "trialing"
        ) {
        } else {
          return navigateTo("/minhaConta");
        }
      
    
  }

  // if (process.client) {
  //   const userExists = async () => {
  //     if (process.client) {
  //       usuario.value = await supabase
  //         .from("usuario")
  //         .select()
  //         .match({ user_id: user.value.id });
  //     }
  //     if(usuario.value.data == ''){
  //       return ''
  //     }else{
  //       return usuario.value.data[0].status;
  //     }
  //   };

  //   if (await userExists() == '' || usuario.value.status != 200) {
  //     return navigateTo("/setup");
  //   }else if(await userExists() != 'ativo'){
  //     return navigateTo("/minhaConta");
  //   }
  // }
});
