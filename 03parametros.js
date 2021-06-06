/** tipos de variáveis em typescript
 * string: caracteres gerais
 * number: números
 * bool: lógico/booleano
 * Obs.: a grande vantagem em se definir o tipo no Typescript é que
 * você ganha em performance (velocidade), ou seja, não é o JavaScript que vai definir
 * que tipo será aquela variável e sim você, então você já tira esse peso
 * do JavaScript
 */
// Função de cadastramento (vamos cadastrar dados pessoais)
var cadPessoa = function (nome, idade) {
    window.alert("Nome: " + nome + " Idade: " + idade);
};
