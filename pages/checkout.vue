
<script setup>

const options = {
  method: 'GET',
  headers: {accept: 'application/json', ApiKey: 'loja_0371c441d22a4a95a08cc82de4f1fca3'}
};

const response = ref()
const status = ref()
const api = async() =>{

response.value = await fetch('https://public.billsby.com/api/v1/rest/core/loja/customers/948R8T5EYX', options)
  .then(response => response.json())
  .then(response => status.value = response.status)
  .catch(err => console.error(err));

  
  console.log(await response.value)

// response.value = response.value.results
}

api()

</script>
<template>
    <div>
        <div >
        </div>
        
    </div>

</template>