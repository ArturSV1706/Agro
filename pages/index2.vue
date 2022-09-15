<script setup lang="ts">
let fluxo_de_entrada = 0
let fluxo_de_saida = 0
const { supabase } = useSupabase()
const { user } = useAuth()

const saldoResponse = ref();
const fluxoResponse = ref();
const fluxoEntrada = ref();
const fluxoSaida = ref();
const saldoResult = ref();

// const despesaInput = reactive({
//     categoria: "",
//     fornecedor: "",
//     nota_fiscal: "",
//     produto: "",
//     valor: "",
// })

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
            <tr v-for="fluxo in fluxoResponse.data" :key="fluxo.id">
                <td>{{fluxo.tipo_fluxo}}</td>
                <td>{{fluxo.categoria}}</td>
                <td>{{fluxo.fornecedor}}</td>
                <td>{{fluxo.produto}}</td>
                <td>R$ {{fluxo.valor}}</td>
            </tr>

        </table>

    </div>
    <!-- {{user.value.id}} -->
</template>