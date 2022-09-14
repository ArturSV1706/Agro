<script setup lang="ts">
let fluxo_de_entrada = 23423434
let fluxo_de_saida = 232323
let saldo = fluxo_de_entrada - fluxo_de_saida


</script>

<template>
    <div>
        <div style="display: flex; justify-content: space-evenly;">
            <div>
                <h3>Fluxo de Entrada</h3>
                <h1>{{fluxo_de_entrada}}</h1>
            </div>
            <div>
                <h3>Fluxo de saida</h3>
                <h1>{{fluxo_de_saida}}</h1>
            </div>
            <div>
                <h3>Saldo da propriedade</h3>
                <h1>{{saldo}}</h1>
            </div>
        </div>
        <div style="display: flex; flex-direction: row;">
            <div>
                <h1>Adicionar despezas</h1>
                <form style="display: flex; flex-direction: column;">
                    <label for="categoria">Categoria</label>
                    <select name="categoria" id="cars" form="carform">
                        <option value="insumo">Insumo</option>
                        <option value="combustivel">Combustível</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                    <label for="fornecedor">Fornecedor</label>
                    <input name="fornecedor" type="text">
                    <label for="nota fiscal">Nota Fiscal</label>
                    <input name="nota fiscal" type="number">
                    <label for="produto">Produto</label>
                    <input name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input name="valor" type="number">
                    <button type="submit">Criar</button>
                </form>
            </div>
            <div>
                <h1>Adicionar despezas</h1>
                <form style="display: flex; flex-direction: column;">
                    <label for="categoria">Categoria</label>
                    <select name="categoria" id="cars" form="carform">
                        <option value="insumo">Insumo</option>
                        <option value="combustivel">Combustível</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="Financiamento">Financiamento</option>
                    </select>
                    <label for="fornecedor">Pagador</label>
                    <input name="fornecedor" type="text">
                    <label for="nota fiscal">Nota Fiscal</label>
                    <input name="nota fiscal" type="number">
                    <label for="produto">Produto</label>
                    <input name="produto" type="text">
                    <label for="valor">Valor</label>
                    <input name="valor" type="number">
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
        <table>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Nota Fiscal</th>
            <th>Produto</th>
            <th>Valor</th>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
            <tr>
                <td>Insumo</td>
                <td>Coopercampos</td>
                <td>23742309</td>
                <td>Randápe</td>
                <td>R$ 800,00</td>
            </tr>
        </table>
    </div>
</template>