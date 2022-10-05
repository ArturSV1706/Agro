<script setup lang="ts">

import { LineChart } from 'vue-chart-3';

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

const tipoOrdenar = ref();
const reverterOrdenar = ref()

// Paginação
const pagina = reactive({
    atual: 0,
    tamanho: 5
})



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
    valor: ""
})

const entradaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: "",
})

const regexDespesa = () => {
    let length = despesaInput.valor.length

    despesaInput.valor = despesaInput.valor.replace(/[^0-9]/g, '')
    if (length >= 14) return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 13) return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 11) return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 10) return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 9) return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 7) return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 6) return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{2})$/, '$1,$2')
    if (length >= 5) return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{2})$/, '$1,$2')
    if (length >= 3) return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{2})$/, '$1,$2')
}
const regexEntrada = () => {
    let length = entradaInput.valor.length

    entradaInput.valor = entradaInput.valor.replace(/[^0-9]/g, '')
    if (length >= 14) return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 13) return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 11) return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 10) return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 9) return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 7) return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 6) return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{2})$/, '$1,$2')
    if (length >= 5) return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{2})$/, '$1,$2')
    if (length >= 3) return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{2})$/, '$1,$2')
}

const handleSubmitDespesa = async () => {
    // if(!despesaInput.title || !despesaInput.note) return

    await supabase.from("fluxo").insert({
        tipo_fluxo: "saida",
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor: parseFloat(despesaInput.valor.replace(".", "").replace(",", ".")),
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
        valor: parseFloat(entradaInput.valor.replace(".", "").replace(",", ".")),
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

// Paginação
const handlePagina = (i) => {
    if(i === "proxima"){
        pagina.atual++
    }
    if(i === "anterior"){
        pagina.atual--
    }
}

const handleOrdenar = (i) => { 
    

    if(i === "categoria"){
        tipoOrdenar.value = porCategoria
        if (reverterOrdenar.value === i){
            tipoOrdenar.value = porCategoriaReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if(i === "fornecedor"){
        tipoOrdenar.value = porFornecedor
        if (reverterOrdenar.value === i){
            tipoOrdenar.value = porFornecedorReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if(i === "produto"){
        tipoOrdenar.value = porProduto
        if (reverterOrdenar.value === i){
            tipoOrdenar.value = porProdutoReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if(i === "valor"){
        tipoOrdenar.value = porValor
        if (reverterOrdenar.value === i){
            tipoOrdenar.value = porValorReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
   
}

function porCategoria(a,b){
if(a.categoria > b.categoria){
    return 1;
}else if (b.categoria > a.categoria) {
    return -1
}else{
    return 0;
}
}
function porFornecedor(a,b){
if(a.fornecedor > b.fornecedor){
    return 1;
}else if (b.fornecedor > a.fornecedor) {
    return -1
}else{
    return 0;
}
}
function porProduto(a,b){
if(a.produto > b.produto){
    return 1;
}else if (b.produto > a.produto) {
    return -1
}else{
    return 0;
}
}
function porValor(a,b){
    return parseFloat(a.valor) - parseFloat(b.valor)
}
function porCategoriaReverse(a,b){
if(a.categoria > b.categoria){
    return -1;
}else if (b.categoria > a.categoria) {
    return 1
}else{
    return 0;
}
}
function porFornecedorReverse(a,b){
if(a.fornecedor > b.fornecedor){
    return -1;
}else if (b.fornecedor > a.fornecedor) {
    return 1
}else{
    return 0;
}
}
function porProdutoReverse(a,b){
if(a.produto > b.produto){
    return -1;
}else if (b.produto > a.produto) {
    return 1
}else{
    return 0;
}
}
function porValorReverse(a,b){
    return parseFloat(b.valor) - parseFloat(a.valor)
}


</script>

<template>
    <div>

        <div class="flex flex-row justify-evenly">
            <div>
                <h3>Fluxo de Entrada</h3>
                <h1>{{fluxoEntrada.data.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</h1>
            </div>
            <div>
                <h3>Fluxo de saida</h3>
                <h1>{{fluxoSaida.data.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</h1>
            </div>
            <div>
                <h3>Saldo</h3>
                <h1>{{(parseFloat(fluxoEntrada.data) - parseFloat(fluxoSaida.data)).toLocaleString('pt-br',{style:
                'currency', currency: 'BRL'})}}</h1>
            </div>
        </div>

        <!-- <lineChart :chartData="testData" /> -->

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
                    <input placeholder="R$ 1.000,00" v-on:input="regexDespesa" v-model="despesaInput.valor" name="valor"
                        type="text">
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
                    <input placeholder="R$ 1.000,00" v-on:input="regexEntrada" v-model="entradaInput.valor" name="valor"
                        type="text">
                    <button type='button' @click="handleSubmitEntrada">Criar</button>
                </form>
            </div>
        </div>
        <div>
            <select v-model="pagina.atual" >
                <option  v-for="i in Math.ceil(fluxoResponse.data.length/pagina.tamanho)" v-bind:value="i-1">{{i}}</option>
            </select>
            <select v-model="pagina.tamanho" @input="pagina.atual = 0" >
                <option  v-bind:value=5> 5 </option>
                <option  v-bind:value=10> 10 </option>
                <option  v-bind:value=250> 25 </option>
            </select>
            <button v-if="pagina.atual < (Math.ceil(fluxoResponse.data.length/pagina.tamanho) -1)" @click="handlePagina('proxima')"> prox </button><br>
            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"> ant </button>
        </div>
        <table >
            <thead>
                <th>Ação</th>
                <th @click="handleOrdenar('categoria')">Categoria</th>
                <th @click="handleOrdenar('fornecedor')" >Fornecedor</th>
                <th @click="handleOrdenar('produto')">Produto</th>
                <th @click="handleOrdenar('valor')">Valor</th>
                <th>Detalhes</th>
            </thead>
            <tbody>
                <tr v-for="fluxo in fluxoResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)" :key="fluxo.id"> 
                    <td>{{fluxo.tipo_fluxo}}</td>
                    <td>{{fluxo.categoria}}</td>
                    <td>{{fluxo.fornecedor}}</td>
                    <td>{{fluxo.produto}}</td>
                    <td>{{fluxo.valor}}</td>
                    <!-- <td>{{fluxo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> -->
                    <td>
                        <span class="cursor-pointer material-icons block   text-center hover:text-xl"
                            @click="handleDetalheFluxo(fluxo.id, fluxo.tipo_fluxo, fluxo.categoria, fluxo.fornecedor, fluxo.produto,fluxo.valor)">
                            manage_search
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <Transition name="pop">
            <ModalFluxo v-if="showModal" @close="showModal = false">
                {{detalhe_Tipo_fluxo}}
                {{detalhe_Categoria }}
                {{detalhe_Fornecedor}}
                {{detalhe_Produto}}
                {{detalhe_Valor}}

            </ModalFluxo>
        </Transition>

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
    transition: all .2s ease-out;
}

.pop-leave-from {
    scale: 100%;

}

.pop-leave-to {
    scale: 30%;
    opacity: 0;

}

.pop-leave-active {
    transition: all .2s ease;

}
</style>