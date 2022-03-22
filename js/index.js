/* sprint 1*/
let nombres = document.getElementById("nom");
let CaracteristicaA = document.getElementById("carA");
let CaracteristicaB = document.getElementById("carB");
let CaracteristicaC = document.getElementById("carC");
let CaracteristicaD = document.getElementById("carD");
let CaracteristicaE = document.getElementById("carE");
let sel1 = document.getElementById("nom1");
let sel2 = document.getElementById("nom2");
let calculoSim = document.getElementById("coseno");
let seno = document.getElementById("cos");

let nomArray = [];
let apellidoArray = [];
let carA = [];
let carB = [];
let carC = [];
let carD = [];
let carE = [];
let users = [];

let ascend1 = document.getElementById("ascend1");
let descent1 = document.getElementById("descent1");

let ascend2 = document.getElementById("ascend2");
let descent2 = document.getElementById("descent2");

let ascend3 = document.getElementById("ascend3");
let descent3 = document.getElementById("descent3");

let ascend4 = document.getElementById("ascend4");
let descent4 = document.getElementById("descent4");

let ascend5 = document.getElementById("ascend5");
let descent5 = document.getElementById("descent5");

let ascend6 = document.getElementById("ascend6");
let descent6 = document.getElementById("descent6");

function parseCSV(text) {
    // Obtenemos las lineas del texto
    let lines = text.replace(/\r/g, '').split('\n');
    return lines.map(line => {
        let arr = line.split('');
        
        // Por cada linea obtenemos los valores
        for (let i = 0; i < arr.length; i++) {
            if (arr[i-1]==="0"){
                arr[i]='.';
            }
            if (arr[i]===","){
                arr[i]='-';
            }
        line = arr.toString();
        }
        
        line = line.replaceAll(',','')
        line = line.replaceAll('"','')
        
        let values = line.split("-");
        
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
            carC.push(output[3][i]);
            carD.push(output[4][i]);
            carE.push(output[5][i]);

        }

        for (let i = 0; i < output[0].length; i++) {
            if (i > 0) {
                let user = {
                    nombre: nomArray[i],
                    apellido: apellidoArray[i],
                    gustoDmi: parseFloat(carA[i]),
                    gustoHamburguesa: parseFloat(carB[i]),
                    gustoHelado: parseFloat(carC[i]),
                    gustoVideojuegos: parseFloat(carD[i]),
                    Felicidad: parseFloat(carE[i])
                }
                users.push(user);
            }
        }
        select();
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
ascend4.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(a.gustoHelado) - parseFloat(b.gustoHelado));
    draw();
});

descent4.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(b.gustoHelado) - parseFloat(a.gustoHelado));
    draw();
});
ascend5.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(a.gustoVideojuegos) - parseFloat(b.gustoVideojuegos));
    draw();
});

descent5.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(b.gustoVideojuegos) - parseFloat(a.gustoVideojuegos));
    draw();
});
ascend6.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(a.Felicidad) - parseFloat(b.Felicidad));
    draw();
});

descent6.addEventListener("click", () => {
    users.sort((a, b) => parseFloat(b.Felicidad) - parseFloat(a.Felicidad));
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
    CaracteristicaC.innerHTML = "";
    CaracteristicaD.innerHTML = "";
    CaracteristicaE.innerHTML = "";

    users.forEach((x) => {
        nombres.appendChild(createElementNames(x.nombre, x.apellido));
    });
    users.forEach((x) => {
        CaracteristicaA.appendChild(createElement(x.gustoDmi));
    });
    users.forEach((x) => {
        CaracteristicaB.appendChild(createElement(x.gustoHamburguesa));
    });
    users.forEach((x) => {
        CaracteristicaC.appendChild(createElement(x.gustoHelado));
    });
    users.forEach((x) => {
        CaracteristicaD.appendChild(createElement(x.gustoVideojuegos));
    });
    users.forEach((x) => {
        CaracteristicaE.appendChild(createElement(x.Felicidad));
    });
}
/* sprint 1*/
/* sprint 2*/
const select = () =>{
    for (let i = 0; i < users.length; i++) {
        let name = users[i].nombre + ' ' + users[i].apellido;
        sel1.appendChild(createOption(name));
        sel2.appendChild(createOption(name));
    }
}

function createOption(value) {
    const newProduct = document.createElement("option");
    newProduct.value = value;
    newProduct.innerHTML = value;
    return newProduct;
}

calculoSim.addEventListener('click', ()=>{
    if (sel1.value === "default" || sel2.value === "default" ) {
        alert("Por favor complete todos los campos");
    }else if (sel1.value === sel2.value){
        alert("Por favor escoja nombres distintos");
    } else {
        let user1 = findElement(sel1.value);
        let user2 = findElement(sel2.value);
        //artículo1 y el artículo2 (5, 0, 1, 3) y (6, 0, 0, 2)
        let resultado = cos(user1,user2);
        drawCos(resultado)
    } 
});

const findElement = (sel) => {
    let element;
    for (let i = 0; i < users.length; i++) {
        let name = users[i].nombre+' '+users[i].apellido;
        if (name === sel) {
            element = users[i];
        }
    }
    return element;

}

const cos=(user1, user2) => {
    let similitudCoseno = ((user1.gustoDmi*user2.gustoDmi) +(user1.gustoHamburguesa*user2.gustoHamburguesa) + (user1.gustoHelado*user2.gustoHelado) + (user1.gustoVideojuegos*user2.gustoVideojuegos) + (user1.Felicidad*user2.Felicidad));
    let denominador =  (Math.sqrt(Math.pow(user1.gustoDmi,2)+Math.pow(user1.gustoHamburguesa,2)+Math.pow(user1.gustoHelado,2)+Math.pow(user1.gustoVideojuegos,2)+Math.pow(user1.Felicidad,2))) * (Math.sqrt(Math.pow(user2.gustoDmi,2)+Math.pow(user2.gustoHamburguesa,2)+Math.pow(user2.gustoHelado,2)+Math.pow(user2.gustoVideojuegos,2)+Math.pow(user2.Felicidad,2)))
    let similitudFinal = similitudCoseno/denominador;
    return similitudFinal;
}

const drawCos =(coseno) => {
    let final = coseno.toFixed(6);
    seno.innerHTML = "";
    seno.innerHTML= final;
}
/* sprint 2*/
