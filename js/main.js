/*Strings e inteiros
var nome = "Poty";
var idade = 37;
var idade2 = 2;
var frase = "teste de frase";

//alert(nome + " tem " + idade + " anos.");

//alert(nome);

//console.log(frase.replace("frase", "frases"));
//console.log(idade+idade2);
console.log(frase.toUpperCase());*/

/*arrays
var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //insere na ultima posição da lista
//lista.pop(); //apaga ultima posição da lista
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[1]);
console.log(lista.join(" | "));*/

//dicionario
/*var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);*/

//lista de dicionarios
/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[0].cor);*/


/*condicionais
var idade = prompt("Qual sua idade?");

if(idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}*/

//laços de repetição
/*var count = 0;
while(count <= 5){
	console.log(count);
	count++;
}*/

//for
/*for(cont = 0; cont <= 5; cont++){
	alert(cont);
}*/

//date
//var data = new Date();
//alert(data.getMonth() + 1);
//alert(data.getDay());
//alert(data.getHours());


/*function soma(n1, n2){
	return n1 + n2;
}

alert(soma(5,10));

function setReplace(frase, nome1, nome2){
	return frase.replace(nome1, nome2);
}

alert(setReplace("disco voador", "disco", "pássaro"));*/

/*
function validaIdade(idade){
	var validar;
	if(idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/


function clicou(){
	document.getElementById("thanx").innerHTML = "<b>Obrigada por clicar</b>";
}

function redirecionar(){
	window.open("https://www.youtube.com/watch?v=N6LKXD-Vlbg"); //abre em outra janela
	window.location.href = "https://www.youtube.com/watch?v=N6LKXD-Vlbg"; //abre na mesma janela
}

/*function trocar(){
	document.getElementById("mousemove").innerHTML = "obrigada por passar o mouse";
}*/

function trocar(elemento){
	elemento.innerHTML = "obrigada por passar o mouse";
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("pagina carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}