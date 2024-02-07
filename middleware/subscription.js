import Stripe from 'stripe';

export default defineNuxtRouteMiddleware(async () => {
  const { supabase } = useSupabase();
  const { user } = useAuth();

  const usuario = ref();
  if (process.client) {

const stripe = new Stripe('sk_test_51Oh9oSHA4IKR1tD0BwY4UGubWHXOCKqqIr9wRG43o6BzWBrpazIPSRH5lDjjWHJeeGezX5PehsVmFxDRXqq66Ru600LKZe6ZmV');
const customers = await stripe.customers.search({
    query: `email:'${user.value.email}'`,
    expand: ['data.subscriptions'],  
});

if(customers.data[0].subscriptions.data[0] === undefined){
  console.log('teste')
  return navigateTo("/minhaConta");
}else{
  const subscription = await stripe.subscriptions.retrieve(
    customers.data[0].subscriptions.data[0].id
    );
    if(subscription.status === 'active' || subscription.status === 'trialing'){
    }else{
      return navigateTo("/minhaConta");
    }
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
