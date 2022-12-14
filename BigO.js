function minMax1(arr) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let e of arr) {
        min = Math.min(min, e);
        max = Math.max(max, e);
    }

    console.log(min, max);
}


function minMax2(arr) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let e of arr) {
        min = Math.min(min, e);
    }

    for (let e of arr) {
        max = Math.max(max, e);
    }

    console.log(min, max);
}

const arr = [1, 2, 3, 4];

console.log(minMax1(arr), minMax2(arr));
