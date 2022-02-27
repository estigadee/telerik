let input = [
    '100'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const GALON = 4.54;
const KM = 1.60;
const helper = 454;

function check_contrains(m){
    if(m < 1 || m > 100){
        return false;
    }
    return true;
}

function miles_to_km(m){
    return m*KM;
}

function convert(m){
    let kilometers = miles_to_km(m);
    return helper/kilometers;
}

let m = +gets();
if (!check_contrains(m)){
    return;
}

let litters = convert(m);
litters = Math.round(litters);
print(`${litters} litres per 100 km`);