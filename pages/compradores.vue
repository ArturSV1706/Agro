<script setup>

definePageMeta({
    middleware: ["auth", "subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { paraReal, paraRealInput, paraFloat, formatar, formatarSigla, formatarString } = useUtils()
const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}

const compradoresResponse = ref();


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----




const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const showModalOpcoes = ref()
const showModalPagarFuncionario = ref()
const tipoOrdenar = ref();
const reverterOrdenar = ref()
const limitarForm = ref()
const showPreencha = ref()
const safraResponse = ref();
const emprestimoResponse = ref();

const alert = ref()
const alertMessage = ref()
const loadingWidth = ref(100)

const showAlert = (message) => {
    alert.value = true
    alertMessage.value = message

    const interval = setInterval(function () {

        if (loadingWidth.value <= 0 || !alert.value) {
            // Clear the interval when the timer reaches 0
            clearInterval(interval);
            alert.value = false
            loadingWidth.value = 100;
        }
        // Decrease the width
        loadingWidth.value -= 2;

        // Update the width of the timer bar
        document.getElementById("timerBar").style.width =  loadingWidth.value + "%";
        document.getElementById("timerBarMobile").style.width =  loadingWidth.value + "%";

        // Check if the width has reached 0
       
    }, 80);


}


if (process.client) {
    compradoresResponse.value = await supabase.from("compradores").select().match({ user_id: user.value.id })
    // safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })

}

const mainElement = ref(document.getElementById("main"));

const abrirOpcoesMobile = (nome, categoria, qnt_reservada, qnt_reservada_cultivo, qnt_reservada_grandeza, id) => {
    // Check if the element exists before modifying it
    if (mainElement) {
        // Disable overflow by setting the overflow CSS property to "hidden"
        mainElement.value.style.overflow = "hidden";
    }
    showModalOpcoes.value = true
    showPreencha.value = false
    limitarForm.value = true
    compradorInput.nome = nome
    compradorInput.categoria = categoria
    compradorInput.qnt_reservada = qnt_reservada
    compradorInput.qnt_reservada_cultivo = qnt_reservada_cultivo
    compradorInput.qnt_reservada_grandeza = qnt_reservada_grandeza
    compradorInput.id = id

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
        showAlert("Comprador adicionado com sucesso!")
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
        showAlert("Comprador editado com sucesso!")
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
    <div v-if="screen === 'desktop'">
        <Transition name="alert">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
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
    <div v-if="screen === 'mobile'">
        <Transition name="alert_mobile">
            <Alert v-if="alert" @close="alert = false">
                <h1 class="text-center font-semibold">{{ alertMessage }}</h1>
            </Alert>
        </Transition>
        <button @click="handleNovoComprador"
            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
            Novo comprador
        </button>

        <div class="  w-full space-y-4 pb-5">
            <div v-for="comprador in compradoresResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                :key="comprador.id" class="flex w-full h-[65px]"
                @click="abrirOpcoesMobile(comprador.nome, comprador.categoria, comprador.qnt_reservada, comprador.qnt_reservada_cultivo, comprador.qnt_reservada_grandeza, comprador.id)"
                >
                <div class="bg-verde mr-2 h-full aspect-square rounded-xl flex justify-center items-center">
                    <svg width="31" height="28" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2846 11.7647C9.733 11.7647 8.4047 11.1887 7.29975 10.0368C6.19479 8.8848 5.64232 7.5 5.64232 5.88235C5.64232 4.26471 6.19479 2.8799 7.29975 1.72794C8.4047 0.57598 9.733 0 11.2846 0C12.8363 0 14.1646 0.57598 15.2695 1.72794C16.3745 2.8799 16.927 4.26471 16.927 5.88235C16.927 7.5 16.3745 8.8848 15.2695 10.0368C14.1646 11.1887 12.8363 11.7647 11.2846 11.7647ZM0 23.5294V19.4118C0 18.6029 0.199832 17.8431 0.599496 17.1324C0.99916 16.4216 1.55164 15.8824 2.25693 15.5147C3.45592 14.8775 4.80772 14.3382 6.31234 13.8971C7.81696 13.4559 9.47439 13.2353 11.2846 13.2353H11.7783C11.9194 13.2353 12.0605 13.2598 12.2015 13.3088C12.0134 13.75 11.8547 14.2096 11.7254 14.6875C11.5961 15.1654 11.4962 15.6618 11.4257 16.1765H11.2846C9.61545 16.1765 8.11671 16.3971 6.78841 16.8382C5.46012 17.2794 4.3728 17.7206 3.52645 18.1618C3.31486 18.2843 3.14442 18.4559 3.01511 18.6765C2.88581 18.8971 2.82116 19.1422 2.82116 19.4118V20.5882H11.7078C11.8489 21.1029 12.0369 21.6115 12.272 22.114C12.5071 22.6164 12.7657 23.0882 13.0479 23.5294H0ZM19.7481 25L19.3249 22.7941C19.0428 22.6716 18.7783 22.5429 18.5315 22.4081C18.2846 22.2733 18.0319 22.1078 17.7733 21.9118L15.728 22.5735L14.3174 20.0735L15.9395 18.6029C15.8925 18.2598 15.869 17.9412 15.869 17.6471C15.869 17.3529 15.8925 17.0343 15.9395 16.6912L14.3174 15.2206L15.728 12.7206L17.7733 13.3824C18.0319 13.1863 18.2846 13.0208 18.5315 12.886C18.7783 12.7512 19.0428 12.6226 19.3249 12.5L19.7481 10.2941H22.5693L22.9924 12.5C23.2746 12.6226 23.539 12.7574 23.7859 12.9044C24.0327 13.0515 24.2855 13.2353 24.5441 13.4559L26.5894 12.7206L28 15.2941L26.3778 16.7647C26.4249 17.0588 26.4484 17.3652 26.4484 17.6838C26.4484 18.0025 26.4249 18.3088 26.3778 18.6029L28 20.0735L26.5894 22.5735L24.5441 21.9118C24.2855 22.1078 24.0327 22.2733 23.7859 22.4081C23.539 22.5429 23.2746 22.6716 22.9924 22.7941L22.5693 25H19.7481ZM21.1587 20.5882C21.9345 20.5882 22.5987 20.3002 23.1511 19.7243C23.7036 19.1483 23.9798 18.4559 23.9798 17.6471C23.9798 16.8382 23.7036 16.1458 23.1511 15.5699C22.5987 14.9939 21.9345 14.7059 21.1587 14.7059C20.3829 14.7059 19.7187 14.9939 19.1662 15.5699C18.6138 16.1458 18.3375 16.8382 18.3375 17.6471C18.3375 18.4559 18.6138 19.1483 19.1662 19.7243C19.7187 20.3002 20.3829 20.5882 21.1587 20.5882ZM11.2846 8.82353C12.0605 8.82353 12.7246 8.53554 13.2771 7.95956C13.8296 7.38358 14.1058 6.69118 14.1058 5.88235C14.1058 5.07353 13.8296 4.38113 13.2771 3.80515C12.7246 3.22917 12.0605 2.94118 11.2846 2.94118C10.5088 2.94118 9.84467 3.22917 9.29219 3.80515C8.73971 4.38113 8.46348 5.07353 8.46348 5.88235C8.46348 6.69118 8.73971 7.38358 9.29219 7.95956C9.84467 8.53554 10.5088 8.82353 11.2846 8.82353Z"
                            fill="#DDE0D0" />
                    </svg>
                </div>
                <div>
                    <h1 class="font-bold text-escuro ">{{ formatarString(comprador.nome, 25) }}</h1>
                    <div class=" space-x-2 flex items-center text-sm text-escuro">
                        <h2 class="font-semibold text-escuro"> {{ comprador.categoria }}</h2>
                        <div v-if="comprador.num_vendas > 0"
                            class="flex justify-evenly text-xs bg-[#B9C2B3] rounded-md py-[1px] px-[5px] text-escuro ">
                            <h2>{{ comprador.num_vendas + " Vendas" }}</h2>
                            <h2>|</h2>
                            <h2>{{ paraReal(comprador.valor_vendas) }} </h2>
                        </div>
                        <div v-else
                            class="flex justify-center text-sm bg-[#B9C2B3] rounded-md py-[1px] px-[1px] text-escuro">
                            <h2>Sem Vendas</h2>
                        </div>
                    </div>
                    <div v-if="comprador.qnt_reservada > 0" class="flex text-xs items-center text-escuro">
                        <h2 class="text-sm font-semibold">Reservado: &nbsp</h2>
                        <h2 v-if="comprador.qnt_reservada > 0" class="bg-[#B9C2B3] rounded-md py-[1px] px-[2px]">{{ comprador.qnt_reservada_cultivo + " &nbsp | &nbsp" + comprador.qnt_reservada + formatarSigla(comprador.qnt_reservada_grandeza) }}</h2>
                        <h2 v-else class="bg-[#B9C2B3] rounded-md py-[1px] px-[2px]">Não há reserva</h2>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="compradoresResponse"
            class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
            <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-escuro text-3xl font-bold">
                &lt </button>

            <div class="flex flex-col items-center">
                <p class="text-escuro font-semibold">Items por Pág.</p>
                <select v-model="pagina.tamanho" @input="pagina.atual = 0"
                    class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                    <option v-bind:value=5> 5 </option>
                    <option v-bind:value=10> 10 </option>
                    <option v-bind:value=250> 25 </option>
                </select>
            </div>
            <button v-if="pagina.atual < (Math.ceil(compradoresResponse.data.length / pagina.tamanho) - 1)"
                @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
            </button><br>
        </div>

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

        <OpcoesMobile v-if="showModalOpcoes" @close="showModalOpcoes = false; mainElement.style.overflow = 'auto'">
            <h1 class="capitalize text-center text-escuro font-semibold mb-2">{{ compradorInput.nome }}</h1>
            <ul>
                <li @click="showModalOpcoes = false; handleModalEditar(compradorInput.nome, compradorInput.categoria, compradorInput.qnt_reservada,   compradorInput.qnt_reservada_cultivo,  compradorInput.qnt_reservada_grandeza,   compradorInput.id)"
                    class="bg-verde py-1 px-2 rounded mb-2">
                    Editar
                </li>

            </ul>
        </OpcoesMobile>
    </div>
</template>