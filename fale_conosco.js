//Validação dos campos com alerta e mensagem de sucesso
function validar() {
    var nome = formulario.full_name.value;
    var email = formulario.email.value;
    var telefone = formulario.telephone.value;
    var mensagem = formulario.mensagem.value;

    if(nome == ""){
        alert('Preencha o campo Nome Completo');
        formuser.full_name.focus()
        return false;
        }

    if(email == ""){
        alert('Preencha o campo E-mail');
        formuser.email.focus()
        return false;
        }
    
    if(email.indexOf('@') == -1 ){
        alert('Preencha corretamenteo campo do E-mail');
        formuser.email.focus()
        return false;
        }        

    if(telefone == ""){
        alert('Preencha o campo Telefone');
        formuser.telephone.focus()
        return false;
    }      

    if(mensagem == ""){
        alert('Digite sua mensagem');
        formuser.mensagem.focus()
        return false;        
    }
    alert ("Obrigada por enviar sua mensagem, em breve entraremos em contato!");            

}


    

