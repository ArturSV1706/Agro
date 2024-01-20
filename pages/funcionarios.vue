<script setup>

definePageMeta({
    middleware: ["auth", "subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { paraReal, paraRealInput, paraFloat, formatarString } = useUtils()
const screen = ref();

// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----
const mainElement = ref(document.getElementById("main"));


if (process.client) {
    mainElement.value = document.getElementById("main");
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

const funcionariosResponse = ref();






const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const showModalPagarFuncionario = ref()
const showModalOpcoes = ref()
const showModalDeletarNegado = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()
const limitarForm = ref()
const showPreencha = ref()
const safraResponse = ref();
const emprestimoResponse = ref();


const alert = ref()
const alertMessage = ref()
const loadingWidth = ref(100)

const showAlert = (message) => {
    alert.value = true
    alertMessage.value = message

    const interval = setInterval(function () {

        if (loadingWidth.value <= 0 || !alert.value) {
            // Clear the interval when the timer reaches 0
            clearInterval(interval);
            alert.value = false
            loadingWidth.value = 100;
        }
        // Decrease the width
        loadingWidth.value -= 2;

        // Update the width of the timer bar
        document.getElementById("timerBar").style.width = loadingWidth.value + "%";
        document.getElementById("timerBarMobile").style.width = loadingWidth.value + "%";

        // Check if the width has reached 0

    }, 80);


}

if (process.client) {
    funcionariosResponse.value = await supabase.from("funcionarios").select().match({ user_id: user.value.id }).order('nome', { ascending: true })
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })

}


// Get the element with the id "main"



const abrirOpcoesMobile = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
    // Check if the element exists before modifying it
    if (mainElement) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        // mainElement.value.style.overflow = "hidden";
    }
    showModalOpcoes.value = true
    funcionarioInput.nome = nome
    funcionarioInput.cargo = cargo
    funcionarioInput.numero = numero
    funcionarioInput.is_assalariado = is_assalariado
    funcionarioInput.salario = salario
    funcionarioInput.data_pagamento_salario = diaPagamento
    funcionarioInput.id = id
}



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
    funcionarioInput.safra_id = ""
}
const abrirModalDeletarFuncionario = async (id, nome) => {
    limitarForm.value = true
    showModalOpcoes.value = false
    funcionarioInput.id = id
    funcionarioInput.nome = nome

    let testarChaveEstrangeira = await supabase.from("tarefas").select('funcionario_id').eq('funcionario_id', id)

    if (testarChaveEstrangeira.data[0]) {
        showModalDeletarNegado.value = true
    } else {
        showModalDeletar.value = true
    }
}
const abrirModalPagarFuncionario = (id, nome) => {
    limitarForm.value = true
    showModalOpcoes.value = false
    showModalPagarFuncionario.value = true
    funcionarioInput.id = id
    funcionarioInput.nome = nome
}

