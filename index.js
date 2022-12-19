const paineis = document.querySelectorAll('.painel')

paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        removeativoClasses()
        painel.classList.add('ativo')
    })
})

function removeativoClasses() {
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })
}