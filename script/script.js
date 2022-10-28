function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = `Impossivel contar!`
        //window.alert('[ERRO] Faltam dados... !!')
    }else{
        resultado.innerHTML = 'Contando: </br>'
        //convertando o valor da variavel inicio para numero
        let i = Number(inicio.value)
        //convertando o valor da variavel fim para numero
        let f = Number(fim.value)
        //convertando o valor da variavel passo para numero
        let p = Number(passo.value)
        if(p <= 0){
            window.alert(`[Passo invalido!] Considerando passo 1`)
            p = 1
        }
        if(i < f){
            //Contagem crescente
            //Inicio;teste;incremento
            for( let c =  i; c <= f; c +=p){
                resultado.innerHTML += `${c} \u{27A1}`
            }

        }else{
            //Contagem regressiva
            //Inicio;teste;incremento
            for(let c = i; c >= f; c-=p){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        }
        resultado.innerHTML +=`\u{1F3C1}`
    }
}