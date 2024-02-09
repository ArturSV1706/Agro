<script setup>
definePageMeta({
    middleware: ["auth"],
})

const { supabase } = useSupabase()
const { user, signOut } = useAuth()
const subscription = ref()
const session = ref()
const dataExpiracao = ref()

import Stripe from 'stripe';
const runtimeConfig = useRuntimeConfig()


const stripe = new Stripe('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');
if (process.client) {
    console.log(user.value.email)
    const customers = await stripe.customers.search({
        query: `email:'${user.value.email}'`,
        expand: ['data.subscriptions'],
    });

    if (customers.data[0] != undefined) {
        session.value = await stripe.billingPortal.sessions.create({
            customer: customers.data[0].id,
            return_url: 'https://app.saffron.com.br',
        });

        // window.location.href = session.url;


        if (customers.data[0].subscriptions.data[0] != undefined) {

            subscription.value = await stripe.subscriptions.retrieve(
                customers.data[0].subscriptions.data[0].id
            );
            // Unix timestamp
            const unixTimestamp = subscription.value.current_period_end;

            // Convert Unix timestamp to milliseconds
            const milliseconds = unixTimestamp * 1000;

            // Create a new Date object
            const dateObject = new Date(milliseconds);

            // Get the individual components of the date
            const day = ("0" + dateObject.getDate()).slice(-2);
            const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
            const year = dateObject.getFullYear();

            // Format the date as dd-mm-yyyy
            dataExpiracao.value = `${day}-${month}-${year}`;

        }
    }

}



const screen = ref('mobile');
const assinatura = ref();
const assinatura_data_expiracao = ref();
const limitarForm = ref(true)
const showPreencha = ref()
const usuario = ref();
const usuarioResponse = ref();
const color = ref();

const alert = ref()
const alertMessage = ref()
const loadingWidth = ref(100)

const showAlert = (message) => {
    alert.value = true
    alertMessage.value = message

    const interval = setInterval(function () {

        if (loadingWidth.value <= 0 || !alert.value) {
            // Clear the interval when the timer reaches 0
            clearInterval(interval);
            alert.value = false
            loadingWidth.value = 100;
        }
        // Decrease the width
        loadingWidth.value -= 2;

        // Update the width of the timer bar
        document.getElementById("timerBar").style.width = loadingWidth.value + "%";
        document.getElementById("timerBarMobile").style.width = loadingWidth.value + "%";

        // Check if the width has reached 0

    }, 80);


}

const setupInput = reactive({
    nome: "",
    telefone: "",
    estado: "",
})


if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
    if (subscription.value === undefined) {
        color.value = 'vermelho'
    } else if (subscription.value.status === 'active') {
        subscription.value.status = 'ativo'
        color.value = 'verde_claro'
    } else if (subscription.value.status === 'trialing') {
        subscription.value.status = 'Período de teste'
        color.value = 'verde'
    } else if (subscription.value.status === 'paused') {
        subscription.value.status = 'expirada'
        color.value = 'vermelho'
    }
    else {
        color.value = 'laranja'
    }
}













const logOut = async () => {
    const { error } = await supabase.auth.signOut()
    return navigateTo('/login')
}

const response = ref();
const customerId = ref();
const subscriptionId = ref();
const status = ref();
const expira_em = ref();
const formattedDate = ref();



