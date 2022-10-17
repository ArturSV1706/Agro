<script setup lang="ts">

const { supabase } = useSupabase()
const { user } = useAuth()

const maquinasResponse = ref();
maquinasResponse.value = await supabase.from("maquinas").select()


const showModalAdicionar = ref()
const showModalEditar = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()

const pagina = reactive({
    atual: 0,
    tamanho: 5
})

const maquinaInput = reactive({
    id: "",
    categoria: "",
    modelo: "",
    ano: "",
    is_pago: false,
    valor_parcelas: "",
    num_parcelas: "",
    data_pagamento_parcelas: ""
})

const handleNovoMaquina = () => {
    showModalAdicionar.value = true
    maquinaInput.categoria = ""
    maquinaInput.modelo = ""
    maquinaInput.ano = ""
    maquinaInput.is_pago = false
    maquinaInput.valor_parcelas = ""
    maquinaInput.num_parcelas = ""
    maquinaInput.data_pagamento_parcelas = ""
}
const handleDeleteMaquina = async (maquinaId) => {
    await supabase.from("maquinas").delete().eq('id', maquinaId)
    maquinasResponse.value = await supabase.from("maquinas").select()

}
const handleSubmitNovoMaquina = async () => {


    await supabase.from("maquinas").insert({
        // id_fazenda: "",
        categoria: maquinaInput.categoria,
        modelo: maquinaInput.modelo,
        ano: maquinaInput.ano,
        is_pago: maquinaInput.is_pago,
        valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
        num_parcelas: parseInt(maquinaInput.num_parcelas),
        data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)

    });
    maquinasResponse.value = await supabase.from("maquinas").select()


    maquinaInput.categoria = "",
        maquinaInput.ano = "",
        maquinaInput.modelo = "",
        maquinaInput.is_pago = false,
        maquinaInput.valor_parcelas = "",
        maquinaInput.num_parcelas = ""
    showModalAdicionar.value = false
}
const handleSubmitEditarMaquina = async () => {

    if (!maquinaInput.is_pago) {
        await supabase.from("maquinas").update({
            categoria: maquinaInput.categoria,
            modelo: maquinaInput.modelo,
            ano: maquinaInput.ano,
            is_pago: maquinaInput.is_pago,
            valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
            num_parcelas: parseInt(maquinaInput.num_parcelas),
            data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)

        }).eq('id', maquinaInput.id);
    } else {

        await supabase.from("maquinas").update({
            categoria: maquinaInput.categoria,
            modelo: maquinaInput.modelo,
            ano: maquinaInput.ano,
            is_pago: maquinaInput.is_pago,
            valor_parcelas: 0,
            num_parcelas: 0,
            data_parcelas: 0

        }).eq('id', maquinaInput.id);
    }


    maquinasResponse.value = await supabase.from("maquinas").select()


    maquinaInput.id = "",
        maquinaInput.categoria = "",
        maquinaInput.ano = "",
        maquinaInput.modelo = "",
        maquinaInput.is_pago = false,
        maquinaInput.valor_parcelas = "",
        maquinaInput.num_parcelas = ""
    showModalEditar.value = false
}
const handleModalEditar = (categoria,
    modelo,
    ano,
    is_pago,
    valor_parcelas,
    num_parcelas,
    data_pagamento_parcelas, id) => {

    showModalEditar.value = true

    maquinaInput.categoria = categoria
    maquinaInput.modelo = modelo
    maquinaInput.ano = ano
    maquinaInput.is_pago = is_pago
    maquinaInput.valor_parcelas = valor_parcelas
    maquinaInput.num_parcelas = num_parcelas
    maquinaInput.data_pagamento_parcelas = data_pagamento_parcelas
    maquinaInput.id = id


}
// Paginação
const handlePagina = (i) => {
    if (i === "proxima") {
        pagina.atual++
    }
    if (i === "anterior") {
        pagina.atual--
    }
}
const handleOrdenar = (i) => {


    if (i === "nome") {
        tipoOrdenar.value = porNome
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porNomeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "cargo") {
        tipoOrdenar.value = porCargo
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porCargoReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "salario") {
        tipoOrdenar.value = porSalario
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porSalarioReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "dia") {
        tipoOrdenar.value = porDia
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porDiaReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "data") {
        tipoOrdenar.value = porData
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porDataReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

}

function porNome(a, b) {
    if (a.nome > b.nome) {
        return 1;
    } else if (b.nome > a.nome) {
        return -1
    } else {
        return 0;
    }
}
function porCargo(a, b) {
    if (a.cargo > b.cargo) {
        return 1;
    } else if (b.cargo > a.cargo) {
        return -1
    } else {
        return 0;
    }
}
function porData(a, b) {
    if (a.data > b.data) {
        return 1;
    } else if (b.data > a.data) {
        return -1
    } else {
        return 0;
    }
}
function porSalario(a, b) {
    return parseFloat(a.salario) - parseFloat(b.salario)
}
function porDia(a, b) {
    return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario)
}
function porNomeReverse(a, b) {
    if (a.nome > b.nome) {
        return -1;
    } else if (b.nome > a.nome) {
        return 1
    } else {
        return 0;
    }
}
function porCargoReverse(a, b) {
    if (a.cargo > b.cargo) {
        return -1;
    } else if (b.cargo > a.cargo) {
        return 1
    } else {
        return 0;
    }
}
function porDataReverse(a, b) {
    if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
    } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1
    } else {
        return 0;
    }
}
function porSalarioReverse(a, b) {
    return parseFloat(b.salario) - parseFloat(a.salario)
}
function porDiaReverse(a, b) {
    return parseFloat(b.data_inicio) - parseFloat(a.data_inicio)
}
// <-------->

