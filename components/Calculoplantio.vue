<script setup lang="ts">
    
    const calculoSafra = reactive ({
        safra: "",
        areaPlantio: 0,
        sacasHa: 0,
        valorSaca: 0,
    })

    const resultadoSafra = reactive ({
        totalSacas: 0,
        totalValor: 0,
    })

    const calcularSafra = () => {
        resultadoSafra.totalSacas = calculoSafra.areaPlantio * calculoSafra.sacasHa;
        resultadoSafra.totalValor = resultadoSafra.totalSacas * calculoSafra.valorSaca;
    }

</script>


<template>
    <div>
        <div class="container-inputs">
            <label >Safra
                <input placeholder="ex: milho" v-model="calculoSafra.safra" />
            </label>
            <label >Area total do plantio (em ha)
                <input placeholder="ex: 30" v-model="calculoSafra.areaPlantio" />
            </label>
            <label >Sacas esperada por ha
                <input placeholder="ex: 30" v-model="calculoSafra.sacasHa" />
            </label>
            <label >Preço esperado por saca
                <input placeholder="ex: 110" v-model="calculoSafra.valorSaca" />
            </label>
            <button @click="calcularSafra">Calcular</button>
            <p>{{resultadoSafra.totalValor}}</p>
        </div>
    </div>
</template>


<style scoped>
    * {

    }
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