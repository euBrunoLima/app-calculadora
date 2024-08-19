function calcular(tipo,valor){
    if(tipo === 'simbolo'){
        if(valor === 'c'){
            document.getElementById('visor').value = ''
        }
        else if(valor === 'X'){
            let caracter = document.getElementById('visor').value
            caracter = caracter.slice(0, -1)

            document.getElementById('visor').value = caracter
        }
        else if(valor === '÷' || valor === '×' || valor === '-' || valor === '+' || valor === ','){
            document.getElementById('visor').value += valor
        }
    }
 
    else if(tipo === 'numero'){
    document.getElementById('visor').value += valor
    }
 


}