<script setup>

definePageMeta({
    middleware: "auth"
})


const { supabase } = useSupabase()
const { user } = useAuth()
const { paraRealInput, paraFloat } = useUtils()


const sementesResponse = ref();
const fertilizantesResponse = ref();
const defensivosResponse = ref();
const outrosResponse = ref();
const colheitaResponse = ref();
const safraResponse = ref();


const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const showModalDeletarNegado = ref()
const showModalRepor = ref()
const showTabelaSementes = ref(); showTabelaSementes.value = true
const showTabelaFetilizantes = ref()
const showTabelaDefensivos = ref()
const showTabelaOutros = ref()
const limitarForm = ref()
const showPreencha = ref()



const margemTabelaSelector = ref()
margemTabelaSelector.value = "ml-[19px]"

const tipoOrdenarSemente = ref()
const tipoOrdenarfertilizante = ref()
const tipoOrdenarDefensivo = ref()

const reverterOrdenar = ref()

// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

if (process.client) {
    sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
    fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
    defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
    outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    colheitaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id })
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })
}
const estoqueInput = reactive({
    id: "",
    item: "",
    categoria: "",
    quantidade: "",
    quantidade_repor: "",
    grandeza: "",
    custo: "",
    safra: ""

})


const handleNovoEstoque = (categoria) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalAdicionar.value = true
    estoqueInput.item = ""
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = ""
    estoqueInput.grandeza = ""
    estoqueInput.custo = ""
}
const handleModalEditar = (item, categoria, quantidade, grandeza, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalEditar.value = true
    estoqueInput.item = item
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = quantidade
    estoqueInput.grandeza = grandeza
    estoqueInput.id = id


}
const handleModalRepor = (item, categoria, quantidade, grandeza, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalRepor.value = true
    estoqueInput.item = item
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = quantidade
    estoqueInput.grandeza = grandeza
    estoqueInput.id = id
    estoqueInput.custo = ""



}
const handleDeleteEstoque = async (estoqueId) => {
    limitarForm.value = true
    estoqueInput.id = estoqueId
    let testarChaveEstrangeira = await supabase.from("tarefas").select('estoque_utilizado_item').eq('estoque_utilizado_item', estoqueId)

    if (testarChaveEstrangeira.data[0]) {
        showModalDeletarNegado.value = true
    } else {
        showModalDeletar.value = true
    }
}
const handleSubmitDeleteEstoque = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("estoque").delete().eq('id', estoqueInput.id)


    if (process.client) {
        sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
        defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
        outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    }
    showModalDeletar.value = false
    pagina.atual = 0

}

const handleSubmitNovoEstoque = async () => {
    if(estoqueInput.item && estoqueInput.categoria && estoqueInput.quantidade && estoqueInput.grandeza && estoqueInput.safra  ){

    if (!limitarForm.value) return
    limitarForm.value = false

    if (process.client) {
        await supabase.from("estoque").insert({
            user_id: user.value.id,
            item: estoqueInput.item,
            categoria: estoqueInput.categoria,
            quantidade: estoqueInput.quantidade,
            grandeza: estoqueInput.grandeza,
            safra_id: parseInt(estoqueInput.safra)

        });

    }

    if (paraFloat(estoqueInput.custo) > 0) {
        if (process.client) {
            await supabase.from("fluxo").insert({
                categoria: estoqueInput.categoria,
                produto: estoqueInput.item,
                valor: paraFloat(estoqueInput.custo),
                tipo_fluxo: "saida",
                safra_id: estoqueInput.safra,
                user_id: user.value.id,
            });
        }
    }

    estoqueInput.id = ""
    estoqueInput.item = ""
    estoqueInput.categoria = ""
    estoqueInput.quantidade = ""
    estoqueInput.grandeza = ""
    estoqueInput.safra = ""
    estoqueInput.custo = ""
    showModalAdicionar.value = false
    showPreencha.value = false


    sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
    fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
    defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
    outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    }else{
        showPreencha.value = true
    }
}


