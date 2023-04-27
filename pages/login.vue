<script setup>
import useSupabase from '~~/composables/useSupabase';

definePageMeta({
    layout: "login"
})

    const {supabase} = useSupabase()
        
    // if(process.client){
    //     notesResponse.value = await supabase.from("notes").select().eq("user_id", user.value.id)
    // }
    
    // definePageMeta({
    //     middleware: "auth"
    // })
    
    </script>

<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <div class="flex shadow-2xl aspect-video">
            <Auth class="flex flex-1"/>
            <div class="flex flex-1 flex-col justify-evenly h-full w-full bg-escuro">
                <img class="scale-[60%]" src="../assets/icons/logoLogin.svg" alt="">
            </div>
        </div>
        
    </div>
</template>
