// Função assíncrona que calcula o IMC
async function calcularIMC(peso, altura) {
    return new Promise((resolve, reject) => {
        if (typeof peso !== 'number' || typeof altura !== 'number') {
            reject('Os parâmetros peso e altura devem ser números.');
        } else {
            const imc = peso / (altura * altura);
            resolve(imc);
        }
    });
}

// Função que chama a função calcularIMC e exibe o resultado
function exibirIMC(peso, altura) {
    calcularIMC(peso, altura)
        .then(imc => {
            console.log(`IMC: ${imc.toFixed(2)}`);
            if (imc < 18.5) {
                console.log('Situação: magreza');
            } else if (imc >= 18.5 && imc <= 24.9) {
                console.log('Situação: normal');
            } else if (imc >= 25 && imc <= 29.9) {
                console.log('Situação: sobrepeso');
            } else if (imc >= 30 && imc <= 39.9) {
                console.log('Situação: obesidade');
            } else {
                console.log('Situação: obesidade grave');
            }
        })
        .catch(error => {
            console.error(`Erro: ${error}`);
        })
        .finally(() => {
            console.log('Cálculo do IMC finalizado.');
        });

    // Mensagem para evidenciar o funcionamento assíncrono
    console.log('Aguardando o cálculo do IMC...');
}

// Exemplo de uso
exibirIMC(71, 1.64);
