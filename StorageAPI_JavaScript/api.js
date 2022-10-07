//sessionStorage
const meuArray = ["Padrões e Projeto de Software", "IBMEC", "AP2"];
const meuObjeto = {
  nome: "Clarissa",
  idade: "26",
  aula: ["Padrões e Projeto de Software", "IBMEC", "AP2"],
  logNome: function() {
    console.log(this.nome);
  }
};

sessionStorage.setItem("Sessao", JSON.stringify(meuObjeto));
const chave = sessionStorage.key(0);
//sessionStorage.removeItem("Sessao");
//sessionStorage.clear();
const dadosDaSessao = JSON.parse(sessionStorage.getItem("Sessao"));
console.log(dadosDaSessao);

//guardando o texto depois de digitado
area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
};

//mudança de fundo
var colorPallet = document.querySelector('.colorpallet');
var bodyElm = document.getElementsByTagName('body')[0];
var storage = localStorage;

document.addEventListener('DOMContentLoaded', function(){
  if(storage.getItem('bgcolor')) {
    var color = storage.getItem('bgcolor');
    setBgColor(color);
  } 
});

colorPallet.addEventListener('change', function(){
  bodyElm.style.backgroundColor = this.value;
  storage.setItem('bgcolor',this.value);
});

function setBgColor(color) {
  bodyElm.style.backgroundColor = color;
  colorPallet.value = color;
}