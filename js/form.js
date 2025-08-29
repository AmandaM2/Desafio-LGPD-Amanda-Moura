
//class contato

class contato {
    constructor(nome,email,telefone,tipo,mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    }
}

function validarEnvio(){
    const termosCheckbox= document.getElementById("termosCheckbox");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.disabled = !termosCheckbox.Checked;
}

function Post(form) {
    const termosCheckbox = document.getElementById("termosCheckbox")
        const newletterCheckbox = document.getElementById("newletterCheckbox");

        if(!termosCheckbox.checked){
            alert("Por favor, aceite os termos e Condições para enviar o formulário.");
            return false;
        }


  let data = new contato(
            form.elements.namedItem("nome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value, 
            form.elements.namedItem("mensagem").value,
            termosCheckbox.checked,
            newletterCheckbox.checked);
  
     console.log("dados do formulário:",data);  
     
     alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviado com sucesso.`);

     termosCheckbox.checked=false;
     newletterCheckbox.checked=false;

     validarEnvio();

     form.reset();
}

document.addEventListener('DOMContentLoaded',function(){
    validarEnvio()
})