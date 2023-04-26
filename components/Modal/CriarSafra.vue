<script setup>

const { supabase } = useSupabase()
const { user } = useAuth()

const safraInput = reactive({
    id: "",
    safra: "",
    data_inicio: "",
    data_fim: "",
    area: "",
    grandeza: "",
    valor_unitario: "",
    quantidade: "",
    despeza: "",
    receita_estimada: ""
})


const handleSubmitNovaSafra = async () => {
let receita_estimada_calc = parseFloat(safraInput.quantidade) * parseFloat(safraInput.valor_unitario)
    if (process.client) {
        await supabase.from("safras").insert({
            cultivo: safraInput.safra,
            area: parseFloat(safraInput.area),
            user_id: user.value.id,
            grandeza: safraInput.grandeza,
            despeza_estimada: parseFloat(safraInput.despeza),
            valor_venda_estimado: parseFloat(safraInput.valor_unitario),
            quantidade_estimada: parseFloat(safraInput.quantidade),
            receita_estimada: receita_estimada_calc,
            data_inicio: safraInput.data_inicio,
            data_fim: safraInput.data_fim,
            status: "ativa",

        });




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
}

</script>


<template>
    <div>
        <div class="container-inputs">
            Safra
            <input placeholder="ex: milho" v-model="safraInput.safra" />

            início
            <input type="date" v-model="safraInput.data_inicio" />

            fim (estimado)
            <input type="date" v-model="safraInput.data_fim" />

            Area total do plantio (em ha)
            <input placeholder="ex: 30" v-model="safraInput.area" />

            Método de contagem de produção
            <select placeholder="ex: 110" v-model="safraInput.grandeza">
                <option value="unidade">Un. - unidade</option>
                <option value="kilograma">Kg. - Kilograma</option>
                <option value="tonelada">T. - tonelada</option>
                <option value="bins">Bins</option>
                <option value="saca10">Saca de 10kg</option>
                <option value="saca20">Saca de 20kg</option>
                <option value="saca30">Saca de 30kg</option>
                <option value="saca40">Saca de 40kg</option>
                <option value="saca50">Saca de 50kg</option>
                <option value="saca60">Saca de 60kg</option>
            </select>

            Quantidade estimada de {{ safraInput.grandeza }}
            <input placeholder="ex: 110" v-model="safraInput.quantidade" />

            Preço esperado por {{ safraInput.grandeza }}
            <input placeholder="ex: 110" v-model="safraInput.valor_unitario" />

            despesas estimadas
            <input placeholder="ex: 110" v-model="safraInput.despeza" />

            <button @click="handleSubmitNovaSafra">Adicionar</button>
            <p> Lucro estimado: {{ parseFloat(safraInput.quantidade) * parseFloat(safraInput.valor_unitario) - parseFloat(safraInput.despeza) }}</p>
            <p class="text-green-600"> Receita estimada: {{ parseFloat(safraInput.quantidade) * parseFloat(safraInput.valor_unitario) }}</p>
            <p class="text-red-600"> Despezas estimadas: {{ safraInput.despeza }}</p>
        </div>
    </div>
</template>






<style scoped>
* {}

.container-inputs {
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: column;
}


input {
    border: 1px solid black;
    width: 10vw;
    margin-top: 1rem;
    border-radius: 0.25rem;
    outline: none;
}

button {
    background: grey;
    color: white;
    margin-top: 1rem;
    padding: 0.2rem 0.7rem;
    border-radius: 0.25rem;
}
</style>