const handleDeleteFuncionario = async (funcionarioId) => {
    if (!limitarForm.value) return
    limitarForm.value = false
    if (process.client) {
        await supabase.from("funcionarios").delete().eq('id', funcionarioId)
        funcionariosResponse.value = await supabase.from("funcionarios").select().match({ user_id: user.value.id }).order('nome', { ascending: true })
    }
    showModalDeletar.value = false
    pagina.atual = 0

}
const handleSubmitNovoFuncionario = async () => {
    if (funcionarioInput.nome && funcionarioInput.numero && funcionarioInput.cargo) {
        if (funcionarioInput.is_assalariado) {
            if (isNaN(paraFloat(funcionarioInput.salario)) || !funcionarioInput.data_pagamento_salario || funcionarioInput.salario == "R$") {
                showPreencha.value = true
                return
            }
        }

        if (!limitarForm.value) return
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
            funcionariosResponse.value = await supabase.from("funcionarios").select().match({ user_id: user.value.id }).order('nome', { ascending: true })


            funcionarioInput.nome = "",
                funcionarioInput.numero = "",
                funcionarioInput.cargo = "",
                funcionarioInput.is_assalariado = false,
                funcionarioInput.salario = "",
                funcionarioInput.data_pagamento_salario = ""
            showModalAdicionar.value = false
        }
        showPreencha.value = false
        showAlert("Funcionário adicionado com sucesso!")
    } else {
        showPreencha.value = true
    }
}
const handleSubmitEditarFuncionario = async () => {

    if (funcionarioInput.nome && funcionarioInput.numero && funcionarioInput.cargo) {
        if (funcionarioInput.is_assalariado) {
            if (paraFloat(funcionarioInput.salario) === 0 || !funcionarioInput.data_pagamento_salario || funcionarioInput.salario == "R$") {
                showPreencha.value = true
                return
            }
        }


        if (!limitarForm.value) return
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
        if (process.client) {
            funcionariosResponse.value = await supabase.from("funcionarios").select().match({ user_id: user.value.id }).order('nome', { ascending: true })
        }

        funcionarioInput.id = "",
            funcionarioInput.nome = "",
            funcionarioInput.numero = "",
            funcionarioInput.cargo = "",
            funcionarioInput.is_assalariado = false,
            funcionarioInput.salario = "",
            funcionarioInput.data_pagamento_salario = ""
        showModalEditar.value = false
        showPreencha.value = false
        showAlert("Funcionário editado com sucesso!")

    } else {
        showPreencha.value = true
    }
}
const handleSubmitPagarFuncionario = async () => {
    if (funcionarioInput.salario && funcionarioInput.safra_id) {

        if (!limitarForm.value) return
        limitarForm.value = false

        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', funcionarioInput.safra_id)


        if (process.client) {


            if (paraFloat(funcionarioInput.salario) > 0) {

                if (paraFloat(funcionarioInput.salario) > emprestimoResponse.value.data[0].emprestimo) {

                    if (emprestimoResponse.value.data[0].emprestimo > 0) await supabase.from("fluxo").insert({
                        categoria: "salario",
                        produto: "Pagamento à: " + funcionarioInput.nome,
                        valor: emprestimoResponse.value.data[0].emprestimo,
                        tipo_fluxo: "saida_emprestimo",
                        safra_id: funcionarioInput.safra_id,
                        user_id: user.value.id
                    });
                    await supabase.from("fluxo").insert({
                        categoria: "salario",
                        produto: "Pagamento à: " + funcionarioInput.nome,
                        valor: paraFloat(funcionarioInput.salario) - emprestimoResponse.value.data[0].emprestimo,
                        tipo_fluxo: "saida",
                        safra_id: funcionarioInput.safra_id,
                        user_id: user.value.id
                    });

                    await supabase.from("safras").update({
                        emprestimo: 0
                    }).eq('id', funcionarioInput.safra_id);
                }
                else {
                    await supabase.from("fluxo").insert({
                        categoria: "salario",
                        produto: "Pagamento à: " + funcionarioInput.nome,
                        valor: paraFloat(funcionarioInput.salario),
                        tipo_fluxo: "saida_emprestimo",
                        safra_id: funcionarioInput.safra_id,
                        user_id: user.value.id
                    });
                    await supabase.from("safras").update({
                        emprestimo: emprestimoResponse.value.data[0].emprestimo - paraFloat(funcionarioInput.salario)
                    }).eq('id', funcionarioInput.safra_id);
                }


            }

        }
        funcionarioInput.id = ""
        funcionarioInput.nome = ""
        funcionarioInput.salario = ""
        funcionarioInput.safra_id = ""

        showModalPagarFuncionario.value = false
        showPreencha.value = false
        showAlert("Pagamento realisado com sucesso!")

    } else {
        showPreencha.value = true
    }
}
const handleModalEditar = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
    showPreencha.value = false
    showModalOpcoes.value = false
    limitarForm.value = true
    showModalEditar.value = true
    funcionarioInput.nome = nome
    funcionarioInput.cargo = cargo
    funcionarioInput.numero = numero
    funcionarioInput.is_assalariado = is_assalariado
    funcionarioInput.salario = paraReal(salario)
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
    <div v-if="screen === 'desktop'">
        <Transition name="alert">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <div>
            <!-- Título -->
            <div class="flex flex-row items-center absolute ml-[-4%] ">
                <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Funcionários | </h1>
                <h1 class="sm:text-xl 2xl:text-3xl"> 👨‍🌾 </h1>
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
                            <th class="p-2 ">Pagar</th>
                            <th class="p-2 ">Editar</th>
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
                                        @click="abrirModalPagarFuncionario(funcionario.id, funcionario.nome)"
                                        @close="showModalEditar = false">
                                        💵
                                    </span>
                                </td>
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
            <ModalEditarFuncionario v-if="showModalEditar"
                @close="showModalEditar = false; mainElement.style.overflow = 'auto'"
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
        <Transition name="pop">
            <ModalDeletarNegado v-if="showModalDeletarNegado" @close="showModalDeletarNegado = false">
                <h2 class="text-center text-claro text-2xl font-semibold">Este funcionário está registrado em uma tarefa,
                    não
                    pode ser
                    deletado.</h2>
            </ModalDeletarNegado>
        </Transition>
        <Transition name="pop">
            <ModalPagarFuncionario v-if="showModalPagarFuncionario" @close="showModalPagarFuncionario = false"
                @pagarFuncionario="handleSubmitPagarFuncionario">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <h1 class="text-xl text-claro">Realizar pagamento à: {{ funcionarioInput.nome }}</h1>
                <div class="relative z-0 w-full mb-6 group">

                    <input type="text" v-on:input="salárioFormatar(funcionarioInput.salario)"
                        v-model="funcionarioInput.salario" name="floating_email" id="floating_email"
                        class="block py-5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                        placeholder=" " required>
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor
                        do pagamento</label>
                </div>

                <div v-if="safraResponse.data != ''">

                    <div class="relative z-0 w-full  group">


                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-12  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-14">
                            De qual safra será descontado o valor do pagamento?</label>
                        <select v-model="funcionarioInput.safra_id"
                            class=" block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" v-for="safra in safraResponse.data" :key="safra.id"
                                v-bind:value=safra.id>{{
                                    safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                }}
                            </option>
                        </select>
                    </div>
                </div>
                <div v-else class="text-center text-vermelho font-bold ">
                    Você precisa de uma safra ativa para adicionar este item
                </div>
            </ModalPagarFuncionario>
        </Transition>
    </div>
    <div v-if="screen === 'mobile'">
        <Transition name="alert_mobile">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <button @click="handleNovoFuncionario"
            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
            Novo funcionário
        </button>

        <div class="  w-full space-y-4 pb-5">
            <div v-for="funcionario in funcionariosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                :key="funcionario.id" class="flex w-full h-[65px]"
                @click=" mainElement.style.overflow = 'hidden'; abrirOpcoesMobile(funcionario.nome, funcionario.cargo, funcionario.numero, funcionario.is_assalariado, funcionario.salario, funcionario.data_pagamento_salario, funcionario.id)">
                <div class="bg-verde mr-2 h-full aspect-square rounded-xl flex justify-center items-center">
                    <svg width="31" height="28" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2846 11.7647C9.733 11.7647 8.4047 11.1887 7.29975 10.0368C6.19479 8.8848 5.64232 7.5 5.64232 5.88235C5.64232 4.26471 6.19479 2.8799 7.29975 1.72794C8.4047 0.57598 9.733 0 11.2846 0C12.8363 0 14.1646 0.57598 15.2695 1.72794C16.3745 2.8799 16.927 4.26471 16.927 5.88235C16.927 7.5 16.3745 8.8848 15.2695 10.0368C14.1646 11.1887 12.8363 11.7647 11.2846 11.7647ZM0 23.5294V19.4118C0 18.6029 0.199832 17.8431 0.599496 17.1324C0.99916 16.4216 1.55164 15.8824 2.25693 15.5147C3.45592 14.8775 4.80772 14.3382 6.31234 13.8971C7.81696 13.4559 9.47439 13.2353 11.2846 13.2353H11.7783C11.9194 13.2353 12.0605 13.2598 12.2015 13.3088C12.0134 13.75 11.8547 14.2096 11.7254 14.6875C11.5961 15.1654 11.4962 15.6618 11.4257 16.1765H11.2846C9.61545 16.1765 8.11671 16.3971 6.78841 16.8382C5.46012 17.2794 4.3728 17.7206 3.52645 18.1618C3.31486 18.2843 3.14442 18.4559 3.01511 18.6765C2.88581 18.8971 2.82116 19.1422 2.82116 19.4118V20.5882H11.7078C11.8489 21.1029 12.0369 21.6115 12.272 22.114C12.5071 22.6164 12.7657 23.0882 13.0479 23.5294H0ZM19.7481 25L19.3249 22.7941C19.0428 22.6716 18.7783 22.5429 18.5315 22.4081C18.2846 22.2733 18.0319 22.1078 17.7733 21.9118L15.728 22.5735L14.3174 20.0735L15.9395 18.6029C15.8925 18.2598 15.869 17.9412 15.869 17.6471C15.869 17.3529 15.8925 17.0343 15.9395 16.6912L14.3174 15.2206L15.728 12.7206L17.7733 13.3824C18.0319 13.1863 18.2846 13.0208 18.5315 12.886C18.7783 12.7512 19.0428 12.6226 19.3249 12.5L19.7481 10.2941H22.5693L22.9924 12.5C23.2746 12.6226 23.539 12.7574 23.7859 12.9044C24.0327 13.0515 24.2855 13.2353 24.5441 13.4559L26.5894 12.7206L28 15.2941L26.3778 16.7647C26.4249 17.0588 26.4484 17.3652 26.4484 17.6838C26.4484 18.0025 26.4249 18.3088 26.3778 18.6029L28 20.0735L26.5894 22.5735L24.5441 21.9118C24.2855 22.1078 24.0327 22.2733 23.7859 22.4081C23.539 22.5429 23.2746 22.6716 22.9924 22.7941L22.5693 25H19.7481ZM21.1587 20.5882C21.9345 20.5882 22.5987 20.3002 23.1511 19.7243C23.7036 19.1483 23.9798 18.4559 23.9798 17.6471C23.9798 16.8382 23.7036 16.1458 23.1511 15.5699C22.5987 14.9939 21.9345 14.7059 21.1587 14.7059C20.3829 14.7059 19.7187 14.9939 19.1662 15.5699C18.6138 16.1458 18.3375 16.8382 18.3375 17.6471C18.3375 18.4559 18.6138 19.1483 19.1662 19.7243C19.7187 20.3002 20.3829 20.5882 21.1587 20.5882ZM11.2846 8.82353C12.0605 8.82353 12.7246 8.53554 13.2771 7.95956C13.8296 7.38358 14.1058 6.69118 14.1058 5.88235C14.1058 5.07353 13.8296 4.38113 13.2771 3.80515C12.7246 3.22917 12.0605 2.94118 11.2846 2.94118C10.5088 2.94118 9.84467 3.22917 9.29219 3.80515C8.73971 4.38113 8.46348 5.07353 8.46348 5.88235C8.46348 6.69118 8.73971 7.38358 9.29219 7.95956C9.84467 8.53554 10.5088 8.82353 11.2846 8.82353Z"
                            fill="#DDE0D0" />
                    </svg>
                </div>
                <div>
                    <h1 class="font-bold text-escuro ">{{ formatarString(funcionario.nome, 25) }}</h1>
                    <div class=" space-x-2 flex text-sm text-escuro">
                        <h2>{{ funcionario.cargo }}</h2>
                        <h2>{{ funcionario.numero }}</h2>
                    </div>
                    <div v-if="funcionario.salario"
                        class="flex justify-between text-sm bg-[#B9C2B3] rounded-md py-[1px] px-[5px] text-escuro">
                        <h2>{{ paraReal(funcionario.salario) }}</h2>
                        <h2>{{ '📅|' + funcionario.data_pagamento_salario }} </h2>
                    </div>
                    <div v-else class="flex justify-between text-sm bg-[#B9C2B3] rounded-md py-[1px] px-[5px] text-escuro">
                        <h2>Sem salário</h2>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="funcionariosResponse"
            class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-escuro text-3xl font-bold">
                &lt </button>

            <div class="flex flex-col items-center">
                <p class="text-escuro font-semibold">Items por Pág.</p>
                <select v-model="pagina.tamanho" @input="pagina.atual = 0"
                    class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                    <option v-bind:value=5> 5 </option>
                    <option v-bind:value=10> 10 </option>
                    <option v-bind:value=250> 25 </option>
                </select>
            </div>
            <button v-if="pagina.atual < (Math.ceil(funcionariosResponse.data.length / pagina.tamanho) - 1)"
                @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
            </button><br>
        </div>
        <Transition name="pop">
            <ModalNovoFuncionario v-if="showModalAdicionar"
                @close="showModalAdicionar = false; mainElement.style.overflow = 'auto'"
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
            <ModalEditarFuncionario v-if="showModalEditar"
                @close="mainElement.style.overflow = 'auto'; showModalEditar = false"
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
            <ModalDeletarFuncionario v-if="showModalDeletar"
                @close="mainElement.style.overflow = 'auto'; showModalDeletar = false"
                @deletarFuncionario="handleDeleteFuncionario(funcionarioInput.id)">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este funcionário?</h1>
                <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                    funcionarioInput.nome
                }}</h1>
                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarFuncionario>
        </Transition>
        <Transition name="pop">
            <ModalPagarFuncionario v-if="showModalPagarFuncionario"
                @close="mainElement.style.overflow = 'auto'; showModalPagarFuncionario = false"
                @pagarFuncionario="handleSubmitPagarFuncionario">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <h1 class="text-xl text-claro">Realizar pagamento à: {{ funcionarioInput.nome }}</h1>
                <div class="relative z-0 w-full mb-6 group">

                    <input type="text" v-on:input="salárioFormatar(funcionarioInput.salario)"
                        v-model="funcionarioInput.salario" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                        placeholder=" " required>
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor
                        do pagamento</label>
                </div>
                <div v-if="safraResponse.data != ''">

                    <div class="relative z-0 w-full mt-6 group">


                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-12  top-7 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ">
                            De qual safra será descontado o valor do pagamento?</label>
                        <select v-model="funcionarioInput.safra_id"
                            class="block mt-4 py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde translate-y-8 mb-6  border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" v-for="safra in safraResponse.data" :key="safra.id"
                                v-bind:value=safra.id>{{
                                    safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                }}
                            </option>
                        </select>
                    </div>
                </div>
                <div v-else class="text-center text-vermelho font-bold ">
                    Você precisa de uma safra ativa para adicionar este item
                </div>
            </ModalPagarFuncionario>
        </Transition>
        <Transition name="pop">
            <ModalDeletarNegado v-if="showModalDeletarNegado" @close="showModalDeletarNegado = false">
                <h2 class="text-center text-claro text-2xl font-semibold">Este funcionário está registrado em uma tarefa,
                    não
                    pode ser
                    deletado.</h2>
            </ModalDeletarNegado>
        </Transition>

        <OpcoesMobile v-if="showModalOpcoes" @close="showModalOpcoes = false; mainElement.style.overflow = 'auto'">
            <h1 class="capitalize text-center text-escuro font-semibold mb-2">{{ funcionarioInput.nome }}</h1>
            <ul>
                <li @click="handleModalEditar(funcionarioInput.nome, funcionarioInput.cargo, funcionarioInput.numero, funcionarioInput.is_assalariado, funcionarioInput.salario, funcionarioInput.data_pagamento_salario, funcionarioInput.id)"
                    class="bg-verde py-1 px-2 rounded mb-2">
                    Editar
                </li>
                <li @click="abrirModalPagarFuncionario(funcionarioInput.id, funcionarioInput.nome)"
                    class="bg-verde py-1 px-2 rounded mb-2">
                    Fazer pagamento
            </li>
            <li @click="abrirModalDeletarFuncionario(funcionarioInput.id, funcionarioInput.nome)"
                class="bg-vermelho py-1 px-2 rounded">
                Deletar
            </li>
        </ul>
    </OpcoesMobile>
</div></template>