let nombres = document.getElementById("nom");
let CaracteristicaA = document.getElementById("carA");
let CaracteristicaB = document.getElementById("carB");

let nomArray = [];
let apellidoArray = [];
let carA = [];
let carB = [];
let users = [];

let ascend1 = document.getElementById("ascend1");
let descent1 = document.getElementById("descent1");

let ascend2 = document.getElementById("ascend2");
let descent2 = document.getElementById("descent2");

let ascend3 = document.getElementById("ascend3");
let descent3 = document.getElementById("descent3");

function parseCSV(text) {
    // Obtenemos las lineas del texto
    let lines = text.replace(/\r/g, '').split('\n');
    return lines.map(line => {
        // Por cada linea obtenemos los valores
        let values = line.split(',');
        return values;
    });
}

function reverseMatrix(matrix) {
    let output = [];
    // Por cada fila
    matrix.forEach((values, row) => {
        // Vemos los valores y su posicion
        values.forEach((value, col) => {
            // Si la posición aún no fue creada
            if (output[col] === undefined) output[col] = [];
            output[col][row] = value;
        });
    });
    return output;
}

function readFile(evt) {
    let file = evt.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        // Cuando el archivo se terminó de cargar
        let lines = parseCSV(e.target.result);
        let output = reverseMatrix(lines);
        for (let i = 0; i < output[0].length; i++) {

            let name = output[0][i].split(" ");
            //console.log(name);

            if (name[0] !== "Juan") {
                nomArray.push(name[0]);
            } else {
                nomArray.push("Juan Camilo");
            }

            if (name[1] !== "Camilo") {
                apellidoArray.push(name[1]);
            } else {
                apellidoArray.push("Bermeo");
            }

            carA.push(output[1][i]);
            carB.push(output[2][i]);

        }

        for (let i = 0; i < output[0].length; i++) {
            if (i > 0) {
                let user = {
                    nombre: nomArray[i],
                    apellido: apellidoArray[i],
                    gustoDmi: carA[i],
                    gustoHamburguesa: carB[i]
                }
                users.push(user);
            }
        }
        draw()
    };
    // Leemos el contenido del archivo seleccionado
    reader.readAsBinaryString(file);
}

ascend1.addEventListener("click", () => {
    users.sort((a,b) => (a.apellido > b.apellido) ? 1 : -1);
    draw();
});

descent1.addEventListener("click", () => {
    users.sort((a,b) => (a.apellido < b.apellido) ? 1 : -1);
    draw();
});

ascend2.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(a.gustoDmi) - parseFloat(b.gustoDmi));
    draw();
});

descent2.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(b.gustoDmi) - parseFloat(a.gustoDmi));
    draw();
});

ascend3.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(a.gustoHamburguesa) - parseFloat(b.gustoHamburguesa));
    draw();
});

descent3.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(b.gustoHamburguesa) - parseFloat(a.gustoHamburguesa));
    draw();
});

document.getElementById('file').addEventListener('change', readFile, false);

function createElement(value) {
    const newProduct = document.createElement("li");
    newProduct.innerHTML = `
    <h2>${value}</h2>
    `
    return newProduct;
}

function createElementNames(name, lastName) {
    const newProduct = document.createElement("li");
    newProduct.innerHTML = `
    <h2>${name + " " + lastName}</h2>
    `
    return newProduct;
}

function draw (){
    nombres.innerHTML = "";
    CaracteristicaA.innerHTML = "";
    CaracteristicaB.innerHTML = "";

    users.forEach((x) => {
        nombres.appendChild(createElementNames(x.nombre, x.apellido));
    });
    users.forEach((x) => {
        CaracteristicaA.appendChild(createElement(x.gustoDmi));
    });
    users.forEach((x) => {
        CaracteristicaB.appendChild(createElement(x.gustoHamburguesa));
    });
}


