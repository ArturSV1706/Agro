<script setup lang="ts">
let fluxo_de_entrada = 23423434
let fluxo_de_saida = 232323
const { supabase } = useSupabase()
const { user } = useAuth()

const saldoResponse = ref();
const fluxoResponse = ref();

const despesaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: "",
})

const handleSubmit = async () => {
    // if(!despesaInput.title || !despesaInput.note) return

    await supabase.from("fluxo").insert({
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor:  despesaInput.valor,
        user_id: user.value.id
    });
    fluxoResponse.value = await supabase.from("fluxo").select()
    // despesaInput.title = ""
    // despesaInput.note = ""
}

saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
fluxoResponse.value = await supabase.from("fluxo").select()
</script>

<template>
    <div>
        <div style="display: flex; justify-content: space-evenly;">
            <div>
                <h3>Fluxo de Entrada</h3>
                <h1>{{fluxo_de_entrada}}</h1>
            </div>
            <div>
                <h3>Fluxo de saida</h3>
                <h1>{{fluxo_de_saida}}</h1>
            </div>
            <div>
                <h3>Saldo da propriedade</h3>
                <h1 v-for="saldo in saldoResponse.data" :key="saldo.id">{{saldo.saldo}}</h1>
            </div>
        </div>
        <div style="display: flex; flex-direction: row;">
            <div>
                <h1>Adicionar despezas</h1>
                <form style="display: flex; flex-direction: column;">
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
                    <input v-model="despesaInput.produto"  name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input v-model="despesaInput.valor" name="valor" type="number">
                    <button type='button' @click="handleSubmit">Criar</button>
                </form>
            </div>
            <div>
                <h1>Adicionar entradas</h1>
                <form style="display: flex; flex-direction: column;">
                    <label for="categoria">Categoria</label>
                    <select name="categoria" id="cars" form="carform">
                        <option value="insumo">Insumo</option>
                        <option value="combustivel">Combustível</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                    <label for="fornecedor">Pagador</label>
                    <input name="fornecedor" type="text">
                    <label for="nota fiscal">Nota Fiscal</label>
                    <input name="nota fiscal" type="number">
                    <label for="produto">Produto</label>
                    <input name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input name="valor" type="number">
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
        <table>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Produto</th>
            <th>Valor</th>
            <tr v-for="fluxo in fluxoResponse.data" :key="fluxo.id">
                <td>{{fluxo.categoria}}</td>
                <td>{{fluxo.fornecedor}}</td>
                <td>{{fluxo.produto}}</td>
                <td>R$ {{fluxo.valor}}</td>
            </tr>
            
        </table>
    </div>
</template>