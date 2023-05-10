<script setup>

definePageMeta({
        middleware: "auth"
    })

const { supabase } = useSupabase()
const { user } = useAuth()
const { paraReal, paraRealInput, paraFloat } = useUtils()

const funcionariosResponse = ref();


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

if (process.client) {
    funcionariosResponse.value = await supabase.from("funcionarios").select().match({ user_id: user.value.id })
}



const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()
const limitarForm = ref()
const showPreencha = ref()


const pagina = reactive({
    atual: 0,
    tamanho: 5
})

const funcionarioInput = reactive({
    id: "",
    nome: "",
    numero: "",
    cargo: "",
    is_assalariado: false,
    salario: "",
    data_pagamento_salario: "",
})

const handleNovoFuncionario = () => {
    limitarForm.value = true
    showPreencha.value = false
    showModalAdicionar.value = true
    funcionarioInput.nome = ""
    funcionarioInput.cargo = ""
    funcionarioInput.numero = ""
    funcionarioInput.is_assalariado = false
    funcionarioInput.salario = ""
    funcionarioInput.data_pagamento_salario = ""
}
const abrirModalDeletarFuncionario = (id, nome) => {
    limitarForm.value = true

    showModalDeletar.value = true
    funcionarioInput.id = id
    funcionarioInput.nome = nome
}

const handleDeleteFuncionario = async (funcionarioId) => {
    if(!limitarForm.value) return
    limitarForm.value = false
    await supabase.from("funcionarios").delete().eq('id', funcionarioId)
    funcionariosResponse.value = await supabase.from("funcionarios").select()
    showModalDeletar.value = false
    pagina.atual = 0

}
const handleSubmitNovoFuncionario = async () => {
    if(funcionarioInput.nome && funcionarioInput.numero && funcionarioInput.cargo){
    if(funcionarioInput.is_assalariado){
        if(isNaN(paraFloat(funcionarioInput.salario)) || !funcionarioInput.data_pagamento_salario || funcionarioInput.salario == "R$"){
            showPreencha.value = true
            return 
        }
    }

    if(!limitarForm.value) return
    limitarForm.value = false

    if (process.client) {
        await supabase.from("funcionarios").insert({
            user_id: user.value.id,
            nome: funcionarioInput.nome,
            numero: funcionarioInput.numero,
            cargo: funcionarioInput.cargo,
            funcionario_login: funcionarioInput.numero,
            funcionario_pass: generateRandomString(10),
            is_assalariado: funcionarioInput.is_assalariado,
            salario: paraFloat(funcionarioInput.salario),
            data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)

        });
        funcionariosResponse.value = await supabase.from("funcionarios").select()


        funcionarioInput.nome = "",
            funcionarioInput.numero = "",
            funcionarioInput.cargo = "",
            funcionarioInput.is_assalariado = false,
            funcionarioInput.salario = "",
            funcionarioInput.data_pagamento_salario = ""
        showModalAdicionar.value = false
    }
    showPreencha.value = false
}else{
    showPreencha.value = true
}
}
const handleSubmitEditarFuncionario = async () => {

    if(funcionarioInput.nome && funcionarioInput.numero && funcionarioInput.cargo){
    if(funcionarioInput.is_assalariado){
        if(isNaN(paraFloat(funcionarioInput.salario)) || !funcionarioInput.data_pagamento_salario || funcionarioInput.salario == "R$"){
            showPreencha.value = true
            return 
        }
    }

    
if(!limitarForm.value) return
    limitarForm.value = false

    if (funcionarioInput.is_assalariado) {
        await supabase.from("funcionarios").update({
            nome: funcionarioInput.nome,
            numero: funcionarioInput.numero,
            cargo: funcionarioInput.cargo,
            is_assalariado: funcionarioInput.is_assalariado,
            salario: paraFloat(funcionarioInput.salario),
            data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)

        }).eq('id', funcionarioInput.id);
    } else {
        await supabase.from("funcionarios").update({
            nome: funcionarioInput.nome,
            numero: funcionarioInput.numero,
            cargo: funcionarioInput.cargo,
            is_assalariado: funcionarioInput.is_assalariado,
            salario: null,
            data_pagamento_salario: null

        }).eq('id', funcionarioInput.id);
    }
    funcionariosResponse.value = await supabase.from("funcionarios").select()


    funcionarioInput.id = "",
        funcionarioInput.nome = "",
        funcionarioInput.numero = "",
        funcionarioInput.cargo = "",
        funcionarioInput.is_assalariado = false,
        funcionarioInput.salario = "",
        funcionarioInput.data_pagamento_salario = ""
    showModalEditar.value = false
    showPreencha.value = false
}else{
    showPreencha.value = true
}
}
const handleModalEditar = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalEditar.value = true
    funcionarioInput.nome = nome
    funcionarioInput.cargo = cargo
    funcionarioInput.numero = numero
    funcionarioInput.is_assalariado = is_assalariado
    funcionarioInput.salario = salario
    funcionarioInput.data_pagamento_salario = diaPagamento
    funcionarioInput.id = id
}

