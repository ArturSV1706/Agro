<script setup>

const loading = ref(true);

if(process.client){
    loading.value = false
}

const showBackdrop = ref()

const ativarBackdrop = () => {
    showBackdrop.value = true
}
const desativarBackdrop = () => {
    showBackdrop.value = false
}

</script>
<template>
    <div v-if="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img class="w-[10vw] animate-ping" src="../assets/icons/saffron_alt.svg" alt="">

    </div>
    <div v-if="!loading" class="h-[100vh] w-screen bg-claro">
        <Transition name="open">
            <section v-if="showBackdrop"
                class="left-[-20%] fixed z-10 h-screen w-1/3 skew-x-12 bg-[rgba(42,77,65,.9)]">
            </section>
        </Transition>
        <Sidebar class="sm:scale-90 2xl:scale-100" v-on:mouseover="ativarBackdrop" v-on:mouseleave="desativarBackdrop" />

        <div class="ml-[100px] pt-6">

                <slot />
        </div>
        <p class="whitespace-nowrap fixed top-[98%] left-[92%] transform -translate-x-1/2 -translate-y-1/2 font-aristotelica text-verde opacity-60">Versão de testes Saffron</p>
    </div>
</template>

