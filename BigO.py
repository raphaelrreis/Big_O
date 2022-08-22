import io
#arrayInput = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]]
arrayInput = []
paths = {}
largestPaths = []
largestPathsValue = 0


def savePaths(coordinates, coordinatesStr, weight):
    total = weight
    if type(coordinates) != dict:
        if coordinates[0] >= 0 and coordinates[1] >= 0:
            if coordinates[1] == len(arrayInput) - 1:
                paths[coordinatesStr] = total
                return {
                    'bananas': total,
                    'coordinates': coordinatesStr,
                    'stop': 1
                }
            if coordinates.i - 1 >= 0 and coordinates.j + 1 < len(arrayInput[coordinates.j + 1]):
                res = savePaths({
                    i: coordinates.i - 1,
                    j: coordinates.j + 1
                }, coordinatesStr + '->(' + str(coordinates.i - 1) + ',' + str(coordinates.j + 1) + ')', arrayInput[coordinates.i - 1][coordinates.j + 1] + weight)
                if res.stop == 1 and largestPathsValue <= res.bananas:
                    largestPathsValue = res.bananas
            if coordinates.i + 1 < len(arrayInput) and coordinates.j + 1 < len(arrayInput):
                res = savePaths({
                    i: coordinates.i + 1,
                    j: coordinates.j + 1
                }, coordinatesStr + '->(' + str(coordinates.i + 1) + ',' + str(coordinates.j + 1) + ')', arrayInput[coordinates.i + 1][coordinates.j + 1] + weight)
                if res.stop == 1 and largestPathsValue <= res.bananas:
                    largestPathsValue = res.bananas
        else:
            return total
    return total


def init():
    cols = 0
    rows = 0
    print('Escreva o número de colunas que você deseja')
    cols = int(input())
    print('Escreva o número de linhas que você deseja')
    rows = int(input())
    # preenchendo input de entrada para array's
    for i in range(cols):
        arrayInput.append([])
        for j in range(rows):
            print(f'Escreva o valor na posição [{i},{j}]')
            arrayInput[i].append(int(input()))
    # verifica as possiveis rotas obedecendo a regra
    for i in range(cols):
        print("|" + str(arrayInput[i]) + "|")
        savePaths({'i': i, 'j': 0}, '(' + str(i) +
                  ',' + str(0) + ')', arrayInput[i][0])
    # verifica maior possibilidade de encontrar maior numero de elementos
    for pathElement in paths:
        if (paths[pathElement] == largestPathsValue):
            largestPaths[pathElement] = largestPathsValue
    print('Lista de caminhos: ', paths)
    print('Largest Paths :', largestPaths)
    return
