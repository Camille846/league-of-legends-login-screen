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
