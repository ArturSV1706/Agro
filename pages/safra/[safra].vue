<script setup>

definePageMeta({
    middleware: ["auth","subscription"]
})

const { supabase } = useSupabase()
const { user } = useAuth()
const { formatar, paraReal, corLucro } = useUtils()

const route = useRoute()
const router = useRouter()
const safra_id = route.params.safra
console.log(safra_id)

const safraResponse = ref();
const safrasAntigasResponse = ref();
const sementesResponse = ref();
const fertilizantesResponse = ref();
const defensivosResponse = ref();
const outrosResponse = ref();
const funcionariosResponse = ref();
const combustiveisResponse = ref();
const manutencoesResponse = ref();

const showDespesas = ref(); showDespesas.value = true
const showLucro = ref();
const showProdutividade = ref();


// Evita erro de carregamento
const usuarioResponse = ref();
usuarioResponse.value = await supabase.from("usuario").select()
// ----//----

if (process.client) {
    safraResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, id: safra_id })
    if (!safraResponse.value.data[0]) router.push({ path: "/" });
    safrasAntigasResponse.value = await supabase.from("safras").select().match({ user_id: user.value.id, status: "completa" }).neq('id', safra_id).order('data_inicio', { ascending: false }).range(0, 2)
    console.log(safrasAntigasResponse.value.data)
    sementesResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "semente/muda", id_safra: safra_id })
    fertilizantesResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "fertilizante", id_safra: safra_id })
    defensivosResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "defensivo", id_safra: safra_id })
    outrosResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "outros", id_safra: safra_id })
    funcionariosResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "funcionario", id_safra: safra_id })
    combustiveisResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "combustivel", id_safra: safra_id })
    manutencoesResponse.value = await supabase.rpc('soma_categoria', { id_user: user.value.id, item: "manutencao", id_safra: safra_id })
    console.log(safraResponse.value.data[0])
    console.log(sementesResponse.value)
}

const mostrarEstimativas = (i) => {
    switch (i) {
        case "despesas":
            showDespesas.value = true;
            showLucro.value = false;
            showProdutividade.value = false;
            break;
        case "lucro":
            showDespesas.value = false;
            showLucro.value = true;
            showProdutividade.value = false;
            break;
        case "produtividade":
            showDespesas.value = false;
            showLucro.value = false;
            showProdutividade.value = true;
            break;

        default:
            break;
    }
}

const calcMargemDeErro = (x, y) => {
    let margem;
    let txt;
    if (x > y) {
        margem = ((x / y) - 1) * 100
        txt = "acima"
    }
    if (y > x) {
        margem = ((y / x) - 1) * 100
        txt = "abaixo"
    }
    if (x == y) {
        return "Estimativa perfeita!"
    }
    return "Estimativa " + txt + " do valor real por " + margem.toFixed(2) + "%"
}
const calcMargemDeLucro = (receita, lucro) => {
    let margem;
    margem = (lucro * 100) / receita

    return margem.toFixed(2) + "%"
}


