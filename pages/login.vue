<script setup>
import useSupabase from '~~/composables/useSupabase';
const recaptchaInstance = useReCaptcha();
import { useReCaptcha } from 'vue-recaptcha-v3';


const TOKEN = ref()

const recaptcha = async () => {
    // optional you can await for the reCaptcha load
    await recaptchaInstance?.recaptchaLoaded();

    // get the token, a custom action could be added as argument to the method
    TOKEN.value = await recaptchaInstance?.executeRecaptcha('yourActionHere');


    return TOKEN.value
};


const verifyRecaptchaScore = async (token) => {

const { data: pokemon, error } = useFetch(() => `https://www.google.com/recaptcha/api/siteverify`)

console.log(pokemon)

//     try {
//         const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//             method: 'POST',
//             mode: 'no-cors',  // Set mode to 'no-cors'
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({
//                 secret: '6LfKzU0pAAAAAGHQbclcbK92jdvD-DsaperDhPmk',
//                 response: token,
//                    }),
//             });


//         if(response.ok) {
//                 const data = await response.json();

//         if (data && data.score) {
//             return data.score;
//         } else {
//             throw new Error("Invalid reCAPTCHA response");
//         }
//     } else {
//         throw new Error("Failed to verify reCAPTCHA");
//     }
// } catch (error) {
//     console.error("reCAPTCHA verification error:", error);
//     console.log("reCAPTCHA verification error:", error);
//     // throw new Error("reCAPTCHA verification failed");
// }





}
if (process.client) {
 
    const recaptchaScore = await verifyRecaptchaScore(await recaptcha());
}



const screen = ref();
const loading = ref()

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
        <div v-if="loading" class="h-full w-full absolute flex justify-center items-center bg-claro opacity-60 z-[8]">
        </div>
        <div v-if="loading"
            class="w-[90px] h-[90px] z-10 border-[15px] rounded-[50%]  absolute border-verde border-t-escuro opacity-100 animate-spin">
        </div>
        <div class="flex shadow-2xl aspect-video">
            <Auth class="flex flex-1" @loading="loading = true" @stopLoading="loading = false" />
            <div class="flex flex-1 flex-col justify-evenly h-full w-full bg-escuro">
                <img class="scale-[60%]" src="../assets/icons/logoLogin.svg" alt="">
            </div>
        </div>

    </div>
    <div v-if="screen === 'mobile'" class="h-screen flex flex-col justify-evenly items-center bg-escuro">
        <div v-if="loading" class="h-full w-full absolute flex justify-center items-center bg-claro opacity-60 z-[8]">
        </div>
        <div v-if="loading"
            class="w-[90px] h-[90px] z-10 border-[15px] rounded-[50%]  absolute border-verde border-t-escuro opacity-100 animate-spin">
        </div>
        <div class="flex flex-col w-full justify-center items-center">
            <img class="w-[40%] " src="../assets/icons/logoLogin.svg" alt="">
        </div>
        <Auth @loading="loading = true" @stopLoading="loading = false" />
    </div>
</template>
