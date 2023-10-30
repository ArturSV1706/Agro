<script setup>

const loading = ref(true);
const screen = ref('mobile');
const route = useRoute()
const titulo = ref('Painel')


watch(
  () => route.path,
  () => {
    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0; // For older browsers
    definirTitulo()
  },
);


if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
    loading.value = false

}

const showBackdrop = ref()
const overflow = ref('auto')

const definirTitulo = () => {
    switch (route.path) {
        case '/':
        titulo.value = 'Painel'
            break;
        case '/safras':
        titulo.value = 'Safras'
            break;
        case '/estoque':
        titulo.value = 'Estoque'
            break;
        case '/tarefas':
        titulo.value = 'Tarefas'
            break;
        case '/financeiro':
        titulo.value = 'Financeiro'
            break;
        case '/compradores':
        titulo.value = 'Compradores'
            break;
        case '/funcionarios':
        titulo.value = 'Funcionários'
            break;
        case '/maquinas':
        titulo.value = 'Máquinas'
            break;
        case '/minhaConta':
        titulo.value = 'Minha Conta'
            break;
    
        default:
            break;
    }
}
const ativarBackdrop = () => {
    showBackdrop.value = true
}
const desativarBackdrop = () => {
    showBackdrop.value = false
}
const desativarOverflow = () => {
    overflow.value = 'hidden'
}
const ativarOverflow = () => {
    overflow.value = 'auto'
}

</script>
<template>
    <div v-if="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img class="w-[10vw] animate-ping" src="../assets/icons/saffron_alt.svg" alt="">

    </div>
    <NuxtLoadingIndicator height="5" color="#329F5B" />

    <div v-if="!loading && screen === 'desktop'" class=" h-[100vh] w-screen  bg-claro">
        <Transition name="open">
            <section v-if="showBackdrop" class="left-[-20%] fixed z-10 h-screen w-1/3 skew-x-12 bg-[rgba(42,77,65,.9)]">
            </section>
        </Transition>
        <Sidebar class="sm:scale-90 2xl:scale-100" v-on:mouseover="ativarBackdrop" v-on:mouseleave="desativarBackdrop" />

        <div  class="ml-[100px] pt-6">

            <slot  />
        </div>
    </div>
    <div id="main" v-if="!loading && screen === 'mobile'" :class="` h-[100vh] w-[86%] mx-[7%] overflow-${overflow}`">
        <div class="flex h-[90px] w-full py-[25px]  justify-between items-center">
            <img class="h-[32px]" src="../assets/icons/saffron_alt.svg" alt="">
            <h1 class=" mr-[3%] font-aristotelica text-lg">{{ titulo }}</h1>
            <Sidebar @overflowOff='desativarOverflow()' @overflowOn='ativarOverflow()' @titulo='definirTitulo()' />
        </div>

        <div class="pt-6">

            <slot />
        </div>
    </div>
</template>

