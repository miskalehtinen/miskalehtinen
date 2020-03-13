console.log("morjes");

function summa(x, y){
    if(isNaN(x) || isNaN(y)) {
        return "anna lukuja"
    } else {
        return x+y;
    }
}

console.log(summa(1, 2));
console.log(summa(-13304, 22323423));


console.log("******tehtävä 1******")

function yhdistys(nimi) {
    // return "hei, " + nimi + "mikä buugi";
    return `Hei, ${nimi}. Mitä kuuluu`
}

console.log(yhdistys("Miska"))
console.log("Toimii")

console.log("---- Tehtävä2 ----")

function luku(numero) {
    return numero ** 2
}

console.log(luku("10"))

console.log("-----Tehtävä3-----")

function tays(ika) {
    if(ika > 18) {
    return "täysi-ikäinen"
} else {
    return "alaikäinen"
}
}

console.log(tays(20))