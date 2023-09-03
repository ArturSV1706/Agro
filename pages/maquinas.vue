<script setup >

definePageMeta({
    middleware: ["auth","subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { paraRealInput, paraFloat, paraReal } = useUtils()


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

const limitarForm = ref();
const maquinasResponse = ref();
const combustiveisResponse = ref();
const safraResponse = ref();
const abastecerCombustivelResponse = ref();
const emprestimoResponse = ref();


if (process.client) {
    maquinasResponse.value = await supabase.from("maquinas").select().eq('user_id', user.value.id).order('modelo', { ascending: true })
    combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })
}

const showModalAdicionar = ref()
const showModalEditar = ref()
const showModalDeletar = ref()
const showModalMaquinaEmUso = ref()
const showModalAbastecer = ref()
const showModalManutencao = ref()
const showModalPagarParcela = ref()
const showPreencha = ref()


const showModalAdicionarCombustivel = ref()
const showModalReporCombustivel = ref()
const showModalDeletarCombustivel = ref()
const showModalDeletarNegado = ref()

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
    valor_manutencao: "",
    num_parcelas: "",
    data_pagamento_parcelas: ""
})
const combustivelInput = reactive({
    id: "",
    nome: "",
    quantidade: "",
    quantidade_repor: "",
    custo: "",
    safra_id: "",
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
    limitarForm.value = true
    showPreencha.value = false

}
const handleDeleteMaquina = async (id, modelo, ano, status) => {
    maquinaInput.id = id
    maquinaInput.modelo = modelo
    maquinaInput.ano = ano
    maquinaInput.status = status

    let testarChaveEstrangeira = await supabase.from("tarefas").select('maquina_utilizada').eq('maquina_utilizada', id)



    if (status == "disponivel") {
        if (testarChaveEstrangeira.data[0]) {
            showModalDeletarNegado.value = true
        } else {
            showModalDeletar.value = true
        }
    }
    else {
        showModalMaquinaEmUso.value = true
    }

    // await supabase.from("maquinas").delete().eq('id', maquinaId)
    // maquinasResponse.value = await supabase.from("maquinas").select()

}
const handleSubmitDeleteMaquina = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("maquinas").delete().eq('id', maquinaInput.id)
    if (process.client) {
        maquinasResponse.value = await supabase.from("maquinas").select().eq('user_id', user.value.id)
    }
    maquinaInput.id = ""
    maquinaInput.modelo = ""
    maquinaInput.ano = ""
    showModalDeletar.value = false
}

const handleNovoCombustivel = () => {
    showPreencha.value = false
    limitarForm.value = true
    showModalAdicionarCombustivel.value = true
    combustivelInput.nome = ""
    combustivelInput.quantidade = ""
}
const handleDeleteCombustivel = (id) => {
    limitarForm.value = true
    combustivelInput.id = id
    showModalDeletarCombustivel.value = true
}

