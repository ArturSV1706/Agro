<script setup>
definePageMeta({
    middleware: ["auth","setup-limit"],
    layout: 'login' 
})

const { supabase } = useSupabase()
const { user } = useAuth()

const screen = ref();

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}


const limitarForm = ref(true)
const showPreencha = ref()
const usuario = ref();


const setupInput = reactive({
    nome: "",
    telefone: "",
    estado: "",
})





const handleSubmitSetup = async () => {
    if (setupInput.nome && setupInput.telefone && setupInput.estado) {

        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {
            await supabase.from("usuario").insert({
                email: user.value.email,
                nome: setupInput.nome,
                telefone: setupInput.telefone,
                user_id: user.value.id,
                estado: setupInput.estado,
            });
        }
        showPreencha.value = false
        navigateTo("/");
    } else {
        showPreencha.value = true
    }
}

</script>
<template>
    <div>
        <div v-if="screen === 'desktop'"  id="defaultModal" tabindex="-1" aria-hidden="true"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full justify-center items-center  ">
            <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-xl h-full md:h-auto ">
                <!-- Modal content -->
                <div class="relative bg-escuro rounded-lg shadow ">
                    <!-- Modal header -->

                    <div class="flex justify-between items-start p-4 rounded-t border-b border-verde">
                        <h3 class="text-xl font-semibold text-claro">
                            Criar Conta
                        </h3>
                        <button @click="$emit('close')" type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal">
                            
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <!-- SLOT -->
                        <div>
                            <Transition name="pop">
                                <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha
                                    todos
                                    os
                                    campos obrigatórios</h1>
                            </Transition>
                            <div class="relative z-0 w-full mb-11 group">

                                <input type="text" v-model="setupInput.nome" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Nome
                                    completo


                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-11 group">

                                <input type="number" v-model="setupInput.telefone" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Número
                                    de telefone


                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <label for="nome"
                                    class=" peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Estado
                                </label>
                                <select type="text" placeholder="João da silva" v-model="setupInput.estado"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" value="AC">Acre</option>
                                    <option class="bg-verde font-semibold" value="AL">Alagoas</option>
                                    <option class="bg-verde font-semibold" value="AP">Amapá</option>
                                    <option class="bg-verde font-semibold" value="AM">Amazonas</option>
                                    <option class="bg-verde font-semibold" value="BA">Bahia</option>
                                    <option class="bg-verde font-semibold" value="CE">Ceará</option>
                                    <option class="bg-verde font-semibold" value="DF">Distrito Federal</option>
                                    <option class="bg-verde font-semibold" value="ES">Espírito Santo</option>
                                    <option class="bg-verde font-semibold" value="GO">Goiás</option>
                                    <option class="bg-verde font-semibold" value="MA">Maranhão</option>
                                    <option class="bg-verde font-semibold" value="MT">Mato Grosso</option>
                                    <option class="bg-verde font-semibold" value="MS">Mato Grosso do Sul</option>
                                    <option class="bg-verde font-semibold" value="MG">Minas Gerais</option>
                                    <option class="bg-verde font-semibold" value="PA">Pará</option>
                                    <option class="bg-verde font-semibold" value="PB">Paraíba</option>
                                    <option class="bg-verde font-semibold" value="PR">Paraná</option>
                                    <option class="bg-verde font-semibold" value="PE">Pernambuco</option>
                                    <option class="bg-verde font-semibold" value="PI">Piauí</option>
                                    <option class="bg-verde font-semibold" value="RJ">Rio de Janeiro</option>
                                    <option class="bg-verde font-semibold" value="RN">Rio Grande do Norte</option>
                                    <option class="bg-verde font-semibold" value="RS">Rio Grande do Sul</option>
                                    <option class="bg-verde font-semibold" value="RO">Rondônia</option>
                                    <option class="bg-verde font-semibold" value="RR">Roraima</option>
                                    <option class="bg-verde font-semibold" value="SC">Santa Catarina</option>
                                    <option class="bg-verde font-semibold" value="SP">São Paulo</option>
                                    <option class="bg-verde font-semibold" value="SE">Sergipe</option>
                                    <option class="bg-verde font-semibold" value="TO">Tocantins</option>
                                </select>
                            </div>


                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 rounded-b border-t  border-verde">
                        <button @click="handleSubmitSetup" data-modal-toggle="defaultModal" type="button"
                            class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                            Confirmar</button>

                    </div>
                </div>
            </div>
        </div>

        <!--  -->

        <div v-if="screen === 'mobile'" id="defaultModal" tabindex="-1" aria-hidden="true"
        class="sm:hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center  ">
        <div class="fixed filter backdrop-blur-[3px] w-full h-full bg-[rgba(42,77,65,.4)] z-3 "></div>
        <div class="fixed  z-20 p-4 w-full max-w-lg h-full md:h-auto">
            <!-- Modal content -->
            <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-escuro rounded-lg shadow w-[90%] ">
                <!-- Modal header -->

                <div class="flex justify-between items-start p-4 rounded-t border-b border-verde">
                    <h3 class="text-xl font-semibold text-claro">
                        Criar Conta
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

                    <div>
                            <Transition name="pop">
                                <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha
                                    todos
                                    os
                                    campos obrigatórios</h1>
                            </Transition>
                            <div class="relative z-0 w-full mb-11 group">

                                <input type="text" v-model="setupInput.nome" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Nome
                                    completo


                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-11 group">

                                <input type="number" v-model="setupInput.telefone" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Número
                                    de telefone


                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <label for="nome"
                                    class=" peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Estado
                                </label>
                                <select type="text" placeholder="João da silva" v-model="setupInput.estado"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" value="AC">Acre</option>
                                    <option class="bg-verde font-semibold" value="AL">Alagoas</option>
                                    <option class="bg-verde font-semibold" value="AP">Amapá</option>
                                    <option class="bg-verde font-semibold" value="AM">Amazonas</option>
                                    <option class="bg-verde font-semibold" value="BA">Bahia</option>
                                    <option class="bg-verde font-semibold" value="CE">Ceará</option>
                                    <option class="bg-verde font-semibold" value="DF">Distrito Federal</option>
                                    <option class="bg-verde font-semibold" value="ES">Espírito Santo</option>
                                    <option class="bg-verde font-semibold" value="GO">Goiás</option>
                                    <option class="bg-verde font-semibold" value="MA">Maranhão</option>
                                    <option class="bg-verde font-semibold" value="MT">Mato Grosso</option>
                                    <option class="bg-verde font-semibold" value="MS">Mato Grosso do Sul</option>
                                    <option class="bg-verde font-semibold" value="MG">Minas Gerais</option>
                                    <option class="bg-verde font-semibold" value="PA">Pará</option>
                                    <option class="bg-verde font-semibold" value="PB">Paraíba</option>
                                    <option class="bg-verde font-semibold" value="PR">Paraná</option>
                                    <option class="bg-verde font-semibold" value="PE">Pernambuco</option>
                                    <option class="bg-verde font-semibold" value="PI">Piauí</option>
                                    <option class="bg-verde font-semibold" value="RJ">Rio de Janeiro</option>
                                    <option class="bg-verde font-semibold" value="RN">Rio Grande do Norte</option>
                                    <option class="bg-verde font-semibold" value="RS">Rio Grande do Sul</option>
                                    <option class="bg-verde font-semibold" value="RO">Rondônia</option>
                                    <option class="bg-verde font-semibold" value="RR">Roraima</option>
                                    <option class="bg-verde font-semibold" value="SC">Santa Catarina</option>
                                    <option class="bg-verde font-semibold" value="SP">São Paulo</option>
                                    <option class="bg-verde font-semibold" value="SE">Sergipe</option>
                                    <option class="bg-verde font-semibold" value="TO">Tocantins</option>
                                </select>
                            </div>


                        </div>

                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t  border-verde">
                        <button @click="handleSubmitSetup" data-modal-toggle="defaultModal" type="button"
                            class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                            Confirmar</button>

                    </div>
            </div>
        </div>
    </div>
</div></template>