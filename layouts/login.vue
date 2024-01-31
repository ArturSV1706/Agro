
<script>

const loading = ref(true);

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
    loading.value = false
}

console.log(loading.value)

</script>
<template>
    <div v-if="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img class="w-[10vw] animate-ping" src="../assets/icons/saffron_alt.svg" alt="">
        
    </div>
    <div v-else>
        <slot />
    </div>
</template>