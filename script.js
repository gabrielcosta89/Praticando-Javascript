let caixaDeSuprimentos = []
let alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate']
let higiene = ['Escova de dente', 'Papel higienico', 'Sabonete', 'Shampoo', 'perfume']
let lazer = ['bola', 'peteca', 'corda', 'pipa', 'pato']
let cuidadosMedicos = ['dipirona', 'bandeige', 'antimosquito', 'tirasangue', 'spray']
let besteiras = ['bobo', 'bobagem', 'sargadin', 'sargadao', 'biridin']

caixaDeSuprimentos.push(alimentacao, higiene, lazer, cuidadosMedicos, besteiras,)

function verificaCaixa(lista) {
if (lista.length == 5) {
    for (let i = 0; i<lista.length; i++) {
        for (let j = 0; i < lista[i].length; j++) {
            if (lista[0].length == 5 && lista[1].length == 5 && lista[2].length == 5 && lista[3].length == 5 && lista[4].length == 5) {
                return "Podemos ir acampar"
            }
            else if (lista[0].length > 5 || lista[1].length> 5 || lista[2].length>5 || lista[3].length> 5 || lista[4].length>5) {
                return 'tem Intens demais, nao precisamos de tanto'
            }
            else {
                return 'Precisamos de mais itens desta secao'
            }


        }
    }

}
else if (lista.length< 5) {
    return 'algum amigo ainda nao retornou com os intens'
}
else {
    return 'acho que temos um instruso'
}
}
console.log(verificaCaixa(caixaDeSuprimentos))
