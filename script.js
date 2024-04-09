function Validar(){
    var nome = document.getElementById("InputNome");
    var email = document.getElementById("InputEmail");
    var telefone = document.getElementById("InputTelefone");

        if(nome == ""){
            alert("Preencha o campo 'Nome'");
            nome.Focus()
            return false;
        }

        if(email == ""){
            alert("Preencha o campo 'Email'");
            email.Focus()
            return false;
        }

        if(telefone == ""){
            alert("Preencha o campo 'Telefone'");
            telefone.Focus();
            return false;
        }
}

function Login(){
    
}

