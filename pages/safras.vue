<script setup>

definePageMeta({
    middleware: ["auth", "subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { formatar, paraReal, paraRealInput, paraFloat, corLucro } = useUtils()
const router = useRouter()
const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

// Get the element with the id "main"
const mainElement = ref()



// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

const safrasAtivasResponse = ref();
const safrasFinalizadasResponse = ref();
const safraResponse_qnt = ref();

const fluxoEntrada = ref();
const fluxoSaida = ref();

const showModalNovo = ref()
const showModalPagarTaxa = ref()
const showModalDeletar = ref()
const showModalEncerrar = ref()
const showModalOpcoes = ref()
const limitarForm = ref()
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
        document.getElementById("timerBar").style.width = loadingWidth.value + "%";
        document.getElementById("timerBarMobile").style.width = loadingWidth.value + "%";

        // Check if the width has reached 0

    }, 80);


}





if (process.client) {
    safrasAtivasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "ativa" })
    safrasFinalizadasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "completa" })
    mainElement.value = document.getElementById("main");
}

const redirectSafra = async (id, cultivo, inicio, fim) => {
    safraInput.id = id
    safraInput.safra = cultivo
    safraInput.data_inicio = inicio
    safraInput.data_fim = fim

    // Request para supabase 
    if (process.client) {
        fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safraInput.id })
        fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safraInput.id })
    }
    await supabase.from("safras").update({

        despeza_real: fluxoSaida.value.data,
        receita_bruta: fluxoEntrada.value.data,
        lucro_real: fluxoEntrada.value.data - fluxoSaida.value.data
    }).eq('id', safraInput.id)

    router.push({ path: "/safra/" + id });
    // window.location.href = "/safra/" + id
}

const safraInput = reactive({
    id: "",
    safra: "",
    data_inicio: "",
    data_fim: "",
    area: "",
    taxa_arrendo: "",
    grandeza: "",
    valor_unitario: "",
    quantidade: "",
    despeza: "",
    receita_estimada: ""
})

const abrirOpcoesMobile = (id, cultivo, inicio, fim) => {

    // Check if the element exists before modifying it
    if (mainElement.value) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        mainElement.value.style.overflow = "hidden";
    }
    showModalOpcoes.value = true
    safraInput.id = id
    safraInput.safra = cultivo
    safraInput.data_inicio = inicio
    safraInput.data_fim = fim
}

const abrirModalNovaSafra = () => {
    if (mainElement.value) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        mainElement.value.style.overflow = "hidden";
    }
    limitarForm.value = true
    showModalNovo.value = true
    safraInput.id = ""
    safraInput.safra = ""
    safraInput.data_inicio = ""
    safraInput.data_fim = ""
    safraInput.area = ""
    safraInput.taxa_arrendo = ""
    safraInput.grandeza = ""
    safraInput.valor_unitario = ""
    safraInput.quantidade = ""
    safraInput.despeza = ""
    safraInput.receita_estimada = ""
}
const fecharModalNovaSafra = () => {
    if (mainElement.value) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        mainElement.value.style.overflow = "auto";
    }
    showModalNovo.value = false
    safraInput.id = "",
        safraInput.safra = "",
        safraInput.data_inicio = "",
        safraInput.data_fim = "",
        safraInput.area = "",
        safraInput.grandeza = "",
        safraInput.valor_unitario = "",
        safraInput.quantidade = "",
        safraInput.despeza = "",
        safraInput.receita_estimada = ""
}

