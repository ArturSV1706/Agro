<script setup>

definePageMeta({
    middleware: ["auth", "subscription"]
})


const { supabase } = useSupabase()
const { user } = useAuth()
const { paraRealInput, paraFloat, formatar } = useUtils()
const screen = ref('mobile');

if (process.client) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
        screen.value = 'desktop'
    } else {
        screen.value = 'mobile'
    }
}


const sementesResponse = ref();
const fertilizantesResponse = ref();
const defensivosResponse = ref();
const outrosResponse = ref();
const colheitaResponse = ref();
const areaResponse = ref();
const safraResponse = ref();
const emprestimoResponse = ref();


const showModalAdicionar = ref()
const showModalAdicionarColheita = ref()
const showModalEditar = ref()
const showModalEditarColheita = ref()
const showModalDeletar = ref()
const showModalDeletarNegado = ref()
const showModalRepor = ref()
const showModalReporColheita = ref()
const showTabelaColheita = ref(); showTabelaColheita.value = true
const showTabelaSementes = ref();
const showTabelaFetilizantes = ref()
const showTabelaDefensivos = ref()
const showTabelaOutros = ref()
const limitarForm = ref()
const showPreencha = ref()



const margemTabelaSelector = ref()
margemTabelaSelector.value = "ml-[19px]"

const tipoOrdenarSemente = ref()
const tipoOrdenarfertilizante = ref()
const tipoOrdenarDefensivo = ref()

const reverterOrdenar = ref()

// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

if (process.client) {
    sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
    fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
    defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
    outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    colheitaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id }).order('cultivo', { ascending: true })
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "ativa" })
}
const estoqueInput = reactive({
    id: "",
    item: "",
    categoria: "",
    quantidade: "",
    quantidade_repor: "",
    grandeza: "",
    custo: "",
    safra: ""

})
const bgIconesTabelas = reactive({
    colheitas: "escuro",
    sementes: "",
    fertilizantes: "",
    defensivos: "",
    outros: ""

})
const colheitaInput = reactive({
    area: "",
    area_colhida: "",
    area_adicionar_colheita: ""

})


const handleNovoEstoque = (categoria) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalAdicionar.value = true
    estoqueInput.item = ""
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = ""
    estoqueInput.grandeza = ""
    estoqueInput.custo = ""
}
const handleModalEditar = (item, categoria, quantidade, grandeza, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalEditar.value = true
    estoqueInput.item = item
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = quantidade
    estoqueInput.grandeza = grandeza
    estoqueInput.id = id


}
const handleModalEditarColheita = (cultivo, quantidade, grandeza, area, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalEditarColheita.value = true
    estoqueInput.item = cultivo
    estoqueInput.quantidade = quantidade
    estoqueInput.grandeza = grandeza
    estoqueInput.area_colhida = area
    estoqueInput.id = id


}
const handleModalAdicionarColheita = async (cultivo, quantidade, grandeza, area, area_colhida, id) => {

    showPreencha.value = false
    limitarForm.value = true
    showModalAdicionarColheita.value = true
    estoqueInput.item = cultivo
    estoqueInput.quantidade = ""
    safraResponse.grandeza = grandeza
    colheitaInput.area_colhida = area_colhida
    estoqueInput.id = id


}
const handleModalRepor = (item, categoria, quantidade, grandeza, id) => {
    showPreencha.value = false
    limitarForm.value = true
    showModalRepor.value = true
    estoqueInput.item = item
    estoqueInput.categoria = categoria
    estoqueInput.quantidade = quantidade
    estoqueInput.grandeza = grandeza
    estoqueInput.id = id
    estoqueInput.custo = ""



}

const handleDeleteEstoque = async (estoqueId) => {
    limitarForm.value = true
    estoqueInput.id = estoqueId
    let testarChaveEstrangeira = await supabase.from("tarefas").select('estoque_utilizado_item').eq('estoque_utilizado_item', estoqueId)

    if (testarChaveEstrangeira.data[0]) {
        showModalDeletarNegado.value = true
    } else {
        showModalDeletar.value = true
    }
}
const handleSubmitDeleteEstoque = async () => {
    if (!limitarForm.value) return
    limitarForm.value = false

    await supabase.from("estoque").delete().eq('id', estoqueInput.id)


    if (process.client) {
        sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
        defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
        outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    }
    showModalDeletar.value = false
    pagina.atual = 0

}

const handleSubmitNovoEstoque = async () => {
    if (estoqueInput.item && estoqueInput.categoria && estoqueInput.quantidade && estoqueInput.grandeza && estoqueInput.safra) {

        if (!limitarForm.value) return
        limitarForm.value = false

        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', estoqueInput.safra)


        if (process.client) {
            await supabase.from("estoque").insert({
                user_id: user.value.id,
                item: estoqueInput.item,
                categoria: estoqueInput.categoria,
                quantidade: estoqueInput.quantidade,
                grandeza: estoqueInput.grandeza,
                safra_id: parseInt(estoqueInput.safra)

            });

        }

        if (paraFloat(estoqueInput.custo) > 0) {

            if (paraFloat(estoqueInput.custo) > emprestimoResponse.value.data[0].emprestimo) {

                if (emprestimoResponse.value.data[0].emprestimo > 0) await supabase.from("fluxo").insert({
                    valor: emprestimoResponse.value.data[0].emprestimo,
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });
                await supabase.from("fluxo").insert({
                    valor: paraFloat(estoqueInput.custo) - emprestimoResponse.value.data[0].emprestimo,
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });

                await supabase.from("safras").update({
                    emprestimo: 0
                }).eq('id', estoqueInput.safra);
            }
            else {
                await supabase.from("fluxo").insert({
                    valor: paraFloat(estoqueInput.custo),
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });
                await supabase.from("safras").update({
                    emprestimo: emprestimoResponse.value.data[0].emprestimo - paraFloat(estoqueInput.custo)
                }).eq('id', estoqueInput.safra);
            }


        }

        estoqueInput.id = ""
        estoqueInput.item = ""
        estoqueInput.categoria = ""
        estoqueInput.quantidade = ""
        estoqueInput.grandeza = ""
        estoqueInput.safra = ""
        estoqueInput.custo = ""
        showModalAdicionar.value = false
        showPreencha.value = false


        sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
        defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
        outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })
    } else {
        showPreencha.value = true
    }
}


const handleSubmitEditarEstoque = async (id) => {
    if (estoqueInput.item && estoqueInput.quantidade && estoqueInput.grandeza) {

        if (!limitarForm.value) return
        limitarForm.value = false

        await supabase.from("estoque").update({
            item: estoqueInput.item,
            quantidade: estoqueInput.quantidade,
            grandeza: estoqueInput.grandeza

        }).eq('id', id);

        if (paraFloat(estoqueInput.custo) > 0) {
            if (process.client) {
                await supabase.from("fluxo").insert({
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    valor: paraFloat(estoqueInput.custo),
                    tipo_fluxo: "saida",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });
            }
        }




        sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
        defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })


        estoqueInput.id = ""
        estoqueInput.item = ""
        estoqueInput.categoria = ""
        estoqueInput.quantidade = ""
        estoqueInput.grandeza = ""
        estoqueInput.safra = ""
        estoqueInput.custo = ""
        showModalEditar.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}
const handleSubmitEditarEstoqueColheita = async (id) => {
    if (estoqueInput.area_colhida) {

        if (!limitarForm.value) return
        limitarForm.value = false

        await supabase.from("safras").update({
            area_colhida: parseFloat(estoqueInput.area_colhida)
        }).eq('id', id);

        colheitaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id }).order('cultivo', { ascending: true })

        estoqueInput.id = ""
        estoqueInput.item = ""
        estoqueInput.categoria = ""
        estoqueInput.quantidade = ""
        estoqueInput.grandeza = ""
        estoqueInput.safra = ""
        estoqueInput.custo = ""
        showModalEditarColheita.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}
const handleSubmitAdicionarColheita = async (id) => {
    if (estoqueInput.quantidade && colheitaInput.area_adicionar_colheita) {
        areaResponse.value = await supabase.from("safras").select().eq('id', id);
        console.log(parseFloat(areaResponse.value.data[0].quantidade_real) + parseFloat(estoqueInput.quantidade))

        if (!limitarForm.value) return
        limitarForm.value = false

        await supabase.from("safras").update({
            quantidade_real: (parseFloat(areaResponse.value.data[0].quantidade_real) + parseFloat(estoqueInput.quantidade)),
            quantidade_max: (parseFloat(areaResponse.value.data[0].quantidade_real) + parseFloat(estoqueInput.quantidade)),
            area_colhida: parseFloat(areaResponse.value.data[0].area_colhida) + parseFloat(colheitaInput.area_adicionar_colheita)
        }).eq('id', id);

        colheitaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id }).order('cultivo', { ascending: true })

        estoqueInput.id = ""
        estoqueInput.item = ""
        estoqueInput.categoria = ""
        estoqueInput.quantidade = ""
        estoqueInput.grandeza = ""
        estoqueInput.safra = ""
        estoqueInput.custo = ""
        colheitaInput.area_adicionar_colheita = ""
        showModalAdicionarColheita.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}
