<script setup lang="ts">
    const {supabase} = useSupabase()
    const {user} = useAuth()
    
    const notesResponse = ref();
    
    // if(process.client){
    //     notesResponse.value = await supabase.from("notes").select().eq("user_id", user.value.id)
    // }
    
    // definePageMeta({
    //     middleware: "auth"
    // })
    
    </script>

<template>
    <div class="">
        <Auth/>
    </div>
</template>
