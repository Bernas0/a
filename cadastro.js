let res_gravar = document.getElementById('res_gravar')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click',() =>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    
    const valor ={
        nome: nome,
        email: email,
        senha: senha
    }

fetch('http://localhost:3000/cadastrar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valor)
})

.then(resposta => resposta.json)
.then(dados =>{
    console.log(dados)
    res_gravar.innerHTML + "Código" + dados.id + "<br><br>" +
    res_gravar.innerHTML + "Nome" + dados.nome +"<br><br>" +
    res_gravar.innerHTML + "Email" + dados.email + "<br><br>" +
    res_gravar.innerHTML + "Senha" + dados.senha + "<br>"

})
.catch((err)=>{
    console.error("Erro ao cadastrar os dados",err)

})

})