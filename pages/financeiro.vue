<script setup>

definePageMeta({
    middleware: "auth"
})

import { reactive, ref } from 'vue';



const showModal = ref()
const { supabase } = useSupabase()
const { user } = useAuth()
const { formatar, formatarData, paraReal, paraFloat, corLucro, paraRealInput } = useUtils()
const route = useRoute()



const safraResponse = ref();
const safraResponse_qnt = ref()
const safraSelecionadaResponse = ref();
const saldoResponse = ref();
const fluxoResponse = ref();
const fluxoEntrada = ref();
const fluxoSaida = ref();
const saldoResult = ref();

const detalhe_Tipo_fluxo = ref();
const detalhe_Categoria = ref();
const detalhe_Fornecedor = ref();
const detalhe_Produto = ref();
const detalhe_Valor = ref();
const safra_escolhida = ref()

const tipoOrdenar = ref();
const reverterOrdenar = ref()

const showFluxo = ref()
const showModalDeletar = ref()
const showModalEditar = ref()
const limitarForm = ref()
const showPreencha = ref()



// Paginação

// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----
if (process.client) {
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id })
}



const handleSafraSelecioanda = async () => {
    showFluxo.value = true
    if (process.client) {
        fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) }).order('data_criacao', { ascending: true })
        fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safra_escolhida.value })
        fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safra_escolhida.value })
        safraSelecionadaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, id: parseInt(safra_escolhida.value) })
        saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)
        safraResponse_qnt.value = await supabase.from("safras").select("quantidade_real").eq('id', safra_escolhida.value)


    }

}
const pagina = reactive({
    atual: 0,
    tamanho: 5
})
const despesaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: ""
})

const entradaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor_unitario: "",
    valor_quantidade: "",
    safra_id: ""
})

const fluxoInput = reactive({
    id: "",
    produto: "",
    valor: ""
})

// const handleSubmitDespesa = async () => {
//     // if(!despesaInput.title || !despesaInput.note) return

//     await supabase.from("fluxo").insert({
//         tipo_fluxo: "saida",
//         categoria: despesaInput.categoria,
//         fornecedor: despesaInput.fornecedor,
//         produto: despesaInput.produto,
//         valor: parseFloat(despesaInput.valor.replace(".", "").replace(",", ".")),
//         user_id: user.value.id,
//     });
//     saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
//     fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) })
//     fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safra_escolhida.value })
//     fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safra_escolhida.value })
//     saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)

//     despesaInput.categoria = ""
//     despesaInput.fornecedor = ""
//     despesaInput.nota_fiscal = ""
//     despesaInput.produto = ""
//     despesaInput.valor = ""
// }

const handleSubmitEntrada = async () => {
    if (parseFloat(entradaInput.valor_unitario) <= 0 || parseFloat(entradaInput.valor_quantidade) <= 0) return

    // if(!entradaInput.title || !entradaInput.note) return
    // remover pontos do regex: .replace(".", "").replace(",", ".")

    await supabase.from("fluxo").insert({
        tipo_fluxo: "entrada",
        categoria: "safra",
        // fornecedor: entradaInput.fornecedor,
        produto: safraSelecionadaResponse.value.data[0].cultivo,
        valor: paraFloat(entradaInput.valor_unitario) * parseFloat(entradaInput.valor_quantidade),
        safra_id: safra_escolhida.value,
        user_id: user.value.id
    });

    if (parseFloat(entradaInput.valor_quantidade) > 0) {
        await supabase.from("safras").update({
            quantidade_real: parseFloat(safraResponse_qnt.value.data[0].quantidade_real) - parseFloat(entradaInput.valor_quantidade)
        }).eq('id', safra_escolhida.value);
    }
    saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
    fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) })
    fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safra_escolhida.value })
    fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safra_escolhida.value })
    saldoResult.value = parseFloat(fluxoEntrada.value) * parseFloat(fluxoSaida.value)

    entradaInput.categoria = ""
    entradaInput.fornecedor = ""
    entradaInput.nota_fiscal = ""
    entradaInput.produto = ""
    entradaInput.valor_unitario = ""
    entradaInput.valor_quantidade = ""

    if (process.client) {
        fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) }).order('data_criacao', { ascending: true })
        fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safra_escolhida.value })
        fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safra_escolhida.value })
        safraSelecionadaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, id: parseInt(safra_escolhida.value) })
        saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)
        safraResponse_qnt.value = await supabase.from("safras").select("quantidade_real").eq('id', safra_escolhida.value)
    }
}

