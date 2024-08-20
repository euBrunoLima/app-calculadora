function calcular(tipo, valor) {
    let visor = document.getElementById('visor');
    let visorValue = visor.value;

   if(tipo === 'simbolo'){
        if(valor === 'c'){
            document.getElementById('visor').value = ''
            }else if(valor === 'X'){
                visor.value = visorValue.slice(0,-1)
            }else if(valor === '%'){
                visor.value = (visorValue/100) * 10
                visor.value = ''
                visor.placeholder = (visorValue/100) * 10
                
            }else if(valor === '='){
                if(visorValue === ''){
                    visor.value = ''
                    visor.placeholder = '0'
                    return
                }
                try{
                    let expressao = visorValue.replace(/÷/g,'/').replace(/×/g,'*').replace(/%/g,'/100')
                    if(carcterConsecutivo(expressao)){
                        visor.value = ''
                        visor.placeholder = "Syntax error"
                    }
                    else{
                        visor.value = ''
                        visor.placeholder = eval(expressao)
                    }
                }
                catch(erro){
                    visor.value = ''
                    visor.placeholder = "Syntax error"
                }
            }
        else
            visor.value += valor
    }
    else if(tipo === 'numero')
        visor.value += valor
}
function carcterConsecutivo(str) {
    const regex = /([+'/'-*÷])\1+/g; //verifica se há dois simbolos em sequencia
    return regex.test(str);
}
