const $nomeinput=document.querySelector("#nomepessoa")
const $doceinput=document.querySelector("#doces")
const $tamanhodoceinput=document.querySelector("#tamanho")
const $salgadoinput=document.querySelector("#salgado")
const $bebidainput=document.querySelector("#bebidas")
const $observacaoinput=document.querySelector("#observacao")
const $submitinput=document.querySelector("#submit")

$submitinput.addEventListener("click", function(e){
    e.preventDefault()
    const dados={
        nome:$nomeinput.value,
        tipodoce:$doceinput.value,
        tamanho:$tamanhodoceinput.value,
        tiposalgado:$salgadoinput.value,
        bebida:$bebidainput.value,
        observacao:$observacaoinput.value


    }
   axios.post("http://localhost:3000/create", {
    nome: dados.nome,
    tipodoce: dados.tipodoce,
    tamanhodoce: dados.tamanho,
    tiposalgado: dados.tiposalgado,
    bebida: dados.bebida,
    observacao: dados.observacao

   }).then((doces)=>{
    console.log(doces.status)
   })
})




