<script setup>



definePageMeta({
    middleware: ["auth", "subscription", 'setup']
})


const { supabase } = useSupabase()
const { user, signOut } = useAuth()
const { formatar, formatarData, paraReal, corLucro } = useUtils()
const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

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

console.log('user' + user.value)
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
        case "criada":
            cor = "";
            break;
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
    if (a === 'saida_emprestimo') {
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
    if (a === 'saida_emprestimo') {
        return 'vermelho';
    }
    if (a === 'entrada') {
        return 'verde_claro';
    }
}


</script>

<template>
    <div v-if="screen === 'desktop'" class=" flex flex-col pb-2 ml-[5%] mt-[.8%]">

        <!-- Título -->
        <div class="flex flex-row items-center fixed top-4 left-4">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Painel |</h1>
            <h1 class="sm:text-lg 2xl:text-3xl">📊</h1>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4  w-[97%]">
            <div class=" rounded-2xl  row-span-2 h-[45vh]">
                <div class="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[85%] justify-items-end items-end">
                    <div class="  h-[75%] w-[80%] rounded-2xl   ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="sm:text-4xl 2xl:text-5xl">🌾</p>
                            <div class="">
                                <p v-if="safrasAtivasResponse" class="font-bold sm:text-4xl 2xl:text-5xl">{{
                                    safrasAtivasResponse.data.length }}</p>
                                <p class=" sm:text-sm 2xl:text-xl">Safras Atvias</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl  ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="sm:text-4xl 2xl:text-5xl">👨‍🌾</p>
                            <div class="">
                                <p v-if="funcionariosResponse" class="font-bold sm:text-4xl 2xl:text-5xl">
                                    {{ funcionariosResponse.data.length }}</p>
                                <p class=" sm:text-sm 2xl:text-xl">Funcionários</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl   ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="sm:text-4xl 2xl:text-5xl">🚜</p>
                            <div class="">
                                <p v-if="maquinasResponse" class="font-bold sm:text-4xl 2xl:text-5xl">{{
                                    maquinasResponse.data.length }}</p>
                                <p class=" sm:text-sm 2xl:text-xl">Máquinas/Veículos</p>
                            </div>
                        </div>
                    </div>
                    <div class="  h-[75%] w-[80%] rounded-2xl  ">
                        <div class="flex w-full h-full justify-start items-center font-semibold">
                            <div class="bg-escuro w-2 h-[80%]"></div>
                            <p class="sm:text-4xl 2xl:text-5xl">📦</p>
                            <div class="">
                                <p v-if="estoqueResponse" class="font-bold sm:text-4xl 2xl:text-5xl">{{
                                    estoqueResponse.data.length }}</p>
                                <p class=" sm:text-sm 2xl:text-xl">Itens no estoque</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="  row-span-4 overflow-y-hidden overflow-x-visible max-h-[85vh] ">

                <div class="flex flex-col max-h-full w-full overflow-y-scroll mt-7">
                    <!-- <p class="text-center">Tarefas Recentes</p> -->
                    <Loader v-if="!tarefaResponse"></Loader>
                    <div v-if="tarefaResponse" class="w-1 sm:h-[88vh] 2xl:h-[92vh] absolute left-[55%] bg-escuro z-[1] ">
                    </div>
                    <h1 class="ml-[5%] text-xl text-escuro font-bold"> <span class="text-2xl">🧾</span>| Últimas tarefas -
                        <NuxtLink to="/tarefas" class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver
                            Todas</NuxtLink>
                    </h1>
                    <div v-if="tarefaResponse" v-for="tarefa in tarefaResponse.data" :key="tarefa.id"
                        class=" mt-4 h-full w-full">
                        <p
                            class=" ml-[6%] px-2 rounded-tr-xl  text-claro mb-[2px] bg-escuro w-fit sm:text-sm 2xl:text-md font-semibold">
                            {{ tarefa.prazo }}</p>
                        <div
                            class="flex justify-between w-[90%]  mb-3 ml-[6%]   bg-verde p-2 rounded-tr-3xl rounded-bl-3xl ">
                            <div class="">
                                <p class="sm:text-md 2xl:text-xl font-medium text-claro">{{ tarefa.titulo }}</p>
                                <p class="sm:text-xs 2xl:text-sm break-words text-claro">{{ tarefa.descricao }}</p>
                                <p class="capitalize text-claro sm:text-xs 2xl:text-md font-thin"><b>🚜|</b> <span
                                        v-if="tarefa.maquinas">{{
                                            tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                                        }}</span> <span v-else>--------</span>
                                </p>
                                <p class="capitalize text-claro sm:text-xs 2xl:text-md font-thin"><b>📦|</b> <span
                                        v-if="tarefa.estoque">{{
                                            tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                                        }} <span class="text-sm">({{ tarefa.estoque.grandeza }})</span></span> <span
                                        v-else>--------</span>
                                </p>
                            </div>
                            <div class="flex flex-col justify-between items-end text-right">
                                <div
                                    :class="`bg-${corTarefa(tarefa.status)} sm:text-xs 2xl:text-md px-3 py-1 max-w-[100px] rounded-full text-claro font-semibold capitalize`">
                                    {{ tarefa.status }}</div>
                                <p class="text-claro sm:text-xs 2xl:text-md font-semibold">{{ tarefa.funcionarios.nome }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="h-24">.</div>


                </div>

            </div>


            <div class="flex flex-col  items-center pt-[1%] bg-white rounded-2xl shadow row-span-2 h-[45vh] space-y-2">
                <h1 class=" sm:text-md 2xl:text-xl text-escuro font-bold text-center"> <span
                        class="sm:text-lg 2xl:text-2xl">📈</span>| Últimas movimentações - <NuxtLink to="/financeiro"
                        class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver Todas</NuxtLink>
                </h1>

                <div v-if="fluxoResponse" v-for="fluxo in fluxoResponse.data" :key="fluxo.id"
                    class="flex justify-evenly items-center w-[90%] sm:h-[8%] 2xl:h-[10%] bg-claro border-l-8 border-escuro">
                    <p class="sm:text-[10px] 2xl:text-lg p-2 text-left font-semibold"> {{ formatarData(fluxo.data_criacao)
                    }}</p>
                    <p>---</p>
                    <p class="sm:text-[10px] 2xl:text-lg  p-2 text-center font-semibold">{{ fluxo.safras.cultivo + " (" +
                        fluxo.safras.data_inicio + " - " + fluxo.safras.data_fim + ")" }}</p>
                    <p>---</p>
                    <p
                        :class="`sm:text-[10px] 2xl:text-lg  p-2 text-center font-semibold text-${formatarTipoFluxoCor(fluxo.tipo_fluxo)}`">
                        {{ paraReal(fluxo.valor) + formatarTipoFluxo(fluxo.tipo_fluxo) }}</p>
                </div>
            </div>
        </div>

    </div>
    <div v-if="screen === 'mobile'">

        <!-- header -->
        <div class="flex justify-between w-full h-[120px] ">
            <div class="flex flex-col  w-[60px]">
                <div class=" flex justify-center items-center aspect-square bg-verde rounded-xl">
                    <p v-if="safrasAtivasResponse" class="text-claro text-2xl font-semibold">{{
                        safrasAtivasResponse.data.length }}</p>
                </div>
                <h1 class="text-escuro text-center text-sm font-semibold">Safras Ativas</h1>
            </div>
            <div class="flex flex-col   w-[60px]">
                <div class=" flex justify-center items-center aspect-square bg-verde rounded-xl">
                    <p v-if="funcionariosResponse" class="text-claro text-2xl font-semibold">{{
                        funcionariosResponse.data.length }}</p>
                </div>
                <h1 class="text-escuro text-center text-sm font-semibold">Funcio- nários</h1>
            </div>
            <div class="flex flex-col   w-[60px]">
                <div class=" flex justify-center items-center aspect-square bg-verde rounded-xl">
                    <p v-if="maquinasResponse" class="text-claro text-2xl font-semibold">{{ maquinasResponse.data.length }}
                    </p>
                </div>
                <h1 class="text-escuro text-center text-sm font-semibold">Máquinas &Veículos</h1>
            </div>
            <div class="flex flex-col   w-[60px]">
                <div class=" flex justify-center items-center aspect-square bg-verde rounded-xl">
                    <p v-if="estoqueResponse" class="text-claro text-2xl font-semibold">{{ estoqueResponse.data.length }}
                    </p>
                </div>
                <h1 class="text-escuro text-center text-sm font-semibold">Items estoque</h1>
            </div>
        </div>
        <!-- ---------/-/------- -->

        <!-- tarefas -->

        <h1 class=" text-escuro font-bold"> <span class="text-xl">🧾</span>| Últimas tarefas - <NuxtLink to="/tarefas"
                class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver Todas</NuxtLink>
        </h1>

        <div class=" bg-[#B9C2B3] rounded-3xl">
            <div v-if="tarefaResponse" v-for="tarefa in tarefaResponse.data" :key="tarefa.id"
                class="flex flex-col items-center mt-4 h-full w-full">
                <p class="  px-2 rounded-xl text-claro mb-[2px] bg-escuro w-fit text-xs">
                    {{ tarefa.prazo }}</p>
                <div class="flex justify-between w-[95%]  mb-3  bg-verde p-2 rounded-tr-3xl rounded-bl-3xl ">
                    <div class="">
                        <p class="text-sm font-medium text-claro">{{ tarefa.titulo }}</p>
                        <p class="capitalize text-claro text-xs font-thin"><b>🚜|</b> <span v-if="tarefa.maquinas">{{
                            tarefa.maquinas.modelo + " - " + tarefa.maquinas.ano
                        }}</span> <span v-else>--------</span>
                        </p>
                        <p class="capitalize text-claro text-xs font-thin"><b>📦|</b> <span v-if="tarefa.estoque">{{
                            tarefa.estoque.item + " " + tarefa.estoque_utilizado_quantidade
                        }} <span class="text-sm">({{ tarefa.estoque.grandeza }})</span></span> <span
                                v-else>--------</span>
                        </p>
                    </div>
                    <div class="flex flex-col justify-between items-end text-right">
                        <div
                            :class="`bg-${corTarefa(tarefa.status)} text-xs px-2 py-1 max-w-[100px] rounded-full text-claro font-semibold capitalize`">
                            {{ tarefa.status }}</div>
                        <p class="text-claro text-xs font-semibold">{{ tarefa.funcionarios.nome }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!--  -->

        <!-- movimentações -->
        <h1 class="mt-4 mb-6 text-escuro font-bold text-sm"> <span class="text-xl">📈</span>| Últimas movimentações - <NuxtLink
                to="/financeiro" class="text-verde cursor-pointer transition-all hover:text-[1.5rem]">Ver Todas</NuxtLink>
        </h1>

        <div v-if="fluxoResponse" v-for="fluxo in fluxoResponse.data" :key="fluxo.id"
            class="flex justify-evenly items-center w-full sm:h-[8%] 2xl:h-[10%] bg-claro">
            <!-- <p class="sm:text-[10px] 2xl:text-lg p-2 text-left font-semibold"> {{ formatarData(fluxo.data_criacao)
                    }}</p>
                    <p>---</p>
                    <p class="sm:text-[10px] 2xl:text-lg  p-2 text-center font-semibold">{{ fluxo.safras.cultivo + " (" +
                        fluxo.safras.data_inicio + " - " + fluxo.safras.data_fim + ")" }}</p>
                    <p>---</p>
                    <p
                        :class="`sm:text-[10px] 2xl:text-lg  p-2 text-center font-semibold text-${formatarTipoFluxoCor(fluxo.tipo_fluxo)}`">
                        {{ paraReal(fluxo.valor) + formatarTipoFluxo(fluxo.tipo_fluxo) }}</p> -->

            <div class="w-[95%] mb-5">
                <div class="flex w-full">
                    <div class="flex justify-center items-center bg-escuro w-[60px] aspect-square rounded-lg mr-2">
                        <svg v-if="fluxo.tipo_fluxo === 'entrada'" xmlns="http://www.w3.org/2000/svg" height="45"
                            viewBox="0 -960 960 960" width="45" fill="#329f5b">
                            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" height="45"  viewBox="0 -960 960 960" width="45" fill="#d52952">
                            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col justify-evenly w-full">
                        <p class="text-xs font-semibold">{{ fluxo.safras.cultivo + " (" +
                            fluxo.safras.data_inicio + " - " + fluxo.safras.data_fim + ")" }}</p>
                        <div class="flex w-full justify-between">
                            <p class="text-xs font-light">{{ formatarData(fluxo.data_criacao) }}</p>
                            <p v-if="fluxo.tipo_fluxo === 'entrada'" class="text-xs text-verde_claro">{{
                                paraReal(fluxo.valor) }} </p>
                            <p v-else class="text-xs text-vermelho font-semibold">{{
                                paraReal(fluxo.valor) }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--  -->


</div></template>