const handleSubmitDeleteFluxo = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false
    await supabase.from("fluxo").delete().eq('id', fluxoInput.id)

    if (process.client) {
        fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) }).order('data_criacao', { ascending: true })
        fluxoEntrada.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "entrada", id_safra: safra_escolhida.value })
        fluxoSaida.value = await supabase.rpc('soma', { id_user: user.value.id, t_fluxo: "saida", id_safra: safra_escolhida.value })
        safraSelecionadaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, id: parseInt(safra_escolhida.value) })
        saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)
        safraResponse_qnt.value = await supabase.from("safras").select("quantidade_real").eq('id', safra_escolhida.value)
    }
    showModalDeletar.value = false
}
const handleSubmitEditarFluxo = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("fluxo").update({
        valor: paraFloat(fluxoInput.valor),
    }).eq('id', fluxoInput.id);

    if (process.client) {
        fluxoResponse.value = await supabase.from("fluxo").select().match({ user_id: user.value.id, safra_id: parseInt(safra_escolhida.value) }).order('data_criacao', { ascending: true })
        safraSelecionadaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, id: parseInt(safra_escolhida.value) })
    }
    showModalEditar.value = false
}

const handleDeleteFluxo = (id, produto, valor) => {
    limitarForm.value = true

    fluxoInput.id = id
    fluxoInput.produto = produto
    fluxoInput.valor = valor
    showModalDeletar.value = true
}
const handleEditarFluxo = (id, valor) => {
    limitarForm.value = true
    fluxoInput.id = id
    fluxoInput.valor = valor
    showModalEditar.value = true
}
const handleDetalheFluxo = (id, tipo_fluxo, categoria, fornecedor, produto, valor) => {
    limitarForm.value = true
    detalhe_Tipo_fluxo.value = tipo_fluxo
    detalhe_Categoria.value = categoria
    detalhe_Fornecedor.value = fornecedor
    detalhe_Produto.value = produto
    detalhe_Valor.value = valor
    showModal.value = true
}

const showAdicionarVenda = (i) => {
    if (i == safra_escolhida) {
        return true
    }
    else return false
}
const encerrarSafra = async () => {
    await supabase.from("safras").update({
        status: "completa"
    }).eq('id', safra_escolhida.value);
    location.reload()
}