const salárioFormatar = (valor) => {
    funcionarioInput.salario = paraRealInput(valor)
}

// Paginação
const handlePagina = (i) => {
    if (i === "proxima") {
        pagina.atual++
    }
    if (i === "anterior") {
        pagina.atual--
    }
}
const handleOrdenar = (i) => {


    if (i === "nome") {
        tipoOrdenar.value = porNome
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porNomeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "cargo") {
        tipoOrdenar.value = porCargo
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porCargoReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "salario") {
        tipoOrdenar.value = porSalario
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porSalarioReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "dia") {
        tipoOrdenar.value = porDia
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porDiaReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "data") {
        tipoOrdenar.value = porData
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porDataReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

}

function porNome(a, b) {
    if (a.nome > b.nome) {
        return 1;
    } else if (b.nome > a.nome) {
        return -1
    } else {
        return 0;
    }
}
function porCargo(a, b) {
    if (a.cargo > b.cargo) {
        return 1;
    } else if (b.cargo > a.cargo) {
        return -1
    } else {
        return 0;
    }
}
function porData(a, b) {
    if (a.data > b.data) {
        return 1;
    } else if (b.data > a.data) {
        return -1
    } else {
        return 0;
    }
}
function porSalario(a, b) {
    return parseFloat(a.salario) - parseFloat(b.salario)
}
function porDia(a, b) {
    return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario)
}
function porNomeReverse(a, b) {
    if (a.nome > b.nome) {
        return -1;
    } else if (b.nome > a.nome) {
        return 1
    } else {
        return 0;
    }
}
function porCargoReverse(a, b) {
    if (a.cargo > b.cargo) {
        return -1;
    } else if (b.cargo > a.cargo) {
        return 1
    } else {
        return 0;
    }
}
function porDataReverse(a, b) {
    if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
    } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1
    } else {
        return 0;
    }
}
function porSalarioReverse(a, b) {
    return parseFloat(b.salario) - parseFloat(a.salario)
}
function porDiaReverse(a, b) {
    return parseFloat(b.data_inicio) - parseFloat(a.data_inicio)
}
// <-------->
function generateRandomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
    var random_string = '';
    if (length > 0) {
        for (var i = 0; i < length; i++) {
            random_string += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }


    return random_string;
}
</script>

