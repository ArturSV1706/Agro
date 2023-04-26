<script setup >
const { supabase } = useSupabase()
const route = useRoute()

const props = defineProps({
    uuid: {
        type: Object, // whatever your passing / INT /String 
        required: true,
        default: " {}"
    }
})
// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

const safrasResponse = ref();
if (process.client) {
    safrasResponse.value = await supabase.from("safras").select().eq('user_id', props.uuid.id)
}
console.log(safrasResponse.value);

</script>
<template>
    <div v-if="props.uuid">{{ props.uuid.id }}</div>
    <div v-if="!safrasResponse">Loading...</div>
    <div v-else class="bg-slate-400" v-for="safra in safrasResponse.data" :key="safra.id">
        <NuxtLink :to="`/safras/${safra.id}`" >{{ safra.id }}</NuxtLink>
        
    </div>
</template>