const handleSubmitSetup = async () => {
    if (setupInput.nome && setupInput.telefone && setupInput.estado) {

        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {
            await supabase.from("usuario").update({
                nome: setupInput.nome,
                telefone: setupInput.telefone,
                estado: setupInput.estado,
            }).eq('user_id', user.value.id);;
        }
        showAlert("Informações editadas com sucesso!")
        limitarForm.value = true

        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}

</script>
<template>
    <div v-if="screen === 'desktop'">

        <Transition name="alert">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <!-- Título -->
        <div class="flex flex-row items-center fixed ml-[-4%] ">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica  ">Minha conta | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl"> 👤 </h1>
            <!-- 1F468 U+200D U+1F33E	 -->
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <div class="ml-4 h-screen flex flex-col justify-center">
            <div class="bg-verde_apagado  border-l-8 border-l-verde flex justify-evenly p-4 max-w-[30vw] mb-5">
                <div>
                    <p class="text-escuro ">Plano: <span class="font-bold capitalize">simples</span></p>
                    <p class='text-escuro '>Assinatura: <span :class="`text-${color} font-semibold capitalize`">{{
                        subscription ? subscription.status : 'Inexistente'
                    }}</span></p>
                    <p class="text-escuro ">Expira em: <span class="font-bold">{{ dataExpiracao }}</span></p>
                </div>
                <img class="h-[70px]" src="../assets/icons/saffron.svg" alt="">
            </div>
            <h1 v-if="subscription === undefined" class=" text-vermelho font-bold animate-pulse">Sua Assinatura não está
                ativa!
            </h1>
            <h1 v-else-if="subscription.status === 'expirada'" class=" text-vermelho font-bold animate-pulse">Sua Assinatura
                não está
                ativa!
            </h1>
            <NuxtLink v-if="subscription === undefined" to="https://saffron.com.br/comprar"
                class="bg-vermelho text-white font-semibold text-center cursor-pointer  border-l-8flex justify-evenly p-4 max-w-[30vw] mb-5">
                Clique aqui para obter sua assinatura
            </NuxtLink>

            <NuxtLink v-else-if="subscription.status === 'expirada'" :to="`${session.url}`"
                class="bg-vermelho text-white font-semibold text-center cursor-pointer  border-l-8flex justify-evenly p-4 max-w-[30vw] mb-5">
                Clique aqui para obter sua assinatura
            </NuxtLink>
            <div class="bg-verde_apagado  border-l-8 border-l-verde flex-row p-4 max-w-[30vw]">
                <h1 class="text-escuro font-semibold text-xl mb-6">Informações da conta</h1>


                <div class="flex flex-col">



                </div>
                <div class="flex w-full justify-evenly space-x-4">
                    <NuxtLink v-if="session != undefined" :to="`${session.url}`" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-escuro flex  justify-between items-center space-x-2  rounded-lg w-full   text-md font-medium px-3 mt-4 py-2.5">
                        Editar Assinatura</NuxtLink>
                    <button @click="logOut()" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-escuro flex  justify-between items-center space-x-2 w-full  rounded-lg   text-md font-medium px-3 mt-4 py-2.5">

                        <h1>Fazer logout</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill="#DDE0D0"
                            width="24">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>


                    </button>
                </div>
            </div>

        </div>

    </div>
    <div v-if="screen === 'mobile'">
        <Transition name="alert_mobile">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <div class=" flex flex-col justify-center">
            <div class="bg-verde_apagado text-escuro border-l-8 border-l-verde flex justify-evenly items-center p-4  mb-5 ">
                <div>

                    <p class='text-escuro '>Assinatura: <span :class="`text-${color} font-semibold capitalize`">{{
                        subscription ? subscription.status : 'Inexistente'
                    }}</span></p>
                    <p v-if="subscription != undefined" class="text-escuro ">Expira em: <span class="font-bold">{{
                        dataExpiracao }}</span></p>
                </div>
                <img class="h-[40px]" src="../assets/icons/saffron.svg" alt="">
            </div>



            <h1 v-if="subscription === undefined" class=" text-vermelho font-bold animate-pulse">Sua Assinatura não está
                ativa!
            </h1>
            <h1 v-else-if="subscription.status === 'expirada'" class=" text-vermelho font-bold animate-pulse">Sua Assinatura
                não está
                ativa!
            </h1>

            <NuxtLink v-if="subscription === undefined" to="https://saffron.com.br/comprar"
                class="bg-vermelho text-white font-semibold text-center cursor-pointer  border-l-8flex justify-evenly p-4  mb-5">
                Clique aqui para obter uma assinatura
            </NuxtLink>
            <NuxtLink v-else-if="subscription.status === 'expirada'" :to="`${session.url}`"
                class="bg-vermelho text-white font-semibold text-center cursor-pointer  border-l-8flex justify-evenly p-4  mb-5">
                Clique aqui para obter uma assinatura
            </NuxtLink>
            <div class="bg-verde_apagado  text-escuro border-l-8 border-l-verde flex-row items-center justify-center p-4 ">
                <h1 class="text-escuro font-semibold text-xl mb-6">Informações da conta</h1>


                <div class="flex flex-col">


                </div>

                <NuxtLink v-if="session != undefined" @click="handleSubmitSetup" :to="`${session.url}`" data-modal-toggle="defaultModal" type="button"
                    class="text-claro text-center bg-verde_claro w-[90%]  rounded-lg   text-sm font-medium px-5 py-2.5">
                    Editar Assinatura</NuxtLink>
                <button @click="logOut()" data-modal-toggle="defaultModal" type="button"
                    class="text-claro bg-escuro flex justify-evenly text-center w-[90%]   items-center  rounded-lg   text-sm font-medium px-3 mt-4 py-2.5">

                    <h1>Fazer logout</h1>



                </button>
            </div>
        </div>

        <section class="h-[60px]"></section>
    </div>
</template>