<script setup>
import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const prevData = ref()
const prevNum = ref()

const props = defineProps({
    label: {
        // type: , // whatever your passing / INT /String 
        required: true,
        default: 0
    },
    safra: {
        // type: , // whatever your passing / INT /String 
        required: true,
        default: 0
    }
})



function subtractMonths(date, months) {
    date.setMonth(date.getMonth() - months);
    return date;
}

function getDatesInRange(startDate, endDate) {

    const dateAux = new Date(startDate.getTime());
    const date = subtractMonths(dateAux, 1)

    const dates = [];

    while (date <= endDate) {
        let data_formatada = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        dates.push(data_formatada);
        // dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
}

console.log(props.safra[0].data_inicio)
const d1 = new Date(props.safra[0].data_inicio.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
const d2 = new Date() // "2014-05-12";

console.log(props.label)



let datesArray = getDatesInRange(d1, d2)
let entradaFormatada = []
let saidaFormatada = []
let prev = 0
const auxParse = ref()
const auxParseEntrada = ref()
const auxParseSaida = ref()
auxParse.value = 0

if (props.label) {
    for (let i = 0; i < datesArray.length; i++) {
        let ISODate = new Date(datesArray[i]).toISOString()
        ISODate = ISODate.substr(0, 10)
        console.log(ISODate)
        // if (props.label[auxParse.value].data_criacao.substr(0, 10) == datesArray[i]) {
        //     auxParse.value = 0
        // }
        console.log(props.label.length)
        if (props.label[auxParse.value].data_criacao.substr(0, 10) != ISODate) {
            entradaFormatada.push(0)
            saidaFormatada.push(0)
        }
        console.log("Data: " + ISODate + 'aux: ' + auxParse.value)
            while (props.label[auxParse.value].data_criacao.substr(0, 10) == ISODate) {
                if (props.label[auxParse.value].tipo_fluxo == 'entrada') {

                    console.log(parseFloat(props.label[auxParse.value].valor))
                    prev += parseFloat(props.label[auxParse.value].valor)
                    console.log(auxParse.value)
                    if(auxParse.value < (props.label.length -1)){
                        auxParse.value += 1
                    }                    console.log("entrou")
                    if (props.label[auxParse.value].data_criacao.substr(0, 10) != ISODate) {
                        entradaFormatada.push(prev)
                        prev = 0
                    }
                }
                if (props.label[auxParse.value].tipo_fluxo == 'saida') {



                    console.log(parseFloat(props.label[auxParse.value].valor))
                    prev += parseFloat(props.label[auxParse.value].valor)
                    console.log(auxParse.value)
                    if(auxParse.value < (props.label.length -2)){
                        auxParse.value += 1
                    }                    console.log("Tem repetição")
                    if (props.label[auxParse.value].data_criacao.substr(0, 10) != ISODate) {
                        console.log("data que enviou o array: " + ISODate)
                        saidaFormatada.push(prev)
                        prev = 0

                    }
                }
                if (props.label[auxParse.value].data_criacao.substr(0, 10) != ISODate) {
                    if(auxParse.value < (props.label.length -1)){
                        auxParse.value += 1
                    }
                    break
                }
                // entradaFormatada.push(parseFloat(props.label[auxParse.value].valor) + prev)
                // else{
                //     entradaFormatada.push(0)
                // }

                // if (props.label[i].tipo_fluxo == 'entrada') {
                //     if (prevData.value == props.label[i].data_criacao.substr(0, 10)) {
                //         aux.y = prevNum + parseFloat(props.label[i].valor)

                //     } else {
                //         aux.x = props.label[i].data_criacao.substr(0, 10)
                //         aux.y = parseFloat(props.label[i].valor)
                //         entradaFormatada.push(aux)
                //     }
                // }
                // if (props.label[i].tipo_fluxo == 'saida') {
                //     if (prevData.value == props.label[i].data_criacao.substr(0, 10)) {
                //         aux.y = prevNum + parseFloat(props.label[i].valor)
                //     }
                //     else {
                //         // saidaFormatada.push(props.label[i].data_criacao.substr(0,10))
                //         aux.x = props.label[i].data_criacao.substr(0, 10)
                //         aux.y = parseFloat(props.label[i].valor)
                //         saidaFormatada.push(aux)
                //     }
                // }


                // labels.value =  fluxoResponse.value.data[i].data_criacao.substr(0,10)
                // prevNum.value = parseFloat(props.label[i].valor)
            }
        }
    
}
const data = {
    labels: getDatesInRange(d1, d2),
    datasets: [{
        labels: 'Entradas',
        data: entradaFormatada,
        fill: false,
        borderColor: '#329F5B',
        tension: 0.1,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointBackgroundColor: '#329F5B'
    }, {
        label: 'saídas',
        data: saidaFormatada,
        fill: false,
        borderColor: '#D52941',
        tension: 0.1,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointBackgroundColor: '#D52941'
    }

    ]

};
const options = ref({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: "#0F2A25",
                font: {
                    size: 14,
                    weight: 550,

                }
            }
        },
        layout: {
            autoPadding: false
        }
    },
    scales: {
        x: {
            grid: {
                color: "rgba(42, 77, 65, 0.1)",
                opacity: 0
            }

        },
        y: {
            grid: {
                color: "rgba(42, 77, 65, 0.1)"
            }

        }
    }
});
</script>
<template>
    <div class="">
        <LineChart :chartData="data" :options="options" />

    </div>
</template>