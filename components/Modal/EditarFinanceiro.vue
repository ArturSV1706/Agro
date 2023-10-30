
<template>
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="hidden sm:flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center  ">
        <div class="absolute filter backdrop-blur-[3px] w-full h-full bg-[rgba(42,77,65,.1)] z-10 "></div>
        <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 p-4 w-full max-w-xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-escuro rounded-lg shadow ">
                <!-- Modal header -->

                <div class="flex justify-between items-start p-4 rounded-t border-b border-verde">
                    <h3 class="text-xl font-semibold text-claro">
                        Editar Registro
                    </h3>
                    <button @click="$emit('close')" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5 fill-claro" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <slot />
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t  border-verde">
                    <button @click="$emit('editarFinanceiro')" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                        Editar Registro</button>
                    <button @click="$emit('close')" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-vermelho  rounded-lg   text-sm font-medium px-5 py-2.5">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Backdrop -->
    <!-- mobile | para desktop= hidden sm:flex | para mobile = sm:hidden -->
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
        class="sm:hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center  ">
        <div class="fixed filter backdrop-blur-[3px] w-full h-full bg-[rgba(42,77,65,.4)] z-3 "></div>
        <div class="fixed  z-20 p-4 w-full max-w-lg h-full md:h-auto">
            <!-- Modal content -->
            <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-escuro rounded-lg shadow w-[90%] ">
                <!-- Modal header -->

                <div class="flex justify-between items-start p-4 rounded-t border-b border-verde">
                    <h3 class="text-xl font-semibold text-claro">
                        Deletar registro
                    </h3>
                    <button @click="$emit('close')" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5 fill-claro" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 overflow-y-scroll max-h-[60vh]">
                    <slot />
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t  border-verde">
                    <button @click="$emit('editarFinanceiro')" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                        Editar Registro</button>
                    <button @click="$emit('close')" data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-vermelho  rounded-lg   text-sm font-medium px-5 py-2.5">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Backdrop -->

</template>