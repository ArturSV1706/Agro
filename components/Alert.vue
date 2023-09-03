<template>
    <div class=" fixed flex top-3 right-3 w-[350px] min-h-[80px] rounded">
        <div class="absolute w-[.45rem] min-h-[100%] bg-marrom rounded-l-md"></div>
        <div class="w-full min-h-full p-3 flex justify-between items-center bg-marrom bg-opacity-70 rounded-md">

            <slot/>
            <button @click="$emit('close')" data-modal-toggle="defaultModal" type="button"
                        class="text-marrom pr-3 text-xl opacity-100 font-aristotelica font-bold hover:text-3xl transition-all">X</button>
        </div>
    </div>
</template>