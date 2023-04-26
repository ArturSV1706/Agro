<script setup>

definePageMeta({
        middleware: "auth"
    })
    
const { supabase } = useSupabase()
const { user } = useAuth()
const { formatar, formatarData, paraReal, corLucro } = useUtils()

const funcionariosResponse = ref();
const tarefaResponse = ref();
const maquinasResponse = ref();
const estoqueResponse = ref();
const safrasAtivasResponse = ref();
const fluxoResponse = ref();



// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

if (process.client) {
    tarefaResponse.value = await supabase.from("tarefas").select("*, funcionarios(*), estoque(*), maquinas(*)").eq('user_id', user.value.id).order('prazo', { ascending: false }).order('prazo_hora', { ascending: false }).limit(10)
    estoqueResponse.value = await supabase.from("estoque").select().eq('user_id', user.value.id)
    maquinasResponse.value = await supabase.from("maquinas").select().eq('user_id', user.value.id)
    funcionariosResponse.value = await supabase.from("funcionarios").select().eq('user_id', user.value.id)
    safrasAtivasResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })
    fluxoResponse.value = await supabase.from("fluxo").select("*, safras(*)").eq('user_id', user.value.id).order('data_criacao', { ascending: false }).limit(7)
}

const corTarefa = (status) => {
    let cor = "laranja"
    switch (status) {
        case "pendente":
            cor = "escuro";
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

function formatarTipoFluxo(a) {
    if (a === 'saida') {
        return '▼';
    }
    if (a === 'entrada') {
        return '▲';
    }
}
function formatarTipoFluxoCor(a) {
    if (a === 'saida') {
        return 'vermelho';
    }
    if (a === 'entrada') {
        return 'verde_claro';
    }
}


</script>

<template>
    <div class="flex flex-col pb-2 ml-[5%] mt-[.8%]">
        <!-- Título -->
        <div class="flex flex-row items-center fixed top-4 left-4">
            <h1 class=" pt-2 text-4xl text-escuro font-aristotelica ">Painel</h1>
            <h1 class="text-3xl">📊</h1>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4  w-[97%]">
            <div class=" rounded-2xl  row-span-2 h-[45vh]">
                <div class="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[85%] justify-items-end items-end">
                    <div class="  h-[75%] w-[80%] rounded-2xl   ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="text-5xl">🌾</p>
                            <div class="">
                                <p v-if="safrasAtivasResponse" class="font-bold text-5xl">{{ safrasAtivasResponse.data.length }}</p>
                                <p class=" text-xl">Safras Atvias</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl  ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="text-5xl">👨‍🌾</p>
                            <div class="">
                                <p v-if="funcionariosResponse" class="font-bold text-5xl">{{funcionariosResponse.data.length }}</p>
                                <p class=" text-xl">Funcionários</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl   ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="text-5xl">🚜</p>
                            <div class="">
                                <p v-if="maquinasResponse" class="font-bold text-5xl">{{ maquinasResponse.data.length }}</p>
                                <p class=" text-xl">Máquinas/Veículos</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl  ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="text-5xl">📦</p>
                            <div class="">
                                <p v-if="estoqueResponse" class="font-bold text-5xl">{{ estoqueResponse.data.length }}</p>
                                <p class=" text-xl">Itens no estoque</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="  row-span-4 overflow-y-hidden overflow-x-visible max-h-[85vh] ">

                <div class="flex flex-col max-h-full w-full overflow-y-scroll mt-7">
                    <!-- <p class="text-center">Tarefas Recentes</p> -->
                    <Loader v-if="!tarefaResponse"></Loader>
                    <div v-if="tarefaResponse" class="w-1 h-[92vh] absolute left-[55%] bg-escuro z-[1] "></div>
                    <h1 class="ml-[5%] text-xl text-escuro font-bold"> <span class="text-2xl">🧾</span>| Últimas tarefas - <NuxtLink to="/tarefas" class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver Todas</NuxtLink></h1>
                    <div v-if="tarefaResponse" v-for="tarefa in tarefaResponse.data" :key="tarefa.id"
                        class=" mt-4 h-full w-full">
                        <p class=" ml-[6%] px-2 rounded-tr-xl  text-claro mb-[2px] bg-escuro w-fit text-md font-semibold">{{tarefa.prazo}}</p>
                        <div class="flex justify-between w-[90%]   mb-3  ml-[6%]   bg-verde p-2 rounded-tr-3xl rounded-bl-3xl ">
                            <div class="">
                                <p class="text-xl font-medium text-claro">{{ tarefa.titulo }}</p>
                                <p class="text-sm  text-claro">{{ tarefa.descricao }}</p>
                                <p class="capitalize text-claro text-md font-thin"><b>🚜|</b> <span
                                        v-if="tarefa.maquinas">{{
                                            tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                                        }}</span> <span v-else>--------</span>
                                </p>
                                <p class="capitalize text-claro text-md font-thin"><b>📦|</b> <span
                                        v-if="tarefa.estoque">{{
                                            tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                                        }} <span class="text-sm">({{ tarefa.estoque.grandeza }})</span></span> <span
                                        v-else>--------</span>
                                </p>
                            </div>
                            <div class="flex flex-col justify-between items-end text-right">
                                <div :class="`bg-${corTarefa(tarefa.status)} px-3 py-1 max-w-[100px] rounded-full text-claro font-semibold capitalize`">{{tarefa.status}}</div>
                                <p class="text-claro text-md font-semibold">{{tarefa.funcionarios.nome}}</p>
                            </div>
                        </div>
                    </div>
                        <div class="h-24">.</div>


                </div>

            </div>


            <div class="flex flex-col items-center pt-[1%] bg-white rounded-2xl shadow row-span-2 h-[45vh] space-y-2">
                <h1 class=" text-xl text-escuro font-bold text-center"> <span class="text-2xl">📈</span>| Últimas movimentações - <NuxtLink to="/financeiro" class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver Todas</NuxtLink></h1>
                
                <div v-if="fluxoResponse" v-for="fluxo in fluxoResponse.data" :key="fluxo.id"
                class="flex justify-evenly w-[90%] h-[10%] bg-claro border-l-8 border-escuro">
                    <p class="p-2 text-left font-semibold"> {{ formatarData(fluxo.data_criacao) }}</p>
                    <p>---</p>
                    <p class="p-2 text-center font-semibold">{{ fluxo.safras.cultivo + " (" + fluxo.safras.data_inicio + " - " + fluxo.safras.data_fim + ")"}}</p>
                    <p>---</p>
                    <p :class="`p-2 text-center font-semibold text-${formatarTipoFluxoCor(fluxo.tipo_fluxo)}`">{{paraReal(fluxo.valor) + formatarTipoFluxo(fluxo.tipo_fluxo) }}</p>
                </div>
            </div>
        </div>

    </div>
</template>