const handleSubmitNovaSafra = async () => {
    if (safraInput.safra && safraInput.area && !isNaN(safraInput.taxa_arrendo) && safraInput.grandeza && safraInput.despeza && safraInput.valor_unitario && safraInput.quantidade && safraInput.data_inicio && safraInput.data_fim) {

        if (!limitarForm.value) return
        limitarForm.value = false

        let receita_estimada_calc = parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) * paraFloat(safraInput.valor_unitario)
        if (safraInput.taxa_arrendo < 0) safraInput.taxa_arrendo = 0
        if (process.client) {
            await supabase.from("safras").insert({
                cultivo: safraInput.safra,
                area: parseFloat(safraInput.area),
                taxa_arrendo: Math.abs(parseFloat(safraInput.taxa_arrendo)),
                arrendo_total: Math.abs(parseFloat(safraInput.taxa_arrendo)) * parseFloat(safraInput.area),
                user_id: user.value.id,
                grandeza: safraInput.grandeza,
                despeza_estimada: paraFloat(safraInput.despeza),
                valor_venda_estimado: paraFloat(safraInput.valor_unitario),
                quantidade_estimada: parseFloat(safraInput.quantidade) * parseFloat(safraInput.area),
                receita_estimada: receita_estimada_calc,
                lucro_estimado: receita_estimada_calc - paraFloat(safraInput.despeza),
                data_inicio: safraInput.data_inicio,
                data_fim: safraInput.data_fim,
                status: "ativa",

            });




            safraInput.id = "";
            safraInput.safra = "";
            safraInput.data_inicio = "";
            safraInput.data_fim = "";
            safraInput.area = "";
            safraInput.grandeza = "";
            safraInput.valor_unitario = "";
            safraInput.quantidade = "";
            safraInput.despeza = "";
            safraInput.receita_estimada = "";
            showPreencha.value = false
            if (mainElement.value) {
                // Disable overflow by setting the overflow CSS property to "hidden"
                mainElement.value.style.overflow = "auto";
            }
            showAlert("Safra Adicionada com sucesso!")

            showModalNovo.value = false
            if (process.client) {
                safrasAtivasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "ativa" })
            }
        }
    } else {
        showPreencha.value = true
    }
}

const abrirModalDeletarSafra = (id, cultivo, inicio, fim) => {
    limitarForm.value = true

    showModalDeletar.value = true
    safraInput.id = id
    safraInput.safra = cultivo
    safraInput.data_inicio = inicio
    safraInput.data_fim = fim
}
const abrirModalPagarTaxa = async (id, cultivo, grandeza, start, end, quantidade_real, arrendo_total) => {
    limitarForm.value = true
    showModalPagarTaxa.value = true
    safraInput.id = id
    safraInput.safra = cultivo
    safraInput.grandeza = grandeza
    safraInput.data_inicio = start
    safraInput.data_fim = end
    safraInput.quantidade_real = quantidade_real
    safraInput.arrendo_total = arrendo_total
    safraResponse_qnt.value = await supabase.from("safras").select().eq('id', parseInt(safraInput.id))
}
const handlePagarTaxaSubmit = async () => {
    if (safraInput.quantidade) {

        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {
            safrasAtivasResponse.value = await supabase.from("safras").update({
                arrendo_total: safraResponse_qnt.value.data[0].arrendo_total - parseFloat(safraInput.quantidade),
                quantidade_real: safraResponse_qnt.value.data[0].quantidade_real - parseFloat(safraInput.quantidade)
            }).eq('id', safraInput.id);
            

            safrasAtivasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "ativa" })

        }

        safraInput.id = "",
            safraInput.safra = "",
            safraInput.data_inicio = "",
            safraInput.data_fim = "",
            safraInput.area = "",
            safraInput.grandeza = "",
            safraInput.valor_unitario = "",
            safraInput.taxa_arrendo = "",
            safraInput.quantidade = "",
            safraInput.despeza = "",
            safraInput.receita_estimada = ""
        showAlert("Taxa de aluguel/arrendo paga com sucesso")
        showPreencha.value = false

        showModalPagarTaxa.value = false
    } else {
        showPreencha.value = true
    }
}
const handleDeletarSafra = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("safras").delete().eq('id', safraInput.id)

    if (process.client) {
        safrasAtivasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "ativa" })
        safrasFinalizadasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "completa" })
    }

    showModalDeletar.value = false
    showAlert("Safra deletada com sucesso!")
}
const abrirModalEncerrarSafra = (id, cultivo, inicio, fim) => {
    limitarForm.value = true

    showModalEncerrar.value = true
    safraInput.id = id
    safraInput.safra = cultivo
    safraInput.data_inicio = inicio
    safraInput.data_fim = fim
}
const handleEncerrarSafra = async () => {

    if (!limitarForm.value) return
    limitarForm.value = false

    // Pega a data de hoje e formata
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Request para supabase 
    if (process.client) {
        fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safraInput.id })
        fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safraInput.id })
    }
    await supabase.from("safras").update({
        status: "completa",
        data_fim: formattedDate,
        despeza_real: fluxoSaida.value.data,
        receita_bruta: fluxoEntrada.value.data,
        lucro_real: fluxoEntrada.value.data - fluxoSaida.value.data
    }).eq('id', safraInput.id)

    if (process.client) {
        safrasAtivasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "ativa" })
        safrasFinalizadasResponse.value = await supabase.from("safras").select().order('data_inicio', { ascending: false }).match({ user_id: user.value.id, status: "completa" })
    }

    showModalEncerrar.value = false
    showAlert("Safra encerrada com sucessso!")


}

