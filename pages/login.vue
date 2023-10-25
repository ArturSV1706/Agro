<script setup>
import useSupabase from '~~/composables/useSupabase';

const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}



const { supabase } = useSupabase()

definePageMeta({ layout: 'login' })


</script>

<template>
    <div v-if="screen === 'desktop'" class="flex flex-col justify-center items-center h-screen w-screen">
        <div class="flex shadow-2xl aspect-video">
            <Auth class="flex flex-1" />
            <div class="flex flex-1 flex-col justify-evenly h-full w-full bg-escuro">
                <img class="scale-[60%]" src="../assets/icons/logoLogin.svg" alt="">
            </div>
        </div>

    </div>
    <div v-if="screen === 'mobile'" class="h-screen flex flex-col justify-evenly items-center bg-escuro">
        <div class="flex flex-col w-full justify-center items-center">
            <img class="w-[40%] " src="../assets/icons/logoLogin.svg" alt="">
        </div>
        <Auth />
    </div>
</template>
