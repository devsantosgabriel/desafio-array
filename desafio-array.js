//Faça um programa que tenha uma lista de produtos a qual deve conter para cada um: nome, quantidade e preco. Ao final use os três métodos:
//Filter para retornar só os itens com quantidade zero, 
//Map para retornar um array com o preço total de cada item e
//Reduce para retornar o valor total 

//Para essa atividade você deverá usar a função construtora Array e o prototype da mesma para a inserção da função pertencente a cada método, no prototype da função construtora Array. Ao final chame cada função para exibir seus resultados.


const produtos = [
    {produto: 'Caneta', quantidade: 18, preco: 7.99},
    {produto: 'Impressora', quantidade: 0, preco: 649.50},
    {produto: 'Caderno', quantidade: 4, preco: 27.10},
    {produto: 'Lápis', quantidade: 3, preco: 5.82},
    {produto: 'Tesoura', quantidade: 1, preco: 19.20}
]

//filter
Array.prototype.parteFilter = function(){
   let filtrando = produtos.filter((item) => item.quantidade === 0);
    return console.log(filtrando); 
}; 

Array.prototype.parteFilter();

//map
Array.prototype.parteMap = function(){
    let mapeando = produtos.map((item)=>{
        return item.quantidade * item.preco
    });
    console.log(`Mapeando quantidade e preço ${mapeando.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
};
 
Array.prototype.parteMap();

// reduce
Array.prototype.parteReduce = function(){
    let reduzindo = produtos.reduce((acumulador, valorAtual)=>{
        return acumulador += valorAtual.quantidade * valorAtual.preco;
    },1);
    console.log(`Reduzindo os valores a ${reduzindo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
};

Array.prototype.parteReduce();