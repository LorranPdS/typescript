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
/**
const cadPessoa = (nome:string, idade:number) => {
    window.alert("Nome: " + nome + " Idade: " + idade);
}
*/
// AULA SEGUINTE

/** Caso esse cadPessoa esteja com um sublinhado vermelho, é porque já existe
 * a função no JavaScript com o mesmo nome, então não se preocupe
 */

/** Imagine então que temos um método (uma função) mas você vai querer
 * reutilizar essa função, porém você pode ter 2, 3, 4, 5, 10 parâmetros:
 * então veja o que faremos abaixo, pois alguns usuários podem ter 'email'
 * por exemplo (e quando você o define o parâmetro:tipo, você está dizendo
 * que o preenchimento dele é obrigatório, a exemplo de nome e idade); agora
 * veja abaixo que, se colocamos uma interrogação, essa interrogação nos dirá
 * o seguinte para a função: esse dado de 'email' é totalmente opcional, então
 * se a pessoa passar um email, tudo bem, mas se não passar o email, sem
 * problemas, será só nome e idade mesmo.
 * 
 * Logo depois veja que fizemos uma condicional simples em JavaScript mesmo
 */
const cadPessoa = (nome:string, idade:number, email?:string) => {
    window.alert("Nome: " + nome);
    window.alert("Idade: " + idade);
    
    if(email != undefined){
        window.alert("E-mail: " + email)
    }
}