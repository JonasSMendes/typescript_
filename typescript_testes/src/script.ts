/*
let nome: string = 'jonas' //especificando a tipagem da variavel
let idade: number = 21 // especificando a tipagem da varieavel
let programador: boolean = true //   \\ \\
*/

// type em arrays

/*
let nomes: string[] = ['jonas', 'pedro', 'vitor','gabriel'] // pecificando tipagem em array

let idades:number[] = [80, 5 ,45 , 34, 24 ,2 , 1 ,634 ]

let numeros:Array<number> = [80, 5 ,45 , 34, 24 ,2 , 1 ,634 ]
*/

// recurso type any

/*
let nomes: any = ['jonas', 'pedro','paulo','roberto']; //ignorar a especificação de tipagem 

nomes.push(556);
*/

// funçoes type

/*
function upperCase(name:string){                            // cria um type em uma função 
    let fierletter = name.charAt(0).toUpperCase();          // criou uma variavel para pegar a primeira letra e deixar maiuscula
    return fierletter + name.substring(1);                  // retorna concatenando a letra maiuscula com o resto das palavra 
}
upperCase('jonas')
*/

// type em return da funçoes
/*
function upperCase(name:string):number{                           
    let fierletter = name.charAt(0).toUpperCase();      
    
    return 90
   // return fierletter + name.substring(1);                  
}

let nome:number = upperCase('jonas')

function somar(n1: number, n2:number):number{  // type do return de uma função
    return n1 + n2
}

let valor = somar(21, 21)
*/

// type em função anonima

/*
let names = ['jonas', 'pedro', 'paula','cristina']  //ele usa o contexto do seu array

names.forEach((nome)=>{
    console.log(nome.toLocaleUpperCase())

})
*/

//types em objetos 

/*
function resumo(usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined){
    return `ola ${usuario.nome} tudo bem? você tem ${usuario.idade} anos`
    }else{
        `ola ${usuario.nome},tudo bem?`
    }
}

let u = {
    nome: 'jonas',
    idade: 21
}


resumo(u);
*/

//union types -- variavel com multiplos tipos

/*
let idade:string | number = 90

idade = '32'

function mostrarIdade(idade: string | number){
    if(typeof idade === 'string'){
    console.log(`minha idade é: ${idade.toUpperCase()}`)
    }else{
        console.log(idade)
    }
}

mostrarIdade(14)
mostrarIdade('15')
*/

// types e interface
/*
type idade = string | number

let idade: idade = 12


function mostrarIdade(i:idade):idade{
    return i;
}
/*
type user = {
    nome: string
    idade: number
}
*/
/*
interface user {
    nome: string;
    
}

interface user {
    idade:number
}


function resumo(usuario: user){
    return `ola ${usuario.nome} você tem ${usuario.idade}`
}

resumo({
    nome: 'jonas',
    idade: 23
})
*/

//type assertions // ajudando a ser especifico

/*
let idadeField = document.querySelector('.idade')as HTMLInputElement

console.log(idadeField?.value);
*/

//types literais


/*
const nome: string = 'jonas'

function alingText(texto: string, align: 'left'| 'rigth' | 'center'){
    
    return `<div style='text-align: ${align}'>${texto}</div>`

}


alingText('jonas','left')



function temnome(nome:string):boolean{
    if(nome !== ''){
        return true
    }else{
        return false
    }
}


interface opçoes {
    width: number
    height: number
}

function config(props: opçoes | 'auto'){

}

config({width: 100,height: 200})


*/


//inferencia literal 

/*
function fazerrequeiscao(url: string , method: 'GET' | 'POST'){

}

type methods = 'GET' | 'POST'

let url = "http://google.com.br"
let method: methods = 'GET'

fazerrequeiscao(url, method)

*/

// type para funçoes 

/*

type mathfunction = (n1:number, n2:number) =>number // cria uma regra geral para as contas 


const somar: mathfunction = (n1, n2) =>{
    return n1 + n2
}

const subtrair: mathfunction = (n1 , n2) =>{
    return n1 - n2
}

const multiplicar: mathfunction = (n1 , n2) =>{
    return n1 * n2
}

const dividir: mathfunction = (n1 , n2) =>{
    return n1 / n2
}
*/

// retorno void

/*
function removerTela( el:HTMLElement ):void{
    //processo de remoção do elemento

    if(el.classList){
        return;
    }

    el.remove();
};

removerTela( document.querySelector('teste'), );



 type qualquerfuncao = () => void;

 const algo: qualquerfuncao =()=>{
    return 1
 }
 */

/*
 const nome: string = 'jonas'


 function blabla(n1:number):string{
    return `o parametro era ${n1}`
 }

 blabla(25)
 */
/*
 const botao = document.querySelector('button') as HTMLButtonElement;

 botao.addEventListener('click',  ()=>{
    console.log('clicou')
 });

*/
/*
var nome:string  = 'jonas'

function somar(n1:number, n2:number):number{
    
    return n1 + n2

}

somar(12, 34)

*/

