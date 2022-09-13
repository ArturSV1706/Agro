<script setup lang="ts">
    
    const dadosInput = reactive({
        tipoPlantacao: "",
        areaPlantacao:0,
        sacaPrHa: 0,
        precoSaca: 0,
    })

    const calculoSafra = () => {
        let sacaPlantio =  dadosInput.areaPlantacao * dadosInput.sacaPrHa;
        let precoTotal = dadosInput.precoSaca * sacaPlantio;

        console.log(precoTotal)
    }


</script>


<template>
    <div>

        <input placeholder="Plantação" v-model="dadosInput.tipoPlantacao" />
        <input placeholder="Área do plantio (em ha)" v-model="dadosInput.areaPlantacao" />
        <input placeholder="Saca esperada por ha" v-model="dadosInput.sacaPrHa" />
        <input placeholder="Valor por saca" v-model="dadosInput.precoSaca" />
        <button @click="calculoSafra">Insert</button>
        
        <h2></h2>
    </div>
</template>