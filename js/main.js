// Aplicar classe span-active no input de login e senha 
const loginInput = document.querySelectorAll(".login-input");

// Função que adiciona a classe span-active 
const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}

// Função que remove a classe span-active 
const handleFocusOut = ({ target }) =>{

    // Verificar se há algo escrito no input antes de remover a classe
    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }

}

// Adicionar evento para adicionar a classe quando em foco
loginInput.forEach((input)=>{
    input.addEventListener("focus", handleFocus)
})

// Adicionar evento para remover a classe quando sair de foco
loginInput.forEach((input)=>{
    input.addEventListener("focusout", handleFocusOut)
})


// Aplicar e remover atributo disabled no nxt-btn
const button = document.querySelector('.nxt-btn');

const handleChange = () =>{
    const [username, password] = loginInput;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute("disabled");
    } else{
        button.setAttribute("disabled", "");
    }
}

// Adicionar evento para adicionar a classe de acordo com as condicionais 
loginInput.forEach((input)=>{
    input.addEventListener("input", handleChange)
})