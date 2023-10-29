<template>
    <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
        <!-- backdrop -->
        <div @click="$emit('close')" class="absolute filter backdrop-blur-[3px] w-full h-full bg-[rgba(42,77,65,.4)]"></div>
        <!--  -->

        <div class="flex flex-col w-[80%] bg-verde_apagado text-claro p-3 rounded-xl z-10">
            <button @click="$emit('close')" type="button"
                class="text-escuro bg-transparent rounded-lg text-sm  p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <slot />
        </div>

    </div>
</template>