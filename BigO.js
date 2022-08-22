const io = require('console-read-write');
//const arrayInput = [[1, 3, 1, 5],[2, 2, 4, 1],[5, 0, 2, 3],[0, 6, 1, 2]];
let arrayInput = [];
let paths = {};
let largestPaths = [];
let largestPathsValue = 0;
const savePaths = (coordinates, coordinatesStr, weight) => {
    let total = weight;
    // validação de que a coordenada recebida é um obj e tem o formato desejado
    if (typeof coordinates !== 'Object') {
        if (coordinates.i >= 0 && coordinates.j >= 0) {
            // validação para parar a recursividade
            if (coordinates.j === arrayInput.length - 1) {
                paths[coordinatesStr] = total;
                return {
                    bananas: total,
                    coordinates: coordinatesStr,
                    stop: 1
                };
            }
            // validação para saber se pode avançar em linha reta
            if (coordinates.j + 1 < arrayInput.length) {
                res = savePaths({
                    i: coordinates.i,
                    j: coordinates.j + 1
                }, coordinatesStr + '->(' + (coordinates.i) + ',' + (coordinates.j + 1) + ')', arrayInput[coordinates.i][coordinates.j + 1] + weight);
                if (res.stop == 1 && largestPathsValue <= res.bananas) {
                    largestPathsValue = res.bananas;
                    ;
                }
            }
            // validação para saber se pode avançar direita e arriba
            if (coordinates.i - 1 >= 0 && coordinates.j + 1 < arrayInput[coordinates.j + 1].length) {
                res = savePaths({
                    i: coordinates.i - 1,
                    j: coordinates.j + 1
                }, coordinatesStr + '->(' + (coordinates.i - 1) + ',' + (coordinates.j + 1) + ')', arrayInput[coordinates.i - 1][coordinates.j + 1] + weight);
                if (res.stop == 1 && largestPathsValue <= res.bananas) {
                    largestPathsValue = res.bananas;
                }
            }
            // validação para saber se pode avançar direita e abaixo
            if (coordinates.i + 1 < arrayInput.length && coordinates.j + 1 < arrayInput.length) {
                res = savePaths({
                    i: coordinates.i + 1,
                    j: coordinates.j + 1
                }, coordinatesStr + '->(' + (coordinates.i + 1) + ',' + (coordinates.j + 1) + ')', arrayInput[coordinates.i + 1][coordinates.j + 1] + weight);
                if (res.stop == 1 && largestPathsValue <= res.bananas) {
                    largestPathsValue = res.bananas;
                }
            }
        } else {
            return total;
        }
    }
    return total;
}

const init = async () => {
    let cols = 0, rows = 0;

    io.write('Write the number of columns you wan');
    cols = await io.read();
    io.write('Write the number of rows you wan');
    rows = await io.read();
    //captura os valores do array
    for (let i = 0; i < cols; i++) {
        arrayInput[i] = []
        for (let j = 0; j < rows; j++) {
            io.write(`Write the value into position [${i},${j}]`);
            arrayInput[i][j] = parseInt(await io.read());
        }
    }
    // começa avaliando as rotas
    for (let i = 0; i < arrayInput.length; i++) {
        io.write("|" + arrayInput[i] + "|");
        savePaths({i: i, j: 0}, '(' + i + ',' + 0 + ')', arrayInput[i][0]);
    }
    //busca os caminhos que tem a maior quantidade de bananas
    for (const pathElement in paths) {
        if (paths[pathElement] === largestPathsValue) {
            largestPaths[pathElement] = largestPathsValue;
        }
    }
    ;
    console.log('Paths list: ', paths);
    console.log('Largest Paths :', largestPaths);
    return;

}

init();
