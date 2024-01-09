<script setup>

definePageMeta({
    middleware: ["auth", "subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

const showModalAdicionar = ref()
const showModalConfirmar = ref()
const showModaldescricao = ref()
const showModalCancelar = ref()
const showCorrigirEstoque = ref()
const showModalOpcoes = ref()
const limitarForm = ref()

const funcionariosResponse = ref();
const tarefaResponse = ref();
const maquinasResponse = ref();
const maquinas_nomeResponse = ref();
const maquinas_anoResponse = ref();
const estoqueResponse = ref();
const estoqueResponse_qnt = ref();
const showPreencha = ref()

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
        document.getElementById("timerBar").style.width =  loadingWidth.value + "%";
        document.getElementById("timerBarMobile").style.width =  loadingWidth.value + "%";

        // Check if the width has reached 0
       
    }, 80);


}


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

// Get the element with the id "main"
// var mainElement = document.getElementById("main");

// // Check if the element exists before modifying it
// if (mainElement) {
//   // Disable overflow by setting the overflow CSS property to "hidden"
//   mainElement.style.overflow = "hidden";
// }

const mainElement = ref(document.getElementById("main"));

const abrirOpcoesMobile = (id, titulo, descricao, funcionario, maquina_utilizada, maquina_id, estoque_id, estoque_utilizado_item, estoque_utilizado_quantidade, estoque_utilizado_grandeza, prazo, prazo_hora, status) => {
    // Check if the element exists before modifying it
    if (mainElement) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        mainElement.value.style.overflow = "hidden";
    }
    showModalOpcoes.value = true
    showPreencha.value = false
    limitarForm.value = true
    tarefaInput.id = id
    tarefaInput.titulo = titulo
    tarefaInput.descricao = descricao
    tarefaInput.funcionario_nome = funcionario
    tarefaInput.status = status
    tarefaInput.prazo = prazo
    tarefaInput.prazo_hora = prazo_hora
    tarefaInput.maquina_utilizada = maquina_utilizada
    tarefaInput.maquina_id = maquina_id
    tarefaInput.estoque_id = estoque_id
    tarefaInput.estoque_nome = estoque_utilizado_item
    tarefaInput.estoque_quantidade_correcao = estoque_utilizado_quantidade
    tarefaInput.estoque_grandeza = estoque_utilizado_grandeza
    console.log(tarefaInput.estoque_id)

}



if (process.client) {
    tarefaResponse.value = await supabase.from("tarefas").select("*, funcionarios(*), estoque(*), maquinas(*)").eq('user_id', user.value.id).order('prazo', { ascending: false }).order('prazo_hora', { ascending: false })
    estoqueResponse.value = await supabase.from("estoque").select().eq('user_id', user.value.id)
    maquinasResponse.value = await supabase.from("maquinas").select().match({ user_id: user.value.id, status: "disponivel" })
    funcionariosResponse.value = await supabase.from("funcionarios").select().eq('user_id', user.value.id)
}

const corTarefa = (status) => {
    let cor = "laranja"
    switch (status) {
        case "pendente":
            cor = "verde";
            break;
        case "completa":
            cor = "verde_claro";
            break;
        case "atrasada":
            cor = "amarelo";
            break;
        case "cancelada":
            cor = "vermelho";
            break;
        case "reportada":
            cor = "azul";
            break;

        default:
            break;
    }
    return cor
}

// definePageMeta({
//     middleware: "auth"
// })


const tarefaInput = reactive({
    id: "",
    funcionario_id: 0,
    funcionario_nome: "",
    estoque_id: 0,
    titulo: "",
    status: "",
    descricao: "",
    prazo: "",
    prazo_hora: "",
    possui_maquina: false,
    possui_estoque: false,
    estoque_quantidade: 0,
    estoque_quantidade_correcao: 0,
    estoque_grandeza: 0,
    maquina_nome: "",
    maquina_ano: "",
    estoque_nome: "",
    maquina_id: 0,
})

const handleVerDescricao = (descricao) => {
    tarefaInput.descricao = descricao
    showModaldescricao.value = true
}
const handleNovaTarefa = () => {
    showPreencha.value = false
    limitarForm.value = true
    showModalAdicionar.value = true
}
const handleDeletarTarefa = (id, titulo) => {
    limitarForm.value = true
    tarefaInput.id = id
    tarefaInput.titulo = titulo
    showModalCancelar.value = true
}
const handleSubmitDeletarTarefa = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("tarefas").update({
        status: "cancelada"
    }).eq('id', tarefaInput.id);

    if (process.client) {
        tarefaResponse.value = await supabase.from("tarefas").select("*, funcionarios(*), estoque(*), maquinas(*)").eq('user_id', user.value.id).order('prazo', { ascending: false }).order('prazo_hora', { ascending: false })
    }
    showAlert("Tarefa deletada com sucesso")
    showModalCancelar.value = false
}

