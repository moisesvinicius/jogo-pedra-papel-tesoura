
let opcao = document.getElementById('escolha')
let mgs = document.getElementById('texto')

let opcao_maquina = ['pedra', 'papel', 'tesoura']

function clico() {
    let escolha = opcao.value
    let escolha_maquina = opcao_maquina[Math.floor(Math.random() * 3)]
    
    if (escolha == 'pedra' && escolha_maquina == 'tesoura') {
        mgs.innerHTML = 'Você ganhou! Pedra quebra tesoura'
        mgs.style.color = 'green'
    }else if (escolha == 'papel' && escolha_maquina == 'pedra') {
        mgs.innerHTML = 'Você ganhou! Papel cobre pedra'
        mgs.style.color = 'green'
    }else  if (escolha == 'tesoura' && escolha_maquina == 'papel') {
        mgs.innerHTML = 'Você ganhou! Tesoura corta papel'
        mgs.style.color = 'green'
    }else if (escolha == escolha_maquina) {
        mgs.innerHTML = 'Empate!'
        mgs.style.color = 'green'
    }else {
        mgs.innerHTML = `Ops, você perdeu, pois ${escolha_maquina} vence ${escolha}`
        mgs.style.color = 'red'
    }

    
    
}//função

