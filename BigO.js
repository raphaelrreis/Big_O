function minMax1(arr){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for(let e of arr) {
        min = Math.min(min, e);
        max = Math.max(max, e);
    }

    console.log(min, max);

}