const handleSubmitNovoTarefa = async () => {

    if (tarefaInput.funcionario_id && tarefaInput.titulo && tarefaInput.descricao && tarefaInput.prazo && tarefaInput.prazo_hora) {
        if (tarefaInput.possui_maquina) {
            if (!tarefaInput.maquina_id) {
                showPreencha.value = true
                return
            }
        }
        if (tarefaInput.possui_estoque) {
            if (!tarefaInput.estoque_id || !tarefaInput.estoque_quantidade) {
                showPreencha.value = true
                return
            }
        }



        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {
            if (tarefaInput.maquina_id > 0 && tarefaInput.estoque_id > 0) {
                await supabase.from("tarefas").insert({
                    user_id: user.value.id,
                    funcionario_id: tarefaInput.funcionario_id,
                    titulo: tarefaInput.titulo,
                    descricao: tarefaInput.descricao,
                    prazo: tarefaInput.prazo,
                    prazo_hora: tarefaInput.prazo_hora + ":00.000000+00",
                    maquina_utilizada: tarefaInput.maquina_id,
                    estoque_utilizado_item: tarefaInput.estoque_id,
                    estoque_utilizado_quantidade: parseFloat(tarefaInput.estoque_quantidade),
                    status: "pendente"
                });
                await supabase.from("maquinas").update({
                    status: "em uso"

                }).eq('id', tarefaInput.maquina_id);
            }
            else if (tarefaInput.maquina_id > 0) {
                await supabase.from("tarefas").insert({
                    user_id: user.value.id,
                    funcionario_id: tarefaInput.funcionario_id,
                    titulo: tarefaInput.titulo,
                    descricao: tarefaInput.descricao,
                    prazo: tarefaInput.prazo,
                    prazo_hora: tarefaInput.prazo_hora + ":00.000000+00",
                    maquina_utilizada: tarefaInput.maquina_id,
                    status: "pendente"
                });
                await supabase.from("maquinas").update({
                    status: "em uso"

                }).eq('id', tarefaInput.maquina_id);
            }

            else if (tarefaInput.estoque_id > 0) {
                await supabase.from("tarefas").insert({
                    user_id: user.value.id,
                    funcionario_id: tarefaInput.funcionario_id,
                    titulo: tarefaInput.titulo,
                    descricao: tarefaInput.descricao,
                    prazo: tarefaInput.prazo,
                    prazo_hora: tarefaInput.prazo_hora + ":00.000000+00",
                    estoque_utilizado_item: tarefaInput.estoque_id,
                    estoque_utilizado_quantidade: tarefaInput.estoque_quantidade,
                    status: "pendente"
                });
            }
            else if (tarefaInput.estoque_id == 0 && tarefaInput.maquina_id == 0) {
                await supabase.from("tarefas").insert({
                    user_id: user.value.id,
                    funcionario_id: tarefaInput.funcionario_id,
                    titulo: tarefaInput.titulo,
                    descricao: tarefaInput.descricao,
                    prazo: tarefaInput.prazo,
                    prazo_hora: tarefaInput.prazo_hora + ":00.000000+00",
                    status: "pendente"
                });
            }



        }
        tarefaResponse.value = await supabase.from("tarefas").select("*, funcionarios(*), estoque(*), maquinas(*)").eq('user_id', user.value.id).order('prazo', { ascending: false }).order('prazo_hora', { ascending: false })
        showModalAdicionar.value = false
        tarefaInput.titulo = "",
            tarefaInput.descricao = "",
            tarefaInput.prazo = ""
        showPreencha.value = false
        showAlert("Tarefa adicionada com sucesso")
    } else {
        showPreencha.value = true
    }
}

const handleModalConfirmar = async (id, titulo, descricao, funcionario, maquina_utilizada, maquina_id, estoque_id, estoque_utilizado_item, estoque_utilizado_quantidade, estoque_utilizado_grandeza, prazo, prazo_hora, status) => {

    limitarForm.value = true
    maquinas_nomeResponse.value = await supabase.from("tarefas").select("maquinas(modelo)").eq('id', id)
    maquinas_anoResponse.value = await supabase.from("tarefas").select("maquinas(ano)").eq('id', id)


    showModalConfirmar.value = true
    tarefaInput.id = id
    tarefaInput.titulo = titulo
    tarefaInput.descricao = descricao
    tarefaInput.funcionario_nome = funcionario
    tarefaInput.status = status
    tarefaInput.prazo = prazo
    tarefaInput.prazo_hora = prazo_hora
    tarefaInput.maquina_utilizada = maquina_utilizada
    tarefaInput.maquina_id = maquina_id
    tarefaInput.estoque_id = estoque_id
    tarefaInput.estoque_nome = estoque_utilizado_item
    tarefaInput.estoque_utilizado_quantidade_reportada = estoque_utilizado_quantidade
    tarefaInput.estoque_grandeza = estoque_utilizado_grandeza
    console.log(tarefaInput)
    // tarefaInput.maquina_nome = 
}

const handleSubmitConfirmar = async () => {
    if (showCorrigirEstoque.value) {
        if (!tarefaInput.estoque_quantidade) {
            showPreencha.value = true
            return
        }
    }

    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("tarefas").update({
        status: "completa"
    }).eq('id', tarefaInput.id);

    if (tarefaInput.maquina_id != null) {
        await supabase.from("maquinas").update({
            status: "disponivel"
        }).eq('id', tarefaInput.maquina_id);
    }


    if (tarefaInput.estoque_id != null) {
        estoqueResponse.value = await supabase.from("estoque").select().eq('id', tarefaInput.estoque_id)
        if (showCorrigirEstoque.value) {
            await supabase.from("estoque").update({
                quantidade: parseFloat(estoqueResponse.value.data[0].quantidade) - parseFloat(tarefaInput.estoque_quantidade)
            }).eq('id', tarefaInput.estoque_id);
        }
        else {

            await supabase.from("estoque").update({
                quantidade: parseFloat(estoqueResponse.value.data[0].quantidade) - parseFloat(tarefaInput.estoque_quantidade_correcao)
            }).eq('id', tarefaInput.estoque_id);
        }
    }

    if (process.client) {
        tarefaResponse.value = await supabase.from("tarefas").select("*, funcionarios(*), estoque(*), maquinas(*)").eq('user_id', user.value.id).order('prazo', { ascending: false }).order('prazo_hora', { ascending: false })
    }
    tarefaInput.estoque_quantidade = ""
    showModalConfirmar.value = false
    showAlert("Tarefa confimada com sucesso")
    showPreencha.value = false
}


