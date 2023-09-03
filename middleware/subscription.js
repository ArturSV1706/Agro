export default defineNuxtRouteMiddleware(async () => {
  const { user, loadPageGet } = useAuth();


  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: "loja_0371c441d22a4a95a08cc82de4f1fca3",
    },
  };

  const response = ref();
  const customerId = ref();
  const subscriptionId = ref();
  const status = ref();

  if (process.client && user.value) {

    customerId.value = await fetch(
      'https://public.billsby.com/api/v1/rest/core/loja/customers?page=1&pageSize=1&search=' + user.value.email,
      options
    )
      .then((response) => response.json())
      .then((response) => customerId.value = response.results[0].customerUniqueId)
      .catch((err) => console.error(err));

      console.log(customerId.value)

    subscriptionId.value = await fetch(
        'https://public.billsby.com/api/v1/rest/core/loja/customers/2GPVPIZOYX/subscriptions',
      options
    )
      .then((response) => response.json())
      .then((response) => subscriptionId.value = response[0].subscriptionId)
      .catch((err) => console.error(err));

      console.log(subscriptionId.value)


  

    status.value = await fetch(
      "https://public.billsby.com/api/v1/rest/core/loja/subscriptions/" + "GPW3VV2EME",
      options
    )
      .then((response) => response.json())
      .then((response) => (status.value = response.status))
      .catch((err) => console.error(err));

    console.log(status.value);

    if (status.value != 'Active') return navigateTo('/minhaConta')
  
  
}
});
