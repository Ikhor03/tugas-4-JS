let erwin = 165;
let kamil = 178;
let ikhor = 158;

let tertinggi;
let terpendek;
let anakTengah;
if (erwin > kamil) {
    tertinggi = erwin;
    terpendek = kamil;
    anakTengah = ikhor;
} else {
    tertinggi = kamil;
    terpendek = erwin;
    anakTengah = ikhor;
}
if (erwin > ikhor) {
    tertinggi = erwin;
    terpendek = ikhor;
    anakTengah = kamil;
} else {
    tertinggi = ikhor;
    terpendek = erwin;
    anakTengah = kamil;
}

if (kamil > ikhor) {
    tertinggi = kamil;
    terpendek = ikhor;
    anakTengah = erwin;
} else {
    tertinggi = ikhor;
    terpendek = kamil;
    anakTengah = erwin;
}

console.log(tertinggi, anakTengah, terpendek)