const precoFormatar = (valor) => {
    safraInput.valor_unitario = paraRealInput(valor)
}
const despesasFormatar = (valor) => {
    safraInput.despeza = paraRealInput(valor)
}
const limitarTaxa = (valor) => {
    console.log(safraInput.quantidade_real)
    if (safraInput.quantidade_real < safraInput.arrendo_total) {
        if (valor > (safraInput.quantidade_real)) {
            safraInput.quantidade = safraInput.quantidade_real
        }
    }
    else {
        if (valor > safraInput.arrendo_total) {
            safraInput.quantidade = safraInput.arrendo_total
        }

    }







}
</script>

<template>
    <div v-if="screen === 'desktop'" class="overflow-y-hidden">

        <Transition name="alert">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <!-- Título -->
        <div class="flex flex-row items-center absolute ml-[-4%] ">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Safras | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl">{{ String.fromCodePoint(0x1F33E) }}</h1>
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <div class="flex flex-col w-full items-center">


            <div class=" self-center w-[70%] ml-[-100px] ">

                <button @click="abrirModalNovaSafra"
                    class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                    Nova Safra
                </button>
                <div class="flex items-center">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Safras Ativas</p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div v-if="!safrasAtivasResponse">
                    <Loader />
                </div>
                <div v-if="safrasAtivasResponse" class="max-h-[360px] overflow-y-scroll pr-3">
                    <div v-if="safrasAtivasResponse.data == ''">
                        <p class="text-verde text-xl font-semibold "> &#x1F33F Nenhuma safra encontrada, clique no botão de
                            Nova safra e adicone uma &#x1F600 </p>
                    </div>
                    <div v-else v-for="safra in safrasAtivasResponse.data" :key="safra.id">
                        <div class="w-full flex justify-end ">
                            <div @click="abrirModalDeletarSafra(safra.id, safra.cultivo, safra.data_inicio, safra.data_fim)"
                                class="group/alerta flex  bg-vermelho text-claro cursor-pointer rounded-tr-xl h-9 items-center transition-all hover:bg-white hover:text-vermelho ">

                            </div>
                        </div>
                        <div
                            class="flex  px-12 items-end justify-between  w-full h-[130px] bg-white rounded-tl-xl rounded-r-none ">
                            <div class="flex flex-col items-start h-[80%]">
                                <h1 class="text-3xl font-bold capitalize">{{ safra.cultivo }}</h1>
                                <h2> <b> Início:</b> {{ safra.data_inicio }}</h2>
                                <h2><b>Fim:</b> {{ safra.data_fim }}</h2>
                            </div>
                            <div class="flex flex-col items-center h-[80%]">
                                <h1 class="text-xl font-bold">Área colhida (ha)</h1>
                                <h1 class="text-2xl font-bold text-vermelho ">{{ ((safra.area_colhida / safra.area) *
                                    100).toFixed(2) }}%</h1>
                                <h3 class="text-verde">[{{ safra.area_colhida + "/" + safra.area }}]</h3>
                            </div>
                            <div class="flex flex-col item-center h-[80%]">
                                <h1 class="text-xl font-bold">Em estoque</h1>
                                <h1 class="text-2xl font-bold text-verde_claro">{{ safra.quantidade_real }}</h1>
                                <h3 class="text-verde">[{{ formatar(safra.grandeza) }}]</h3>
                            </div>
                            <div v-if="safra.arrendo_total > 0" class="flex flex-col item-center h-[80%]">
                                <h1 class="text-xl font-bold">Aluguel restante do terreno</h1>
                                <h1 class="text-2xl font-bold text-escuro">{{ safra.arrendo_total }} | <span
                                        class="text-sm">{{
                                            formatar(safra.grandeza) }}</span></h1>
                                <h1 @click="abrirModalPagarTaxa(safra.id, safra.cultivo, safra.grandeza, safra.data_inicio, safra.data_fim, safra.quantidade_real, safra.arrendo_total)"
                                    class="text-verde_claro text-[1.2rem] font-bold underline cursor-pointer">Pagar taxa
                                </h1>
                            </div>
                            <div v-else class="flex flex-col item-center justify-center h-[100%]">
                                <h1 class="text-sm font-bold">Nenhuma dívida pendente do terreno</h1>
                            </div>
                            <div class="flex flex-col items-center h-[100%]">

                                <div class="flex flex-col justify-evenly self-center h-[100%]">
                                    <button
                                        @click="abrirModalEncerrarSafra(safra.id, safra.cultivo, safra.data_inicio, safra.data_fim)"
                                        class="self-start bg-escuro px-3 py-2 rounded-md text-md text-claro font-bold transition-all hover:bg-verde ">Encerrar
                                        Safra
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class=" self-center w-[70%] ml-[-100px] ">

                <div class="flex items-center ">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Safras Finalizadas</p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div v-if="!safrasFinalizadasResponse">
                    <Loader />
                </div>
                <div v-if="safrasFinalizadasResponse" class="max-h-[360px] overflow-y-scroll pr-3">
                    <div v-if="safrasFinalizadasResponse.data == ''">
                        <p class="text-verde text-xl font-semibold "> &#x274C Nenhuma safra Finalizada encontrada, encerre
                            uma safra para ver seu relatório aqui &#x1F4C4 </p>
                    </div>
                    <div v-else v-for="safra in safrasFinalizadasResponse.data" :key="safra.id">
                        <div class="w-full flex justify-end ">

                        </div>
                        <div
                            class="flex  px-12 items-end justify-between  w-full h-[130px] bg-white rounded-xl rounded-r-none mb-5">
                            <div class="flex flex-col items-start h-[80%]">
                                <h1 class="text-3xl font-bold capitalize">{{ safra.cultivo }}</h1>
                                <h2> <b> Início:</b> {{ safra.data_inicio }}</h2>
                                <h2><b>Fim:</b> {{ safra.data_fim }}</h2>
                            </div>
                            <div class="flex flex-col items-center h-[80%]">
                                <h1 class="text-3xl font-bold">Despezas</h1>
                                <h1 class="text-2xl font-bold text-vermelho ">{{ paraReal(safra.despeza_real) }}</h1>
                            </div>
                            <div class="flex flex-col item-center h-[80%]">
                                <h1 class="text-3xl font-bold">Colhido</h1>
                                <h1 class="text-2xl font-bold text-verde_claro">{{ safra.quantidade_real }}</h1>
                                <h3 class="text-verde">[{{ formatar(safra.grandeza) }}]</h3>
                            </div>
                            <div class="flex flex-col items-center h-[80%]">

                                <div class="flex flex-col self-center h-[25%]">

                                    <button
                                        @click="redirectSafra(safra.id, safra.cultivo, safra.data_inicio, safra.data_fim)"
                                        class="self-start bg-escuro px-8 py-4 rounded-md text-xl text-claro font-bold transition-all hover:bg-verde ">
                                        Ver relatório
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Transition name="pop">

                <ModalNovaSafra v-if="showModalNovo" @novaSafra="handleSubmitNovaSafra" @close="fecharModalNovaSafra">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex justify-evenly w-full">
                        <div class="flex flex-col w-[40%]">

                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-model="safraInput.safra" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cultivo</label>
                            </div>

                            <div class="relative z-0 w-full mb-6 group">
                                <input type="date" v-model="safraInput.data_inicio"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Início</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="date" v-model="safraInput.data_fim"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fim
                                    (aproximado)</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="number" v-model="safraInput.area"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Área
                                    total do
                                    plantio
                                    (em ha.)</label>


                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <select placeholder="ex: 110" v-model="safraInput.grandeza"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option value=" " disabled selected hidden class="bg-verde font-bold ">Métricas de
                                        produção</option>
                                    <option value="unidade" class="bg-verde font-bold">Un. - unidade</option>
                                    <option value="kilograma" class="bg-verde font-bold">Kg. - Kilograma</option>
                                    <option value="tonelada" class="bg-verde font-bold">T. - tonelada</option>
                                    <option value="bins" class="bg-verde font-bold">Caixa / Bins / Pallet</option>
                                    <option value="saca10" class="bg-verde font-bold">Saca de 10kg</option>
                                    <option value="saca20" class="bg-verde font-bold">Saca de 20kg</option>
                                    <option value="saca30" class="bg-verde font-bold">Saca de 30kg</option>
                                    <option value="saca40" class="bg-verde font-bold">Saca de 40kg</option>
                                    <option value="saca50" class="bg-verde font-bold">Saca de 50kg</option>
                                    <option value="saca60" class="bg-verde font-bold">Saca de 60kg</option>
                                </select>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Métrica
                                    de
                                    produção</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="number" v-model="safraInput.taxa_arrendo"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute whitespace-nowrap text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Taxa de aluguel | arrendo <b class="text-[.7rem]" v-if="safraInput.grandeza"> | {{
                                        formatar(safraInput.grandeza) + ' por hectare'
                                    }}</b></label>

                                <p class="text-claro text-xs opacity-80 font-semibold">(Colocar 0 se o terreno for seu)</p>
                            </div>
                        </div>
                        <div class="flex flex-col w-[40%]">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="number" v-model="safraInput.quantidade"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Quantidade
                                    estimada<b class="text-[.7rem]" v-if="safraInput.grandeza"> | {{
                                        formatar(safraInput.grandeza) + ' / por hectare'
                                    }}</b></label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(safraInput.valor_unitario)"
                                    v-model="safraInput.valor_unitario"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Preço estimado
                                    <b v-if="safraInput.grandeza"> por {{ formatar(safraInput.grandeza) }}</b></label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="despesasFormatar(safraInput.despeza)"
                                    v-model="safraInput.despeza"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>

                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Despesas
                                    estimadas</label>
                            </div>
                            <div class="flex flex-col h-full justify-evenly">

                                <p class="text-md text-claro">| Lucro estimado: <br>
                                    <b
                                        v-if="safraInput.quantidade != '' && safraInput.valor_unitario != '' && safraInput.despeza != ''">
                                        <span
                                            :class="`text-${corLucro((parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) * paraFloat(safraInput.valor_unitario)) - paraFloat(safraInput.despeza))}`">
                                            {{
                                                paraReal((parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) *
                                                    paraFloat(safraInput.valor_unitario)) - paraFloat(safraInput.despeza)) }}
                                        </span>
                                    </b>
                                </p>
                                <p class="text-md text-claro">| Receita estimada: <br> <b
                                        v-if="safraInput.quantidade && safraInput.valor_unitario" class="text-verde_claro">
                                        {{ paraReal(parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) *
                                            paraFloat(safraInput.valor_unitario)) }}
                                    </b> </p>
                                <p class="text-md text-claro">| Despezas estimadas: <br> <b v-if="safraInput.despeza != ''"
                                        class="text-vermelho"> -{{
                                            paraReal(paraFloat(safraInput.despeza)) }}</b></p>
                            </div>
                        </div>
                    </div>
                </ModalNovaSafra>
            </Transition>

            <Transition name="pop">
                <ModalDeletarSafra v-if="showModalDeletar" @close="showModalDeletar = false"
                    @deletarSafra="handleDeletarSafra">
                    <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar esta safra?</h1>
                    <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                        safraInput.safra + " | " +
                        safraInput.data_inicio + " - " + safraInput.data_fim
                    }}</h1>
                    <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                                desfeita.</u> </b></h2>
                </ModalDeletarSafra>
            </Transition>
            <Transition name="pop">
                <ModalPagarTaxa v-if="showModalPagarTaxa" @close="showModalPagarTaxa = false"
                    @pagarTaxa="handlePagarTaxaSubmit">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>

                    <h1 v-if='safraResponse_qnt' class="text-claro text-lg text-center">Você ainda precisa pagar <b
                            class="text-vermelho">
                            {{ (safraResponse_qnt.data[0].taxa_arrendo * safraResponse_qnt.data[0].area) + " " +
                                formatar(safraInput.grandeza) }}</b> pelo terreno utilizado</h1>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="number" v-on:input="limitarTaxa(safraInput.quantidade)" v-model="safraInput.quantidade"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            <b v-if="safraInput.grandeza"> {{ formatar(safraInput.grandeza) }}</b> à pagar
                        </label>
                    </div>
                </ModalPagarTaxa>
            </Transition>
            <Transition name="pop">
                <ModalEncerrarSafra v-if="showModalEncerrar" @close="showModalEncerrar = false"
                    @encerrarSafra="handleEncerrarSafra">
                    <h1 class="text-center text-xl text-claro light">Deseja encerrar e gerar o relatório desta safra?</h1>
                    <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                        safraInput.safra + " | " +
                        safraInput.data_inicio + " - " + safraInput.data_fim
                    }}</h1>
                    <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                                desfeita.</u> </b></h2>
                </ModalEncerrarSafra>
            </Transition>
        </div>
    </div>
    <div v-if="screen === 'mobile'" class="overflow-y-hidden">

        <Transition name="alert_mobile">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>

        <button @click="abrirModalNovaSafra"
            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
            Nova Safra
        </button>

        <!-- Divisor -->
        <div class="flex items-center">
            <div class="flex w-full h-1 bg-escuro mr-4"></div>
            <p class="whitespace-nowrap text-escuro font-bold ">Safras Ativas</p>
        </div>
        <!--  -->



        <!-- Blocos -->
        <div v-if="safrasAtivasResponse.data == ''">
            <p class="text-verde text-xl font-semibold "> &#x1F33F Nenhuma safra encontrada, clique no botão de
                Nova safra e adicone uma &#x1F600 </p>
        </div>
        <div v-else v-for="safra in safrasAtivasResponse.data" :key="safra.id" class="mb-4">
            <h2 class="text-center p-[4px] text-sm bg-verde text-claro rounded-t-xl"> <b> Início:</b> {{ safra.data_inicio
            }} |
                <b>Fim:</b> {{ safra.data_fim }}
            </h2>

            <div class="bg-[#B9C2B3] rounded-b-xl space-y-2 p-3">
                <h1 class="text-lg text-center text-escuro font-bold capitalize">{{ safra.cultivo }}</h1>


                <div class="flex  items-center border-l-4 border-verde pl-2">
                    <div class=""></div>
                    <h1 class=" text-escuro"> Área colhida (ha) &nbsp</h1>
                    <h1 class=" font-bold text-escuro ">{{ ((safra.area_colhida / safra.area) *
                        100).toFixed(2) }}% &nbsp </h1>
                    <h3 class=" text-escuro ">[{{ safra.area_colhida + "/" + safra.area + " " }}] </h3>
                </div>

                <div class="flex  item-center border-l-4 border-verde pl-2">
                    <h1 class=" text-escuro">Em estoque &nbsp</h1>
                    <h1 class="font-bold text-escuro">{{ safra.quantidade_real }} &nbsp</h1>
                    <h3 class=" text-escuro text-sm">{{ formatar(safra.grandeza) }}</h3>
                </div>

                <div v-if="safra.arrendo_total > 0" class="flex flex-col  item-center border-l-4 border-verde pl-2">
                    <div class="flex ">
                        <h1 class="text-escuro">Aluguel restante &nbsp</h1>
                        <h1 class="text-escuro">{{ safra.taxa_arrendo * safra.area }} | <span class="text-sm">{{
                            formatar(safra.grandeza) }}</span></h1>
                    </div>

                    
                </div>
                <div v-else class="flex flex-col item-center justify-center h-[100%]">
                    <h1 class="text-verde text-center">Nenhuma dívida pendente</h1>
                </div>





                <div class="flex items-center justify-center space-x-2 rounded-b">
                    <button @click="abrirModalEncerrarSafra(safra.id, safra.cultivo, safra.data_inicio, safra.data_fim)"
                        data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-vermelho  rounded-lg   text-sm font-medium px-5 py-2.5">
                        Encerrar Safra</button>
                    <button v-if="safra.arrendo_total > 0"
                        @click="abrirModalPagarTaxa(safra.id, safra.cultivo, safra.grandeza, safra.data_inicio, safra.data_fim, safra.quantidade_real, safra.arrendo_total)"
                        data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                        Pagar taxa</button>

                </div>
            </div>
        </div>
        <!--  -->


        <!-- Divisor -->
        <div class="flex items-center mt-6 mb-3">
            <div class="flex w-full h-1 bg-escuro mr-4"></div>
            <p class="whitespace-nowrap text-escuro font-bold ">Safras Finalizadas</p>
        </div>
        <!--  -->

        <!-- Blocos -->
        <div v-if="!safrasFinalizadasResponse">
            <Loader />
        </div>
        <div v-else v-for="safra in safrasFinalizadasResponse.data" :key="safra.id" class="mb-4">
            <h2 class="text-center p-[4px] text-sm bg-escuro text-claro rounded-t-xl"> <b> Início:</b> {{ safra.data_inicio
            }} |
                <b>Fim:</b> {{ safra.data_fim }}
            </h2>

            <div class="bg-[#B9C2B3] rounded-b-xl space-y-2 p-3">
                <h1 class="text-lg text-center text-escuro font-bold capitalize">{{ safra.cultivo }}</h1>




                <div class="flex items-center border-l-4 border-verde pl-2">
                    <h1 class="font-bold text-escuro">Despezas &nbsp</h1>
                    <h1 class=" font-bold text-vermelho ">{{ paraReal(safra.despeza_real) }}</h1>
                </div>
                <div class="flex items-center border-l-4 border-verde pl-2">
                    <h1 class="font-bold text-escuro">Colhido &nbsp</h1>
                    <h1 class="font-bold text-verde_claro">{{ safra.quantidade_real }} &nbsp</h1>
                    <h3 class="text-verde">[{{ formatar(safra.grandeza) }}]</h3>
                </div>


                <div class="flex items-center justify-center space-x-2 rounded-b">
                    <button @click="redirectSafra(safra.id, safra.cultivo, safra.data_inicio, safra.data_fim)"
                        data-modal-toggle="defaultModal" type="button"
                        class="text-claro bg-verde  rounded-lg   text-sm font-medium px-5 py-2.5">
                        Ver Relatório</button>

                </div>
            </div>
        </div>
        <section class="h-[100px]"></section>
        <!--  -->

        <Transition name="pop">

            <ModalNovaSafra v-if="showModalNovo" @novaSafra="handleSubmitNovaSafra" @close="fecharModalNovaSafra">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col justify-evenly w-full ">
                    <div class="flex flex-col">

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="safraInput.safra" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cultivo</label>
                        </div>

                        <div class="relative z-0 w-full mb-6 group">
                            <input type="date" v-model="safraInput.data_inicio"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Início</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="date" v-model="safraInput.data_fim"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fim
                                (aproximado)</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="number" v-model="safraInput.area"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Área
                                total do
                                plantio
                                (em ha.)</label>


                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <select placeholder="ex: 110" v-model="safraInput.grandeza"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option value=" " disabled selected hidden class="bg-verde font-bold ">Métricas de
                                    produção</option>
                                <option value="unidade" class="bg-verde font-bold">Un. - unidade</option>
                                <option value="kilograma" class="bg-verde font-bold">Kg. - Kilograma</option>
                                <option value="tonelada" class="bg-verde font-bold">T. - tonelada</option>
                                <option value="bins" class="bg-verde font-bold">Caixa / Bins / Pallet</option>
                                <option value="saca10" class="bg-verde font-bold">Saca de 10kg</option>
                                <option value="saca20" class="bg-verde font-bold">Saca de 20kg</option>
                                <option value="saca30" class="bg-verde font-bold">Saca de 30kg</option>
                                <option value="saca40" class="bg-verde font-bold">Saca de 40kg</option>
                                <option value="saca50" class="bg-verde font-bold">Saca de 50kg</option>
                                <option value="saca60" class="bg-verde font-bold">Saca de 60kg</option>
                            </select>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Métrica
                                de
                                produção</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="number" v-model="safraInput.taxa_arrendo"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute whitespace-nowrap text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Taxa de aluguel | arrendo <b class="text-[.7rem]" v-if="safraInput.grandeza"> | {{
                                    formatar(safraInput.grandeza) + ' por hectare'
                                }}</b></label>

                            <p class="text-claro text-xs opacity-80 font-semibold">(Colocar 0 se o terreno for seu)</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="number" v-model="safraInput.quantidade"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Quantidade
                                estimada<b class="text-[.7rem]" v-if="safraInput.grandeza"> | {{
                                    formatar(safraInput.grandeza) + ' / por hectare'
                                }}</b></label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-on:input="precoFormatar(safraInput.valor_unitario)"
                                v-model="safraInput.valor_unitario"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Preço estimado
                                <b v-if="safraInput.grandeza"> por {{ formatar(safraInput.grandeza) }}</b></label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-on:input="despesasFormatar(safraInput.despeza)"
                                v-model="safraInput.despeza"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>

                            <label
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Despesas
                                estimadas</label>
                        </div>
                        <div class="flex flex-col h-full justify-evenly">

                            <p class="text-md text-claro">| Lucro estimado: <br>
                                <b
                                    v-if="safraInput.quantidade != '' && safraInput.valor_unitario != '' && safraInput.despeza != ''">
                                    <span
                                        :class="`text-${corLucro((parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) * paraFloat(safraInput.valor_unitario)) - paraFloat(safraInput.despeza))}`">
                                        {{
                                            paraReal((parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) *
                                                paraFloat(safraInput.valor_unitario)) - paraFloat(safraInput.despeza)) }}
                                    </span>
                                </b>
                            </p>
                            <p class="text-md text-claro">| Receita estimada: <br> <b
                                    v-if="safraInput.quantidade && safraInput.valor_unitario" class="text-verde_claro">
                                    {{ paraReal(parseFloat(safraInput.quantidade) * parseFloat(safraInput.area) *
                                        paraFloat(safraInput.valor_unitario)) }}
                                </b> </p>
                            <p class="text-md text-claro">| Despezas estimadas: <br> <b v-if="safraInput.despeza != ''"
                                    class="text-vermelho"> -{{
                                        paraReal(paraFloat(safraInput.despeza)) }}</b></p>
                        </div>
                    </div>
                </div>
            </ModalNovaSafra>
        </Transition>

        <Transition name="pop">
            <ModalDeletarSafra v-if="showModalDeletar" @close="showModalDeletar = false" @deletarSafra="handleDeletarSafra">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar esta safra?</h1>
                <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                    safraInput.safra + " | " +
                    safraInput.data_inicio + " - " + safraInput.data_fim
                }}</h1>
                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarSafra>
        </Transition>
        <Transition name="pop">
            <ModalPagarTaxa v-if="showModalPagarTaxa" @close="showModalPagarTaxa = false"
                @pagarTaxa="handlePagarTaxaSubmit">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>

                <h1 class="text-claro text-lg text-center">Você ainda precisa pagar <b class="text-vermelho">
                        {{ (safraResponse_qnt.data[0].taxa_arrendo * safraResponse_qnt.data[0].area) + " " +
                            formatar(safraInput.grandeza) }}</b> pelo terreno utilizado</h1>
                <div class="relative z-0 w-full mb-6 group">

                    <input type="number" v-on:input="limitarTaxa(safraInput.quantidade)" v-model="safraInput.quantidade"
                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                        placeholder=" " required>
                    <label
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        <b v-if="safraInput.grandeza"> {{ formatar(safraInput.grandeza) }}</b> à pagar
                    </label>
                </div>
            </ModalPagarTaxa>
        </Transition>
        <Transition name="pop">
            <ModalEncerrarSafra v-if="showModalEncerrar" @close="showModalEncerrar = false"
                @encerrarSafra="handleEncerrarSafra">
                <h1 class="text-center text-xl text-claro light">Deseja encerrar e gerar o relatório desta safra?</h1>
                <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                    safraInput.safra + " | " +
                    safraInput.data_inicio + " - " + safraInput.data_fim
                }}</h1>
                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalEncerrarSafra>
        </Transition>


        <OpcoesMobile v-if="showModalOpcoes" @close="showModalOpcoes = false; mainElement.value.style.overflow = 'auto'">
            <h1 class="text-center text-escuro font-semibold mb-2">Artur de Souza Vieira</h1>
            <ul>
                <li @click="handleModalEditar(funcionarioInput.nome, funcionarioInput.cargo, funcionarioInput.numero, funcionarioInput.is_assalariado, funcionarioInput.salario, funcionarioInput.data_pagamento_salario, funcionarioInput.id)"
                    class="bg-verde py-1 px-2 rounded mb-2">
                    Editar
                </li>
                <li @click="abrirModalPagarFuncionario(funcionarioInput.id, funcionarioInput.nome)"
                    class="bg-verde py-1 px-2 rounded mb-2">
                    Fazer pagamento
                </li>

            </ul>
        </OpcoesMobile>

    </div>
</template>