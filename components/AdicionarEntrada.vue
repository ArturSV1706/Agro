<script setup lang="ts">
    const { supabase } = useSupabase()
    const { user } = useAuth()
    interface FluxoProps{
        // tipo_fluxo: string,
        // input_name: string
        // categoria: string,
        // fornecedor: string,
        // nota_fiscal: Number,
        // produto: string,
        // valor: Number,
    }
    const entradaInput = reactive({
        categoria: "",
        fornecedor: "",
        nota_fiscal: "",
        produto: "",
        valor: "",
    })
    
    
        const handleSubmitEntrada = async () => {
        // if(!entradaInput.title || !entradaInput.note) return
    
        await supabase.from("fluxo").insert({
            tipo_fluxo: "entrada",
            categoria: entradaInput.categoria,
            fornecedor: entradaInput.fornecedor,
            produto: entradaInput.produto,
            valor:  entradaInput.valor,
            user_id: user.value.id
        });

        // await supabase.from("fluxo").delete().neq("valor",1)

    }
    </script>
    
    <template>
        <div>
            <h1>Adicionar Entradas</h1>
            <form class="flex flex-col">
                <label for="categoria">Categoria</label>
                <select v-model="entradaInput.categoria" name="categoria" id="cars" form="carform">
                    <option value="insumo">Insumo</option>
                    <option value="combustivel">Combustível</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="Financiamento">Financiamento</option>
                </select>
                <label for="fornecedor">Fornecedor</label>
                <input v-model="entradaInput.fornecedor" name="fornecedor" type="text">
                <label for="nota fiscal">Nota Fiscal</label>
                <input v-model="entradaInput.nota_fiscal" name="nota fiscal" type="number">
                <label for="produto">Produto</label>
                <input v-model="entradaInput.produto" name="produto" type="text">
                <label for="valor">Valor</label>
                <input v-model="entradaInput.valor" name="valor" type="number">
                <button type='button' @click="handleSubmitEntrada">Criar</button>
            </form>
        </div>
    </template>