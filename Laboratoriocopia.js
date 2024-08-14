var empleado = new Array(4);
var salario = new Array(4);
var nuevoSalario = new Array(4);
var ISSS = 0.03;
var AFP = 0.0625;
var renta2 = new Array(4);

var x = 0;

// Pedir los 4 empleados y salarios
while (x < empleado.length) {
    empleado[x] = prompt("Ingrese el nombre del empleado " + (x + 1) + ":")
    salario[x] = parseFloat(prompt("Ingrese el salario del empleado " + (x + 1) + ":"))
    while (salario[x] < 257 || salario[x] > 3000) {
        salario[x] = parseFloat(prompt("Ingrese un salario válido (entre 257 y 3000):"))
    }
    x++;
}

// Calcular los nuevos salarios
for (x = 0; x < empleado.length; x++) {
    nuevoSalario[x] = salario[x] - (salario[x] * ISSS) - (salario[x] * AFP);
    renta2[x]=0;
}


var menu = parseInt(prompt("Qué desea ver: \n 1-Total de vectores  \n2- Impresión de los vectores"))
while (menu < 1 || menu > 2) {
    menu = parseInt(prompt("Qué desea ver: \n 1-Total de vectores   \n2- Impresión de los vectores"))
}

switch (menu) {
    case 1:
        {
            document.write("-------- TOTAL DE LOS VECTORES-----<br>");
            document.write("_________________________________________________________<br>");
            document.write("-------- SALARIO ------- ISSS --------- AFP -------- RENTA ------- SALARIO FINAL-----<br>");
            document.write("_________________________________________________________<br>");

            var totalSalario = 0;
            var totalISSS = 0;
            var totalAFP = 0;
            var totalRenta = 0;
            var totalSalarioFinal = 0;

            for (x = 0; x < empleado.length; x++) {
    

                totalSalario += salario[x];
                totalISSS += ISSS;
                totalAFP += AFP;
                totalRenta += renta2[x];
                totalSalarioFinal += nuevoSalario[x];
            }

            document.write("_________________________________________________________<br>");
            document.write("TOTAL: " + totalSalario + "------------" + totalISSS + "----------" + totalAFP + "---------" + totalRenta + "------" + totalSalarioFinal);
            document.write("<br><br>");
            break;
        }

            document.write("_________________________________________________________<br>");
            break;
        
    case 2:
        {
            document.write("_________________________________________________________<br>");
            document.write("IMPRENSION DE LOS VECTORES<br>");
            document.write("_________________________________________________________<br>");
            for (x = 0; x < empleado.length; x++) {
                if (nuevoSalario[x] <= 472.00) {
                    renta2[x] = (nuevoSalario[x] - 0.00) * 0.00 + 0.00; 
                    document.write("Nombre del empleado: " + empleado[x] + "<br>");
                    document.write("Salario: " + salario[x] + "<br>");
                    document.write("El tramo en el que se encuentra es Tramo 1- $0.01--$472.00" + "<br>");
                    document.write("Nuevo salario total: " + nuevoSalario[x] + "<br>");
                    document.write("ISSS total: " + ISSS + "<br>");
                    document.write("AFP total: " + AFP + "<br>");
                    document.write("Renta total: " + renta2[x] + "<br>")
                    document.write("Salario final total: " + (nuevoSalario[x] - renta2[x]) + "<br>")
                    document.write("_________________________________________________________<br><br></br>");
                    

                }
                else if (nuevoSalario[x] <= 895.24) {
                    renta2[x] = (nuevoSalario[x] - 472.00) * 0.10 + 17.67;
                    document.write("Nombre del empleado:" + empleado[x] + "<br>");
                    document.write("Salario: " + salario[x] + "<br>");
                    document.write("Nuevo salario: " + nuevoSalario[x] + "<br>");
                    document.write("El tramo en el que se encuentra es  Tramo 2- $472.01 -- $895.24 " + "<br>");
                    document.write("ISSS total: " + ISSS + "<br>");
                    document.write("AFP total: " + AFP + "<br>");
                    document.write("Renta: " + renta2[x] + "<br>");
                    document.write("Salario final total: " + (nuevoSalario[x] - renta2[x]) + "<br>")
                    document.write("_________________________________________________________<br><br></br>");
                    
                }
                else if (nuevoSalario[x] <= 2038) {
                    renta2[x] = (nuevoSalario[x] - 895.24) * 0.20 + 60.00;
                    document.write("Nombre del empleado: " + empleado[x] + "<br>");
                    document.write("Salario: " + salario[x] + "<br>");
                    document.write("Nuevo salario: " + nuevoSalario[x] + "<br>");
                    document.write("El tramo en el que se encuentra es Tramo 3- $895.25 -- $2038.00" + "<br>");
                    document.write("ISSS total: " + ISSS + "<br>");
                    document.write("AFP total: " + AFP + "<br>");
                    document.write("Renta: " + renta2[x] + "<br>");
                    document.write("Salario final total: " + (nuevoSalario[x] - renta2[x]) + "<br>")
                    document.write("_________________________________________________________<br><br></br>");
                    
                }
                else if (nuevoSalario[x] > 2038) {
                    renta2[x] = (nuevoSalario[x] - 2038.00) * 0.30 + 288.57;
                    document.write("Nombre del empleado: " + empleado[x] + "<br>");
                    document.write("Salario: " + salario[x] + "<br>");
                    document.write("Nuevo salario: " + nuevoSalario[x] + "<br>");
                    document.write("El tramo en el que se encuentra es  Tramo 4- $2038.01 -- En adelante" + "<br>");
                    document.write("ISSS total: " + ISSS + "<br>");
                    document.write("AFP total: " + AFP + "<br>");
                    document.write("Renta: " + renta2[x] + "<br>");
                    document.write("Salario final total: " + (nuevoSalario[x] - renta2[x]) + "<br>")
                    document.write("_________________________________________________________<br><br></br>");
                }
            }

            
            break;
        }


    }