const limitarQuantidade = async (id) => {
    if (entradaInput.valor_quantidade > safraResponse_qnt.value.data[0].quantidade_real) {
        entradaInput.valor_quantidade = safraResponse_qnt.value.data[0].quantidade_real
    }
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


    if (i === "categoria") {
        tipoOrdenar.value = porCategoria
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porCategoriaReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "fornecedor") {
        tipoOrdenar.value = porFornecedor
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porFornecedorReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "produto") {
        tipoOrdenar.value = porProduto
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porProdutoReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "valor") {
        tipoOrdenar.value = porValor
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porValorReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

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

function porCategoria(a, b) {
    if (a.categoria > b.categoria) {
        return 1;
    } else if (b.categoria > a.categoria) {
        return -1
    } else {
        return 0;
    }
}
function porFornecedor(a, b) {
    if (a.fornecedor > b.fornecedor) {
        return 1;
    } else if (b.fornecedor > a.fornecedor) {
        return -1
    } else {
        return 0;
    }
}
function porProduto(a, b) {
    if (a.produto > b.produto) {
        return 1;
    } else if (b.produto > a.produto) {
        return -1
    } else {
        return 0;
    }
}
function porValor(a, b) {
    return parseFloat(a.valor) - parseFloat(b.valor)
}
function porCategoriaReverse(a, b) {
    if (a.categoria > b.categoria) {
        return -1;
    } else if (b.categoria > a.categoria) {
        return 1
    } else {
        return 0;
    }
}
function porFornecedorReverse(a, b) {
    if (a.fornecedor > b.fornecedor) {
        return -1;
    } else if (b.fornecedor > a.fornecedor) {
        return 1
    } else {
        return 0;
    }
}
function porProdutoReverse(a, b) {
    if (a.produto > b.produto) {
        return -1;
    } else if (b.produto > a.produto) {
        return 1
    } else {
        return 0;
    }
}
function porValorReverse(a, b) {
    return parseFloat(b.valor) - parseFloat(a.valor)
}

const precoFormatar = (valor) => {
    entradaInput.valor_unitario = paraRealInput(valor)
}
const valorFormatar = (valor) => {
    fluxoInput.valor = paraRealInput(valor)
}
</script>

<template>
    <div>
        <!-- Título -->
        <div class="flex flex-row items-center absolute ml-[-4%] ">
            <h1 class="sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Financeiro | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl">💵</h1>
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <h1 v-if="!showFluxo"
            class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-verde font-aristotelica opacity-50 select-none">
            Selecione uma safra para ver detalhes</h1>
        <div class="pt-[4%] pl-[30px]">




            <div class="">

                <div class="flex flex-row h-[15vh] justify-evenly">
                    <div class="flex flex-col w-[300px]">
                        <h1 class="text-escuro text-xl font-semibold">Escolha uma Safra</h1>
                        <div class="flex h-[40px] self-center">
                            <div v-if="!safraResponse"></div>
                            <select v-else v-model="safra_escolhida"
                                class="  px-0 text-sm text-claro bg-transparent bg-opacity-90 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option class='bg-verde font-bold' v-for="safra in safraResponse.data" :key="safra.id"
                                    v-bind:value=safra.id>{{
                                        safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                    }}
                                </option>
                            </select>
                            <button @click="handleSafraSelecioanda"
                                class="self-start bg-escuro px-6 h-full rounded-r-md text-claro font-bold mb-4 transition-all text-md hover:bg-verde">Ver</button>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">



                        <div class="">
                            <div class="h-full w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-2" v-if="showFluxo">
                            <h1 class="text-3xl text-escuro font-bold">{{ }}</h1>
                            <h2 class="text-lg text-escuro font-semibold">Entradas</h2>
                            <div v-if="!fluxoEntrada"></div>
                            <h1 v-else class="text-verde_claro text-2xl font-semibold">{{ paraReal(fluxoEntrada.data) }}
                            </h1>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-2" v-if="showFluxo">
                            <h1 class="text-3xl text-escuro font-bold">{{ }}</h1>
                            <h2 class="text-lg text-escuro font-semibold">Saídas</h2>
                            <div v-if="!fluxoSaida"></div>
                            <h1 v-else class="text-vermelho text-2xl font-semibold">{{ paraReal(fluxoSaida.data) }}</h1>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-center pl-2" v-if="showFluxo">
                            <h1 class="text-3xl text-escuro font-bold">{{ }}</h1>
                            <h2 class="text-lg text-escuro font-semibold">Lucro</h2>
                            <div v-if="!fluxoEntrada || !fluxoSaida"></div>
                            <h1 v-else
                                :class="`text-${corLucro((parseFloat(fluxoEntrada.data) - parseFloat(fluxoSaida.data)))} text-2xl font-semibold`">
                                {{ paraReal((parseFloat(fluxoEntrada.data) - parseFloat(fluxoSaida.data))) }}</h1>
                        </div>
                    </div>

                </div>



                <!-- Mecanismo de adição de despezas -->
                <div v-if="showFluxo" class="flex items-center w-[85%] mb-6">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Adicionar venda de colheita 🌾 </p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div class="flex flex-row" v-if="showFluxo">

                    <div v-if="!safraSelecionadaResponse"></div>


                    <div v-else v-for="safra in safraSelecionadaResponse.data" :key="safra.id"
                        class="p-2 bg-white rounded-md shadow-md mb-4">
                        <h1 class="text-xl text-escuro mb-4"> Quantidade de {{ safra.cultivo }} no estoque: <b>{{
                            safra.quantidade_real }}</b><span class="text-sm">{{ " (" +
        formatar(safra.grandeza) }})</span></h1>
                        <div class="flex flex-row space-x-3">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="number" v-model="entradaInput.valor_quantidade"
                                    v-on:input="limitarQuantidade(entradaInput.safra_id)"
                                    class="block py-2.5 px-0 w-full text-sm text-verde bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-verde  duration-300 transform -z-10 scale-75 top-3 -translate-y-6  origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    {{ "Quantidade à vender" }}
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(entradaInput.valor_unitario)"
                                    v-model="entradaInput.valor_unitario"
                                    class="block py-2.5 px-0 w-full text-sm text-verde  bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label
                                    class="peer-focus:font-medium absolute text-sm text-verde  duration-300 transform -z-10 scale-75 top-3 -translate-y-6  origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Valor da venda (R$)
                                </label>
                            </div>


                            <button @click="handleSubmitEntrada"
                                class="self-start bg-escuro px-6 h-full rounded-md text-claro font-bold mb-4 transition-all text-md hover:bg-verde">Efetuar
                                venda</button>
                        </div>

                    </div>
                </div>
                <div v-if="showFluxo" class="flex items-center w-[85%] mb-6">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Entradas e saídas 🔃 </p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div v-if="!fluxoResponse"></div>
                <div v-else class="flex flex-col  w-full">
                    <div class="flex flex-col w-[85%]">
                        <table class="bg-white shadow-xl w-full">
                            <thead class="bg-verde text-claro">
                                <th>Tipo</th>
                                <th>Data</th>
                                <th class="p-2 " @click="handleOrdenar('categoria')">Categoria</th>
                                <!-- <th class="p-2 " @click="handleOrdenar('fornecedor')">Comprador/Vendedor</th> -->
                                <th class="p-2 " @click="handleOrdenar('produto')">Produto</th>
                                <th class="p-2 " @click="handleOrdenar('valor')">Valor</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </thead>
                            <tbody>
                                <tr v-for="fluxo in fluxoResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                                    :class="` text-center text-escuro font-medium bg-opacity-25 bg-${formatarTipoFluxoCor(fluxo.tipo_fluxo)} even:bg-opacity-30`"
                                    :key="fluxo.id">
                                    <td
                                        :class="`p-2 text-2xl font-extrabold text-${formatarTipoFluxoCor(fluxo.tipo_fluxo)}`">
                                        {{ formatarTipoFluxo(fluxo.tipo_fluxo) }}</td>
                                    <td class="p-2 text-center font-semibold"> {{ formatarData(fluxo.data_criacao) }}</td>

                                    <td class="p-2 text-center">{{ fluxo.categoria }}</td>
                                    <!-- <td class="p-2"> {{ fluxo.fornecedor }}</td> -->
                                    <td class="p-2 text-center"> {{ fluxo.produto }}</td>
                                    <td class="p-2 text-center">{{ paraReal(fluxo.valor) }}</td>
                                    <!-- <td>{{fluxo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> -->
                                    <td @click="handleEditarFluxo(fluxo.id, fluxo.valor)"
                                        class="p-2 cursor-pointer material-icons block text-center hover:text-xl transition-all">
                                        ✏
                                    </td>
                                    <td @click="handleDeleteFluxo(fluxo.id, fluxo.produto, fluxo.valor)"
                                        class="p-2 cursor-pointer material-icons  text-center hover:text-xl transition-all">
                                        ❌</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="fluxoResponse"
                            class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                                &lt-
                                Anterior </button>
                            <div class="flex flex-col items-center">

                                <p class="text-claro font-semibold">Pág.</p>
                                <select v-model="pagina.atual"
                                    class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                    <option v-for="i in Math.ceil(fluxoResponse.data.length / pagina.tamanho)"
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
                            <button v-if="pagina.atual < (Math.ceil(fluxoResponse.data.length / pagina.tamanho) - 1)"
                                @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                            </button><br>
                        </div>
                    </div>
                </div>

                <Transition name="pop">
                    <ModalDeletarFluxo v-if="showModalDeletar" @close="showModalDeletar = false"
                        @deletarFluxo="handleSubmitDeleteFluxo">
                        <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este registro?</h1>
                        <h1 class="text-center text-xl text-claro light">{{ fluxoInput.produto + " - " +
                            paraReal(fluxoInput.valor)
                        }}
                        </h1>

                        <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                                    desfeita.</u> </b></h2>
                    </ModalDeletarFluxo>
                </Transition>
                <Transition name="pop">
                    <ModalEditarFinanceiro v-if="showModalEditar" @close="showModalEditar = false"
                        @editarFinanceiro="handleSubmitEditarFluxo">
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-on:input="valorFormatar(   fluxoInput.valor)" v-model="fluxoInput.valor" name="floating_email"
                                id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Valor
                                
                            </label>
                        </div>
                    </ModalEditarFinanceiro>
                </Transition>

            </div>
        </div>
    </div>
</template>

<style>
.pop-enter-from {
    scale: 30%;
    opacity: 0;
}

.pop-enter-to {
    scale: 100%;
}

.pop-enter-active {
    transition: all .2s cubic-bezier(0, 1.15, .47, 1.15);
}

.pop-leave-from {
    scale: 100%;

}

.pop-leave-to {
    scale: 30%;
    opacity: 0;

}

.pop-leave-active {
    transition: all .4s cubic-bezier(0, 1.15, .47, 1.15);

}</style>