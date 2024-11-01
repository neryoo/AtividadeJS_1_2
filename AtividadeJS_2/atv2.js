function calcular(operador) {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let resultado;

    if (operador == '+') {
        resultado = n1+n2;
    } else if (operador == '-') {
        resultado = n1 - n2;
    } else if (operador === '/') {
        resultado = n1/n2;
    } else {
        resultado = n1*n2;
    }

    document.getElementById('resultado').textContent = `O resultado é: ${resultado}`;
}