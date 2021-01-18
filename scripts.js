//Functions
let corSite ="azul";
function resetaCor(cor)//quando os parenteses estiver vazio que dizer que esta sem parametros
{
    corSite = cor;
};

console.log(corSite);//imprimi a var corSite
resetaCor("vermelho");//Chama a funcao e reseta a cor
console.log(corSite);//imprimi a cor resetada

//Dois parametros
let corFonte ="azul";
function resetaCorFonte(cor,tonalidade)//quando os parenteses estiver vazio que dizer que esta sem parametros
{
    corFonte = cor + ' ' + tonalidade;//usamos a aspas simples pois na hora de concatenar o que for impresso tera um espacamento padrao
};

console.log(corFonte);//imprimi a var corSite
resetaCorFonte("verde", "claro");//Chama as funcoes e altera a cor
console.log(corFonte);//imprimi a cor resetada

//alteraTamanho tambem e um ex 