const handleReporCombustivel = (id, quantidade, nome) => {
    showPreencha.value = false
    limitarForm.value = true
    combustivelInput.id = id
    combustivelInput.quantidade = quantidade
    combustivelInput.nome = nome
    showModalReporCombustivel.value = true

}
const limitarCombustivelSelect = async () => {
    abastecerCombustivelResponse.value = await supabase.from("combustiveis").select().eq('id', combustivelInput.id)
    combustivelInput.quantidade_repor = ""
    combustivelInput.quantidade = abastecerCombustivelResponse.value.data[0].quantidade
}
const limitarCombustivelInput = async () => {
    if (combustivelInput.quantidade_repor > abastecerCombustivelResponse.value.data[0].quantidade) {
        combustivelInput.quantidade_repor = abastecerCombustivelResponse.value.data[0].quantidade
    }

}
const handleSubmitDeletarCombustivel = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("combustiveis").delete().eq('id', combustivelInput.id)
    showModalDeletarCombustivel.value = false
    if (process.client) {
        combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
    }

}
const handleAbastecer = async (id, modelo, ano) => {
    showPreencha.value = false
    limitarForm.value = true
    if (process.client) {
        combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
    }
    maquinaInput.id = id
    maquinaInput.modelo = modelo
    maquinaInput.ano = ano
    showModalAbastecer.value = true

}
const handleManutencao = async (id, modelo, ano) => {
    showPreencha.value = false
    limitarForm.value = true
    maquinaInput.id = id
    maquinaInput.modelo = modelo
    maquinaInput.ano = ano
    showModalManutencao.value = true

}
const handlePagarParceclas = async (id, modelo, ano, valor, parcelas_restantes) => {
    showPreencha.value = false
    limitarForm.value = true
    maquinaInput.id = id
    maquinaInput.modelo = modelo
    maquinaInput.ano = ano
    maquinaInput.valor_parcelas = valor
    maquinaInput.num_parcelas = parcelas_restantes
    showModalPagarParcela.value = true

}
const handleSubmitAbastecer = async () => {
    if (combustivelInput.quantidade_repor && combustivelInput.id) {
        if (!limitarForm.value) return
        limitarForm.value = false


        if (process.client) {
            if (parseFloat(combustivelInput.quantidade_repor) > 0) {
                await supabase.from("combustiveis").update({
                    quantidade: (parseFloat(combustivelInput.quantidade) - parseFloat(combustivelInput.quantidade_repor))

                }).eq('id', combustivelInput.id);
            }
            combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
        }
        combustivelInput.id = ""
        combustivelInput.nome = ""
        combustivelInput.quantidade = ""
        combustivelInput.quantidade_repor = ""
        maquinaInput.id = ""
        maquinaInput.modelo = ""
        maquinaInput.ano = ""


        showModalAbastecer.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }

}
const handleSubmitManutencao = async () => {
    if (maquinaInput.valor_manutencao && combustivelInput.safra_id) {
        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', combustivelInput.safra_id)

        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {
            if (paraFloat(maquinaInput.valor_manutencao) > 0) {
                if (paraFloat(maquinaInput.valor_manutencao) > emprestimoResponse.value.data[0].emprestimo) {

                    if (emprestimoResponse.value.data[0].emprestimo> 0) await supabase.from("fluxo").insert({
                        tipo_fluxo: "saida_emprestimo",
                        categoria: "manutencao",
                        // fornecedor: entradaInput.fornecedor,
                        produto: parseInt(maquinaInput.id),
                        valor: emprestimoResponse.value.data[0].emprestimo,
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });
                    await supabase.from("fluxo").insert({
                        tipo_fluxo: "saida",
                        categoria: "manutencao",
                        // fornecedor: entradaInput.fornecedor,
                        produto: parseInt(maquinaInput.id),
                        valor: paraFloat(maquinaInput.valor_manutencao) - emprestimoResponse.value.data[0].emprestimo,
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });

                    await supabase.from("safras").update({
                        emprestimo: 0
                    }).eq('id', combustivelInput.safra_id);
                }
                else {
                    await supabase.from("fluxo").insert({
                        tipo_fluxo: "saida_emprestimo",
                        categoria: "manutencao",
                        // fornecedor: entradaInput.fornecedor,
                        produto: parseInt(maquinaInput.id),
                        valor: paraFloat(maquinaInput.valor_manutencao),
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });
                    console.log(emprestimoResponse.value.data[0].emprestimo)
                    await supabase.from("safras").update({
                        emprestimo: emprestimoResponse.value.data[0].emprestimo - paraFloat(maquinaInput.valor_manutencao)
                    }).eq('id', combustivelInput.safra_id);
                }
            }
            combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
        }

        maquinaInput.valor_manutencao = ''
        combustivelInput.safra_id = ''
        maquinaInput.id = ''


        showModalManutencao.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }

}
const handleSubmitNovoMaquina = async () => {
    if (maquinaInput.categoria && maquinaInput.modelo && maquinaInput.ano) {
        if (!maquinaInput.is_pago) {
            if (!maquinaInput.valor_parcelas || !maquinaInput.num_parcelas || !maquinaInput.data_pagamento_parcelas) {
                showPreencha.value = true
                return
            }
        }
        if (!limitarForm.value) return
        limitarForm.value = false

        if (process.client) {

            await supabase.from("maquinas").insert({
                // id_fazenda: "",
                categoria: maquinaInput.categoria,
                modelo: maquinaInput.modelo,
                ano: maquinaInput.ano,
                is_pago: maquinaInput.is_pago,
                valor_parcelas: paraFloat(maquinaInput.valor_parcelas),
                num_parcelas: parseInt(maquinaInput.num_parcelas),
                data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas),
                user_id: user.value.id
            });
            maquinasResponse.value = await supabase.from("maquinas").select().eq('user_id', user.value.id)
        }


        maquinaInput.categoria = "",
            maquinaInput.ano = "",
            maquinaInput.modelo = "",
            maquinaInput.is_pago = false,
            maquinaInput.valor_parcelas = "",
            maquinaInput.num_parcelas = ""
        showModalAdicionar.value = false
        showPreencha.value = false

    } else {
        showPreencha.value = true
    }
}
const handleSubmitPagarParcela = async () => {

    if (maquinaInput.safra_id) {

        if (!limitarForm.value) return
        limitarForm.value = false

        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', parseInt(maquinaInput.safra_id))


        if (process.client) {

            if (maquinaInput.valor_parcelas > emprestimoResponse.value.data[0].emprestimo) {

                if (emprestimoResponse.value.data[0].emprestimo> 0) await supabase.from("fluxo").insert({
                    valor: emprestimoResponse.value.data[0].emprestimo,
                    categoria: "parcela_maquina",
                    produto: "Parcela de : " + maquinaInput.modelo + " - " + maquinaInput.ano,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: maquinaInput.safra_id,
                    user_id: user.value.id
                });
                await supabase.from("fluxo").insert({
                    valor: maquinaInput.valor_parcelas - emprestimoResponse.value.data[0].emprestimo,
                    categoria: "parcela_maquina",
                    produto: "Parcela de : " + maquinaInput.modelo + " - " + maquinaInput.ano,
                    tipo_fluxo: "saida",
                    safra_id: maquinaInput.safra_id,
                    user_id: user.value.id
                });

                await supabase.from("safras").update({
                    emprestimo: 0
                }).eq('id', maquinaInput.safra_id);
            }
            else {
                await supabase.from("fluxo").insert({
                    valor: maquinaInput.valor_parcelas,
                    categoria: "parcela_maquina",
                    produto: "Parcela de : " + maquinaInput.modelo + " - " + maquinaInput.ano,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: maquinaInput.safra_id,
                    user_id: user.value.id
                });
                console.log(emprestimoResponse.value.data[0].emprestimo)
                await supabase.from("safras").update({
                    emprestimo: emprestimoResponse.value.data[0].emprestimo - maquinaInput.valor_parcelas
                }).eq('id', maquinaInput.safra_id);
            }


            await supabase.from("maquinas").update({
                num_parcelas: parseFloat(maquinaInput.num_parcelas) - 1
            }).eq('id', maquinaInput.id);

            maquinasResponse.value = await supabase.from("maquinas").select().eq('user_id', user.value.id).order('modelo', { ascending: true })

        }

        maquinaInput.safra_id = ""

        showModalPagarParcela.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }

}
const handleSubmitNovoCombustivel = async (event) => {
    if (!limitarForm.value) return
    limitarForm.value = false

    if (combustivelInput.nome && combustivelInput.quantidade) {

        if (process.client) {

            await supabase.from("combustiveis").insert({
                nome: combustivelInput.nome,
                quantidade: parseFloat(combustivelInput.quantidade),
                user_id: user.value.id
            });
            combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
        }

        combustivelInput.id = "",
            combustivelInput.nome = "",
            combustivelInput.quantidade = "",
            showModalAdicionarCombustivel.value = false
    } else {
        showPreencha.value = true
    }

}
const handleSubmitReporCombustivel = async () => {
    if (combustivelInput.quantidade_repor && combustivelInput.custo && combustivelInput.safra_id) {

        if (!limitarForm.value) return
        limitarForm.value = false

        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', combustivelInput.safra_id)


        if (process.client) {

            await supabase.from("combustiveis").update({
                quantidade: (parseFloat(combustivelInput.quantidade) + parseFloat(combustivelInput.quantidade_repor))

            }).eq('id', combustivelInput.id);


            if (paraFloat(combustivelInput.custo) > 0) {

                if (paraFloat(combustivelInput.custo) > emprestimoResponse.value.data[0].emprestimo) {

                    if (emprestimoResponse.value.data[0].emprestimo> 0) await supabase.from("fluxo").insert({
                        valor: emprestimoResponse.value.data[0].emprestimo,
                        categoria: "combustivel",
                        produto: combustivelInput.nome,
                        tipo_fluxo: "saida_emprestimo",
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });
                    await supabase.from("fluxo").insert({
                        valor: paraFloat(combustivelInput.custo) - emprestimoResponse.value.data[0].emprestimo,
                        categoria: "combustivel",
                        produto: combustivelInput.nome,
                        tipo_fluxo: "saida",
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });

                    await supabase.from("safras").update({
                        emprestimo: 0
                    }).eq('id', combustivelInput.safra_id);
                }
                else {
                    await supabase.from("fluxo").insert({
                        categoria: "combustivel",
                        produto: combustivelInput.nome,
                        tipo_fluxo: "saida_emprestimo",
                        safra_id: combustivelInput.safra_id,
                        user_id: user.value.id
                    });
                    await supabase.from("safras").update({
                        emprestimo: emprestimoResponse.value.data[0].emprestimo - paraFloat(combustivelInput.custo)
                    }).eq('id', combustivelInput.safra_id);
                }

                
            }


            combustiveisResponse.value = await supabase.from("combustiveis").select().eq('user_id', user.value.id)
        }
        combustivelInput.id = ""
        combustivelInput.nome = ""
        combustivelInput.quantidade = ""
        combustivelInput.quantidade_repor = ""
        combustivelInput.custo = ""
        combustivelInput.safra_id = ""

        showModalReporCombustivel.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}
const handleSubmitEditarMaquina = async () => {

    if (maquinaInput.categoria && maquinaInput.modelo && maquinaInput.ano) {
        if (!maquinaInput.is_pago) {
            if (!maquinaInput.valor_parcelas || !maquinaInput.num_parcelas || !maquinaInput.data_pagamento_parcelas) {
                showPreencha.value = true
                return
            }
        }

        if (!limitarForm.value) return
        limitarForm.value = false


        if (!maquinaInput.is_pago) {
            await supabase.from("maquinas").update({
                categoria: maquinaInput.categoria,
                modelo: maquinaInput.modelo,
                ano: maquinaInput.ano,
                is_pago: maquinaInput.is_pago,
                valor_parcelas: paraFloat(maquinaInput.valor_parcelas),
                num_parcelas: parseInt(maquinaInput.num_parcelas),
                data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas),

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
        showPreencha.value = false

    } else {
        showPreencha.value = true
    }
}
const handleModalEditar = (categoria,
    modelo,
    ano,
    is_pago,
    valor_parcelas,
    num_parcelas,
    data_pagamento_parcelas, id) => {

    showModalEditar.value = true
    showPreencha.value = false
    limitarForm.value = true
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


    if (i === "categoria") {
        tipoOrdenar.value = porCategoria
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porCategoriaReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "modelo") {
        tipoOrdenar.value = porModelo
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porModeloReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "ano") {
        tipoOrdenar.value = porAno
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porAnoReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "status") {
        tipoOrdenar.value = porStatus
        if (reverterOrdenar.value === i) {
            tipoOrdenar.value = porStatusReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

}


function porCategoria(a, b) {
    if (a.categoria > b.categoria) {
        return 1;
    } else if (b.categoria > a.categoria) {
        return -1
    } else {
        return 0;
    }
}
function porModelo(a, b) {
    if (a.modelo > b.modelo) {
        return 1;
    } else if (b.modelo > a.modelo) {
        return -1
    } else {
        return 0;
    }
}
function porAno(a, b) {
    return parseFloat(a.ano) - parseFloat(b.ano)
}
function porStatus(a, b) {
    if (a.status > b.status) {
        return 1;
    } else if (b.status > a.status) {
        return -1
    } else {
        return 0;
    }
}
function porCategoriaReverse(a, b) {
    if (a.categoria > b.categoria) {
        return -1;
    } else if (b.categoria > a.categoria) {
        return 1
    } else {
        return 0;
    }
}
function porModeloReverse(a, b) {
    if (a.modelo > b.modelo) {
        return -1;
    } else if (b.modelo > a.modelo) {
        return 1
    } else {
        return 0;
    }
}
function porAnoReverse(a, b) {
    return parseFloat(b.ano) - parseFloat(a.ano)
}
function porStatusReverse(a, b) {
    if (a.status > b.status) {
        return -1;
    } else if (b.status > a.status) {
        return 1
    } else {
        return 0;
    }
}

// <-------->

const valorManutencaoFormatar = (valor) => {
    maquinaInput.valor_manutencao = paraRealInput(valor)
}

const valorParcelaFormatar = (valor) => {
    maquinaInput.valor_parcelas = paraRealInput(valor)
}
const valorCombustivelFormatar = (valor) => {
    combustivelInput.custo = paraRealInput(valor)
}

</script>
<template>
    <div>
        <!-- Título -->
        <div class="flex flex-row items-center absolute ml-[-4%] ">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica  ">Máquinas | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl"> 🚜 </h1>
            <!-- 1F468 U+200D U+1F33E	 -->
        </div>
        <!-- ------------------------------------------------------------------------------ -->



        <loader class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            v-if="!maquinasResponse || !combustiveisResponse" />
        <div v-if="maquinasResponse && combustiveisResponse"
            class="sm:scale-[80%] 2xl:scale-100 flex flex-col w-full items-center first:items-start">
            <div class="flex flex-col w-[70%] sm:mt-[-6%] 2xl:mt-[1%]">
                <div class="flex items-center">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Veículos e Máquinas 🚜 </p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div class="flex flex-col w-[100%] min-w-[600px] mt-[5%]">
                    <button @click="handleNovoMaquina"
                        class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                        Nova máquina
                    </button>

                    <table class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 " @click="handleOrdenar('categoria')">Categoria</th>
                            <th class="p-2 " @click="handleOrdenar('modelo')">Modelo</th>
                            <th class="p-2 " @click="handleOrdenar('ano')">Ano</th>
                            <th class="p-2 " @click="handleOrdenar('status')">Status</th>

                            <th class="p-2 ">Abastecer</th>
                            <th class="p-2 ">Manutenção</th>
                            <th class="p-2 ">Pagar Parcela</th>
                            <th class="p-2 ">Detalhes</th>
                            <th class="p-2 ">Deletar</th>
                        </thead>
                        <tbody>
                            <tr v-for="maquina in maquinasResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                                :key="maquina.id" class=" even:bg-gray-100">
                                <td class="p-2 capitalize">{{ maquina.categoria }}</td>
                                <td class="p-2 capitalize">{{ maquina.modelo }}</td>
                                <td class="p-2">{{ maquina.ano }}</td>
                                <td class="p-2 capitalize">{{ maquina.status }}</td>
                                <!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> -->
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleAbastecer(maquina.id, maquina.modelo, maquina.ano)"
                                        @close="showModalAbastecer = false">
                                        ⛽
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleManutencao(maquina.id, maquina.modelo, maquina.ano)"
                                        @close="showModalManutencao = false">
                                        🛠
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span v-if="maquina.num_parcelas > 0"
                                        class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handlePagarParceclas(maquina.id, maquina.modelo, maquina.ano, maquina.valor_parcelas, maquina.num_parcelas)"
                                        @close="showModalPagarParcela = false">
                                        💵
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(maquina.categoria, maquina.modelo, maquina.ano, maquina.is_pago, maquina.valor_parcelas, maquina.num_parcelas, maquina.data_parcelas, maquina.id)"
                                        @close="showModalEditar = false">
                                        ✏
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteMaquina(maquina.id, maquina.modelo, maquina.ano, maquina.status)">
                                        ❌
                                    </span>

                                </td>
                                <!--  -->
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="maquinasResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl ">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(maquinasResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(maquinasResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>

                <div class="flex items-center">
                    <p class="whitespace-nowrap text-escuro font-bold text-2xl">Combustíveis ⛽</p>
                    <div class="flex w-full h-1 bg-escuro ml-4"></div>
                </div>
                <div class="flex flex-col w-[70%] mt-[5%]">
                </div>

                <div class="flex flex-col w-[30%] min-w-[400px] ">
                    <button @click="handleNovoCombustivel"
                        class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verdeself-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde">
                        Novo Combustível
                    </button>

                    <table class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 " @click="handleOrdenar('categoria')">Combustível</th>
                            <th class="p-2 " @click="handleOrdenar('modelo')">Quantidade</th>
                            <th class="p-2 " @click="handleOrdenar('modelo')">Adicionar</th>
                            <th class="p-2 " @click="handleOrdenar('modelo')">Deletar</th>
                        </thead>
                        <tbody>
                            <tr v-for="combustivel in combustiveisResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenar)"
                                :key="combustivel.id" class=" even:bg-gray-100">
                                <td class="p-2 capitalize">{{ combustivel.nome }}</td>
                                <td class="p-2">{{ combustivel.quantidade.toFixed(2) + " L" }}</td>
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleReporCombustivel(combustivel.id, combustivel.quantidade)"
                                        @close="showModalEditar = false">
                                        ➕
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span class="cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteCombustivel(combustivel.id)">
                                        ❌
                                    </span>

                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div v-if="maquinasResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(maquinasResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(maquinasResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Novo -->
        <Transition name="pop">
            <ModalNovoMaquina v-if="showModalAdicionar" @close="showModalAdicionar = false"
                @adicionarMaquina="handleSubmitNovoMaquina">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">
                    <div class="relative z-0 w-full mb-6 group">

                        <label for="nome"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Categoria
                            da máquina</label>
                        <select v-model="maquinaInput.categoria" type="text" placeholder="João da silva"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" value="tratores">Tratores</option>
                            <option class="bg-verde font-semibold" value="ceifadeira/colheitadeira">Ceifadeira ou
                                Colheitadeira
                            </option>
                            <option class="bg-verde font-semibold" value="atv/utv">ATVs ou UTVs</option>
                            <option class="bg-verde font-semibold" value="acessorios/trator">Assessórios para trator
                            </option>
                            <option class="bg-verde font-semibold" value="arados">Arados</option>
                            <option class="bg-verde font-semibold" value="distribuidores_de_fertilizante">Distribuidores
                                De
                                Fertilizante
                            </option>
                            <option class="bg-verde font-semibold" value="semeadores">Semeadores</option>
                            <option class="bg-verde font-semibold" value="enfardadeiras">Enfardadeiras</option>
                            <option class="bg-verde font-semibold" value="vagoes/reboque">Vagões ou reboque</option>
                            <option class="bg-verde font-semibold" value="outro">Outro</option>
                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="maquinaInput.modelo" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Nome
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="maquinaInput.ano" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Ano
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input
                            class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                            v-model="maquinaInput.is_pago" type="checkbox" placeholder="João da silva"
                            name="recebe_salario">
                        <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Está Pago?</label>
                    </div>





                    <Transition name="pop">
                        <div v-if="!maquinaInput.is_pago" class="flex flex-col">

                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-model="maquinaInput.num_parcelas" name="floating_email"
                                    id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Parcelas
                                    Restantes
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="valorParcelaFormatar(maquinaInput.valor_parcelas)"
                                    v-model="maquinaInput.valor_parcelas" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Valor
                                    da parcela
                                </label>
                            </div>

                            <div class="relative z-0 w-full mb-6 group">

                                <label for="data_pagamento_salario"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Dia
                                    de pagamento parcela</label>
                                <select v-model="maquinaInput.data_pagamento_parcelas" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    name="data_pagamento_salario">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </Transition>
                </div>
            </ModalNovoMaquina>
        </Transition>
        <Transition name="pop">
            <ModalEditarMaquina v-if="showModalEditar" @close="showModalEditar = false"
                @editarMaquina="handleSubmitEditarMaquina">

                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">
                    <div class="relative z-0 w-full mb-6 group">

                        <label for="nome"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Categoria
                            do máquina</label>
                        <select v-model="maquinaInput.categoria" type="text" placeholder="João da silva"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" value="tratores">Tratores</option>
                            <option class="bg-verde font-semibold" value="ceifadeira/colheitadeira">Ceifadeira ou
                                Colheitadeira
                            </option>
                            <option class="bg-verde font-semibold" value="atv/utv">ATVs ou UTVs</option>
                            <option class="bg-verde font-semibold" value="acessorios/trator">Assessórios para trator
                            </option>
                            <option class="bg-verde font-semibold" value="arados">Arados</option>
                            <option class="bg-verde font-semibold" value="distribuidores_de_fertilizante">Distribuidores
                                De
                                Fertilizante
                            </option>
                            <option class="bg-verde font-semibold" value="semeadores">Semeadores</option>
                            <option class="bg-verde font-semibold" value="enfardadeiras">Enfardadeiras</option>
                            <option class="bg-verde font-semibold" value="vagoes/reboque">Vagões ou reboque</option>
                            <option class="bg-verde font-semibold" value="outro">Outro</option>
                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="maquinaInput.modelo" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Nome
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="maquinaInput.ano" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Ano
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input
                            class="w-4 h-4 text-claro bg-verde_claro border-verde_claro rounded focus:ring-verde_claro focus:ring-2"
                            v-model="maquinaInput.is_pago" type="checkbox" placeholder="João da silva"
                            name="recebe_salario">
                        <label class="ml-2 text-sm font-medium text-claro" for="recebe_salario">Está Pago?</label>
                    </div>





                    <Transition name="pop">
                        <div v-if="!maquinaInput.is_pago" class="flex flex-col">

                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-model="maquinaInput.num_parcelas" name="floating_email"
                                    id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Parcelas
                                    Restantes
                                </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="valorParcelaFormatar(maquinaInput.valor_parcelas)"
                                    v-model="maquinaInput.valor_parcelas" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Valor
                                    da parcela
                                </label>
                            </div>

                            <div class="relative z-0 w-full mb-6 group">

                                <label for="data_pagamento_salario"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Dia
                                    de pagamento parcela</label>
                                <select v-model="maquinaInput.data_pagamento_parcelas" placeholder="João da silva"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    name="data_pagamento_salario">
                                    <option class="bg-verde font-semibold" v-for="i in 28" v-bind:value=i>{{ i }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </Transition>
                </div>
            </ModalEditarMaquina>
        </Transition>
        <Transition name="pop">
            <ModalAdicionarCombustivel v-if="showModalAdicionarCombustivel" @close="showModalAdicionarCombustivel = false"
                @adicionarCombustivel="handleSubmitNovoCombustivel($event)">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <div class="flex flex-col">
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="combustivelInput.nome" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Nome
                            <span class="text-xs font-light">Ex: ("Diesel", "Gasolina", "Etanol")</span></label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-model="combustivelInput.quantidade" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Quantidade
                            em litros <span class="text-xs font-light">(L.)</span>
                        </label>
                    </div>
                    <h1 class="text-claro font-medium">❗ Obs: O combustível adicionado aqui <b class="text-vermelho">não
                            criará uma entrada de despesa</b> , caso seja uma compra adicione a quantidade <b
                            class="text-vermelho">0</b> e posteriormente a compra</h1>

                </div>
            </ModalAdicionarCombustivel>
        </Transition>
        <Transition name="pop">
            <ModalDeletarMaquina v-if="showModalDeletar" @close="showModalDeletar = false"
                @deletarMaquina="handleSubmitDeleteMaquina">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este combustível?</h1>
                <h1 class="text-center text-xl text-claro light">{{ maquinaInput.modelo + " - " + maquinaInput.ano }}
                </h1>

                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarMaquina>
        </Transition>

        <Transition name="pop">
            <ModalDeletarNegado v-if="showModalDeletarNegado" @close="showModalDeletarNegado = false">
                <h2 class="text-center text-claro text-2xl font-semibold">Este Item está registrado em uma tarefa, não
                    pode ser
                    deletado.</h2>
            </ModalDeletarNegado>
        </Transition>

        <Transition name="pop">
            <ModalAlerta v-if="showModalMaquinaEmUso" @close="showModalMaquinaEmUso = false">
                <h1 class="text-center text-xl text-claro light">Não é possível deletar uma máquina <b>Em uso</b>,
                    encerre seu uso na tela <b>Tarefas</b></h1>
            </ModalAlerta>
        </Transition>
        <Transition name="pop">
            <ModalDeletarCombustivel v-if="showModalDeletarCombustivel" @close="showModalDeletarCombustivel = false"
                @deletarCombustivel="handleSubmitDeletarCombustivel">
                <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este combustível?</h1>

                <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                            desfeita.</u> </b></h2>
            </ModalDeletarCombustivel>
        </Transition>

        <Transition name="pop">
            <ModalPagarParcela v-if="showModalPagarParcela" @close="showModalPagarParcela = false"
                @pagarParcela="handleSubmitPagarParcela">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <h1 class="text-center text-xl text-claro">Parcela do veículo: {{ maquinaInput.modelo + " - " +
                    maquinaInput.ano }}</h1>
                <h1 class="text-center text-xl text-claro light">Valor da parcela: <b class="text-vermelho">{{
                    paraReal(maquinaInput.valor_parcelas) }} </b></h1>
                <h1 class="text-center text-md text-claro light">({{ maquinaInput.num_parcelas + " Restantes" }}) </h1>

                <div v-if="!safraResponse"></div>
                <div v-else-if="safraResponse.data != ''">

                    <div class="relative z-0 w-full mb-6 group">


                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                            De qual safra será descontado o valor do pagamento?</label>
                        <select v-model="maquinaInput.safra_id"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" v-for="safra in safraResponse.data" :key="safra.id"
                                v-bind:value=safra.id>{{
                                    safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                }}
                            </option>
                        </select>
                    </div>
                </div>
            </ModalPagarParcela>
        </Transition>

        <Transition name="pop">
            <ModalReporCombustivel v-if="showModalReporCombustivel" @close="showModalReporCombustivel = false"
                @reporCombustivel="handleSubmitReporCombustivel">
                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>
                <h1 class="text-xl text-claro">Quantidade atual: {{ combustivelInput.quantidade }}</h1>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" v-model="combustivelInput.quantidade_repor" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                        placeholder=" " required>
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quatidade
                        à adicionar (L)</label>
                </div>
                <div v-if="!safraResponse"></div>
                <div v-else-if="safraResponse.data != ''">
                    <div class="relative z-0 w-full mb-6 group">

                        <input type="text" v-on:input="valorCombustivelFormatar(combustivelInput.custo)"
                            v-model="combustivelInput.custo" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Custo
                            de compra - (colocar 0 se não for uma compra)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">


                        <label
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                            De qual safra será descontado o valor da compra</label>
                        <select v-model="combustivelInput.safra_id"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                            <option class="bg-verde font-semibold" v-for="safra in safraResponse.data" :key="safra.id"
                                v-bind:value=safra.id>{{
                                    safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                }}
                            </option>
                        </select>
                    </div>
                </div>
            </ModalReporCombustivel>
        </Transition>
        <Transition name="pop">
            <ModalAbastecerMaquina v-if="showModalAbastecer" @close="showModalAbastecer = false"
                @abastecerMaquina="handleSubmitAbastecer">

                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>

                <h1 class="capitalize text-center text-2xl text-claro font-bold">{{
                    maquinaInput.modelo + " - " +
                    maquinaInput.ano
                }}</h1>

                <select v-model="combustivelInput.id" @change="limitarCombustivelSelect(combustivelInput.id)"
                    class="capitalize block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                    <option class="bg-verde font-semibold capitalize" v-for="combustivel in combustiveisResponse.data"
                        :key="combustivel.id" v-bind:value=combustivel.id>{{ combustivel.nome }}
                    </option>
                </select>
                <div v-if="combustivelInput.id">

                    <div class="relative z-0 w-full mb-6 group">

                        <input v-on:input="limitarCombustivelInput()" type="number"
                            v-model="combustivelInput.quantidade_repor" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                            placeholder=" " required>
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                            máxima = <b v-if="abastecerCombustivelResponse">{{
                                abastecerCombustivelResponse.data[0].quantidade + " L"
                            }}</b></label>
                    </div>
                </div>

            </ModalAbastecerMaquina>
        </Transition>
        <Transition name="pop">
            <ModalAdicionarManutencao v-if="showModalManutencao" @close="showModalManutencao = false"
                @adicionarManutencao="handleSubmitManutencao">

                <Transition name="pop">
                    <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                        campos obrigatórios</h1>
                </Transition>

                <h1 class="capitalize text-center text-2xl text-claro font-bold">{{
                    maquinaInput.modelo + " - " +
                    maquinaInput.ano
                }}</h1>


                <div class="relative z-0 w-full mb-6 group">

                    <input v-on:input="valorManutencaoFormatar(maquinaInput.valor_manutencao)" type="text"
                        v-model="maquinaInput.valor_manutencao" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                        placeholder=" " required>
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Custo
                        da manutenção | R$
                    </label>
                </div>
                <div class="relative z-0 w-full pt-6 group">


                    <label
                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-1  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                        À qual safra será adicionado o valor da manutenção?</label>
                    <select v-model="combustivelInput.safra_id"
                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                        <option class="bg-verde font-semibold" v-for="safra in safraResponse.data" :key="safra.id"
                            v-bind:value=safra.id>{{
                                safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                            }}
                        </option>
                    </select>
                </div>

            </ModalAdicionarManutencao>
        </Transition>
    </div>
</template>