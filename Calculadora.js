function agregarValor(valor) {
    document.getElementById("resultado").value += valor;
}

function limpiar() {
    document.getElementById("resultado").value = '';
}

function calcular() {
    const resultado = document.getElementById("resultado");
    try {
        resultado.value = eval(resultado.value) || '';
    } catch (error) {
        resultado.value = 'Error';
    }
}