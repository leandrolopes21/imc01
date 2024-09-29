function calcularImc() {

    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const result = document.getElementById('result');

    if (isNaN(altura) || isNaN(peso)) {

        result.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

        const imc = peso / (altura * altura);
        var classificacao = '';

        if ( imc < 18.5) {
            classificacao = 'Magreza';
        } else if ( imc < 24.9) {
            classificacao = 'Normal';
        } else if ( imc <29.9) {
            classificacao = 'Sobrepeso';
        } else if ( imc <39.9) {
            classificacao = 'Obesidade';
        } else {
            classificacao = 'Obesidade Grave';
        }

        result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
    
}