<template>
    <div>
        <div>
            <!-- Título -->
            <div class="flex flex-row items-center absolute ml-[-4%] ">
                <h1 class=" pt-2 text-4xl text-escuro font-aristotelica ">Funcionários | </h1>
                <h1 class="text-3xl"> 👨‍🌾 </h1>
                <!-- 1F468 U+200D U+1F33E	 -->
            </div>
            <!-- ------------------------------------------------------------------------------ -->
            <Loader v-if="!funcionariosResponse" />
            <div v-if="funcionariosResponse" class="flex flex-col w-full items-center ">



                <div class="flex flex-col w-[70%] mt-[5%]">
                    <button @click="handleNovoFuncionario"
                        class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                        Novo funcionário
                    </button>
                    <table class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 " @click="handleOrdenar('cargo')">Nome</th>
                            <th class="p-2 " @click="handleOrdenar('cargo')">Cargo</th>
                            <th class="p-2 ">numero</th>
                            <th class="p-2 " @click="handleOrdenar('salario')">Salario</th>
                            <th class="p-2 " @click="handleOrdenar('dia')">Dia pagamento</th>
                            <th class="p-2 ">Detalhes</th>
                            <th class="p-2 ">Deletar</th>
                        </thead>
                        <tbody>
                            <tr v-for="funcionario in funcionariosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)
                " class=" even:bg-gray-100" :key="funcionario.id">
                                <td class="p-2 capitalize">{{ funcionario.nome }}</td>
                                <td class="p-2">{{ funcionario.cargo }}</td>
                                <td class="p-2">{{ funcionario.numero }}</td>
                                <td class="p-2">{{ paraReal(funcionario.salario) }}</td>
                                <td class="p-2" v-if="funcionario.data_pagamento_salario"> {{
                                    funcionario.data_pagamento_salario
                                }}</td>
                                <td class="p-2" v-else>------</td>
                                <td class="p-2">
                                    <span
                                        class="cursor-pointer material-icons block text-center hover:text-xl transition-all"
                                        @click="handleModalEditar(funcionario.nome, funcionario.cargo, funcionario.numero, funcionario.is_assalariado, funcionario.salario, funcionario.data_pagamento_salario, funcionario.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class="cursor-pointer material-icons block text-center hover:text-xl transition-all"
                                        @click="abrirModalDeletarFuncionario(funcionario.id, funcionario.nome)">
                                        &#x274C
                                    </span>

                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div v-if="funcionariosResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px] ">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(funcionariosResponse.data.length / pagina.tamanho)"
                                    v-bind:value="i - 1">
                                    {{
                                        i
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-claro font-semibold">Items por Pág.</p>
                            <select v-model="pagina.tamanho" @input="pagina.atual = 0"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-bind:value=5> 5 </option>
                                <option v-bind:value=10> 10 </option>
                                <option v-bind:value=250> 25 </option>
                            </select>
                        </div>
                        <button v-if="pagina.atual < (Math.ceil(funcionariosResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Novo Funcionário -->
        <Transition name="pop">
            <ModalNovoFuncionario v-if="showModalAdicionar" @close="showModalAdicionar = false"
                @adicionarFuncionario="handleSubmitNovoFuncionario">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">

                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.nome" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.numero" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número
                            de telefone (celular)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.cargo" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cargo</label>
                    </div>




                    <div class="flex items-center mb-4">

                        <input
                            class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                            v-model="funcionarioInput.is_assalariado" type="checkbox" placeholder="João da silva"
                            name="recebe_salario">
                        <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">É assalariado?</label>
                    </div>

                    <Transition name="pop">
                        <div v-if="funcionarioInput.is_assalariado" class="flex flex-col">

                            <div class="relative z-0 w-full mb-6 group">

                                <input v-on:input="salárioFormatar(funcionarioInput.salario)" type="text"
                                    v-model="funcionarioInput.salario" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">salário</label>
                            </div>

                            <div class="relative z-0 w-full mt-6 group">

                                <label for=""
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dia
                                    de pagamento</label>
                                <select v-model="funcionarioInput.data_pagamento_salario" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                    >
                                </select>
                            </div>


                        </div>
                    </Transition>
                </div>
            </ModalNovoFuncionario>
        </Transition>
        <Transition name="pop">
            <ModalEditarFuncionario v-if="showModalEditar" @close="showModalEditar = false"
                @editarFuncionario="handleSubmitEditarFuncionario">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.nome" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.numero" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número
                            de telefone (celular)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="funcionarioInput.cargo" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cargo</label>
                    </div>




                    <div class="flex items-center mb-4">

                        <input
                            class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                            v-model="funcionarioInput.is_assalariado" type="checkbox" placeholder="João da silva"
                            name="recebe_salario">
                        <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">É assalariado?</label>
                    </div>

                    <Transition name="pop">
                        <div v-if="funcionarioInput.is_assalariado" class="flex flex-col">

                            <div class="relative z-0 w-full mb-6 group">

                                <input v-on:input="salárioFormatar(funcionarioInput.salario)" type="text"
                                    v-model="funcionarioInput.salario" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">salário</label>
                            </div>

                            <div class="relative z-0 w-full mt-6 group">

                                <label for=""
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dia
                                    de pagamento</label>
                                <select v-model="funcionarioInput.data_pagamento_salario" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                    >
                                </select>
                            </div>


                        </div>
                    </Transition>
                </div>
            </ModalEditarFuncionario>
        </Transition>
        <Transition name="pop">
            <ModalDeletarFuncionario v-if="showModalDeletar" @close="showModalDeletar = false"
                @deletarFuncionario="handleDeleteFuncionario(funcionarioInput.id)">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este funcionário?</h1>
                <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                    funcionarioInput.nome
                }}</h1>
                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarFuncionario>
        </Transition>
    </div>
</template>