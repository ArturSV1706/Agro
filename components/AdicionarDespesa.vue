<script setup lang="ts">
const { supabase } = useSupabase()
const { user } = useAuth()

interface FluxoProps{
    // tipo_fluxo: string,
    // input_name: string
    // categoria: string,
    // fornecedor: string,
    // nota_fiscal: Number,
    // produto: string,
    // valor: Number,
}
const despesaInput = reactive({
    categoria: "",
    fornecedor: "",
    nota_fiscal: "",
    produto: "",
    valor: "",
})


    const handleSubmitEntrada = async () => {
    // if(!despesaInput.title || !despesaInput.note) return

    await supabase.from("fluxo").insert({
        tipo_fluxo: "saida",
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor:  despesaInput.valor,
        user_id: user.value.id
    });
    // despesaInput.title = ""
    // despesaInput.note = ""
}
</script>

<template>
    <div>
        <h1>Adicionar despezas</h1>
        <form class="flex flex-col">
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
            <button type='button' @click="handleSubmitEntrada">Criar</button>
        </form>
    </div>
</template>