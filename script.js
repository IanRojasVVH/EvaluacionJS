// Función para realizar operaciones con if/else
function calcularOperacion() {
    // Primero pedimos la operación al usuario
    const operacion = prompt(
        "¿Qué operación deseas realizar?\n" +
        "1. Sumar (+)\n" +
        "2. Restar (-)\n" +
        "3. Multiplicar (×)\n" +
        "4. Dividir (÷)\n" +
        "Ingresa el número de la opción:"
    );
    // Definimos variables necesarias
    let resultado;
    
    // Pedir los números al usuario
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Validar que sean números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debes ingresar números válidos");
        return;
    }
    // Usando if/else para las operaciones
    if (operacion === '1' || operacion === 'sumar') {
        resultado = num1 + num2;
        simbolo = '+';
    } 
    else if (operacion === '2' || operacion === 'restar') {
        resultado = num1 - num2;
        simbolo = '-';
    } 
    else if (operacion === '3' || operacion === 'multiplicar') {
        resultado = num1 * num2;
        simbolo = '×';
    } 
    else if (operacion === '4' || operacion === 'dividir') {
        if (num2 === 0) {
            alert("Error: No se puede dividir entre cero");
            return;
        }
        resultado = num1 / num2;
        simbolo = '÷';
    } 
    else {
        alert("Operación no válida");
        return;
    }
    // Mostrar resultado
    alert(`Resultado: ${num1} ${simbolo} ${num2} = ${resultado}`);
}

// Asignar eventos a los botones
/*document.getElementById('sumar').addEventListener('click', () => calcular('sumar'));
document.getElementById('restar').addEventListener('click', () => calcular('restar'));
document.getElementById('multiplicar').addEventListener('click', () => calcular('multiplicar'));
document.getElementById('dividir').addEventListener('click', () => calcular('dividir'));


*/