const handleSubmitEditarEstoque = async (id) => {
    if(estoqueInput.item && estoqueInput.quantidade &&  estoqueInput.grandeza ){

    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("estoque").update({
        item: estoqueInput.item,
        quantidade: estoqueInput.quantidade,
        grandeza: estoqueInput.grandeza

    }).eq('id', id);

    if (paraFloat(estoqueInput.custo) > 0) {
        if (process.client) {
            await supabase.from("fluxo").insert({
                categoria: estoqueInput.categoria,
                produto: estoqueInput.item,
                valor: paraFloat(estoqueInput.custo),
                tipo_fluxo: "saida",
                safra_id: estoqueInput.safra,
                user_id: user.value.id
            });
        }
    }




    sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
    fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
    defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })


    estoqueInput.id = ""
    estoqueInput.item = ""
    estoqueInput.categoria = ""
    estoqueInput.quantidade = ""
    estoqueInput.grandeza = ""
    estoqueInput.safra = ""
    estoqueInput.custo = ""
    showModalEditar.value = false
    showPreencha.value = false
}else{
    showPreencha.value = true
}
}
const handleSubmitReporEstoque = async (id) => {
    console.log(estoqueInput.safra)
    if(estoqueInput.quantidade && estoqueInput.custo &&  estoqueInput.safra ){
        console.log(estoqueInput.safra)


    if (!limitarForm.value) return
    limitarForm.value = false

    if (estoqueInput.categoria == "colheita") {
        await supabase.from("safras").update({
            quantidade_real: (parseFloat(estoqueInput.quantidade) + parseFloat(estoqueInput.quantidade_repor)),

        }).eq('id', parseInt(estoqueInput.safra));
    } else {
        await supabase.from("estoque").update({
            quantidade: (parseFloat(estoqueInput.quantidade) + parseFloat(estoqueInput.quantidade_repor))

        }).eq('id', id);
    }

    if (paraFloat(estoqueInput.custo) > 0) {
        if (process.client) {
            await supabase.from("fluxo").insert({
                categoria: estoqueInput.categoria,
                produto: estoqueInput.item,
                valor: paraFloat(estoqueInput.custo),
                tipo_fluxo: "saida",
                safra_id: estoqueInput.safra,
                user_id: user.value.id
            });
        }
    }


    sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
    fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
    defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
    outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })


    estoqueInput.id = ""
    estoqueInput.item = ""
    estoqueInput.categoria = ""
    estoqueInput.quantidade = ""
    estoqueInput.grandeza = ""
    estoqueInput.custo = ""
    estoqueInput.safra = ""
    estoqueInput.custo = ""
    showModalRepor.value = false
    showPreencha.value = false
}else{
    showPreencha.value = true
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

const handleOrdenar = (i) => {


    if (i === "item") {
        tipoOrdenarSemente.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarSemente.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarSemente.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarSemente.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i

    }
    if (i === "item") {
        tipoOrdenarfertilizante.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarfertilizante.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarfertilizante.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarfertilizante.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

    if (i === "item") {
        tipoOrdenarDefensivo.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarDefensivo.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarDefensivo.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarDefensivo.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

}

function porItem(a, b) {
    if (a.nome > b.nome) {
        return 1;
    } else if (b.nome > a.nome) {
        return -1
    } else {
        return 0;
    }
}
function porQuantidade(a, b) {
    if (a.cargo > b.cargo) {
        return 1;
    } else if (b.cargo > a.cargo) {
        return -1
    } else {
        return 0;
    }
}
function porItemReverse(a, b) {
    if (a.nome > b.nome) {
        return -1;
    } else if (b.nome > a.nome) {
        return 1
    } else {
        return 0;
    }
}
function porQuantidadeReverse(a, b) {
    if (a.cargo > b.cargo) {
        return -1;
    } else if (b.cargo > a.cargo) {
        return 1
    } else {
        return 0;
    }
}


const trocarTabela = (i) => {
    pagina.atual = 0
    pagina.tamanho = 5
    switch (i) {
        case "semente":
            margemTabelaSelector.value = "ml-[19px]"
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaSementes.value = true
            break;
        case "fertilizante":
            margemTabelaSelector.value = "ml-[152px]"
            showTabelaSementes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaFetilizantes.value = true
            break;
        case "defensivo":
            margemTabelaSelector.value = "ml-[284px]"
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaOutros.value = false
            showTabelaDefensivos.value = true
            break;
        case "outros":
            margemTabelaSelector.value = "ml-[417px]"
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = true
            break;

        default:
            break;
    }
}
const precoFormatar = (valor) => {
    estoqueInput.custo = paraRealInput(valor)
}

</script>

<template>
    <div>
        <!-- Título -->
        <div class="flex flex-row items-center absolute ml-[-4%] ">
            <h1 class=" pt-2 text-4xl text-escuro font-aristotelica ">Estoque | </h1>
            <h1 class="text-3xl">{{ String.fromCodePoint(0x1F4E6) }}</h1>
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <div class="flex flex-col w-full items-center ">

            <!-- Ícones -->
            <div class="sm:scale-75 2xl:scale-100 flex w-[90%] justify-evenly">
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/semente.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!sementesResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ sementesResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Sementes</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/fertilizante.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!fertilizantesResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ fertilizantesResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Fertilizantes</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/defensivos.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!defensivosResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ defensivosResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Defensivos</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/outros_estoque.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!outrosResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ outrosResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">outros</h1>
                    </div>
                </div>
            </div>
            <!-- ------------------------------------------------------------------- -->

            <!-- Bototes -->
            <div class="flex pr-2 space-x-8 bg-[rgba(15,42,37,1)] rounded-full mt-[5%]">
                <div
                    :class="`${margemTabelaSelector} absolute z-[0] bg-verde text-claro  rounded-full  w-[125px] h-[32px] transition-all`">
                </div>
                <button @click="trocarTabela('semente')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1 z-10 w-[100px]">Sementes</button>
                <button @click="trocarTabela('fertilizante')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1 z-10 w-[100px]">Fertilizantes</button>
                <button @click="trocarTabela('defensivo')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1 z-10 w-[100px]">Defensivos</button>
                <button @click="trocarTabela('outros')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1 z-10 w-[100px]">Outros</button>
                <div> </div>
            </div>
            <!-- ------------------------------------------------------------------- -->
            <Transition name="slide">
                <div v-if="showTabelaSementes" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('semente/muda')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!sementesResponse">
                        <Loader />
                    </div>
                    <table v-else="!sementesResponse" class="bg-white shadow-xl w-full">

                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="semente in sementesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarSemente)"
                                class=" even:bg-gray-100" :key="semente.id">
                                <td class="p-2 capitalize">{{ semente.item }}</td>
                                <td class="p-2">{{ semente.quantidade + " " + semente.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(semente.item, semente.categoria, semente.quantidade, semente.grandeza, semente.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(semente.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(semente.item, semente.categoria, semente.quantidade, semente.grandeza, semente.id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="sementesResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(sementesResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(sementesResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaFetilizantes" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('fertilizante')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!fertilizantesResponse">
                        <Loader />
                    </div>
                    <table v-else="!fertilizantesResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="fertilizante in fertilizantesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarfertilizante)"
                                class=" even:bg-gray-100" :key="fertilizante.id">
                                <td class="p-2 capitalize">{{ fertilizante.item }}</td>
                                <td class="p-2">{{ fertilizante.quantidade + " " + fertilizante.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(fertilizante.item, fertilizante.categoria, fertilizante.quantidade, fertilizante.grandeza, fertilizante.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(fertilizante.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(fertilizante.item, fertilizante.categoria, fertilizante.quantidade, fertilizante.grandeza, fertilizante.id, fertilizante.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="fertilizantesResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(fertilizantesResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(fertilizantesResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaDefensivos" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('defensivo')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!defensivosResponse">
                        <Loader />
                    </div>
                    <table v-else="!defensivosResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="defensivo in defensivosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenardefensivo)"
                                class=" even:bg-gray-100" :key="defensivo.id">
                                <td class="p-2 capitalize">{{ defensivo.item }}</td>
                                <td class="p-2">{{ defensivo.quantidade + " " + defensivo.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(defensivo.item, defensivo.categoria, defensivo.quantidade, defensivo.grandeza, defensivo.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(defensivo.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(defensivo.item, defensivo.categoria, defensivo.quantidade, defensivo.grandeza, defensivo.id, defensivo.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="defensivosResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(defensivosResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(defensivosResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaOutros" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('outros')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!outrosResponse">
                        <Loader />
                    </div>
                    <table v-else="!outrosResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="outro in outrosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenaroutro)"
                                class=" even:bg-gray-100" :key="outro.id">
                                <td class="p-2 capitalize">{{ outro.item }}</td>
                                <td class="p-2">{{ outro.quantidade + " " + outro.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(outro.item, outro.categoria, outro.quantidade, outro.grandeza, outro.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(outro.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(outro.item, outro.categoria, outro.quantidade, outro.grandeza, outro.id, outro.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="outrosResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(outrosResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(outrosResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>


            <Transition name="pop">
                <ModalNovoEstoque v-if="showModalAdicionar" @close="showModalAdicionar = false"
                    @adicionarItem="handleSubmitNovoEstoque()">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">

                        <input v-model="estoqueInput.categoria" type="hidden" default="semente/muda"
                            placeholder="João da silva" name="nome">

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.item" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
                                do item</label>
                        </div>



                        <div class="relative z-0 w-full mb-6 group">

                            <label for=""
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grandeza</label>
                            <select v-model="estoqueInput.grandeza" placeholder="João da silva"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option class="bg-verde font-semibold" value="mg">mg | Miligrama</option>
                                <option class="bg-verde font-semibold" value="kg">Kg | Kilograma</option>
                                <option class="bg-verde font-semibold" value="t">t | Tonelada</option>
                                <option class="bg-verde font-semibold" value="ml">ml | Mililitro</option>
                                <option class="bg-verde font-semibold" value="l">L | litro</option>
                                <option class="bg-verde font-semibold" value="un"> un | Unidade </option>
                            </select>
                        </div>

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quatidade</label>
                        </div>
                        <div v-if="safraResponse.data != ''">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(estoqueInput.custo)" v-model="estoqueInput.custo" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Custo
                                    de compra - (colocar 0 se não for uma compra)</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">


                                <label
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                                    De qual safra será descontado o valor da compra</label>
                                <select v-model="estoqueInput.safra"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" v-for="safra in safraResponse.data"
                                        :key="safra.id" v-bind:value=safra.id>{{
                                            safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                        }}
                                    </option>
                                </select>
                            </div>
                        </div>

                    </div>
                </ModalNovoEstoque>
            </Transition>
            <Transition name="pop">
                <ModalDeletarEstoque v-if="showModalDeletar" @close="showModalDeletar = false"
                    @deletarItem="handleSubmitDeleteEstoque()">
                    <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este item?</h1>
                    <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                                desfeita.</u> </b></h2>
                </ModalDeletarEstoque>
            </Transition>

            <Transition name="pop">
                <ModalDeletarNegado v-if="showModalDeletarNegado" @close="showModalDeletarNegado = false">
                    <h2 class="text-center text-claro text-2xl font-semibold">Este Item está registrado em uma tarefa, não
                        pode ser
                        deletado.</h2>
                </ModalDeletarNegado>
            </Transition>

            <Transition name="pop">
                <ModalEditarEstoque v-if="showModalEditar" @close="showModalEditar = false"
                    @editarItem="handleSubmitEditarEstoque(estoqueInput.id)">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">


                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.item" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade</label>
                        </div>


                        <div class="relative z-0 w-full mb-6 group">

                            <label for="recebe_salario"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Grandeza</label>
                            <select v-model="estoqueInput.grandeza" type="text" placeholder="João da silva"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option value="mg">mg - Miligrama</option>
                                <option value="kg">Kg - Kilograma</option>
                                <option value="t">t - tonelana</option>
                                <option value="ml">ml - Mililitro</option>
                                <option value="l">L - litro</option>
                                <option value="un"> un- </option>
                            </select>
                        </div>

                    </div>
                </ModalEditarEstoque>
            </Transition>
            <Transition name="pop">
                <ModalAdicionarItemEstoque v-if="showModalRepor" @close="showModalRepor = false"
                    @reporItem="handleSubmitReporEstoque(estoqueInput.id)">
                    <div class="flex flex-col">
                        <Transition name="pop">
                            <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos
                                os
                                campos obrigatórios</h1>
                        </Transition>

                        <p class="text-lg text-claro mb-4">Quantidade atual: <b>{{
                            estoqueInput.quantidade +
                            estoqueInput.grandeza
                        }} </b></p>

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade_repor" name="floating_email"
                                id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                                à adicionar</label>
                        </div>
                        <div v-if="safraResponse.data != ''">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(estoqueInput.custo)" v-model="estoqueInput.custo" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Custo</label>
                            </div>


                            <div class="flex flex-col" v-if="estoqueInput.categoria != 'colheita'">
                                <div class="relative z-0 w-full mb-6 group">

                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                                        Adicionar Despeza à qual safra? </label>
                                    <select v-model="estoqueInput.safra"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                        <option class="bg-verde font-semibold" v-for="safra in safraResponse.data"
                                            :key="safra.id" v-bind:value=safra.id>{{
                                                safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                            }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalAdicionarItemEstoque>
            </Transition>


        </div>
    </div>
</template>

<style>
.slide-enter-from {
    scale: 0%;
    opacity: 0;
}

.slide-enter-to {
    scale: 100%;
}

.slide-enter-active {
    transition: all .2s cubic-bezier(0, 1.15, .47, 1.15);
    /* transition-delay: .8s; */
}

/* .slide-leave-from {
    scale: 100%;

}

.slide-leave-to {
    scale: 30%;
    opacity: 0;

}

.slide-leave-active {
    transition: all .4s cubic-bezier(0, 1.15, .47, 1.15);

} */
</style>
