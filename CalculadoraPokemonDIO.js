let saldoRankeada = calculadoraPokemon(23 , 5)
let nivelPokemon

function calculadoraPokemon(vitorias, derrotas){
    let resultadoVitoriasDerrotas = vitorias - derrotas
    return resultadoVitoriasDerrotas
}

    switch (true){
        case saldoRankeada <= 10:
            nivelPokemon = "Ferro"
        break;

        case saldoRankeada >10 && saldoRankeada <= 20:
            nivelPokemon = "Bronze"
        break;

        case saldoRankeada >20 && saldoRankeada <= 50:
            nivelPokemon = "Prata"
        break;

        case saldoRankeada >50 && saldoRankeada <= 80:
            nivelPokemon = "Ouro"
        break;

        case saldoRankeada > 80 && saldoRankeada <= 90:
            nivelPokemon = "Diamante"
        break;
        
        case saldoRankeada >90 && saldoRankeada <= 100:
            nivelPokemon = "Lendário"
        break;

        case saldoRankeada >100:
                nivelPokemon = "Imortal"
        break;
        
    }
    
console.log("O Herói tem de saldo de " + saldoRankeada + " e está no nível " + nivelPokemon)


    
        
        

    


