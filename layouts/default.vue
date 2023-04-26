<script setup>

const titulo = ref()
const icone = ref()
const route = useRoute()

const showBackdrop = ref()

const ativarBackdrop = () => {
    showBackdrop.value = true
}
const desativarBackdrop = () => {
    showBackdrop.value = false
}

</script>
<template>
    <div class="h-100% w-screen bg-claro">
        <Transition name="open">
            <section v-if="showBackdrop"
                class="left-[-20%] fixed z-10 h-screen w-1/3 skew-x-12 bg-[rgba(42,77,65,.9)]">
            </section>
        </Transition>
        <Sidebar v-on:mouseover="ativarBackdrop" v-on:mouseleave="desativarBackdrop" />

        <div class="ml-[100px] pt-6">

                <slot />
        </div>
    </div>
</template>
