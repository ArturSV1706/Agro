<template>
    <div>
        <div class="hidden sm:flex fixed top-3 right-3 w-[350px] min-h-[80px] rounded z-50">
            <div
                class="w-full min-h-full p-3 flex justify-between items-center border-escuro border-2 bg-verde_claro bg-opacity-60 rounded-md">
                <div id="timerBar" class="absolute w-full top-0 left-0 h-2 bg-escuro transition-all"></div>

                <slot />
                <button @click="$emit('close')" data-modal-toggle="defaultModal" type="button"
                    class="text-escuro pr-3 text-xl opacity-100 font-aristotelica font-bold hover:text-3xl transition-all">X</button>
            </div>
        </div>

        <!-- Mobile -->
        <div @click="$emit('close')"
            class="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2   w-[95%] h-[75px] rounded z-50">
            <div
                class="w-full min-h-full p-3 flex justify-between items-center border-escuro border-2 bg-verde_claro rounded-md text-claro">
                <div id="timerBarMobile" class="absolute w-full top-0 left-0 h-2 bg-escuro transition-all"></div>
                <slot />

            </div>
        </div>
</div></template>