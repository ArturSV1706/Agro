<script setup>
definePageMeta({
    middleware: ["auth", "subscription"]
})

</script>
<template>
    <div class="flex flex-col">
        <div class="w-full h-screen flex flex-col justify-center items-center">
            <h1 class="text-verde text-xl cursor-pointer underline font-semibold animate-bounce">Clique aqui para ser direcionado ao site e gerar a nota eletrônica de produtor</h1>
            <iframe class="border-verde my-4 border-8 rounded-xl" width="60%" height="50%" src="https://www.youtube.com/embed/Oizq0EzJHcQ" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <h1 class="text-verde text-xl font-semibold">Assita ao vídeo acima para aprender a gerar a nota eletrônica de produtor ⬆️</h1>
        </div>
</div></template>