</script>
<template>
    <div>
        {{maquinaInput.categoria}}
        <button @click="handleNovoMaquina">
            novo maquina
        </button>
        <!-- Modal Novo Funcionário -->
        <Transition name="pop">
            <ModalNovoMaquina v-if="showModalAdicionar" @close="showModalAdicionar = false"
                @adicionarMaquina="handleSubmitNovoMaquina">
                <div class="flex flex-col">

                    <label for="nome">Categoria do máquina</label>
                    <select v-model="maquinaInput.categoria" type="text" placeholder="João da silva">
                        <option value="tratores">Tratores</option>
                        <option value="ceifadeira/colheitadeira">Ceifadeira ou Colheitadeira</option>
                        <option value="atv/utv">ATVs ou UTVs</option>
                        <option value="acessorios/trator">Assessórios para trator</option>
                        <option value="arados">Arados</option>
                        <option value="distribuidores_de_fertilizante">Distribuidores De Fertilizante</option>
                        <option value="semeadores">Semeadores</option>
                        <option value="enfardadeiras">Enfardadeiras</option>
                        <option value="vagoes/reboque">Vagões ou reboque</option>
                        <option value="outro">Outro</option>
                    </select>
                    <label for="cargo">Modelo</label>
                    <input v-model="maquinaInput.modelo" type="text" placeholder="João da silva">
                    <label for="numero">numero</label>
                    <input v-model="maquinaInput.ano" type="text" placeholder="João da silva">
                    <label for="recebe_salario">Está Pago?</label>
                    <input v-model="maquinaInput.is_pago" type="checkbox" placeholder="João da silva"
                        name="recebe_salario">
                    <Transition name="pop">
                        <div v-if="!maquinaInput.is_pago" class="flex flex-col">
                            <label for="salario">Parcelas Restantes</label>
                            <input v-model="maquinaInput.num_parcelas" type="text" placeholder="João da silva"
                                name="salario">
                            <label for="salario">Valor da parcela</label>
                            <input v-model="maquinaInput.valor_parcelas" type="text" placeholder="João da silva"
                                name="salario">
                            <label for="data_pagamento_salario">Dia de pagamento parcela</label>
                            <select v-model="maquinaInput.data_pagamento_parcelas" placeholder="João da silva"
                                name="data_pagamento_salario">
                                <option v-for="i in 28" v-bind:value=i>{{i}}</option>
                            </select>
                        </div>
                    </Transition>
                </div>
            </ModalNovoMaquina>
        </Transition>
        <div>
            <select v-model="pagina.atual">
                <option v-for="i in Math.ceil(maquinasResponse.data.length/pagina.tamanho)" v-bind:value="i-1">{{i}}
                </option>
            </select>
            <select v-model="pagina.tamanho" @input="pagina.atual = 0">
                <option v-bind:value=5> 5 </option>
                <option v-bind:value=10> 10 </option>
                <option v-bind:value=250> 25 </option>
            </select>
            <button v-if="pagina.atual < (Math.ceil(maquinasResponse.data.length/pagina.tamanho) -1)"
                @click="handlePagina('proxima')"> prox </button><br>
            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"> ant </button>
        </div>

        <table>
            <thead>
                <th @click="handleOrdenar('categoria')">Categoria</th>
                <th @click="handleOrdenar('modelo')">Modelo</th>
                <th @click="handleOrdenar('ano')">Ano</th>
                <th @click="handleOrdenar('ano')">Pago</th>
                <th @click="handleOrdenar('valor_parcelas')">valor_parcelas</th>
                <th @click="handleOrdenar('num_parcelas')">num_parcelas</th>
                <th @click="handleOrdenar('data_pagamento_parcelas')">data_pagamento_parcelas</th>
                <th>Detalhes</th>
                <th>Deletar</th>
            </thead>
            <tbody>
                <tr v-for="maquina in maquinasResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                    :key="maquina.id">
                    <td>{{maquina.categoria}}</td>
                    <td>{{maquina.modelo}}</td>
                    <td>{{maquina.ano}}</td>
                    <td>{{maquina.is_pago}}</td>
                    <td>{{maquina.valor_parcelas}}</td>
                    <td>{{maquina.num_parcelas}}</td>
                    <td>{{maquina.data_parcelas}}</td>
                    <!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> -->
                    <td>
                        <span class="cursor-pointer material-icons block text-center hover:text-xl"
                            @click="handleModalEditar(maquina.categoria, maquina.modelo, maquina.ano, maquina.is_pago, maquina.valor_parcelas, maquina.num_parcelas, maquina.data_pagamento_parcelas, maquina.id)"
                            @close="showModalEditar = false">
                            edit
                        </span>
                    </td>
                    <td>
                        <span class="cursor-pointer material-icons block text-center hover:text-xl"
                            @click="handleDeleteMaquina(maquina.id)">
                            delete
                        </span>

                    </td>
                    <Transition name="pop">
                        <ModalEditarMaquina v-if="showModalEditar" @close="showModalEditar = false"
                            @editarMaquina="handleSubmitEditarMaquina">
                            <div class="flex flex-col">

                                <label for="nome">Categoria do máquina</label>
                                <select v-model="maquinaInput.categoria" type="text" placeholder="João da silva">
                                    <option value="tratores">Tratores</option>
                                    <option value="ceifadeira/colheitadeira">Ceifadeira ou Colheitadeira</option>
                                    <option value="atv/utv">ATVs ou UTVs</option>
                                    <option value="acessorios/trator">Assessórios para trator</option>
                                    <option value="arados">Arados</option>
                                    <option value="distribuidores_de_fertilizante">Distribuidores De Fertilizante
                                    </option>
                                    <option value="semeadores">Semeadores</option>
                                    <option value="enfardadeiras">Enfardadeiras</option>
                                    <option value="vagoes/reboque">Vagões ou reboque</option>
                                    <option value="outro">Outro</option>
                                </select>
                                <label for="cargo">Modelo</label>
                                <input v-model="maquinaInput.modelo" type="text" placeholder="João da silva">
                                <label for="numero">numero</label>
                                <input v-model="maquinaInput.ano" type="text" placeholder="João da silva">
                                <label for="recebe_salario">Está Pago?</label>
                                <input v-model="maquinaInput.is_pago" type="checkbox" placeholder="João da silva"
                                    name="recebe_salario">

                                <Transition name="pop">
                                    <div v-if="!maquinaInput.is_pago" class="flex flex-col">
                                        <label for="salario">Parcelas Restantes</label>
                                        <input v-model="maquinaInput.num_parcelas" type="text"
                                            placeholder="João da silva" name="salario">
                                        <label for="salario">Valor da parcela</label>
                                        <input v-model="maquinaInput.valor_parcelas" type="text"
                                            placeholder="João da silva" name="salario">
                                        <label for="data_pagamento_salario">Dia de pagamento parcela</label>
                                        <select v-model="maquinaInput.data_pagamento_parcelas"
                                            placeholder="João da silva" name="data_pagamento_salario">
                                            <option v-for="i in 28" v-bind:value=i>{{i}}</option>
                                        </select>
                                    </div>
                                </Transition>
                            </div>
                        </ModalEditarMaquina>
                    </Transition>
                </tr>
            </tbody>
        </table>
    </div>
</template>