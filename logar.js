let res_login = document.getElementById('res_login')
let login = document.getElementById('login')

login.addEventListener('click',() =>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    
    const valor ={
        nome: nome,
        email: email,
        senha: senha
    }
console.log(valor)
fetch('http://localhost:3000/logar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valor)
})  

.then(resposta => resposta.json)
.then(dados =>{
    res_login.innerHTML= 'Login com sucesso', dados

})
.catch((err)=>{
    console.error("Erro ao cadastrar os dados",err)

})

})