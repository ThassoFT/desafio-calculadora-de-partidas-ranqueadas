let vitorias = 67;
let derrotas = 46;

function ranqueamento(vitorias, derrotas) {

    if (typeof vitorias == "number" && typeof derrotas == "number") {

        let valor_vitorias = vitorias - derrotas >= 0 ? vitorias - derrotas : 0;
        let level = "";

        if (valor_vitorias > 10 && valor_vitorias <= 20) {
            level = "Bronze";
        }
        else if (valor_vitorias > 20 && valor_vitorias <= 50) {
            level = "Prata";
        }
        else if (valor_vitorias > 50 && valor_vitorias <= 80) {
            level = "Ouro";
        }
        else if (valor_vitorias > 80 && valor_vitorias <= 90) {
            level = "Diamante";
        }
        else if (valor_vitorias > 90 && valor_vitorias <= 100) {
            level = "Lendário";
        }
        else if (valor_vitorias > 100) {
            level = "Imortal";
        }
        else {
            level = "Ferro";

        }
        console.log(`O Herói de saldo ${valor_vitorias} e está no nível de ${level}`);
    } else {
        console.log("O saldo do Herói não foi encontrado. Por favor tente novamente, ou contate um administrador.")
    }
}
ranqueamento(vitorias, derrotas);