</script>
<template>
    <div>
    <Loader class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-if="!safraResponse" />
    <div v-if="safraResponse" class="flex w-full h-screen  justify-center overflow-hidden mt-[-30px]">
        <div class="flex flex-col justify-evenly h-full w-[30%]  p-3 ">
            
            <div  class="bg-white sm:scale-90 2xl:scale-100 sm:w-[110%] 2xl:w-full self-center  rounded-xl shadow-xl">
                <Loader v-if="!sementesResponse" />
                <div class="flex flex-col items-center justify-around" v-if="sementesResponse"
                v-for="safra in safraResponse.data" :key="safra.id">
                <div class="flex flex-col leading- items-center mt-6 ">
                    
                    <ClientOnly >
                        <GraficoRosca class="" :sementes=sementesResponse.data :fertilizantes=fertilizantesResponse.data
                        :defensivos=defensivosResponse.data :outros=outrosResponse.data
                        :funcionarios=funcionariosResponse.data :combustiveis=combustiveisResponse.data :manutencoes=manutencoesResponse.data />
                    </ClientOnly>
                    <h1 class="text-xl text-escuro font-semibold "> <b class="text-vermelho font-bold  sm:text-lg 2xl:text-2xl"> {{
                        paraReal(safra.despeza_real)
                    }} </b></h1>
                    <h3 class="text-escuro sm:text-sm 2xl:text-lg font-semibold">Despesas (total)</h3>
                </div>
                </div>
            </div>
            <Loader v-if="!safraResponse" />
            <div v-if="safraResponse" v-for="safra in safraResponse.data" :key="safra.id"
                class="flex flex-col justify-evenly bg-white w-full sm:h-[35%] 2xl:h-[40%] sm:p-2 2xl:p-5 rounded-xl shadow-xl ">
                <h1 class="sm:text-lg 2xl:text-2xl font-bold text-escuro self-center">Estimativas</h1>
                <div class="flex w-full justify-evenly">
                    <button @click="mostrarEstimativas('despesas')"
                        class="sm:text-xs 2xl:text-lg bg-vermelho focus:border-2 border-vermelho bg-opacity-40 sm:px-3 2xl:px-6 py-1 rounded-full text-vermelho font-bold ">Despesas</button>
                    <button @click="mostrarEstimativas('lucro')"
                        class="sm:text-xs 2xl:text-lg bg-verde focus:border-2 border-escuro bg-opacity-40 sm:px-3 2xl:px-6 py-1 rounded-full text-escuro font-bold">Lucro</button>
                    <button @click="mostrarEstimativas('produtividade')"
                        class="sm:text-xs 2xl:text-lg bg-azul focus:border-2 border-azul bg-opacity-40 sm:px-3 2xl:px-6 py-1 rounded-full text-azul font-bold">Produtividade</button>
                </div>
                <Transition name="slide">
                    <div v-if="showDespesas"
                        class="flex flex-col justify-evenly w-full h-3/5 bg-vermelho bg-opacity-40 sm:border-l-[6px] 2xl:border-l-8 border-vermelho rounded-r-2xl">
                        <span class="flex w-full ml-3 items-center">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{ paraReal(safra.despeza_estimada) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-vermelho font-bold">Estimado</h2>
                        </span>
                        <span class="flex w-full ml-3 items-center">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{ paraReal(safra.despeza_real) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-vermelho font-bold">Real</h2>
                        </span>
                        <span class="flex w-full ml-3 self-center justify-center">
                            <h1
                                :class="`mr-4 sm:text-sm 2xl:text-lg text-center font-bold text-${corLucro(safra.despeza_estimada - safra.despeza_real)}`">
                                {{ calcMargemDeErro(safra.despeza_estimada, safra.despeza_real) }}</h1>
                        </span>

                    </div>
                </Transition>
                <Transition name="slide">
                    <div v-if="showLucro"
                        class="flex flex-col justify-evenly w-full h-3/5 bg-verde bg-opacity-40 sm:border-l-[6px] 2xl:border-l-8 border-verde rounded-r-2xl">
                        <span class="flex w-full ml-3 items-center">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{
                                paraReal(safra.lucro_estimado)
                            }}</h1>
                            <h2 class="text-escuro font-bold">Estimado</h2>
                        </span>
                        <span class="flex w-full ml-3 items-center">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{ paraReal(safra.lucro_real) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-bold">Real</h2>
                        </span>
                        <span class="flex w-full ml-3 self-center justify-center">
                            <h1
                                :class="`mr-4 sm:text-sm 2xl:text-lg text-center font-bold text-${corLucro(safra.lucro_real - safra.lucro_estimado)}`">
                                {{ calcMargemDeErro(safra.lucro_estimado, safra.lucro_real) }}</h1>
                        </span>
                    </div>
                </Transition>

                <Transition name="slide">
                    <div v-if="showProdutividade"
                        class="flex flex-col justify-evenly w-full h-3/5 bg-azul bg-opacity-40 sm:border-l-[6px] 2xl:border-l-8 border-azul rounded-r-2xl">
                        <span class="flex  w-full ml-3 items-center ">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{ safra.quantidade_estimada.toFixed(2) }}
                                <span class="sm:text-[11px] 2xl:text-sm text-escuro font-medium">({{ formatar(safra.grandeza) }})</span>
                            </h1>
                            <h2 class="text-escuro font-bold">Estimado</h2>
                        </span>
                        <span class="flex w-full ml-3 items-center">
                            <h1 class="mr-4 sm:text-md 2xl:text-2xl font-bold text-escuro">{{ safra.quantidade_real.toFixed(2) }}
                                <span class="sm:text-[11px] 2xl:text-sm text-escuro font-medium">({{ formatar(safra.grandeza) }})</span>

                            </h1>
                            <h2 class="text-lg text-escuro font-bold">Real</h2>
                        </span>
                        <span class="flex w-full ml-3 self-center justify-center">
                            <h1
                                :class="`mr-4 sm:text-sm 2xl:text-lg text-center font-bold text-${corLucro(safra.quantidade_real - safra.quantidade_estimada)}`">
                                {{ calcMargemDeErro(safra.quantidade_estimada, safra.quantidade_real) }}</h1>
                        </span>
                    </div>
                </Transition>

            </div>
        </div>
        <div class="flex flex-col justify-evenly h-full w-[60%]  p-3 ">
            <Loader v-if="!safraResponse" />
            <div v-else v-for="safra in safraResponse.data" :key="safra.id"
                class="flex flex-col bg-white w-full h-[40%] p-5 rounded-xl shadow-xl">
                <div class="flex w-full h-full justify-evenly items-center">
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ safra.quantidade_real }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Colheita total</h2>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm">Em |{{ " " + formatar(safra.grandeza) }}</h3>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ safra.taxa_arrendo * safra.area }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Aluguel do terreno</h2>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm">{{ safra.taxa_arrendo + " " + formatar(safra.grandeza) + " por Ha" }}</h3>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ safra.taxa_arrendo * safra.area }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Colheita final</h2>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm">{{formatar(safra.grandeza)}}</h3>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ (safra.quantidade_real /
                            safra.area).toFixed(2) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Produtividade</h2>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm">{{ formatar(safra.grandeza) + " de " + safra.cultivo +
                            " por Ha "}}</h3>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm ">{{ "Área total: " + safra.area + "Ha" }}</h3>
                        </div>
                    </div>
                    
                    

                </div>
                <div class="flex w-full h-full justify-evenly items-center">
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ paraReal(safra.receita_bruta/safra.quantidade_real) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Preço Médio</h2>
                            <h3 class="text-verde sm:text-[11px] 2xl:text-sm">Por {{ formatar(safra.grandeza) }}</h3>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 class="sm:text-xl 2xl:text-3xl text-escuro font-bold">{{ paraReal(safra.receita_bruta) }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Receita bruta</h2>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 :class="`sm:text-xl 2xl:text-3xl text-${corLucro(safra.lucro_real)} font-bold`">{{
                                paraReal(safra.lucro_real)
                            }}</h1>
                            <h2 class="sm:text-sm 2xl:text-lg text-escuro font-semibold">Lucro</h2>
                        </div>
                    </div>
                    <div class="flex w-full h-[70%] justify-center">
                        <div class="">
                            <div class="h-full sm:w-1 2xl:w-2 bg-verde"></div>
                        </div>
                        <div class="flex flex-col justify-evenly pl-1">
                            <h1 :class="`sm:text-xl 2xl:text-3xl text-${corLucro(safra.lucro_real - safra.despeza_real)} font-bold`">{{
                                calcMargemDeLucro(safra.receita_bruta, safra.lucro_real)
                            }}</h1>
                            <h2 class="text-lg text-escuro font-semibold">Margem de lucro</h2>
                        </div>
                    </div>
                </div>


                <!-- <div class="flex">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> -->

            </div>
            <div class="flex flex-col justify-between items-center bg-white w-full h-[50%] p-5 rounded-xl shadow-xl">
                <Loader v-if="!safrasAntigasResponse" />
                <div v-if="safrasAntigasResponse" class="flex w-full justify-evenly items-center "
                    v-for="safraAntiga in safrasAntigasResponse.data" :key="safraAntiga.id">
                    <div class="w-[40%]">
                        <Loader v-if="!safraResponse" />
                        <div v-if="safraResponse" v-for="safra in safraResponse.data" :key="safra.id"
                            class="flex flex-col items-center sm:text-xs 2xl:text-md">
                            <h1 class="text-escuro font-bold">{{
                                safra.cultivo + " | " + safra.data_inicio + " - " +
                                    safra.data_fim
                            }}</h1>
                            <div class="flex justify-evenly items-center sm:py-3 2xl:py-6 w-full bg-verde ">
                                <div class="flex flex-col items-center">
                                    <h1
                                        :class="`sm:text-sm 2xl:text-xl text-${corLucro(safra.lucro_real - safra.despeza_real)} font-bold`">
                                        {{ calcMargemDeLucro(safra.receita_bruta, safra.lucro_real) }}</h1>
                                    <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Margem de lucro</h1>
                                </div>
                                <div class="flex flex-col items-center">
                                    <h1 class="sm:text-sm 2xl:text-xl text-claro font-bold">{{ (safra.quantidade_real /
                                    safra.area).toFixed(2) }}</h1>
                                    <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Produtividade</h1>
                                </div>
                                <div class="flex flex-col items-center">
                                    <h1 :class="`text-md text-${corLucro(safra.lucro_real)} font-bold`">{{
                                        paraReal(safra.lucro_real)
                                    }}</h1>
                                    <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Lucro</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-verde text-2xl font-bold mx-4 pt-6 font-aristotelica">X</h1>
                    <div class="w-[40%]">
                        <h1 class="text-escuro font-bold sm:text-xs 2xl:text-md text-center">{{
                            safraAntiga.cultivo + " | " + safraAntiga.data_inicio + " -" + safraAntiga.data_fim }}</h1>
                        <div class="flex justify-evenly items-center sm:py-3 2xl:py-6 w-full bg-verde ">
                            <div class="flex flex-col items-center">
                                <h1
                                    :class="`sm:text-sm 2xl:text-xl text-${corLucro(safraAntiga.lucro_real - safraAntiga.despeza_real)} font-bold`">
                                    {{ calcMargemDeLucro(safraAntiga.receita_bruta, safraAntiga.lucro_real) }}</h1>
                                <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Margem de lucro</h1>
                            </div>
                            <div class="flex flex-col items-center">
                                <h1 class="sm:text-sm 2xl:text-xl text-claro font-bold">{{ (safraAntiga.quantidade_real /
                                safraAntiga.area).toFixed(2) }}</h1>
                                <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Produtividade</h1>
                            </div>
                            <div class="flex flex-col items-center">
                                <h1 :class="`text-md text-${corLucro(safraAntiga.lucro_real)} font-bold`">{{
                                    paraReal(safraAntiga.lucro_real)
                                }}</h1>
                                <h1 class="text-claro sm:text-[9px] 2xl:text-sm">Lucro</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class=" sm:text-sm 2xl:text-xl font-bold font-escuro self-center text-center cursor-pointer transition-all hover:text-verde">Ver todas</h1>
            </div>
        </div>


    </div>
</div>
</template>