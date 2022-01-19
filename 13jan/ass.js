const a1=[
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
]

function sum(a1) {
    var SD={sum:0},
    ML=a1.length;
    for (var i=0;i<ML;i++)
    {
        SD.sum+=a1[i][i];
    }
    return SD
}
console.log(sum(a1));