const handleSubmitReporEstoque = async (id) => {
    console.log(estoqueInput.safra)
    if (estoqueInput.quantidade && estoqueInput.custo && estoqueInput.safra) {
        console.log(estoqueInput.safra)


        if (!limitarForm.value) return
        limitarForm.value = false

        emprestimoResponse.value = await supabase.from("safras").select("emprestimo").eq('id', estoqueInput.safra)


        if (estoqueInput.categoria == "colheita") {
            await supabase.from("safras").update({
                quantidade_real: (parseFloat(estoqueInput.quantidade) + parseFloat(estoqueInput.quantidade_repor)),

            }).eq('id', parseInt(estoqueInput.safra));
        } else {
            await supabase.from("estoque").update({
                quantidade: (parseFloat(estoqueInput.quantidade) + parseFloat(estoqueInput.quantidade_repor))

            }).eq('id', id);
        }

        if (paraFloat(estoqueInput.custo) > 0) {
            if (paraFloat(estoqueInput.custo) > emprestimoResponse.value.data[0].emprestimo) {

                if (emprestimoResponse.value.data[0].emprestimo > 0) await supabase.from("fluxo").insert({
                    valor: emprestimoResponse.value.data[0].emprestimo,
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });
                await supabase.from("fluxo").insert({
                    valor: paraFloat(estoqueInput.custo) - emprestimoResponse.value.data[0].emprestimo,
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });

                await supabase.from("safras").update({
                    emprestimo: 0
                }).eq('id', estoqueInput.safra);
            }
            else {
                await supabase.from("fluxo").insert({
                    valor: paraFloat(estoqueInput.custo),
                    categoria: estoqueInput.categoria,
                    produto: estoqueInput.item,
                    tipo_fluxo: "saida_emprestimo",
                    safra_id: estoqueInput.safra,
                    user_id: user.value.id
                });
                await supabase.from("safras").update({
                    emprestimo: emprestimoResponse.value.data[0].emprestimo - paraFloat(estoqueInput.custo)
                }).eq('id', estoqueInput.safra);
            }
        }


        colheitaResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        sementesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "semente/muda" })
        fertilizantesResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "fertilizante" })
        defensivosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "defensivo" })
        outrosResponse.value = await supabase.from("estoque").select().match({ user_id: user.value.id, categoria: "outros" })


        estoqueInput.id = ""
        estoqueInput.item = ""
        estoqueInput.categoria = ""
        estoqueInput.quantidade = ""
        estoqueInput.grandeza = ""
        estoqueInput.custo = ""
        estoqueInput.safra = ""
        estoqueInput.custo = ""
        showModalRepor.value = false
        showPreencha.value = false
    } else {
        showPreencha.value = true
    }
}





const pagina = reactive({
    atual: 0,
    tamanho: 5
})
const handlePagina = (i) => {
    if (i === "proxima") {
        pagina.atual++
    }
    if (i === "anterior") {
        pagina.atual--
    }
}

