<script setup lang="ts">

const { supabase } = useSupabase()
const { user } = useAuth()

const funcionariosResponse = ref();
funcionariosResponse.value = await supabase.from("funcionarios").select()


const showModalAdicionar = ref()
const showModalEditar = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()

const pagina = reactive({
    atual: 0,
    tamanho: 5
})

const funcionarioInput = reactive({
    id: "",
    nome: "",
    numero: "",
    cargo: "",
    is_assalariado: false,
    salario: "",
    data_pagamento_salario: "",
})

const handleNovoFuncionario = () => {
    showModalAdicionar.value = true
    funcionarioInput.nome = ""
    funcionarioInput.cargo = ""
    funcionarioInput.numero = ""
    funcionarioInput.is_assalariado = false
    funcionarioInput.salario = ""
    funcionarioInput.data_pagamento_salario = ""
}
const handleDeleteFuncionario = async (funcionarioId) => {
    await supabase.from("funcionarios").delete().eq('id', funcionarioId)
    funcionariosResponse.value = await supabase.from("funcionarios").select()

}
const handleSubmitNovoFuncionario = async () => {


    await supabase.from("funcionarios").insert({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(funcionarioInput.salario.replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)

    });
    funcionariosResponse.value = await supabase.from("funcionarios").select()


    funcionarioInput.nome = "",
        funcionarioInput.numero = "",
        funcionarioInput.cargo = "",
        funcionarioInput.is_assalariado = false,
        funcionarioInput.salario = "",
        funcionarioInput.data_pagamento_salario = ""
    showModalAdicionar.value = false
}
const handleSubmitEditarFuncionario = async () => {


    await supabase.from("funcionarios").update({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(String(funcionarioInput.salario).replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)

    }).eq('id', funcionarioInput.id);

    funcionariosResponse.value = await supabase.from("funcionarios").select()


        funcionarioInput.id = "",
        funcionarioInput.nome = "",
        funcionarioInput.numero = "",
        funcionarioInput.cargo = "",
        funcionarioInput.is_assalariado = false,
        funcionarioInput.salario = "",
        funcionarioInput.data_pagamento_salario = ""
        showModalEditar.value = false
}
const handleModalEditar = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
    showModalEditar.value = true

    funcionarioInput.nome = nome
    funcionarioInput.cargo = cargo
    funcionarioInput.numero = numero
    funcionarioInput.is_assalariado = is_assalariado
    funcionarioInput.salario = salario
    funcionarioInput.data_pagamento_salario = diaPagamento
    funcionarioInput.id = id


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
        <button @click="handleNovoFuncionario">
            novo funcionario
        </button>
        <!-- Modal Novo Funcionário -->
        <Transition name="pop">
            <ModalNovoFuncionario v-if="showModalAdicionar" @close="showModalAdicionar = false"
                @adicionarFuncionario="handleSubmitNovoFuncionario">
                <div class="flex flex-col">

                    <label for="nome">Nome</label>
                    <input v-model="funcionarioInput.nome" type="text" placeholder="João da silva" name="nome">
                    <label for="numero">numero</label>
                    <input v-model="funcionarioInput.numero" type="text" placeholder="João da silva" name="numero">
                    <label for="cargo">cargo</label>
                    <input v-model="funcionarioInput.cargo" type="text" placeholder="João da silva" name="cargo">
                    <label for="recebe_salario">É assalariado?</label>
                    <input v-model="funcionarioInput.is_assalariado" type="checkbox" placeholder="João da silva"
                        name="recebe_salario">
                    <Transition name="pop">
                        <div v-if="funcionarioInput.is_assalariado" class="flex flex-col">
                            <label for="salario">salário</label>
                            <input v-model="funcionarioInput.salario" type="text" placeholder="João da silva"
                                name="salario">
                            <label for="data_pagamento_salario">dia do pagamento</label>
                            <select v-model="funcionarioInput.data_pagamento_salario" placeholder="João da silva"
                                name="data_pagamento_salario">
                                <option v-for="i in 28" v-bind:value=i>{{i}}</option>
                            </select>
                        </div>
                    </Transition>
                </div>
            </ModalNovoFuncionario>
        </Transition>
        <div>
            <select v-model="pagina.atual">
                <option v-for="i in Math.ceil(funcionariosResponse.data.length/pagina.tamanho)" v-bind:value="i-1">{{i}}
                </option>
            </select>
            <select v-model="pagina.tamanho" @input="pagina.atual = 0">
                <option v-bind:value=5> 5 </option>
                <option v-bind:value=10> 10 </option>
                <option v-bind:value=250> 25 </option>
            </select>
            <button v-if="pagina.atual < (Math.ceil(funcionariosResponse.data.length/pagina.tamanho) -1)"
                @click="handlePagina('proxima')"> prox </button><br>
            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"> ant </button>
        </div>
        <table>
            <thead>
                <th @click="handleOrdenar('nome')">Nome</th>
                <th @click="handleOrdenar('cargo')">Cargo</th>
                <th>numero</th>
                <th @click="handleOrdenar('salario')">Salario</th>
                <th @click="handleOrdenar('dia')">Dia pagamento</th>
                <th @click="handleOrdenar('data')">Data cadasto</th>
                <th>Detalhes</th>
                <th>Deletar</th>
            </thead>
            <tbody>
                <tr v-for="funcionario in funcionariosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                    :key="funcionario.id">
                    <td>{{funcionario.nome}}</td>
                    <td>{{funcionario.cargo}}</td>
                    <td>{{funcionario.numero}}</td>
                    <td>{{funcionario.salario}}</td>
                    <td>{{funcionario.data_pagamento_salario}}</td>
                    <td>{{funcionario.data_inicio}}</td>
                    <!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> -->
                    <td>
                        <span class="cursor-pointer material-icons block text-center hover:text-xl"
                            @click="handleModalEditar(funcionario.nome, funcionario.cargo, funcionario.numero, funcionario.is_assalariado, funcionario.salario, funcionario.data_pagamento_salario, funcionario.id)"
                            @close="showModalEditar = false">
                            edit
                        </span>
                    </td>
                    <td>
                        <span class="cursor-pointer material-icons block text-center hover:text-xl"
                            @click="handleDeleteFuncionario(funcionario.id)">
                            person_remove
                        </span>

                    </td>
                    <Transition name="pop">
                        <ModalEditarFuncionario v-if="showModalEditar" @close="showModalEditar = false" @editarFuncionario="handleSubmitEditarFuncionario">
                            <div class="flex flex-col">
                                <label for="nome">Nome</label>
                                <input v-model="funcionarioInput.nome" type="text" placeholder="João da silva"
                                    name="nome">
                                <label for="numero">numero</label>
                                <input v-model="funcionarioInput.numero" type="text" placeholder="João da silva"
                                    name="numero">
                                <label for="cargo">cargo</label>
                                <input v-model="funcionarioInput.cargo" type="text" placeholder="João da silva"
                                    name="cargo">
                                <label for="recebe_salario">É assalariado?</label>
                                <input v-model="funcionarioInput.is_assalariado" type="checkbox" disabled
                                    placeholder="João da silva" name="recebe_salario">
                                <Transition name="pop">
                                    <div v-if="funcionarioInput.is_assalariado" class="flex flex-col">
                                        <label for="salario">salário</label>
                                        <input v-model="funcionarioInput.salario" type="text"
                                            placeholder="João da silva" name="salario">
                                        <label for="data_pagamento_salario">dia do pagamento</label>
                                        <select v-model="funcionarioInput.data_pagamento_salario"
                                            placeholder="João da silva" name="data_pagamento_salario">
                                            <option v-for="i in 28" v-bind:value=i>{{i}}</option>
                                        </select>
                                    </div>
                                </Transition>
                            </div>
                        </ModalEditarFuncionario>
                    </Transition>
                </tr>
            </tbody>
        </table>
    </div>
</template>