module.exports = class NumerosFelizes {

  verificarSeUmNumeorFeliz(numeroEscolhido) {

    if (numeroEscolhido === 1) {
      return "Feliz"
    }

    let numero = numeroEscolhido.toString()
    let soma = 0
    let repeticoes = 0

    while (soma != 1) {
      
      for (let i = 0; i < numero.length; i++) {
        let numeroAtual = Math.pow(parseInt(numero[i]), 2)
        soma = soma + numeroAtual
      }

      numero = soma.toString()

      if (soma === 1) {
        return "Feliz"
      }

      soma = 0
      repeticoes++

      if(repeticoes > 50) {
        return "Numero infeliz"
      }

    }

  }

}