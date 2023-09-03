<script setup>

definePageMeta({
    middleware: ["auth","subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { paraReal, paraRealInput, paraFloat, formatar } = useUtils()

const compradoresResponse = ref();


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----




const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const showModalPagarFuncionario = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()
const limitarForm = ref()
const showPreencha = ref()
const safraResponse = ref();
const emprestimoResponse = ref();

if (process.client) {
    compradoresResponse.value = await supabase.from("compradores").select().match({ user_id: user.value.id })
    // safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })

}



const pagina = reactive({
    atual: 0,
    tamanho: 5
})

const compradorInput = reactive({
    id: "",
    nome: "",
    categoria: "",
    qnt_reservada: "",
    qnt_reservada_grandeza: false,
    num_vendas: "",
    valor_vendas: "",
})

const handleNovoComprador = () => {
    limitarForm.value = true
    showPreencha.value = false
    showModalAdicionar.value = true
    compradorInput.nome = ""
    compradorInput.categoria = ""
    compradorInput.qnt_reservada = ""
    compradorInput.qnt_reservada_cultivo = ""
    compradorInput.qnt_reservada_grandeza = false
    compradorInput.num_vendas = ""
    compradorInput.valor_vendas = ""
}
const abrirModalDeletarComprador = (id, nome) => {
    limitarForm.value = true

    showModalDeletar.value = true
    compradorInput.id = id
    compradorInput.nome = nome
}
const abrirModalPagarComprador = (id, nome) => {
    limitarForm.value = true

    showModalPagarFuncionario.value = true
    compradorInput.id = id
    compradorInput.nome = nome
}

const handleDeleteComprador = async (id) => {
    if (!limitarForm.value) return
    limitarForm.value = false
    if (process.client) {
        await supabase.from("compradores").delete().eq('id', id)
        compradoresResponse.value = await supabase.from("compradores").select().match({ user_id: user.value.id })
    }
    showModalDeletar.value = false
    pagina.atual = 0

}
const handleSubmitNovoComprador = async () => {
    if (compradorInput.nome && compradorInput.categoria) {

        if (!limitarForm.value) return
        limitarForm.value = false

        if (!compradorInput.qnt_reservada) {
            compradorInput.qnt_reservada = 0
        }

        if (process.client) {
            await supabase.from("compradores").insert({
                user_id: user.value.id,
                nome: compradorInput.nome,
                categoria: compradorInput.categoria,
                qnt_reservada: compradorInput.qnt_reservada,
                qnt_reservada_cultivo: compradorInput.qnt_reservada_cultivo,
                qnt_reservada_grandeza: compradorInput.qnt_reservada_grandeza
            });
            compradoresResponse.value = await supabase.from("compradores").select().match({ user_id: user.value.id })


            compradorInput.nome = "",
                compradorInput.categoria = "",
                compradorInput.qnt_reservada_grandeza = "",
                compradorInput.qnt_reservada = false,
                compradorInput.qnt_reservada_cultivo = "",
                showModalAdicionar.value = false
        }
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}
const handleSubmitEditarComprador = async () => {

    if (compradorInput.nome && compradorInput.categoria) {



        if (!limitarForm.value) return
        limitarForm.value = false

        await supabase.from("compradores").update({
            nome: compradorInput.nome,
            categoria: compradorInput.categoria,
            qnt_reservada: compradorInput.qnt_reservada,
            qnt_reservada_cultivo: compradorInput.qnt_reservada_cultivo,
            qnt_reservada_grandeza: compradorInput.qnt_reservada_grandeza

        }).eq('id', compradorInput.id);


        if (process.client) {
            compradoresResponse.value = await supabase.from("compradores").select().match({ user_id: user.value.id })
        }
        compradorInput.nome = "",
            compradorInput.categoria = "",
            compradorInput.qnt_reservada_grandeza = "",
            compradorInput.qnt_reservada = false,
            compradorInput.qnt_reservada_cultivo = "",
            showModalEditar.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}

const handleModalEditar = (nome, categoria, qnt_reservada, qnt_reservada_cultivo, qnt_reservada_grandeza, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalEditar.value = true
    compradorInput.nome = nome
    compradorInput.categoria = categoria
    compradorInput.qnt_reservada = qnt_reservada
    compradorInput.qnt_reservada_cultivo = qnt_reservada_cultivo
    compradorInput.qnt_reservada_grandeza = qnt_reservada_grandeza
    compradorInput.id = id
}

const salárioFormatar = (valor) => {
    compradorInput.salario = paraRealInput(valor)
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
function generateRandomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
    var random_string = '';
    if (length > 0) {
        for (var i = 0; i < length; i++) {
            random_string += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }


    return random_string;
}
</script>

<template>
    <div>
        <div>
            <!-- Título -->
            <div class="flex flex-row items-center absolute ml-[-4%] ">
                <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Compradores | </h1>
                <h1 class="sm:text-xl 2xl:text-3xl"> 💼 </h1>
                <!-- 1F468 U+200D U+1F33E	 -->
            </div>
            <!-- ------------------------------------------------------------------------------ -->
            <Loader v-if="!compradoresResponse" />
            <div v-if="compradoresResponse" class="flex flex-col w-full items-center ">



                <div class="flex flex-col w-[70%] mt-[5%]">
                    <button @click="handleNovoComprador"
                        class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                        Novo comprador
                    </button>
                    <table class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 " @click="handleOrdenar('cargo')">Nome</th>
                            <th class="p-2 " @click="handleOrdenar('cargo')">Categoria</th>
                            <th class="p-2 ">Compras</th>
                            <th class="p-2 " @click="handleOrdenar('salario')">Valor comprado</th>
                            <th class="p-2 " @click="handleOrdenar('dia')">Reservado</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                        </thead>
                        <tbody>
                            <tr v-for="comprador in compradoresResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)
                " class=" even:bg-gray-100 text-center" :key="comprador.id">
                                <td class="p-2 capitalize">{{ comprador.nome }}</td>
                                <td class="p-2">{{ comprador.categoria }}</td>
                                <td class="p-2">{{ comprador.num_vendas }}</td>
                                <td class="p-2">{{ paraReal(comprador.valor_vendas) }}</td>
                                <td class="p-2 capitalize font-semibold"> {{ comprador.qnt_reservada_cultivo }} | <span
                                        class="font-normal text-xs">{{ comprador.qnt_reservada +
                                            formatar(comprador.qnt_reservada_grandeza) }}</span> </td>

                                <td class="p-2">
                                    <span
                                        class="cursor-pointer material-icons block text-center hover:text-xl transition-all"
                                        @click="handleModalEditar(comprador.nome, comprador.categoria, comprador.qnt_reservada, comprador.qnt_reservada_cultivo, comprador.qnt_reservada_grandeza, comprador.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class="cursor-pointer material-icons block text-center hover:text-xl transition-all"
                                        @click="abrirModalDeletarComprador(comprador.id, comprador.nome)">
                                        &#x274C
                                    </span>

                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div v-if="compradoresResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px] ">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(compradoresResponse.data.length / pagina.tamanho)"
                                    v-bind:value="i - 1">
                                    {{
                                        i
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-claro font-semibold">Items por Pág.</p>
                            <select v-model="pagina.tamanho" @input="pagina.atual = 0"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-bind:value=5> 5 </option>
                                <option v-bind:value=10> 10 </option>
                                <option v-bind:value=250> 25 </option>
                            </select>
                        </div>
                        <button v-if="pagina.atual < (Math.ceil(compradoresResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Novo Funcionário -->
        <Transition name="pop">
            <ModalNovoComprador v-if="showModalAdicionar" @close="showModalAdicionar = false"
                @adicionarComprador="handleSubmitNovoComprador">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">

                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="compradorInput.nome" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
                            *</label>
                    </div>
                    <div class="relative z-0 w-full mt-6 group">

                        <label for=""
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Categoria
                            *</label>
                        <select v-model="compradorInput.categoria" placeholder="João da silva"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold">Atravessador</option>
                            <option class="bg-verde font-semibold">Cooperativa</option>
                            <option class="bg-verde font-semibold">Comerciante</option>
                            <option class="bg-verde font-semibold">Exportador</option>
                            <option class="bg-verde font-semibold">Pessoa Física</option>

                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 mt-6 group">

                        <input type="text" v-model="compradorInput.qnt_reservada_cultivo" name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Produto
                            à reservar <span class="opacity-50">(Ex: Amora)</span> </label>
                    </div>
                    <div class="relative z-0 w-full mb-6  group">

                        <input type="number" v-model="compradorInput.qnt_reservada" name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                            à reservar <span class="opacity-50">(Ex: 250)</span></label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <select placeholder="ex: 110" v-model="compradorInput.qnt_reservada_grandeza"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option value=" " disabled selected hidden class="bg-verde font-bold ">Grandeza</option>
                            <option value="unidade" class="bg-verde font-bold">Un. - unidade</option>
                            <option value="kilograma" class="bg-verde font-bold">Kg. - Kilograma</option>
                            <option value="tonelada" class="bg-verde font-bold">T. - tonelada</option>
                            <option value="bins" class="bg-verde font-bold">Caixa / Bins / Pallet</option>
                            <option value="saca10" class="bg-verde font-bold">Saca de 10kg</option>
                            <option value="saca20" class="bg-verde font-bold">Saca de 20kg</option>
                            <option value="saca30" class="bg-verde font-bold">Saca de 30kg</option>
                            <option value="saca40" class="bg-verde font-bold">Saca de 40kg</option>
                            <option value="saca50" class="bg-verde font-bold">Saca de 50kg</option>
                            <option value="saca60" class="bg-verde font-bold">Saca de 60kg</option>
                        </select>
                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grandeza</label>
                    </div>




                </div>
            </ModalNovoComprador>
        </Transition>
        <Transition name="pop">
            <ModalEditarComprador v-if="showModalEditar" @close="showModalEditar = false"
                @editarComprador="handleSubmitEditarComprador">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">

                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="compradorInput.nome" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
                            *</label>
                    </div>
                    <div class="relative z-0 w-full mt-6 group">

                        <label for=""
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Categoria
                            *</label>
                        <select v-model="compradorInput.categoria" placeholder="João da silva"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold">Atravessador</option>
                            <option class="bg-verde font-semibold">Cooperativa</option>
                            <option class="bg-verde font-semibold">Comerciante</option>
                            <option class="bg-verde font-semibold">Exportador</option>
                            <option class="bg-verde font-semibold">Pessoa Física</option>

                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 mt-6 group">

                        <input type="text" v-model="compradorInput.qnt_reservada_cultivo" name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Produto
                            à reservar <span class="opacity-50">(Ex: Amora)</span> </label>
                    </div>
                    <div class="relative z-0 w-full mb-6  group">

                        <input type="number" v-model="compradorInput.qnt_reservada" name="floating_email"
                            id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                            à reservar <span class="opacity-50">(Ex: 250)</span></label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <select placeholder="ex: 110" v-model="compradorInput.qnt_reservada_grandeza"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option value=" " disabled selected hidden class="bg-verde font-bold ">Grandeza</option>
                            <option value="unidade" class="bg-verde font-bold">Un. - unidade</option>
                            <option value="kilograma" class="bg-verde font-bold">Kg. - Kilograma</option>
                            <option value="tonelada" class="bg-verde font-bold">T. - tonelada</option>
                            <option value="bins" class="bg-verde font-bold">Caixa / Bins / Pallet</option>
                            <option value="saca10" class="bg-verde font-bold">Saca de 10kg</option>
                            <option value="saca20" class="bg-verde font-bold">Saca de 20kg</option>
                            <option value="saca30" class="bg-verde font-bold">Saca de 30kg</option>
                            <option value="saca40" class="bg-verde font-bold">Saca de 40kg</option>
                            <option value="saca50" class="bg-verde font-bold">Saca de 50kg</option>
                            <option value="saca60" class="bg-verde font-bold">Saca de 60kg</option>
                        </select>
                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grandeza</label>
                    </div>




                </div>
            </ModalEditarComprador>
        </Transition>
        <Transition name="pop">
            <ModalDeletarComprador v-if="showModalDeletar" @close="showModalDeletar = false"
                @deletarComprador="handleDeleteComprador(compradorInput.id)">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este funcionário?</h1>
                <h1 class="text-center text-xl text-claro capitalize font-bold">{{
                    compradorInput.nome
                }}</h1>
                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarComprador>
        </Transition>

    </div>
</template>