const limitarQuantidade = async (id) => {
    console.log("FFFFFFFFFFFFFFFFFFFFFFF" + tarefaInput.estoque_id)
    if (!estoqueResponse_qnt.value) {
        if(screen === 'desktop'){
            estoqueResponse_qnt.value = await supabase.from("estoque").select("quantidade").eq('id', id)
        }else{
            estoqueResponse_qnt.value = await supabase.from("estoque").select("quantidade").eq('id', tarefaInput.estoque_id)

        }
    }
    console.log(estoqueResponse_qnt)
    if (tarefaInput.estoque_quantidade > estoqueResponse_qnt.value.data[0].quantidade) {
        tarefaInput.estoque_quantidade = estoqueResponse_qnt.value.data[0].quantidade
    }
}

const pagina = reactive({
    atual: 0,
    tamanho: 5
})
const handlePagina = (i) => {
    if (i === "proxima") {
        pagina.atual++
    }
    if (i === "anterior") {
        pagina.atual--
    }
}


</script>

<template>
    <div v-if="screen === 'desktop'" class="flex flex-col  w-full">

        <Transition name="alert">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <!-- Título -->
        <div class=" ml-[-4%] flex flex-row items-center absolute">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Tarefas | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl"> 🧾 </h1>
            <!-- 1F468 U+200D U+1F33E	 -->
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <div class="flex flex-col  w-full items-center mt-[5%]">
            <div class="w-[80%]">
                <div class=" flex justify-between">
                    <button @click="handleNovaTarefa()"
                        class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                        Adicionar tarefa
                    </button>
                    <ul class="flex flex-col">
                        <div class="flex">
                            <li class="flex items-center space-x-3 mr-3">
                                <div class="w-4 h-4 rounded-full bg-verde"></div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> Pendente</div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> |</div>
                            </li>
                            <li class="flex items-center space-x-3 mr-3">
                                <div class="w-4 h-4 rounded-full bg-azul"></div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> Esperando confirmação</div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> |</div>
                            </li>
                        </div>
                        <div class="flex">
                            <li class="flex items-center space-x-3 mr-3">
                                <div class="w-4 h-4 rounded-full bg-verde_claro"></div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> Completa</div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> |</div>
                            </li>
                            <li class="flex items-center space-x-3 mr-3">
                                <div class="w-4 h-4 rounded-full bg-amarelo"></div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> Atrasada</div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> |</div>
                            </li>
                            <li class="flex items-center space-x-3">
                                <div class="w-4 h-4 rounded-full bg-vermelho"></div>
                                <div class="sm:text-smtext-xl text-escuro font-bold"> Cancelada </div>
                            </li>
                        </div>
                    </ul>
                </div>


                <Loader v-if="!tarefaResponse" />
                <ul v-else class="flex flex-col mt-[2%]">
                    <div v-if="tarefaResponse"
                        class="flex items-center justify-center self-start  px-4 py-2 bg-escuro space-x-8 rounded-xl mb-3 ">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(tarefaResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(tarefaResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                    <li v-for="tarefa in tarefaResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho)"
                        :key="tarefa.id"
                        :class="`flex  justify-between h-[100px] bg-escuro bg-opacity-90  border-${corTarefa(tarefa.status)} border-t-[8px] mb-3 rounded rounded-b-xl`">

                        <div class="flex flex-1 flex-col items-center justify-evenly text-left h-full">
                            <p class="capitalize text-claro font-bold sm:text-md 2xl:text-xl"> {{ tarefa.titulo }}</p>
                            <p class="capitalize text-claro sm:text-sm 2xl:text-lg font-semibold"><b>👤|</b> {{
                                tarefa.funcionarios.nome
                            }}
                            </p>

                        </div>
                        <div class="flex flex-1 flex-col h-full items-center justify-evenly">
                            <p class="capitalize text-verde_claro sm:text-sm 2xl:text-lg font-semibold"><b>📦|</b> <span
                                    v-if="tarefa.estoque">{{
                                        tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                                    }} <span class="text-sm">({{
    tarefa.estoque.grandeza
}})</span> </span> <span v-else>--------</span></p>
                            <p class="capitalize text-verde_claro text-sm font-semibold"><b>🚜|</b> <span
                                    v-if="tarefa.maquinas">{{
                                        tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                                    }}</span> <span v-else>--------</span></p>

                        </div>
                        <div class="flex flex-1 flex-col h-full items-center justify-evenly">
                            <p @click="handleVerDescricao(tarefa.descricao)"
                                class="capitalize text-claro sm:text-sm 2xl:text-lg font-semibold hover:text-xl transition-all cursor-pointer">
                                <b>📑|</b>Ver
                                Descrição
                            </p>
                            <p class="capitalize text-verde_claro sm:text-sm 2xl:text-lg font-semibold"> <b>⏱|</b>{{
                                tarefa.prazo + "-" +
                                tarefa.prazo_hora
                            }} </p>
                        </div>
                        <div class="flex flex-1 sm:text-xl 2xl:text-3xl h-full items-center justify-evenly">
                            <div v-if="tarefa.status == 'cancelada' || tarefa.status == 'completa'">
                                <h1 v-if="tarefa.status == 'cancelada'"
                                    class="text-vermelho font-bold sm:text-lg 2xl:text-2xl">
                                    Cancelada
                                </h1>
                                <h1 v-if="tarefa.status == 'completa'"
                                    class="text-verde_claro font-bold sm:text-lg 2xl:text-2xl">
                                    Completa
                                </h1>
                            </div>
                            <div v-else class="flex space-x-8">
                                <h1 v-if="tarefa.estoque && tarefa.maquinas"
                                    @click="handleModalConfirmar(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, (tarefa.maquinas.modelo + '-' + tarefa.maquinas.ano), tarefa.maquina_utilizada, tarefa.estoque_utilizado_item, tarefa.estoque.item, tarefa.estoque_utilizado_quantidade, tarefa.estoque.grandeza, tarefa.prazo, tarefa.prazo_hora, tarefa.status)"
                                    class="hover:text-4xl transition-all cursor-pointer">✔</h1>
                                <h1 v-if="tarefa.estoque && !tarefa.maquinas"
                                    @click="handleModalConfirmar(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, null, null, tarefa.estoque_utilizado_item, tarefa.estoque.item, tarefa.estoque_utilizado_quantidade, tarefa.estoque.grandeza, tarefa.prazo, tarefa.prazo_hora, tarefa.status)"
                                    class="hover:text-4xl transition-all cursor-pointer">✔</h1>
                                <h1 v-if="tarefa.maquinas && !tarefa.estoque"
                                    @click="handleModalConfirmar(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, (tarefa.maquinas.modelo + '-' + tarefa.maquinas.ano), tarefa.maquina_utilizada, null, null, null, null, tarefa.prazo, tarefa.prazo_hora, tarefa.status)"
                                    class="hover:text-4xl transition-all cursor-pointer">✔</h1>
                                <h1 v-if="!tarefa.estoque && !tarefa.maquinas"
                                    @click="handleModalConfirmar(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, null, null, null, null, null, null, tarefa.prazo, tarefa.prazo_hora, tarefa.status)"
                                    class="hover:text-4xl transition-all cursor-pointer">✔</h1>
                                <h1 @click="handleDeletarTarefa(tarefa.id, tarefa.titulo)"
                                    class="hover:text-4xl transition-all cursor-pointer">❌</h1>
                            </div>
                        </div>
                        <!-- <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                @click="handleModalConfirmar(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, tarefa.maquina_utilizada, tarefa.estoque_utilzado_item, tarefa.estoque_utilzado_quantidade, tarefa.prazo, tarefa.status)"
                                @close="showModalConfirmar = false">
                                done_all
                            </span> -->
                    </li>
                </ul>
            </div>

            <Transition name="pop">
                <ModalAdicionarTarefa v-if="showModalAdicionar" @close="showModalAdicionar = false"
                    @adicionarTarefa="handleSubmitNovoTarefa">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>

                    <div class="flex justify-evenly w-full space-x-4">
                        <div class="flex flex-col flex-1">
                            <div class="relative z-0 w-full mb-6 group">
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Designada
                                    à</label>
                                <select v-model="tarefaInput.funcionario_id"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" v-for="funcionario in funcionariosResponse.data"
                                        :key="funcionario.id" v-bind:value=funcionario.id>{{ funcionario.nome }}
                                    </option>
                                </select>
                            </div>
                            <!-- <label for="data_pagamento_salario"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Dia
                                    de pagamento parcela</label>
                                    <select v-model="maquinaInput.data_pagamento_parcelas" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    name="data_pagamento_salario">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                </select> -->

                            <div class="flex space-x-7">
                                <div class="relative z-0 w-full mb-6 group">

                                    <input type="date" v-model="tarefaInput.prazo" name="a"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                        placeholder=" " required>
                                    <label for="a"
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Dia de prazo</label>
                                </div>


                                <div class="relative z-0 w-full mb-6 group">

                                    <input type="time" v-model="tarefaInput.prazo_hora"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                        placeholder=" " required>
                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Horário de prazo</label>
                                </div>

                            </div>

                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-model="tarefaInput.titulo"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Título</label>
                            </div>

                            <div class="relative z-0 w-full mb-6 group">

                                <textarea v-model="tarefaInput.descricao" maxlength="500" cols="30" rows="7"
                                    class="block py-2.5 px-2.5 resize-none w-full rounded mt-4 text-sm text-escuro bg-transparent border-0 border-b-2  bg-claro appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required></textarea>
                                <label
                                    class="peer-focus:font-medium absolute  text-sm text-escuro  duration-300 transform -translate-y-6 scale-75 top-5  left-1  font-bold   origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Descrição</label>
                            </div>

                            <!-- <label for="titulo">Título</label>
                                    < v-model="tarefaInput.descricao" maxlength="500" cols="30" rows="7"></textarea> -->
                        </div>
                        <div class="flex flex-col flex-1 items-center justify-evenly">

                            <div class="flex items-center space-x-4">

                                <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Utilizará
                                    máquina?</label>
                                <input
                                    class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                                    v-model="tarefaInput.possui_maquina" type="checkbox" placeholder="João da silva"
                                    name="recebe_salario">
                            </div>


                            <Transition name="slide">
                                <div v-if="tarefaInput.possui_maquina" class="relative z-0 w-full mb-6 group">
                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Máquina
                                        utilizada</label>
                                    <select v-model="tarefaInput.maquina_id"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                        <option v-for="maquina in maquinasResponse.data" :key="maquina.id"
                                            class="bg-verde font-semibold" v-bind:value=maquina.id>
                                            {{ maquina.modelo + " - " + maquina.ano }}
                                        </option>
                                    </select>
                                </div>
                            </Transition>

                            <div class="flex items-center space-x-4">

                                <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Utilizará itens
                                    do estoque?</label>
                                <input
                                    class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                                    v-model="tarefaInput.possui_estoque" type="checkbox" placeholder="João da silva"
                                    name="recebe_salario">
                            </div>


                            <Transition name="slide">
                                <div v-if="tarefaInput.possui_estoque" class="flex flex-col w-full transition-all">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <label
                                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Item
                                            do estoque utilizado</label>
                                        <select v-model="tarefaInput.estoque_id"
                                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                            <option v-for="estoque in estoqueResponse.data" :key="estoque.id"
                                                :v-if="estoque.quantidade > 0" class="bg-verde font-semibold"
                                                v-bind:value=estoque.id>{{
                                                    estoque.item + " - " + estoque.grandeza
                                                }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="relative z-0 w-full mb-6 group">

                                        <input type="number" v-model="tarefaInput.estoque_quantidade"
                                            v-on:input="limitarQuantidade(tarefaInput.estoque_id)"
                                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                            placeholder=" " required>
                                        <label
                                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Quantidade do item</label>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                    </div>

                </ModalAdicionarTarefa>
            </Transition>

            <Transition name="pop">
                <ModalConfirmarTarefa v-if="showModalConfirmar" @close="showModalConfirmar = false"
                    @confirmarTarefa="handleSubmitConfirmar">

                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>

                    <h2 class="text-claro text-lg">Atribuída à: <b class="text-verde_claro"> {{
                        tarefaInput.funcionario_nome + " "
                    }} </b> com prazo limite até <b class=" text-xs">{{
    tarefaInput.prazo
    + " - " +
    tarefaInput.prazo_hora
}}</b></h2>
                    <h2 class="text-claro text-lg" v-if="tarefaInput.maquina_utilizada"> A máquina {{
                        tarefaInput.maquina_utilizada }} foi
                        utilizada
                    </h2>
                    <div v-if="tarefaInput.estoque_nome">
                        <h2 class="text-verde font-semibold"> De acordo com <b class="text-claro font-bold">{{
                            tarefaInput.funcionario_nome + ", "
                        }}</b> <b class="text-verde_claro font-bold"> {{
    tarefaInput.estoque_utilizado_quantidade_reportada + "(" + tarefaInput.estoque_grandeza +
    ")" }}
                            </b> de <b class="text-verde_claro font-bold">{{ tarefaInput.estoque_nome }}</b> foi
                            utilizado</h2>
                        <div>
                            <div class="flex">
                                <p class="text-verde font-semibold text-md mr-3">Deseja alterar este valor?</p>
                                <input class="scale-150" type="checkbox" v-model="showCorrigirEstoque">
                            </div>
                            <input type="number" v-model="tarefaInput.estoque_quantidade" v-if="showCorrigirEstoque"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                v-on:input="limitarQuantidade(tarefaInput.estoque_id)" required>
                        </div>
                    </div>
                    <h2 class="text-2xl text-claro font-bold"> {{ tarefaInput.titulo }}</h2>
                    <h2 class="text-claro"> {{ tarefaInput.descricao }}</h2>
                    <div v-if="!maquinas_nomeResponse.data || !maquinas_anoResponse.data">Loading...</div>
                    <div v-else="true">
                    </div>
                </ModalConfirmarTarefa>
            </Transition>
            <Transition name="pop">
                <ModalVerDescricao v-if="showModaldescricao" @close="showModaldescricao = false">
                    <div>
                        <p class="capitalize text-claro break-all">{{ tarefaInput.descricao }}</p>
                    </div>
                </ModalVerDescricao>
            </Transition>
            <Transition name="pop">
                <ModalCancelarTarefa v-if="showModalCancelar" @close="showModalCancelar = false"
                    @cancelarTarefa="handleSubmitDeletarTarefa">
                    <div>
                        <h1 class="text-center text-xl text-claro light">Deseja mesmo cancelar esta tarefa?</h1>
                        <h1 class="text-center text-xl text-claro capitalize font-bold">{{ tarefaInput.titulo }}</h1>
                        <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode
                                    ser
                                    desfeita.</u> </b></h2>
                    </div>
                </ModalCancelarTarefa>
            </Transition>
        </div>
    </div>
    <div v-if="screen === 'mobile'">
        <Transition name="alert_mobile">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <!-- Tooltip -->
        <ul class="flex flex-col">
            <div class="flex w-full justify-center">
                <li class="flex items-center space-x-2 mr-2">
                    <div class="w-4 h-4 rounded-full bg-verde"></div>
                    <div class="text-xs text-escuro font-bold"> Pendente</div>
                    <div class="text-xs text-escuro font-bold"> |</div>
                </li>
                <li class="flex items-center space-x-2 mr-2">
                    <div class="w-4 h-4 rounded-full bg-azul"></div>
                    <div class="text-xs text-escuro font-bold"> Esperando confirmação</div>
                    <div class="text-xs text-escuro font-bold"> |</div>
                </li>
            </div>
            <div class="flex mt-2 justify-evenly">
                <li class="flex items-center space-x-2 mr-2">
                    <div class="w-4 h-4 rounded-full bg-verde_claro"></div>
                    <div class="text-xs text-escuro font-bold"> Completa</div>
                    <div class="text-xs text-escuro font-bold"> |</div>
                </li>
                <li class="flex items-center space-x-2 mr-2">
                    <div class="w-4 h-4 rounded-full bg-amarelo"></div>
                    <div class="text-xs text-escuro font-bold"> Atrasada</div>
                    <div class="text-xs text-escuro font-bold"> |</div>
                </li>
                <li class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded-full bg-vermelho"></div>
                    <div class="text-xs text-escuro font-bold"> Cancelada </div>
                </li>
            </div>
        </ul>
        <!--  -->

        <button @click="handleNovaTarefa()"
            class="self-start bg-escuro px-4 py-2 mt-5 text-sm rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
            Adicionar tarefa
        </button>

        <Loader v-if="!tarefaResponse" />

        <div v-if="tarefaResponse"
            v-for="tarefa in tarefaResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho)"
            :key="tarefa.id"
            :class="`flex justify-between mb-3 bg-escuro rounded-b-xl text-claro border-t-[5px] border-${corTarefa(tarefa.status)} p-2`">





            <div v-if="tarefa.estoque && tarefa.maquinas" class='space-y-2  w-full'
                @click="abrirOpcoesMobile(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, (tarefa.maquinas.modelo + '-' + tarefa.maquinas.ano), tarefa.maquina_utilizada, tarefa.estoque_utilizado_item, tarefa.estoque.item, tarefa.estoque_utilizado_quantidade, tarefa.estoque.grandeza, tarefa.prazo, tarefa.prazo_hora, tarefa.status)">
                <p class="capitalize text-claro font-bold text-sm"> {{ tarefa.titulo }}</p>
                <p class="capitalize text-claro text-xs"><b>👤|</b> {{
                    tarefa.funcionarios.nome
                }}
                </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"> <b>⏱|</b>{{
                    tarefa.prazo + "-" +
                    tarefa.prazo_hora
                }} </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>📦|</b> <span v-if="tarefa.estoque">{{
                    tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                }} <span class="text-xs">({{
    tarefa.estoque.grandeza
}})</span> </span> <span v-else>--------</span></p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>🚜|</b> <span v-if="tarefa.maquinas">{{
                    tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                }}</span> <span v-else>--------</span></p>
            </div>

            <div v-if="tarefa.estoque && !tarefa.maquinas" class='space-y-2  w-full'
                @click="abrirOpcoesMobile(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, null, null, tarefa.estoque_utilizado_item, tarefa.estoque.item, tarefa.estoque_utilizado_quantidade_reportada, tarefa.estoque.grandeza, tarefa.prazo, tarefa.prazo_hora, tarefa.status)">
                <p class="capitalize text-claro font-bold text-sm"> {{ tarefa.titulo }}</p>
                <p class="capitalize text-claro text-xs"><b>👤|</b> {{
                    tarefa.funcionarios.nome
                }}
                </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"> <b>⏱|</b>{{
                    tarefa.prazo + "-" +
                    tarefa.prazo_hora
                }} </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>📦|</b> <span v-if="tarefa.estoque">{{
                    tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                }} <span class="text-xs">({{
    tarefa.estoque.grandeza
}})</span> </span> <span v-else>--------</span></p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>🚜|</b> <span v-if="tarefa.maquinas">{{
                    tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                }}</span> <span v-else>--------</span></p>
            </div>

            <div v-if="tarefa.maquinas && !tarefa.estoque" class='space-y-2  w-full'
                @click="abrirOpcoesMobile(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, (tarefa.maquinas.modelo + '-' + tarefa.maquinas.ano), tarefa.maquina_utilizada, null, null, null, null, tarefa.prazo, tarefa.prazo_hora, tarefa.status)">
                <p class="capitalize text-claro font-bold text-sm"> {{ tarefa.titulo }}</p>
                <p class="capitalize text-claro text-xs"><b>👤|</b> {{
                    tarefa.funcionarios.nome
                }}
                </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"> <b>⏱|</b>{{
                    tarefa.prazo + "-" +
                    tarefa.prazo_hora
                }} </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>📦|</b> <span v-if="tarefa.estoque">{{
                    tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                }} <span class="text-xs">({{
    tarefa.estoque.grandeza
}})</span> </span> <span v-else>--------</span></p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>🚜|</b> <span v-if="tarefa.maquinas">{{
                    tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                }}</span> <span v-else>--------</span></p>
            </div>

            <div v-if="!tarefa.estoque && !tarefa.maquinas" class='space-y-2  w-full'
                @click="abrirOpcoesMobile(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.funcionarios.nome, null, null, null, null, null, null, tarefa.prazo, tarefa.prazo_hora, tarefa.status)">
                <p class="capitalize text-claro font-bold text-sm"> {{ tarefa.titulo }}</p>
                <p class="capitalize text-claro text-xs"><b>👤|</b> {{
                    tarefa.funcionarios.nome
                }}
                </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"> <b>⏱|</b>{{
                    tarefa.prazo + "-" +
                    tarefa.prazo_hora
                }} </p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>📦|</b> <span v-if="tarefa.estoque">{{
                    tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                }} <span class="text-xs">({{
    tarefa.estoque.grandeza
}})</span> </span> <span v-else>--------</span></p>
                <p class="capitalize text-verde_claro text-xs font-semibold"><b>🚜|</b> <span v-if="tarefa.maquinas">{{
                    tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                }}</span> <span v-else>--------</span></p>
            </div>



        </div>


        <div v-if="tarefaResponse"
            class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 mb-4 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
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
            <button v-if="pagina.atual < (Math.ceil(tarefaResponse.data.length / pagina.tamanho) - 1)"
                @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
            </button><br>
        </div>

        <!-- Spacer -->
        <section class="h-[20px]"></section>

        <!-- <ModalDetalhesMobile>
            
        </ModalDetalhesMobile> -->

        <Transition name="pop">
            <ModalAdicionarTarefa v-if="showModalAdicionar" @close="showModalAdicionar = false; mainElement.style.overflow = 'auto'"
                @adicionarTarefa="handleSubmitNovoTarefa">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>

                <div class="flex flex-col justify-evenly w-full space-x-4">
                    <div class="flex flex-col flex-1">
                        <div class="relative z-0 w-full mb-6 group">
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Designada
                                à</label>
                            <select v-model="tarefaInput.funcionario_id"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option class="bg-verde font-semibold" v-for="funcionario in funcionariosResponse.data"
                                    :key="funcionario.id" v-bind:value=funcionario.id>{{ funcionario.nome }}
                                </option>
                            </select>
                        </div>
                        <!-- <label for="data_pagamento_salario"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Dia
                                    de pagamento parcela</label>
                                    <select v-model="maquinaInput.data_pagamento_parcelas" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    name="data_pagamento_salario">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                </select> -->

                        <div class="flex space-x-7">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="date" v-model="tarefaInput.prazo" name="a"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="a"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Dia de prazo</label>
                            </div>


                            <div class="relative z-0 w-full mb-6 group">

                                <input type="time" v-model="tarefaInput.prazo_hora"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Horário de prazo</label>
                            </div>

                        </div>

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="tarefaInput.titulo"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Título</label>
                        </div>

                        <div class="relative z-0 w-full mb-6 group">

                            <textarea v-model="tarefaInput.descricao" maxlength="500" cols="30" rows="7"
                                class="block py-2.5 px-2.5 resize-none w-full rounded mt-4 text-sm text-escuro bg-transparent border-0 border-b-2  bg-claro appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required></textarea>
                            <label
                                class="peer-focus:font-medium absolute  text-sm text-escuro  duration-300 transform -translate-y-6 scale-75 top-5  left-1  font-bold   origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Descrição</label>
                        </div>

                        <!-- <label for="titulo">Título</label>
                                    < v-model="tarefaInput.descricao" maxlength="500" cols="30" rows="7"></textarea> -->
                    </div>
                    <div class="flex flex-col flex-1 items-center justify-evenly">

                        <div class="flex items-center space-x-4">

                            <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Utilizará
                                máquina?</label>
                            <input
                                class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                                v-model="tarefaInput.possui_maquina" type="checkbox" placeholder="João da silva"
                                name="recebe_salario">
                        </div>


                        <Transition name="slide">
                            <div v-if="tarefaInput.possui_maquina" class="relative z-0 w-full mt-12 mb-6 group">
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Máquina
                                    utilizada</label>
                                <select v-model="tarefaInput.maquina_id"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option v-for="maquina in maquinasResponse.data" :key="maquina.id"
                                        class="bg-verde font-semibold" v-bind:value=maquina.id>
                                        {{ maquina.modelo + " - " + maquina.ano }}
                                    </option>
                                </select>
                            </div>
                        </Transition>

                        <div class="flex items-center space-x-4 mt-6">

                            <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Utilizará itens
                                do estoque?</label>
                            <input
                                class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                                v-model="tarefaInput.possui_estoque" type="checkbox" placeholder="João da silva"
                                name="recebe_salario">
                        </div>


                        <Transition name="slide">
                            <div v-if="tarefaInput.possui_estoque" class="flex flex-col space-y-8 w-full transition-all">
                                <div class="relative z-0 w-full mb-6 mt-12 group">
                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Item
                                        do estoque utilizado</label>
                                    <select v-model="tarefaInput.estoque_id"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                        <option v-for="estoque in estoqueResponse.data" :key="estoque.id"
                                            :v-if="estoque.quantidade > 0" class="bg-verde font-semibold"
                                            v-bind:value=estoque.id>{{
                                                estoque.item + " - " + estoque.grandeza
                                            }}
                                        </option>
                                    </select>
                                </div>

                                <div class="relative z-0 w-full mb-6 group">

                                    <input type="number" v-model="tarefaInput.estoque_quantidade"
                                        v-on:input="limitarQuantidade(tarefaInput.estoque_id)"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                        placeholder=" " required>
                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Quantidade do item</label>
                                </div>
                            </div>
                        </Transition>
                    </div>

                </div>

            </ModalAdicionarTarefa>
        </Transition>

        <Transition name="pop">
            <ModalConfirmarTarefa v-if="showModalConfirmar" @close="showModalConfirmar = false; mainElement.style.overflow = 'auto'"
                @confirmarTarefa="handleSubmitConfirmar">

                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>

                <h2 class="text-claro text-lg">Atribuída à: <b class="text-verde_claro"> {{
                    tarefaInput.funcionario_nome + " "
                }} </b> com prazo limite até <b class=" text-xs">{{
    tarefaInput.prazo
    + " - " +
    tarefaInput.prazo_hora
}}</b></h2>
                <h2 class="text-claro text-lg" v-if="tarefaInput.maquina_utilizada"> A máquina {{
                    tarefaInput.maquina_utilizada }} foi
                    utilizada
                </h2>
                <div v-if="tarefaInput.estoque_nome">
                    <h2 class="text-verde font-semibold"> De acordo com <b class="text-claro font-bold">{{
                        tarefaInput.funcionario_nome + ", "
                    }}</b> <b class="text-verde_claro font-bold"> {{
    tarefaInput.estoque_utilizado_quantidade_reportada + "(" + tarefaInput.estoque_grandeza +
    ")" }}
                        </b> de <b class="text-verde_claro font-bold">{{ tarefaInput.estoque_nome }}</b> foi
                        utilizado</h2>
                    <div>
                        <div class="flex">
                            <p class="text-verde font-semibold text-md mr-3">Deseja alterar este valor?</p>
                            <input class="scale-150" type="checkbox" v-model="showCorrigirEstoque">
                        </div>
                        <input type="number" v-model="tarefaInput.estoque_quantidade" v-if="showCorrigirEstoque"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            v-on:input="limitarQuantidade(tarefaInput.estoque_id)" required>
                    </div>
                </div>
                <h2 class="text-2xl text-claro font-bold"> {{ tarefaInput.titulo }}</h2>
                <h2 class="text-claro"> {{ tarefaInput.descricao }}</h2>
                <div v-if="!maquinas_nomeResponse.data || !maquinas_anoResponse.data">Loading...</div>
                <div v-else="true">
                </div>
            </ModalConfirmarTarefa>
        </Transition>
        <Transition name="pop">
            <ModalVerDescricao v-if="showModaldescricao" @close="showModaldescricao = false; mainElement.style.overflow = 'auto' ">
                <div>
                    <p class="capitalize text-claro break-all">{{ tarefaInput.descricao }}</p>
                </div>
            </ModalVerDescricao>
        </Transition>
        <Transition name="pop">
            <ModalCancelarTarefa v-if="showModalCancelar" @close="showModalCancelar = false; mainElement.style.overflow = 'auto'"
                @cancelarTarefa="handleSubmitDeletarTarefa">
                <div>
                    <h1 class="text-center text-xl text-claro light">Deseja mesmo cancelar esta tarefa?</h1>
                    <h1 class="text-center text-xl text-claro capitalize font-bold">{{ tarefaInput.titulo }}</h1>
                    <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode
                                ser
                                desfeita.</u> </b></h2>
                </div>
            </ModalCancelarTarefa>
        </Transition>

        <OpcoesMobile v-if="showModalOpcoes" @close="showModalOpcoes = false; mainElement.style.overflow = 'auto'">
            <h1 class="capitalize text-center text-escuro font-semibold mb-2">{{ tarefaInput.titulo }}</h1>
            <ul>
                <li @click="showModalOpcoes = false; handleVerDescricao(tarefaInput.descricao)" class="mb-2 bg-verde py-1 px-2 rounded">
                    Ver descricao
                </li>
                <div v-if="tarefaInput.status == 'pendente'">
                    <li v-if="tarefaInput.estoque_id && tarefaInput.maquina_id"
                        @click="showModalOpcoes = false; handleModalConfirmar(tarefaInput.id, tarefaInput.titulo, tarefaInput.descricao, tarefaInput.funcionario_nome, tarefaInput.maquina_utilizada, tarefaInput.maquina_id,  tarefaInput.estoque_id, tarefaInput.estoque_nome, tarefaInput.estoque_quantidade_correcao, tarefaInput.estoque_grandeza, tarefaInput.prazo, tarefaInput.prazo_hora, tarefaInput.status)"
                        class="bg-verde py-1 px-2 rounded mb-2">Marcar completa &nbsp ✔</li>
                    <li v-if="tarefaInput.estoque_id && !tarefaInput.maquina_id"
                        @click="showModalOpcoes = false; handleModalConfirmar(tarefaInput.id, tarefaInput.titulo, tarefaInput.descricao, tarefaInput.funcionario_nome, null, null, tarefaInput.estoque_id, tarefaInput.estoque_nome, tarefaInput.estoque_quantidade_correcao, tarefaInput.estoque_grandeza, tarefaInput.prazo, tarefaInput.prazo_hora, tarefaInput.status)"
                        class="bg-verde py-1 px-2 rounded mb-2">Marcar completa &nbsp ✔</li>
                    <li v-if="tarefaInput.maquina_id && !tarefaInput.estoque_id"
                        @click="showModalOpcoes = false; handleModalConfirmar(tarefaInput.id, tarefaInput.titulo, tarefaInput.descricao, tarefaInput.funcionario_nome, tarefaInput.maquina_utilizada, tarefaInput.maquina_id, null, null, null, null, tarefaInput.prazo, tarefaInput.prazo_hora, tarefaInput.status)"
                        class="bg-verde py-1 px-2 rounded mb-2">Marcar completa &nbsp ✔</li>
                    <li v-if="!tarefaInput.estoque_id && !tarefaInput.maquina_id"
                        @click="showModalOpcoes = false; handleModalConfirmar(tarefaInput.id, tarefaInput.titulo, tarefaInput.descricao, tarefaInput.funcionario_nome, null, null, null, null, null, null, tarefaInput.prazo, tarefaInput.prazo_hora, tarefaInput.status)"
                        class="bg-verde py-1 px-2 rounded mb-2">Marcar completa &nbsp ✔</li>

                    <li @click="handleDeletarTarefa(tarefaInput.id, tarefaInput.titulo)"
                        class="bg-vermelho py-1 px-2 rounded">
                        Deletar
                    </li>
                </div>
                
            </ul>
        </OpcoesMobile>

    </div>
</template>