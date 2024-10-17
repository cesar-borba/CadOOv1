function logar (){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Verifica se o email e a senha são os corretos
    if(email === "kaue@email.com" && senha === "123"){
        // Redireciona para a página Principal.html
       location.href = "Principal.html";
    }
    else
    {
        alert("Email ou senha errado");
    }
    
}


