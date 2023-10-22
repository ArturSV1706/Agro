<script setup>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const props = defineProps({
    sementes: {
        // type: , // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    fertilizantes: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    defensivos: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    outros: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    funcionarios: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    combustiveis: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    manutencoes: {
        // type: float, // whatever your passing / INT /String 
        required: true,
        default: 0
    }
})

const data = {

    labels: ['sementes', 'fertilizantes', 'defensivos', 'outros', 'funcionários', 'combustíveis', 'manutenções'],
    datasets: [
        {
            data: [props.sementes, props.fertilizantes, props.defensivos, props.outros, props.funcionarios, props.combustiveis, props.manutencoes],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', "#FF9F40", "#DCDCDC"],
        },
    ],

};
const options = ref({
    borderColor: "ffff00",
    responsive: true,
    maintainAspectRatio: true,
        plugins: {
        legend: {
            position: 'top',
            labels: {
                color: "#0F2A25",
                font: {
                    size: 9,
                    weight: 550,

                }
            }
        },
        layout: {
            autoPadding: true,
        }
    },
});
</script>
<template>
    <div>
        <DoughnutChart :chartData="data" :options="options" />

    </div>
</template>