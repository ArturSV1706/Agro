<script setup lang="ts">

const showModal = ref()
const { supabase } = useSupabase()
const { user } = useAuth()

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


saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
fluxoResponse.value = await supabase.from("fluxo").select()
fluxoEntrada.value = await supabase.rpc('soma_fluxo', { t_fluxo: "entrada" })
fluxoSaida.value = await supabase.rpc('soma_fluxo', { t_fluxo: "saida" })
saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)

const despesaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: "",
})

const entradaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: "",
})



const handleSubmitDespesa = async () => {
    // if(!despesaInput.title || !despesaInput.note) return

    await supabase.from("fluxo").insert({
        tipo_fluxo: "saida",
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor: despesaInput.valor,
        user_id: user.value.id
    });
    saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
    fluxoResponse.value = await supabase.from("fluxo").select()
    fluxoEntrada.value = await supabase.rpc('soma_fluxo', { t_fluxo: "entrada" })
    fluxoSaida.value = await supabase.rpc('soma_fluxo', { t_fluxo: "saida" })
    saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)

    despesaInput.categoria = ""
    despesaInput.fornecedor = ""
    despesaInput.nota_fiscal = ""
    despesaInput.produto = ""
    despesaInput.valor = ""
}
const handleSubmitEntrada = async () => {
    // if(!entradaInput.title || !entradaInput.note) return

    await supabase.from("fluxo").insert({
        tipo_fluxo: "entrada",
        categoria: entradaInput.categoria,
        fornecedor: entradaInput.fornecedor,
        produto: entradaInput.produto,
        valor: entradaInput.valor,
        user_id: user.value.id
    });
    saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
    fluxoResponse.value = await supabase.from("fluxo").select()
    fluxoEntrada.value = await supabase.rpc('soma_fluxo', { t_fluxo: "entrada" })
    fluxoSaida.value = await supabase.rpc('soma_fluxo', { t_fluxo: "saida" })
    saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value)

    entradaInput.categoria = ""
    entradaInput.fornecedor = ""
    entradaInput.nota_fiscal = ""
    entradaInput.produto = ""
    entradaInput.valor = ""
}

const handleDetalheFluxo = (id, tipo_fluxo, categoria, fornecedor, produto, valor) => {
    detalhe_Tipo_fluxo.value = tipo_fluxo
    detalhe_Categoria.value = categoria
    detalhe_Fornecedor.value = fornecedor
    detalhe_Produto.value = produto
    detalhe_Valor.value = valor
    showModal.value = true
}
</script>

<template>
    <div>
        <div class="flex flex-row justify-evenly">
            <div>
                <h3>Fluxo de Entrada</h3>
                <h1>R$ {{fluxoEntrada.data.toFixed(2)}}</h1>
            </div>
            <div>
                <h3>Fluxo de saida</h3>
                <h1>R$ {{fluxoSaida.data.toFixed(2)}}</h1>
            </div>
            <div>
                <h3>Saldo</h3>
                <h1>R$ {{(parseFloat(fluxoEntrada.data) - parseFloat(fluxoSaida.data)).toFixed(2)}}</h1>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="flex flex-row">


                <form class="flex flex-col">
                    <h1>Adicionar despezas</h1>
                    <label for="categoria">Categoria</label>
                    <select v-model="despesaInput.categoria" name="categoria" id="cars" form="carform">
                        <option value="insumo">Insumo</option>
                        <option value="combustivel">Combustível</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                    <label for="fornecedor">Fornecedor</label>
                    <input v-model="despesaInput.fornecedor" name="fornecedor" type="text">
                    <label for="nota fiscal">Nota Fiscal</label>
                    <input v-model="despesaInput.nota_fiscal" name="nota fiscal" type="number">
                    <label for="produto">Produto</label>
                    <input v-model="despesaInput.produto" name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input v-model="despesaInput.valor" name="valor" type="number">
                    <button type='button' @click="handleSubmitDespesa">Criar</button>
                </form>
            </div>
            <div class="flex flex-row">
                <form class="flex flex-col">
                    <h1>Adicionar Entradas</h1>
                    <label for="categoria">Categoria</label>
                    <select v-model="entradaInput.categoria" name="categoria" id="cars" form="carform">
                        <option value="insumo">Insumo</option>
                        <option value="combustivel">Combustível</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                    <label for="fornecedor">Fornecedor</label>
                    <input v-model="entradaInput.fornecedor" name="fornecedor" type="text">
                    <label for="nota fiscal">Nota Fiscal</label>
                    <input v-model="entradaInput.nota_fiscal" name="nota fiscal" type="number">
                    <label for="produto">Produto</label>
                    <input v-model="entradaInput.produto" name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input v-model="entradaInput.valor" name="valor" type="number">
                    <button type='button' @click="handleSubmitEntrada">Criar</button>
                </form>
            </div>
        </div>
        <table class="">
            <th>Ação</th>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Detalhes</th>
            <tr v-for="fluxo in fluxoResponse.data" :key="fluxo.id">
                <td>{{fluxo.tipo_fluxo}}</td>
                <td>{{fluxo.categoria}}</td>
                <td>{{fluxo.fornecedor}}</td>
                <td>{{fluxo.produto}}</td>
                <td>R$ {{fluxo.valor}}</td>
                <td>
                    <button
                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        @click="handleDetalheFluxo(fluxo.id, fluxo.tipo_fluxo, fluxo.categoria, fluxo.fornecedor, fluxo.produto,fluxo.valor)">
                        Toggle modal
                    </button>
                </td>
            </tr>

        </table>


        <ModalFluxo v-if="showModal" @close="showModal = false">
            {{detalhe_Tipo_fluxo}}
            {{detalhe_Categoria }}
            {{detalhe_Fornecedor}}
            {{detalhe_Produto}}
            {{detalhe_Valor}}
            
        </ModalFluxo>


    </div>

</template>