<script setup lang="ts">
let fluxo_de_entrada = 0
let fluxo_de_saida = 0
const { supabase } = useSupabase()
const { user } = useAuth()

const saldoResponse = ref();
const fluxoResponse = ref();
const fluxoEntrada= ref();
const fluxoSaida= ref();

// const despesaInput = reactive({
//     categoria: "",
//     fornecedor: "",
//     nota_fiscal: "",
//     produto: "",
//     valor: "",
// })

saldoResponse.value = await supabase.from("usuario").select().eq("id", 1)
fluxoResponse.value = await supabase.from("fluxo").select()
fluxoEntrada.value = await supabase.from("fluxo").select().match({tipo_fluxo: "entrada" })


fluxoSaida.value = await supabase.from("fluxo").select()


</script>

<template>
    <div>
        <div class="flex flex-row justify-evenly">
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
        <div class="flex flex-row">
            
            
            <AdicionarDespesa />
            <AdicionarEntrada />
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
                <td>R${{fluxo.valor}}</td>
            </tr>

        </table>

    </div>
    {{fluxoEntrada.data}}
</template>