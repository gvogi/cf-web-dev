const quarterSales = [1000, 2000, 3000, 3500]

let netProfits = quarterSales.map(function (val) {
    return val * 0.7
})

console.log(netProfits)

let netProfitsOver1500 = netProfits.filter(profits => profits > 1500)

console.log(netProfitsOver1500)

let sumOfNetProfits = netProfits.reduce(function (total, profit) {
    return total + profit
}, 0)

console.log(sumOfNetProfits)