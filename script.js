// Función principal que maneja todas las operaciones
function realizarOperacion(operacion) {
    // Obtener valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoDiv = document.getElementById('resultado');
    // Validar que sean números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos en ambos campos");
        return;
    }
    let resultado;
    let simbolo;
    // Realizar la operación seleccionada
    switch(operacion) {
        case 'sumar':
            resultado = num1 + num2;
            simbolo = '+';
            break;
        case 'restar':
            resultado = num1 - num2;
            simbolo = '-';
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            simbolo = '×';
            break;
        case 'dividir':
            if (num2 === 0) {
                alert("No se puede dividir entre cero");
                return;
            }
            resultado = num1 / num2;
            simbolo = '÷';
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Mostrar el resultado en el div
    resultadoDiv.textContent = `${num1} ${simbolo} ${num2} = ${resultado}`;
}

// Asignar eventos a los botones
document.getElementById('sumar').addEventListener('click', () => realizarOperacion('sumar'));
document.getElementById('restar').addEventListener('click', () => realizarOperacion('restar'));
document.getElementById('multiplicar').addEventListener('click', () => realizarOperacion('multiplicar'));
document.getElementById('dividir').addEventListener('click', () => realizarOperacion('dividir'));