const handleOrdenar = (i) => {


    if (i === "item") {
        tipoOrdenarSemente.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarSemente.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarSemente.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarSemente.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i

    }
    if (i === "item") {
        tipoOrdenarfertilizante.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarfertilizante.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarfertilizante.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarfertilizante.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

    if (i === "item") {
        tipoOrdenarDefensivo.value = porItem
        if (reverterOrdenar.value === i) {
            tipoOrdenarDefensivo.value = porItemReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }
    if (i === "quantidade") {
        tipoOrdenarDefensivo.value = porQuantidade
        if (reverterOrdenar.value === i) {
            tipoOrdenarDefensivo.value = porQuantidadeReverse
            reverterOrdenar.value = ""
            return
        }
        reverterOrdenar.value = i
    }

}

function porItem(a, b) {
    if (a.nome > b.nome) {
        return 1;
    } else if (b.nome > a.nome) {
        return -1
    } else {
        return 0;
    }
}
function porQuantidade(a, b) {
    if (a.cargo > b.cargo) {
        return 1;
    } else if (b.cargo > a.cargo) {
        return -1
    } else {
        return 0;
    }
}
function porItemReverse(a, b) {
    if (a.nome > b.nome) {
        return -1;
    } else if (b.nome > a.nome) {
        return 1
    } else {
        return 0;
    }
}
function porQuantidadeReverse(a, b) {
    if (a.cargo > b.cargo) {
        return -1;
    } else if (b.cargo > a.cargo) {
        return 1
    } else {
        return 0;
    }
}

const limitarArea = async (id) => {
    if (!areaResponse.area) {
        areaResponse.value = await supabase.from("safras").select("area").eq('id', id)
    }
    if (estoqueInput.area_colhida > areaResponse.value.data[0].area) {
        estoqueInput.area_colhida = areaResponse.value.data[0].area
    }
}
const limitarAreaColheita = async (id) => {
    if (!areaResponse.area) {
        areaResponse.value = await supabase.from("safras").select().eq('id', id)
    }
    if (colheitaInput.area_adicionar_colheita > (parseFloat(areaResponse.value.data[0].area) - parseFloat(areaResponse.value.data[0].area_colhida))) {
        colheitaInput.area_adicionar_colheita = parseFloat(areaResponse.value.data[0].area) - parseFloat(areaResponse.value.data[0].area_colhida)
        console.log("aaa")
    }
    console.log(areaResponse.value.data[0].area_colhida)
}

const trocarTabela = (i) => {
    pagina.atual = 0
    pagina.tamanho = 5
    switch (i) {
        case "colheita":
            margemTabelaSelector.value = "ml-[19px]"
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaSementes.value = false
            showTabelaColheita.value = true
            break;
        case "semente":
            margemTabelaSelector.value = "ml-[152px]"
            showTabelaColheita.value = false
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaSementes.value = true
            break;
        case "fertilizante":
            margemTabelaSelector.value = "ml-[284px]"
            showTabelaColheita.value = false
            showTabelaSementes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaFetilizantes.value = true
            break;
        case "defensivo":
            margemTabelaSelector.value = "ml-[417px]"
            showTabelaColheita.value = false
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaOutros.value = false
            showTabelaDefensivos.value = true
            break;
        case "outros":
            margemTabelaSelector.value = "ml-[550px]"
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = true
            break;

        default:
            break;
    }
}
const trocarTabelaMobile = (i) => {
    pagina.atual = 0
    pagina.tamanho = 5
    switch (i) {
        case "colheita":
            bgIconesTabelas.colheitas = "escuro"
            bgIconesTabelas.sementes = "";
            bgIconesTabelas.fertilizantes = "";
            bgIconesTabelas.defensivos = "";
            bgIconesTabelas.outros = "";
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaSementes.value = false
            showTabelaColheita.value = true
            break;
        case "semente":
            bgIconesTabelas.colheitas = ""
            bgIconesTabelas.sementes = "escuro";
            bgIconesTabelas.fertilizantes = "";
            bgIconesTabelas.defensivos = "";
            bgIconesTabelas.outros = "";
            showTabelaColheita.value = false
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaSementes.value = true
            break;
        case "fertilizante":
            bgIconesTabelas.colheitas = ""
            bgIconesTabelas.sementes = "";
            bgIconesTabelas.fertilizantes = "escuro";
            bgIconesTabelas.defensivos = "";
            bgIconesTabelas.outros = "";
            showTabelaColheita.value = false
            showTabelaSementes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = false
            showTabelaFetilizantes.value = true
            break;
        case "defensivo":
            bgIconesTabelas.colheitas = ""
            bgIconesTabelas.sementes = "";
            bgIconesTabelas.fertilizantes = "";
            bgIconesTabelas.defensivos = "escuro";
            bgIconesTabelas.outros = "";
            showTabelaColheita.value = false
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaOutros.value = false
            showTabelaDefensivos.value = true
            break;
        case "outros":
            bgIconesTabelas.colheitas = ""
            bgIconesTabelas.sementes = "";
            bgIconesTabelas.fertilizantes = "";
            bgIconesTabelas.defensivos = "";
            bgIconesTabelas.outros = "escuro";
            showTabelaSementes.value = false
            showTabelaFetilizantes.value = false
            showTabelaDefensivos.value = false
            showTabelaOutros.value = true
            break;

        default:
            break;
    }
}
const precoFormatar = (valor) => {
    estoqueInput.custo = paraRealInput(valor)
}

</script>

<template>
    <div v-if="screen === 'desktop'">
        <!-- Título -->
        <div class="flex flex-row items-center absolute ml-[-4%] ">
            <h1 class=" sm:pt-0 2xl:pt-2 sm:text-2xl 2xl:text-4xl text-escuro font-aristotelica ">Estoque | </h1>
            <h1 class="sm:text-xl 2xl:text-3xl">{{ String.fromCodePoint(0x1F4E6) }}</h1>
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <div class="flex flex-col w-full items-center ">

            <!-- Ícones -->
            <div class="sm:scale-75 2xl:scale-100 flex w-[90%] justify-evenly">
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/colheita.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!sementesResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ sementesResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Colheita</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/semente.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!sementesResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ sementesResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Sementes</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/fertilizante.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!fertilizantesResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ fertilizantesResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Fertilizantes</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/defensivos.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!defensivosResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ defensivosResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">Defensivos</h1>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <img src="../assets/icons/outros_estoque.svg" alt="" class="h-[80px]">
                    <div>
                        <Loader v-if="!outrosResponse" />
                        <h1 v-else class="text-3xl text-verde font-bold">{{ outrosResponse.data.length }}</h1>
                        <h1 class="text-lg text-verde font-bold opacity-80">outros</h1>
                    </div>
                </div>
            </div>
            <!-- ------------------------------------------------------------------- -->

            <!-- Bototes -->
            <div class="flex pr-2 space-x-8 bg-[rgba(15,42,37,1)] rounded-full mt-[5%]">
                <div
                    :class="`${margemTabelaSelector} absolute z-[0] bg-verde text-claro  rounded-full  w-[125px] h-[32px] transition-all`">
                </div>
                <button @click="trocarTabela('colheita')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1  w-[100px]">Colheitas</button>
                <button @click="trocarTabela('semente')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1  w-[100px]">Sementes</button>
                <button @click="trocarTabela('fertilizante')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1  w-[100px]">Fertilizantes</button>
                <button @click="trocarTabela('defensivo')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1  w-[100px]">Defensivos</button>
                <button @click="trocarTabela('outros')"
                    class=" text-claro text-center font-semibold rounded-full px-2 py-1  w-[100px]">Outros</button>
                <div> </div>
            </div>
            <!-- ------------------------------------------------------------------- -->
            <Transition name="slide">
                <div v-if="showTabelaColheita" id="container" class="flex flex-col min-w-[70%] mt-[3%]">


                    <div v-if="!colheitaResponse">
                        <Loader />
                    </div>
                    <table v-else="!colheitaResponse" class="bg-white shadow-xl w-full">

                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Métrica de produção</th>
                            <th class="p-2 ">Safra</th>
                            <th class="p-2 ">Área total</th>
                            <th class="p-2 ">Área colhida</th>
                            <th class="p-2 ">Produtividade (Qnt. / ha)</th>
                            <th class="p-2 ">Adicionar colheita</th>
                            <th class="p-2 ">Editar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="colheita in colheitaResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarSemente)"
                                class=" even:bg-gray-100" :key="colheita.id">
                                <td class="p-2 capitalize">{{ colheita.cultivo }}</td>
                                <td class="p-2">{{ colheita.quantidade_real }} </td>
                                <td class="p-2 text-sm">{{ formatar(colheita.grandeza) }} </td>
                                <td class="p-2 capitalize">{{ " (" + colheita.data_inicio + " - " + colheita.data_fim + ")"
                                }} </td>
                                <td class="p-2 capitalize text-center">{{ colheita.area }} <span class="text-xs">(Ha)</span>
                                </td>
                                <td class="p-2 capitalize text-center">{{ colheita.area_colhida }} <span
                                        class="text-xs">(Ha)</span></td>
                                <td class="p-2 capitalize text-center">{{ (colheita.quantidade_real /
                                    colheita.area_colhida).toFixed(2) }}</td>

                                <td class="p-2">
                                    <span v-if="(colheita.area - colheita.area_colhida) > 0"
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalAdicionarColheita(colheita.cultivo, colheita.quantidade_real, colheita.grandeza, colheita.area, colheita.area_colhida, colheita.id)"
                                        @close="showModalAdicionarColheita = false">
                                        🌾
                                    </span>
                                    <span v-else class=" material-icons block text-center">✔️</span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditarColheita(colheita.cultivo, colheita.quantidade_real, colheita.grandeza, colheita.area_colhida, colheita.id)"
                                        @close="showModalEditarColheita = false">
                                        &#x270F
                                    </span>
                                </td>


                            </tr>
                        </tbody>
                    </table>
                    <div v-if="colheitaResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(colheitaResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(colheitaResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaSementes" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('semente/muda')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!sementesResponse">
                        <Loader />
                    </div>
                    <table v-else="!sementesResponse" class="bg-white shadow-xl w-full">

                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="semente in sementesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarSemente)"
                                class=" even:bg-gray-100" :key="semente.id">
                                <td class="p-2 capitalize">{{ semente.item }}</td>
                                <td class="p-2">{{ semente.quantidade + " " + semente.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(semente.item, semente.categoria, semente.quantidade, semente.grandeza, semente.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(semente.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(semente.item, semente.categoria, semente.quantidade, semente.grandeza, semente.id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="sementesResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(sementesResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(sementesResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaFetilizantes" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('fertilizante')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!fertilizantesResponse">
                        <Loader />
                    </div>
                    <table v-else="!fertilizantesResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="fertilizante in fertilizantesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarfertilizante)"
                                class=" even:bg-gray-100" :key="fertilizante.id">
                                <td class="p-2 capitalize">{{ fertilizante.item }}</td>
                                <td class="p-2">{{ fertilizante.quantidade + " " + fertilizante.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(fertilizante.item, fertilizante.categoria, fertilizante.quantidade, fertilizante.grandeza, fertilizante.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(fertilizante.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(fertilizante.item, fertilizante.categoria, fertilizante.quantidade, fertilizante.grandeza, fertilizante.id, fertilizante.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="fertilizantesResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(fertilizantesResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(fertilizantesResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaDefensivos" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('defensivo')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!defensivosResponse">
                        <Loader />
                    </div>
                    <table v-else="!defensivosResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="defensivo in defensivosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenardefensivo)"
                                class=" even:bg-gray-100" :key="defensivo.id">
                                <td class="p-2 capitalize">{{ defensivo.item }}</td>
                                <td class="p-2">{{ defensivo.quantidade + " " + defensivo.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(defensivo.item, defensivo.categoria, defensivo.quantidade, defensivo.grandeza, defensivo.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(defensivo.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(defensivo.item, defensivo.categoria, defensivo.quantidade, defensivo.grandeza, defensivo.id, defensivo.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="defensivosResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(defensivosResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(defensivosResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>
            <Transition name="slide">
                <div v-if="showTabelaOutros" id="container" class="flex flex-col min-w-[70%] mt-[3%]">
                    <div class="flex flex-row">
                        <span
                            class="self-start bg-escuro px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                            @click="handleNovoEstoque('outros')">
                            Adicionar item
                        </span>
                    </div>

                    <div v-if="!outrosResponse">
                        <Loader />
                    </div>
                    <table v-else="!outrosResponse" class="bg-white shadow-xl w-full">
                        <thead class="bg-verde text-claro">
                            <th class="p-2 ">Item</th>
                            <th class="p-2 ">Quantidade</th>
                            <th class="p-2 ">Editar</th>
                            <th class="p-2 ">Deletar</th>
                            <th class="p-2 ">Adicionar</th>
                        </thead>
                        <tbody class="text-escuro font-semibold">
                            <tr v-for="outro in outrosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenaroutro)"
                                class=" even:bg-gray-100" :key="outro.id">
                                <td class="p-2 capitalize">{{ outro.item }}</td>
                                <td class="p-2">{{ outro.quantidade + " " + outro.grandeza }}</td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalEditar(outro.item, outro.categoria, outro.quantidade, outro.grandeza, outro.id)"
                                        @close="showModalEditar = false">
                                        &#x270F
                                    </span>
                                </td>
                                <td class="p-2">
                                    <span
                                        class=" transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleDeleteEstoque(outro.id)">
                                        &#x274C
                                    </span>

                                </td>
                                <td class="p-2">
                                    <span
                                        class="transition-all cursor-pointer material-icons block text-center hover:text-xl"
                                        @click="handleModalRepor(outro.item, outro.categoria, outro.quantidade, outro.grandeza, outro.id, outro.safra_id)">
                                        &#x2795
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="outrosResponse"
                        class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-escuro space-x-8 rounded-b-xl mb-[50px]">
                        <button v-if="pagina.atual > 0" @click="handlePagina('anterior')" class="text-claro font-bold">
                            &lt-
                            Anterior </button>
                        <div class="flex flex-col items-center">

                            <p class="text-claro font-semibold">Pág.</p>
                            <select v-model="pagina.atual"
                                class=" p-1 text-claro font-bold rounded-lg  bg-verde border-2 border-claro">
                                <option v-for="i in Math.ceil(outrosResponse.data.length / pagina.tamanho)"
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
                        <button v-if="pagina.atual < (Math.ceil(outrosResponse.data.length / pagina.tamanho) - 1)"
                            @click="handlePagina('proxima')" class="text-claro font-bold"> Próximo ->
                        </button><br>
                    </div>
                </div>
            </Transition>


            <Transition name="pop">
                <ModalNovoEstoque v-if="showModalAdicionar" @close="showModalAdicionar = false"
                    @adicionarItem="handleSubmitNovoEstoque()">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">

                        <input v-model="estoqueInput.categoria" type="hidden" default="semente/muda"
                            placeholder="João da silva" name="nome">

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.item" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
                                do item</label>
                        </div>



                        <div class="relative z-0 w-full mb-6 group">

                            <label for=""
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grandeza</label>
                            <select v-model="estoqueInput.grandeza" placeholder="João da silva"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option class="bg-verde font-semibold" value="mg">mg | Miligrama</option>
                                <option class="bg-verde font-semibold" value="kg">Kg | Kilograma</option>
                                <option class="bg-verde font-semibold" value="t">t | Tonelada</option>
                                <option class="bg-verde font-semibold" value="ml">ml | Mililitro</option>
                                <option class="bg-verde font-semibold" value="l">L | litro</option>
                                <option class="bg-verde font-semibold" value="un"> un | Unidade </option>
                            </select>
                        </div>

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade</label>
                        </div>
                        <div v-if="safraResponse.data != ''">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(estoqueInput.custo)"
                                    v-model="estoqueInput.custo" name="floating_email" id="floating_email"
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
                                <select v-model="estoqueInput.safra"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                    <option class="bg-verde font-semibold" v-for="safra in safraResponse.data"
                                        :key="safra.id" v-bind:value=safra.id>{{
                                            safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                        }}
                                    </option>
                                </select>
                            </div>
                        </div>

                    </div>
                </ModalNovoEstoque>
            </Transition>
            <Transition name="pop">
                <ModalDeletarEstoque v-if="showModalDeletar" @close="showModalDeletar = false"
                    @deletarItem="handleSubmitDeleteEstoque()">
                    <h1 class="text-center text-xl text-claro light">Deseja mesmo deletar este item?</h1>
                    <h2 class="text-center text-claro animate-bounce">Esta ação <b class="text-vermelho"><u>não pode ser
                                desfeita.</u> </b></h2>
                </ModalDeletarEstoque>
            </Transition>

            <Transition name="pop">
                <ModalDeletarNegado v-if="showModalDeletarNegado" @close="showModalDeletarNegado = false">
                    <h2 class="text-center text-claro text-2xl font-semibold">Este Item está registrado em uma tarefa, não
                        pode ser
                        deletado.</h2>
                </ModalDeletarNegado>
            </Transition>

            <Transition name="pop">
                <ModalEditarEstoque v-if="showModalEditar" @close="showModalEditar = false"
                    @editarItem="handleSubmitEditarEstoque(estoqueInput.id)">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">


                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.item" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade</label>
                        </div>


                        <div class="relative z-0 w-full mb-6 group">

                            <label for="recebe_salario"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">Grandeza</label>
                            <select v-model="estoqueInput.grandeza" type="text" placeholder="João da silva"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                <option value="mg">mg - Miligrama</option>
                                <option value="kg">Kg - Kilograma</option>
                                <option value="t">t - tonelana</option>
                                <option value="ml">ml - Mililitro</option>
                                <option value="l">L - litro</option>
                                <option value="un"> un- </option>
                            </select>
                        </div>

                    </div>
                </ModalEditarEstoque>
            </Transition>
            <Transition name="pop">
                <ModalAdicionarColheita v-if="showModalAdicionarColheita" @close="showModalAdicionarColheita = false"
                    @adicionarColheita="handleSubmitAdicionarColheita(estoqueInput.id)">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">



                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                                colhida em | {{ estoqueInput.grandeza }}</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-on:input="limitarAreaColheita(estoqueInput.id)"
                                v-model="colheitaInput.area_adicionar_colheita" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Área
                                colhida | em Hectares</label>
                        </div>




                    </div>
                </ModalAdicionarColheita>
            </Transition>
            <Transition name="pop">
                <ModalEditarEstoqueColheita v-if="showModalEditarColheita" @close="showModalEditarColheita = false"
                    @editarItemColheita="handleSubmitEditarEstoqueColheita(estoqueInput.id)">
                    <Transition name="pop">
                        <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos os
                            campos obrigatórios</h1>
                    </Transition>
                    <div class="flex flex-col">
                        <h1 class="text-center font-semibold text-claro text-lg">Quantidade atual de {{ estoqueInput.item
                        }}:</h1>
                        <h1 class="text-center font-semibold text-verde_claro text-lg mb-4">{{ "Em " + " " +
                            formatar(estoqueInput.grandeza) }}</h1>



                        <div class="relative z-0 w-full mb-6 group">

                            <input type="number" v-on:input="limitarArea(estoqueInput.id)"
                                v-model="estoqueInput.area_colhida" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hectares
                                colhidos</label>
                        </div>

                    </div>
                </ModalEditarEstoqueColheita>
            </Transition>
            <Transition name="pop">
                <ModalAdicionarItemEstoque v-if="showModalRepor" @close="showModalRepor = false"
                    @reporItem="handleSubmitReporEstoque(estoqueInput.id)">
                    <div class="flex flex-col">
                        <Transition name="pop">
                            <h1 v-if="showPreencha" class="text-center text-vermelho font-bold animate-pulse">Preencha todos
                                os
                                campos obrigatórios</h1>
                        </Transition>

                        <p class="text-lg text-claro mb-4">Quantidade atual: <b>{{
                            estoqueInput.quantidade +
                            estoqueInput.grandeza
                        }} </b></p>

                        <div class="relative z-0 w-full mb-6 group">

                            <input type="text" v-model="estoqueInput.quantidade_repor" name="floating_email"
                                id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                placeholder=" " required>
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantidade
                                à adicionar</label>
                        </div>
                        <div v-if="safraResponse.data != ''">
                            <div class="relative z-0 w-full mb-6 group">

                                <input type="text" v-on:input="precoFormatar(estoqueInput.custo)"
                                    v-model="estoqueInput.custo" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer"
                                    placeholder=" " required>
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Custo</label>
                            </div>


                            <div class="flex flex-col" v-if="estoqueInput.categoria != 'colheita'">
                                <div class="relative z-0 w-full mb-6 group">

                                    <label
                                        class="peer-focus:font-medium absolute text-sm text-claro  duration-300 transform -translate-y-6  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verde_claro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale- peer-focus:-translate-y-6">
                                        Adicionar Despeza à qual safra? </label>
                                    <select v-model="estoqueInput.safra"
                                        class="block py-2.5 px-0 w-full text-sm text-claro bg-transparent bg-opacity-10 bg-verde border-0 border-b-2 border-verde appearance-none focus:outline-none focus:ring-0 focus:border-verde_claro peer">
                                        <option class="bg-verde font-semibold" v-for="safra in safraResponse.data"
                                            :key="safra.id" v-bind:value=safra.id>{{
                                                safra.cultivo + " (" + safra.data_inicio + " - " + safra.data_fim + ")"
                                            }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalAdicionarItemEstoque>
            </Transition>


        </div>
    </div>
    <div v-if="screen === 'mobile'">

        <!-- Icones -->

        <div class="flex w-full justify-between ">

            <button @click="trocarTabelaMobile('colheita')"
                :class="` text-claro bg-${bgIconesTabelas.colheitas} text-center font-semibold transition-all rounded-full   w-[50px]`">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.97 57.97" class="p-2" fill="#396858">
                    <defs></defs>
                    <g id="Camada_2" data-name="Camada 2">
                        <g id="_1" data-name="1">
                            <g id="_750_Grow_leaf_nature_plant" data-name="750, Grow, leaf, nature, plant">
                                <path class="cls-1" d="M51.66,13l0,.05a.72.72,0,0,1-.24.14l0,0A1.2,1.2,0,0,1,51.66,13Z" />
                                <rect class="cls-1" x="47.27" y="34.71" width="2.52" height="2.52"
                                    transform="translate(-11.22 44.85) rotate(-45)" />
                                <rect class="cls-1" x="44.06" y="18.85" width="2.52" height="2.52"
                                    transform="translate(-0.95 37.93) rotate(-45)" />
                                <path class="cls-1" d="M30.24,32.36v.1h0A.34.34,0,0,0,30.24,32.36Z" />
                                <path class="cls-1" d="M27.63,32.46h0v-.1A.34.34,0,0,0,27.63,32.46Z" />
                                <path class="cls-1" d="M27.63,20.87h0v-.1A.34.34,0,0,0,27.63,20.87Z" />
                                <polygon class="cls-1" points="14.3 33.94 12.51 35.72 10.73 33.94 12.51 32.15 14.3 33.94" />
                                <path class="cls-1"
                                    d="M58,15.12a5,5,0,0,0-6.81-4.72A29.66,29.66,0,0,0,41.84,3,29,29,0,0,0,8.47,8.47,28.71,28.71,0,0,0,0,28.93a29.19,29.19,0,0,0,4.71,16,4.84,4.84,0,0,0-1,3,5,5,0,0,0,5,5,5.24,5.24,0,0,0,2.72-.79,29.12,29.12,0,0,0,38-2.64,29.13,29.13,0,0,0,6.69-30.56A5,5,0,0,0,58,15.12ZM10.79,49.4l0,.07a1.29,1.29,0,0,1-.17.23c-.06,0-.12.09-.18.15h0a2.85,2.85,0,0,1-1.62.56,2.5,2.5,0,0,1-2.52-2.52,3.46,3.46,0,0,1,.69-1.72H7a3.31,3.31,0,0,1,.21-.3l.14,0a.53.53,0,0,0,.26-.16.77.77,0,0,0,.3-.1c.1-.1.1-.1.2-.1s.1-.1.41-.1h.2A2.55,2.55,0,0,1,10.79,49.4Zm18.14,6.05a26.38,26.38,0,0,1-15.66-5.2,3,3,0,0,0,.34-.85,5.1,5.1,0,0,0-4.84-6.55,5,5,0,0,0-2.23.51A26.54,26.54,0,0,1,28.93,2.62,26.37,26.37,0,0,1,49,11.87a4.64,4.64,0,0,0-1.14,2.64,5,5,0,0,0,5,5.62A4.94,4.94,0,0,0,53.91,20a27.41,27.41,0,0,1,1.54,8.92A26.55,26.55,0,0,1,28.93,55.45ZM54.05,17.38a2.43,2.43,0,0,1-1.12.26,2.36,2.36,0,0,1-2.42-2.72v-.1a1.45,1.45,0,0,1,.2-.71c0-.1.1-.2.1-.3a3.15,3.15,0,0,1,.57-.67l0,0a1.2,1.2,0,0,1,.24-.15,2.34,2.34,0,0,1,1.27-.35,2.5,2.5,0,0,1,2.52,2.52A2.47,2.47,0,0,1,54.05,17.38Z" />
                                <path class="cls-1"
                                    d="M34.78,33.67a8.08,8.08,0,0,0,6-2.52,8.47,8.47,0,0,0,2.52-6A1.33,1.33,0,0,0,42,23.79H36.19a8.43,8.43,0,0,0-5.95,2.43V22.08h4.54a8.57,8.57,0,0,0,8.57-8.57A1.33,1.33,0,0,0,42,12.2H36.19a8.39,8.39,0,0,0-5.95,2.43V10a1.31,1.31,0,0,0-2.62,0v4.65a8.37,8.37,0,0,0-5.95-2.43H15.83a1.33,1.33,0,0,0-1.31,1.31,8.57,8.57,0,0,0,8.57,8.57h4.53v4.14a8.41,8.41,0,0,0-5.95-2.43H15.83a1.33,1.33,0,0,0-1.31,1.31,8.6,8.6,0,0,0,8.57,8.57h4.53v4.25a8.37,8.37,0,0,0-5.95-2.43H15.83a1.33,1.33,0,0,0-1.31,1.31,8.6,8.6,0,0,0,8.57,8.57h4.53v5.44a1.31,1.31,0,1,0,2.62,0V45.37h4.54a8.6,8.6,0,0,0,8.57-8.57A1.33,1.33,0,0,0,42,35.49H36.19a8.39,8.39,0,0,0-5.95,2.43V33.67ZM32,28.13a5.64,5.64,0,0,1,4.23-1.82h4.44a6,6,0,0,1-1.61,3,5.66,5.66,0,0,1-4.24,1.81H30.34A6.35,6.35,0,0,1,32,28.13Zm-8.87,3.12a6,6,0,0,1-4.24-1.81,5.9,5.9,0,0,1-1.61-3h4.43a6,6,0,0,1,4.24,1.82,5.84,5.84,0,0,1,1.61,3Zm0,11.6A6,6,0,0,1,18.85,41a5.91,5.91,0,0,1-1.61-3h4.43a6,6,0,0,1,4.24,1.81,5.9,5.9,0,0,1,1.61,3Zm8.87-3A5.64,5.64,0,0,1,36.19,38h4.44A6,6,0,0,1,39,41a5.67,5.67,0,0,1-4.24,1.82H30.34A5.62,5.62,0,0,1,32,39.82Zm8.77-25a6.07,6.07,0,0,1-5.95,4.74H30.34a5.23,5.23,0,0,1,1.72-2.93,5.64,5.64,0,0,1,4.23-1.81Zm-23.49-.1h4.53A6,6,0,0,1,26,16.53a5.9,5.9,0,0,1,1.61,3H23.19a6.06,6.06,0,0,1-6-4.74ZM27.62,32.46v-.1a.34.34,0,0,0,0,.1Zm0-11.59v-.1a.34.34,0,0,0,0,.1Zm2.61,11.59a.34.34,0,0,0,0-.1v.1Z" />
                                <path class="cls-1"
                                    d="M10.75,49.47a1.29,1.29,0,0,1-.17.23c-.06,0-.12.09-.18.15a1.09,1.09,0,0,1,.08-.15A1.18,1.18,0,0,1,10.75,49.47Z" />
                                <rect class="cls-1" x="5.74" y="23.88" width="2.52" height="2.52"
                                    transform="translate(-15.73 12.31) rotate(-45)" />
                                <path class="cls-1" d="M7.3,45.83a1.14,1.14,0,0,1-.35.34,3.31,3.31,0,0,1,.21-.3Z" />
                            </g>
                        </g>
                    </g>
                </svg>

            </button>
            <button @click="trocarTabelaMobile('semente')"
                :class="` text-claro bg-${bgIconesTabelas.sementes} text-center font-semibold transition-all rounded-[10000%] h-[50px] w-[50px] z-[1]`">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.15 403.62" class="p-2 scale-[90%] mt-[-4px]"
                    fill="#396858">
                    <defs></defs>
                    <g id="Camada_2" data-name="Camada 2">
                        <g id="Camada_1-2" data-name="Camada 1">
                            <path class="cls-1"
                                d="M192.79,354.51V305.2L185.2,311c13.6,2.57,28.7-.08,41.56-4.56,33.86-11.81,58.76-39.75,75.36-70.65s26.36-65.24,32.89-99.59a6.11,6.11,0,0,0-5.78-7.6c-14.7-1-30.19,1.72-44.33,5.38a164.74,164.74,0,0,0-83.3,51.36c-17.33,20.11-29.5,43.85-37.81,69-2.43,7.35,9.15,10.5,11.57,3.19,12.62-38.14,35.52-72.76,70.22-94a155.47,155.47,0,0,1,39.25-17.06,169.29,169.29,0,0,1,17.08-3.86A121.87,121.87,0,0,1,314.78,141a101,101,0,0,1,14.45-.36L323.44,133c-9.29,48.85-25.06,102.29-62,137.85-9.8,9.45-22.64,18.09-34.24,22.65a95.75,95.75,0,0,1-15.56,4.67q-1.65.34-3.33.63c-.89.15-3.56.52-2.17.35-1.95.24-3.9.43-5.85.54a73,73,0,0,1-9.81-.05c-.81-.07-4.24-.52-1.18-.08l-.93-.14c-3.78-.72-7.6,1.63-7.6,5.78v49.31c0,7.72,12,7.73,12,0Z" />
                            <path class="cls-1"
                                d="M281.94,158.52c-9.95,8.46-19.51,17.42-28.82,26.57C237,201,220.87,217.83,209,237.22c-4,6.6,6.34,12.64,10.36,6.05,11.56-18.88,27.4-35.17,43.15-50.59,9-8.83,18.29-17.49,27.92-25.67,5.89-5-2.63-13.46-8.49-8.49Z" />
                            <path class="cls-1"
                                d="M198.05,249.74c-5.56,8-11.55,16.18-15.66,25-3.22,7,7.12,13.07,10.37,6.06,4.1-8.87,10.09-17,15.65-25,4.41-6.35-6-12.36-10.36-6Z" />
                            <path class="cls-1"
                                d="M154.36,354.51V305.2c0-4.15-3.82-6.5-7.6-5.78l-.74.11c1.83-.26.75-.07-.62,0a71.52,71.52,0,0,1-7.88.23c-1.81,0-3.61-.15-5.4-.31-1-.09-2-.2-2.93-.32s1.21.2-.45-.06l-1.7-.27a95,95,0,0,1-15-3.81,86.41,86.41,0,0,1-16.15-7.37,108.24,108.24,0,0,1-17.57-12.5c-14.68-12.83-26.1-28.81-35.25-45.94C27.16,199.33,18,166.14,11.71,133l-5.79,7.59c14-.91,26.37,1.26,39.72,4.59a153.74,153.74,0,0,1,78.29,47.33c16.51,18.76,28,41.37,35.86,65,2.41,7.3,14,4.17,11.57-3.19-13.41-40.53-37.53-77.14-74.1-100.16a170.67,170.67,0,0,0-75.68-25.08,102.35,102.35,0,0,0-15.66-.47,6.11,6.11,0,0,0-5.78,7.6C9.86,187.29,27,243,65.79,279.9c18.74,17.83,42.81,30.21,68.88,31.78A62.55,62.55,0,0,0,150,311l-7.59-5.79v49.31c0,7.72,12,7.73,12,0Z" />
                            <path class="cls-1"
                                d="M44.72,167c9.64,8.18,18.89,16.84,27.92,25.67,15.75,15.42,31.59,31.71,43.15,50.59,4,6.58,14.4.56,10.36-6.05C114.28,217.83,98.17,201,82,185.09c-9.31-9.15-18.88-18.11-28.83-26.57-5.85-5-14.38,3.48-8.49,8.49Z" />
                            <path class="cls-1"
                                d="M126.74,255.79c5.56,8,11.55,16.19,15.66,25,3.23,7,13.58.91,10.36-6.06-4.1-8.86-10.1-17-15.66-25-4.37-6.3-14.78-.31-10.36,6Z" />
                            <path class="cls-1"
                                d="M56.78,401.16C69.87,392,85.06,385.22,100,379.81c33.24-12,69.44-16.56,104.35-9.85,26.25,5,50.59,16.07,72.53,31.2,6.38,4.4,12.38-6,6.06-10.36-37.74-26-82.79-39.14-128.63-35.24a232.66,232.66,0,0,0-87.63,25.87,145,145,0,0,0-16,9.37c-6.28,4.4-.29,14.8,6.06,10.36Z" />
                            <path class="cls-1"
                                d="M91.33,402.06,117,374.48c4.37-4.71-2.68-11.8-7.07-7.08L84.26,395c-4.38,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M117,400.8,147.47,368c4.38-4.71-2.68-11.79-7.07-7.07l-30.51,32.85c-4.38,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M142.59,400.8l32-34.41c4.37-4.71-2.68-11.8-7.07-7.07l-32,34.41c-4.38,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M167.28,400.8,197.79,368c4.38-4.71-2.68-11.79-7.07-7.07l-30.51,32.85c-4.38,4.71,2.67,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M192.06,400.8l25.63-27.59c4.38-4.71-2.67-11.8-7.07-7.07L185,393.73c-4.37,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M217.69,400.8l22.18-23.87c4.38-4.71-2.68-11.8-7.07-7.07l-22.18,23.87c-4.37,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M243.32,400.8l14.37-15.46c4.37-4.71-2.68-11.8-7.08-7.07l-14.36,15.46c-4.37,4.71,2.68,11.8,7.07,7.07Z" />
                            <path class="cls-1"
                                d="M230.62,91.44c-.2,29.15-12.66,61.65-40.38,75-25.87,12.44-53.51-1.69-67.8-24.43-16.78-26.71-18.57-63.11-5.19-91.6C128.6,26.25,153,6.1,181.06,13.18c33.69,8.51,49.34,46.59,49.56,78.26,0,7.72,12,7.74,12,0-.24-33.67-15.48-71.51-48-86.1-30.94-13.91-63.62.77-81.51,27.82-20.24,30.6-21.73,72.51-6.27,105.38,13.73,29.18,44.2,51.11,77.36,42.73,38.94-9.84,58.11-52.84,58.37-89.83C242.67,83.72,230.67,83.71,230.62,91.44Z" />
                            <path class="cls-1" d="M163.58,46.16V87.37c0,7.73,12,7.74,12,0V46.16c0-7.72-12-7.74-12,0Z" />
                            <path class="cls-1" d="M163.58,109.29V147.9c0,7.72,12,7.73,12,0V109.29c0-7.72-12-7.74-12,0Z" />
                        </g>
                    </g>
                </svg> </button>

            <button @click="trocarTabelaMobile('fertilizante')"
                :class="` text-claro bg-${bgIconesTabelas.fertilizantes} text-center font-semibold transition-all rounded-full  w-[50px]`">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="p-2" fill="#396858">
                    <path
                        d="m19.767 86.556-1.793 1.793a4.428 4.428 0 0 0 0 6.254l.601.601a4.428 4.428 0 0 0 6.254 0l1.726-1.726c14.737 2.043 30.485 2.023 46.832-.059l1.785 1.785a4.408 4.408 0 0 0 3.127 1.293 4.41 4.41 0 0 0 3.127-1.293l.601-.601a4.428 4.428 0 0 0 0-6.254l-1.793-1.793c5.409-24.59 5.409-48.522 0-73.112l1.793-1.793a4.428 4.428 0 0 0 0-6.254l-.601-.601a4.428 4.428 0 0 0-6.254 0l-1.726 1.726C58.708 4.478 42.96 4.498 26.614 6.58l-1.785-1.785a4.43 4.43 0 0 0-6.254 0l-.601.601a4.428 4.428 0 0 0 0 6.254l1.793 1.793c-5.409 24.591-5.409 48.523 0 73.113zm2.704-74.651L20.096 9.53a1.424 1.424 0 0 1 0-2.012l.601-.6a1.424 1.424 0 0 1 2.012 0l2.306 2.306c.329.33.795.486 1.255.427 16.614-2.176 32.593-2.195 47.494-.054a1.5 1.5 0 0 0 1.274-.424l2.255-2.255a1.424 1.424 0 0 1 2.012 0l.601.601a1.425 1.425 0 0 1 0 2.012l-2.375 2.375a1.497 1.497 0 0 0-.403 1.389c5.549 24.699 5.549 48.713 0 73.412a1.497 1.497 0 0 0 .403 1.389l2.375 2.375a1.424 1.424 0 0 1 0 2.012l-.601.6a1.423 1.423 0 0 1-2.012 0l-2.306-2.306a1.501 1.501 0 0 0-1.256-.426c-16.615 2.176-32.593 2.195-47.494.054-.469-.068-.94.09-1.274.424l-2.255 2.254a1.426 1.426 0 0 1-2.012 0l-.601-.601a1.425 1.425 0 0 1 0-2.012l2.375-2.375c.364-.363.516-.888.403-1.389-5.549-24.699-5.549-48.713 0-73.412a1.499 1.499 0 0 0-.402-1.389z" />
                    <path fill="#396858"
                        d="M39.258 39.498c2.273 1.184 4.714 1.506 6.703 1.506.844 0 1.605-.059 2.238-.134v19.438c-4.298.467-7.792 2.908-8.748 6.265a1.5 1.5 0 0 0 1.442 1.91h17.612a1.5 1.5 0 0 0 1.443-1.91c-.956-3.357-4.451-5.798-8.749-6.265V48.864c.932.178 2.116.337 3.447.337 1.688 0 3.591-.253 5.432-1.036 5.084-2.164 7.577-7.47 7.681-7.695a1.5 1.5 0 0 0-.87-2.045c-.233-.081-5.785-1.965-10.871.199-2.009.855-3.607 2.199-4.819 3.528v-3.064h-.007c0-.176-.024-.352-.086-.52-.085-.232-2.159-5.716-7.061-8.268s-10.583-1.104-10.822-1.041a1.502 1.502 0 0 0-1.026 1.971c.086.233 2.159 5.717 7.061 8.268zm17.935 1.887c2.454-1.044 5.157-.86 6.892-.559-.985 1.46-2.728 3.535-5.181 4.579-2.457 1.046-5.162.861-6.898.558.979-1.457 2.717-3.527 5.187-4.578zM43.497 65.484c1.366-1.378 3.663-2.263 6.203-2.263 2.54 0 4.837.885 6.203 2.263H43.497zm-.837-32.522c2.365 1.231 3.941 3.435 4.811 4.966-1.754.166-4.463.14-6.828-1.091-2.365-1.231-3.942-3.436-4.811-4.966 1.753-.167 4.462-.14 6.828 1.091z" />
                </svg> </button>

            <button @click="trocarTabelaMobile('defensivo')"
                :class="` text-claro bg-${bgIconesTabelas.defensivos} text-center font-semibold transition-all rounded-full w-[50px]`">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="p-2" fill="#396858">
                    <path
                        d="M54.03 22.92c-2.71-2.7-5.84-3.22-8.17-1.34-.81.65-1.64 1.72-1.89 3.47-1.46.21-2.63.85-3.48 1.9-3.46 4.3 1.68 10.69 7.44 10.69a8.6 8.6 0 0 0 6.1-2.52c1.63-1.63 2.53-3.8 2.53-6.1s-.9-4.47-2.53-6.1ZM42.7 33.11c-.9-1.09-2.09-3.11-.65-4.9.46-.58 1.08-.95 1.88-1.12.05.54.15 1.13.29 1.77.4 1.34.33 2.47-.19 3.27-.31.47-.77.81-1.33.98Zm9.92.6a6.656 6.656 0 0 1-8.32.86c.56-.34 1.04-.79 1.41-1.34.6-.91 1.16-2.51.45-4.88-.44-1.86-.53-4.01.96-5.2 2.21-1.78 4.77.47 5.5 1.19 1.25 1.25 1.94 2.92 1.94 4.69s-.69 3.43-1.94 4.69Z" />
                    <path
                        d="M60 29.02c0-3.22-1.26-6.25-3.54-8.53a12.035 12.035 0 0 0-12.54-2.85l-8.58-8.57c.26-.49.45-1.03.45-1.6 0-.92-.36-1.79-1.02-2.45-1.31-1.31-3.58-1.31-4.89 0l-5.96 5.96c-.66.66-1.02 1.52-1.02 2.45s.36 1.79 1.02 2.45 1.52 1.02 2.45 1.02c.58 0 1.11-.18 1.6-.45l8.58 8.57c-1.54 4.37-.46 9.23 2.85 12.54 2.35 2.35 5.44 3.53 8.54 3.53 3.09 0 6.18-1.18 8.53-3.53 2.28-2.28 3.53-5.31 3.53-8.53zM25.34 14.46c-.28-.28-.43-.64-.43-1.03s.15-.75.43-1.03l5.96-5.96c.55-.55 1.51-.55 2.06 0 .28.28.43.64.43 1.03s-.15.75-.43 1.03l-5.96 5.96c-.55.56-1.51.56-2.06 0zm15.47 21.68a10.053 10.053 0 0 1-2.18-10.99c.16-.37.07-.8-.22-1.09l-8.9-8.89 4.55-4.55 1.75 1.75-1.46 1.46a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.46-1.46 1.9 1.9-1.46 1.45a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.46-1.46 2.42 2.42c.29.29.72.37 1.09.22 3.78-1.57 8.1-.72 10.99 2.18 1.9 1.9 2.95 4.43 2.95 7.12 0 2.69-1.05 5.22-2.95 7.12-3.93 3.92-10.31 3.92-14.24 0zM7.17 39.3l-1.9 16.78c-.13 1.11.18 2.13.85 2.89.59.66 1.4 1.03 2.23 1.03h11.84c3.58 0 7.16 0 10.74-.03.84 0 1.65-.38 2.24-1.03.67-.75.98-1.78.85-2.88l-1.91-16.83c1.62-.6 2.8-2.13 2.8-3.96 0-2.35-1.91-4.26-4.26-4.26H8.26C5.91 31.01 4 32.92 4 35.27c0 1.96 1.36 3.55 3.17 4.04zm22.96.22.08.72h-2.1c-.55 0-1 .46-1 1.01s.45 1 1 1h2.32l.26 2.29h-2.1c-.55 0-1 .46-1 1.01s.45 1 1 1h2.32l.26 2.29h-2.1c-.55 0-1 .46-1 1.01s.45 1 1 1h2.32l.26 2.29h-2.1c-2.51 0-4.04-1.52-7.2-5.26-3.56-4.21-8.11-5.07-13.85-2.68l.64-5.66h20.99zm1.54 18.09c-.21.23-.48.36-.75.36-5.55.04-11.1.03-16.65.02H8.35c-.27 0-.54-.14-.74-.37-.29-.32-.42-.8-.36-1.33l1-8.82c5.41-2.58 9.43-2.07 12.59 1.67 3.13 3.7 5.22 5.97 8.73 5.97h2.32l.13 1.16c.06.53-.07 1-.36 1.33zM8.26 33h22.38c1.25 0 2.26 1.01 2.26 2.26s-1.01 2.26-2.26 2.26H8.26C7.01 37.52 6 36.51 6 35.26S7.01 33 8.26 33zm11.19-4.03c2.68 0 4.85-2.18 4.85-4.85 0-2.28-1.83-7.46-4.85-7.46s-4.85 5.18-4.85 7.46c0 2.68 2.18 4.85 4.85 4.85zm0-10.31c1.2 0 2.85 3.48 2.85 5.46 0 1.57-1.28 2.85-2.85 2.85s-2.85-1.28-2.85-2.85c0-1.98 1.65-5.46 2.85-5.46zm-12.6-1.17c0 1.69 1.38 3.07 3.07 3.07s3.07-1.38 3.07-3.07-1.38-3.07-3.07-3.07-3.07 1.38-3.07 3.07zm4.13 0a1.071 1.071 0 0 1-2.14 0 1.071 1.071 0 0 1 2.14 0zm7.11-3.41c2.14 0 3.88-1.74 3.88-3.88s-1.74-3.88-3.88-3.88-3.88 1.74-3.88 3.88 1.74 3.88 3.88 3.88zm0-5.76c1.04 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88-1.88-.84-1.88-1.88.84-1.88 1.88-1.88z" />
                    <path
                        d="M23.78 44.41a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm-9.84 7.34a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                    <circle cx="49.7" cy="25.3" r="1.25" />
                    <circle cx="50.72" cy="30.99" r="1.25" />
                </svg> </button>
            <button @click="trocarTabelaMobile('outros')"
                :class="` text-claro bg-${bgIconesTabelas.outros} text-center font-semibold transition-all rounded-full  w-[50px]`">
                <svg xmlns="http://www.w3.org/2000/svg" class="p-2" data-name="Layer 1" viewBox="0 0 32 32" fill="#396858">
                    <path
                        d="M30.094,22.317l-4.6-4.613a2.513,2.513,0,0,0-3.535,0l-.743.743a1.975,1.975,0,0,0-1.131-.623L18.3,16.04l7.049-7.049a3.21,3.21,0,0,0,3.229-.839L29.852,6.87l0,0,0,0,1.495-1.5a.5.5,0,0,0,0-.707L27.374.676a.5.5,0,0,0-.707,0l-2.78,2.79A3.3,3.3,0,0,0,23.043,6.7L16,13.743,8.951,6.694a3.3,3.3,0,0,0-.834-3.227L6.906,2.256a.473.473,0,0,0-.05-.075.474.474,0,0,0-.075-.05L5.331.681a.5.5,0,0,0-.707,0L.644,4.661a.5.5,0,0,0,0,.707L3.43,8.154a3.225,3.225,0,0,0,3.222.836L13.7,16.04l-1.786,1.786a1.975,1.975,0,0,0-1.131.623l-.743-.743a2.514,2.514,0,0,0-3.538,0l-4.6,4.609A6.455,6.455,0,0,0,0,26.91V29.5A2.5,2.5,0,0,0,2.5,32H5.09a6.454,6.454,0,0,0,4.593-1.906l4.613-4.6a2.513,2.513,0,0,0,0-3.535l-.706-.706a1.975,1.975,0,0,0,.622-1.123L16,18.337l1.79,1.791a1.975,1.975,0,0,0,.622,1.123l-.706.706a2.514,2.514,0,0,0,0,3.538l4.609,4.6A6.455,6.455,0,0,0,26.91,32H29.5A2.5,2.5,0,0,0,32,29.5V26.91A6.454,6.454,0,0,0,30.094,22.317ZM19.81,18.788c.007,0,.013,0,.019,0a.993.993,0,0,1,.711.393l1.514,2.031a.626.626,0,0,1-.875.875l-2.03-1.514a.992.992,0,0,1-.393-.707c0-.008,0-.016,0-.024a.993.993,0,0,1,1.059-1.058ZM27.02,1.737,30.293,5.01l-.792.8L26.228,2.532ZM24.6,4.172l.927-.931L28.8,6.514l-.928.932A2.314,2.314,0,1,1,24.6,4.172ZM1.7,5.014,4.977,1.742l.806.806L2.51,5.82ZM4.137,7.447l-.92-.92L6.49,3.254l.92.92A2.314,2.314,0,1,1,4.137,7.447ZM7.629,8.552a3.115,3.115,0,0,0,.883-.883l6.781,6.781-.883.883Zm3.831,10.633a.992.992,0,0,1,.7-.389.492.492,0,0,0,.063-.009h.036a.994.994,0,0,1,.992,1.061c0,.008,0,.016,0,.024a.992.992,0,0,1-.393.707l-2.03,1.514a.626.626,0,0,1-.875-.875Zm2.127,5.6-4.61,4.6A5.462,5.462,0,0,1,5.09,31H2.5A1.5,1.5,0,0,1,1,29.5V26.91a5.463,5.463,0,0,1,1.614-3.887l4.6-4.607a1.51,1.51,0,0,1,2.125,0l.831.831L9.144,20.618a1.636,1.636,0,0,0,1.3,2.607,1.629,1.629,0,0,0,.977-.332l1.373-1.024.794.794A1.51,1.51,0,0,1,13.587,24.786Zm2.061-7.511h0l-1.615,1.615a1.794,1.794,0,0,0-.883-.884l1.615-1.615h0L16.353,14.8h0L23.487,7.67a3.29,3.29,0,0,0,.4.483,3.324,3.324,0,0,0,.484.4l-7.132,7.132h0Zm2.685,1.094a1.976,1.976,0,0,0-.363.523L16.707,17.63l.883-.883,1.261,1.261A1.971,1.971,0,0,0,18.333,18.37ZM31,29.5A1.5,1.5,0,0,1,29.5,31H26.91a5.463,5.463,0,0,1-3.887-1.614l-4.607-4.6a1.51,1.51,0,0,1,0-2.125l.794-.794,1.373,1.024a1.629,1.629,0,0,0,.977.332,1.636,1.636,0,0,0,1.3-2.607l-1.024-1.373.831-.831a1.511,1.511,0,0,1,2.123,0l4.6,4.61A5.462,5.462,0,0,1,31,26.91Z" />
                </svg>
            </button>

        </div>
        <!--  -->

        <!-- Colheitas -->
        <Transition name="slide">
            <div v-if="showTabelaColheita" id="container" class="">
                <div class="flex flex-row">
                    <span
                        class="self-start bg-escuro mt-4 px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                        @click="handleNovoEstoque('semente/muda')">
                        Adicionar Colheita
                    </span>
                </div>

                <div class='flex justify-center items-center text-verde mb-4'>
                    <h1 class="font-semibold">Colheitas | </h1>
                    <Loader v-if="!colheitaResponse" />
                    <h1 v-else class="text-xl  font-bold">{{ colheitaResponse.data.length }}</h1>
                </div>

                <div v-if="!colheitaResponse">
                    <Loader />
                </div>
                <div v-else="!colheitaResponse" class="">

                    <div v-for="colheita in colheitaResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarSemente)"
                        class=" flex-col justify-between items-center p-2 mb-2 bg-verde_apagado rounded-xl text-escuro" :key="colheita.id">
                        <div class='flex justify-between items-center mb-1'>
                            <div class="flex">
                                <h1 class="text-sm capitalize  font-semibold">{{ colheita.cultivo }} &nbsp</h1>
                                <h1 class="text-xs capitalize">{{ " (" + colheita.data_inicio + " - " + colheita.data_fim +
                                    ")"
                                }} </h1>
                            </div>
                            <div class='flex font-bold'>
                                <h1 class="text-xs capitalize text-center">{{ colheita.area }}/
                                </h1>
                                <h1 class="text-xs capitalize text-center">{{ colheita.area_colhida }} (Ha)
                                </h1>
                            </div>
                        </div>


                       <div class='flex items-center'>
                        <h1 class="text-sm font-semibold">Colhido: &nbsp</h1>
                        <h1 class="text-sm font-semibold">{{ colheita.quantidade_real }} | &nbsp</h1>
                        <h1 class=" text-xs">{{ formatar(colheita.grandeza) }} </h1>
                       </div>
                       





                    </div>
                </div>


                <div v-if="colheitaResponse"
                    class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
                    <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"
                        class="text-escuro text-3xl font-bold">
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
                    <button v-if="pagina.atual < (Math.ceil(colheitaResponse.data.length / pagina.tamanho) - 1)"
                        @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
                    </button><br>
                </div>

            </div>
        </Transition>
        <!--  -->

        <!-- Sementes -->
        <Transition name="slide">
            <div v-if="showTabelaSementes" id="container" class="">
                <div class="flex flex-row">
                    <span
                        class="self-start bg-escuro mt-4 px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                        @click="handleNovoEstoque('semente/muda')">
                        Adicionar Semente/muda
                    </span>
                </div>

                <div class='flex justify-center items-center text-verde mb-4'>
                    <h1 class="font-semibold">Sementes | </h1>
                    <Loader v-if="!sementesResponse" />
                    <h1 v-else class="text-xl  font-bold">{{ sementesResponse.data.length }}</h1>
                </div>

                <div v-if="!sementesResponse">
                    <Loader />
                </div>
                <div v-else="!sementesResponse" class="">

                    <div v-for="semente in sementesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarSemente)"
                        class="flex justify-between items-center py-1 mb-2 bg-verde_apagado rounded-xl" :key="semente.id">
                        <h1 class="p-2 capitalize text-sm  font-semibold">{{ semente.item }}</h1>
                        <h1 class="p-2 text-sm font-bold">{{ semente.quantidade + " " + semente.grandeza }}</h1>
                    </div>
                </div>


                <div v-if="sementesResponse"
                    class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
                    <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"
                        class="text-escuro text-3xl font-bold">
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
                    <button v-if="pagina.atual < (Math.ceil(sementesResponse.data.length / pagina.tamanho) - 1)"
                        @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
                    </button><br>
                </div>

            </div>
        </Transition>
        <!--  -->

        <!-- Fertilizantes -->
        <Transition name="slide">
            <div v-if="showTabelaFetilizantes" id="container" class="">
                <div class="flex flex-row">
                    <span
                        class="self-start bg-escuro mt-4 px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                        @click="handleNovoEstoque('fertilizante')">
                        Adicionar Fertilizante
                    </span>
                </div>

                <div class='flex justify-center items-center text-verde mb-4'>
                    <h1 class="font-semibold">Fertilizantes | </h1>
                    <Loader v-if="!fertilizantesResponse" />
                    <h1 v-else class="text-xl  font-bold">{{ fertilizantesResponse.data.length }}</h1>
                </div>

                <div v-if="!fertilizantesResponse">
                    <Loader />
                </div>
                <div v-else="!fertilizantesResponse" class="">

                    <div v-for="fertilizante in fertilizantesResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarFertilizante)"
                        class="flex justify-between items-center py-1 mb-2 bg-verde_apagado rounded-xl"
                        :key="fertilizante.id">
                        <h1 class="p-2 capitalize text-sm  font-semibold">{{ fertilizante.item }}</h1>
                        <h1 class="p-2 text-sm font-bold">{{ fertilizante.quantidade + " " + fertilizante.grandeza }}</h1>
                    </div>
                </div>


                <div v-if="fertilizanteResponse"
                    class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
                    <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"
                        class="text-escuro text-3xl font-bold">
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
                    <button v-if="pagina.atual < (Math.ceil(fertilizanteResponse.data.length / pagina.tamanho) - 1)"
                        @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
                    </button><br>
                </div>

            </div>
        </Transition>
        <!--  -->

        <!-- Defensivos -->
        <Transition name="slide">
            <div v-if="showTabelaDefensivos" id="container" class="">
                <div class="flex flex-row">
                    <span
                        class="self-start bg-escuro mt-4 px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                        @click="handleNovoEstoque('fertilizante')">
                        Adicionar Defensivo
                    </span>
                </div>

                <div class='flex justify-center items-center text-verde mb-4'>
                    <h1 class="font-semibold">Defensivos | </h1>
                    <Loader v-if="!defensivosResponse" />
                    <h1 v-else class="text-xl  font-bold">{{ defensivosResponse.data.length }}</h1>
                </div>

                <div v-if="!defensivosResponse">
                    <Loader />
                </div>
                <div v-else="!defensivosResponse" class="">

                    <div v-for="defensivo in defensivosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarFertilizante)"
                        class="flex justify-between items-center py-1 mb-2 bg-verde_apagado rounded-xl" :key="defensivo.id">
                        <h1 class="p-2 capitalize text-sm  font-semibold">{{ defensivo.item }}</h1>
                        <h1 class="p-2 text-sm font-bold">{{ defensivo.quantidade + " " + defensivo.grandeza }}</h1>
                    </div>
                </div>


                <div v-if="defensivosResponse"
                    class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
                    <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"
                        class="text-escuro text-3xl font-bold">
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
                    <button v-if="pagina.atual < (Math.ceil(defensivosResponse.data.length / pagina.tamanho) - 1)"
                        @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
                    </button><br>
                </div>

            </div>
        </Transition>
        <!--  -->

        <!-- Outros -->
        <Transition name="slide">
            <div v-if="showTabelaOutros" id="container" class="">
                <div class="flex flex-row">
                    <span
                        class="self-start bg-escuro mt-4 px-6 py-2 rounded-md text-claro font-bold mb-4 transition-all hover:bg-verde"
                        @click="handleNovoEstoque('fertilizante')">
                        Adicionar Outro
                    </span>
                </div>

                <div class='flex justify-center items-center text-verde mb-4'>
                    <h1 class="font-semibold">Outros | </h1>
                    <Loader v-if="!outrosResponse" />
                    <h1 v-else class="text-xl  font-bold">{{ outrosResponse.data.length }}</h1>
                </div>

                <div v-if="!outrosResponse">
                    <Loader />
                </div>
                <div v-else="!outrosResponse" class="">

                    <div v-for="outro in outrosResponse.data.slice(pagina.atual * pagina.tamanho, (pagina.tamanho * pagina.atual) + pagina.tamanho).sort(tipoOrdenarFertilizante)"
                        class="flex justify-between items-center py-1 mb-2 bg-verde_apagado rounded-xl" :key="outro.id">
                        <h1 class="p-2 capitalize text-sm  font-semibold">{{ outro.item }}</h1>
                        <h1 class="p-2 text-sm font-bold">{{ outro.quantidade + " " + outro.grandeza }}</h1>
                    </div>
                </div>


                <div v-if="outrosResponse"
                    class="flex items-center justify-center self-end min-w-[260px] px-4 py-2 bg-[#B9C2B3] space-x-8 rounded-b-xl mb-[50px] ">
                    <button v-if="pagina.atual > 0" @click="handlePagina('anterior')"
                        class="text-escuro text-3xl font-bold">
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
                    <button v-if="pagina.atual < (Math.ceil(outrosResponse.data.length / pagina.tamanho) - 1)"
                        @click="handlePagina('proxima')" class="text-escuro text-3xl font-bold"> >
                    </button><br>
                </div>

            </div>
        </Transition>
        <!--  -->
        <section class="h-[60px]"></section>

    </div>
</template>

<style>
.slide-enter-from {
    scale: 0%;
    opacity: 0;
}

.slide-enter-to {
    scale: 100%;
}

.slide-enter-active {
    transition: all .2s cubic-bezier(0, 1.15, .47, 1.15);
    /* transition-delay: .8s; */
}

/* .slide-leave-from {
    scale: 100%;

}

.slide-leave-to {
    scale: 30%;
    opacity: 0;

}

.slide-leave-active {
    transition: all .4s cubic-bezier(0, 1.15, .47, 1.15);

} */
</style>
