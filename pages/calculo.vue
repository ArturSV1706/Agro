<script setup lang="ts">
const custo = ref()
const quantidade = ref()
const calculoInput = reactive({
    custo: "",
    rendimento: "",
    area: ""
}) 

const handleClick = () =>{
    quantidade.value = (parseFloat(calculoInput.area) / parseFloat(calculoInput.rendimento))
    custo.value = quantidade.value * parseFloat(calculoInput.custo)

}
</script>
<template>
    <div class="flex flex-col">
        <label for="rendimento">Rendimento | Quantos m<sup>2</sup> rende 1L do produto</label>
        <input v-model="calculoInput.rendimento" name="rendimento" type="text" placeholder="Ex: 100">
        <label for="custo">Custo por litro</label>
        <input v-model="calculoInput.custo" name="custo" type="text" placeholder="Ex: 100">
        <label for="area">area por litro</label>
        <input v-model="calculoInput.area" name="area" type="text" placeholder="10000">
        <button @click="handleClick">Calcular</button>
        <p>Custo:{{custo}}</p>
        <p>Quantidade:{{quantidade}}</p>
    </div>
</template>