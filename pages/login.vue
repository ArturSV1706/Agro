<script setup>
import useSupabase from '~~/composables/useSupabase';

const screen = ref();
const loading = ref()
const showLogo = ref(true)

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
        <div class="fixed bg-escuro w-full h-full z-[-9999999]"></div>
        <div v-if="loading" class="h-full w-full absolute flex justify-center items-center bg-claro opacity-60 z-[8]">
        </div>
        <div v-if="loading" class="w-[90px] h-[90px] z-10 border-[15px] rounded-[50%]  absolute border-verde border-t-escuro opacity-100 animate-spin"></div>
        <div class="flex flex-col space-y-5 mt-[-10vh]">
            <img v-if='showLogo'  class=" ml-[1svw] w-[40%] " src="../assets/icons/logoLogin.svg" alt="">
            <Auth class="flex " @hide='showLogo = false' @show='showLogo = true' @loading="loading = true" @stopLoading="loading = false" />
        </div>

    </div>
    <div v-if="screen === 'mobile'" class="h-screen flex flex-col justify-evenly items-center bg-escuro">
        <div v-if="loading" class="h-full w-full absolute flex justify-center items-center bg-claro opacity-60 z-[8]">
        </div>
        <div v-if="loading" class="w-[90px] h-[90px] z-10 border-[15px] rounded-[50%]  absolute border-verde border-t-escuro opacity-100 animate-spin"></div>
        <div class="flex flex-col w-full justify-center items-center">
            <img v-if='showLogo' class="w-[40%] " src="../assets/icons/logoLogin.svg" alt="">
        </div>
        <Auth  @hide='showLogo = false' @show='showLogo = true' @loading="loading = true" @stopLoading="loading = false" />
    </div>
</template>
