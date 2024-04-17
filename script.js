function Validar(){
    var nome = document.getElementById("InputNome");
    var email = document.getElementById("InputEmail");
    var telefone = document.getElementById("InputTelefone");

        if(nome && email && telefone === "" ){
            alert("Por favor, preencha todos os campos");
        }
        else{
            alert("Obrigado pelo feedback");
        }
}

function Login(){
    
}

