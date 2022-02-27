let input = [
    '25',
    '-10',
    '6',
    '4',
    '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function validate_nums(n1,n2,n3,n4,n5){
    if(n1 >= -200 && n1 <= 200 && n2 >= -200 && 
        n2 <= 200 && n3 >= -200 && n3 <= 200 && 
        n4 <= 200 && n4 >= -200 && n5 <= 200 && n5 >= -200){
            return true;
        }
        return false;
}
function get_biggest_num(n1,n2,n3,n4,n5){
    let biggest = 0;
    if(n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5){
        biggest = n1;
    } else if(n2 >= n1 && n2 >= n3 && n2 >= n4 && n2>= n5){
        biggest = n2;
    } else if(n3 >= n1 && n3 >= n2 && n1 >= n4 && n1 >= n5){
        biggest = n3;
    } else if(n4 >= n1 && n4 >= n2 && n4 >= n3 && n1 >= n5){
        biggest = n4;
    } else if(n5 >= n1 && n5 >= n2 && n5 >= n3 && n5 >= n4){
        biggest = n5;
    }
    return biggest;
}

let n1 = +gets(input, 0);
let n2 = +gets(input, 1);
let n3 = +gets(input, 2);
let n4 = +gets(input, 3);
let n5 = +gets(input, 4);

if(validate_nums(n1,n2,n3,n4,n5)){
    print(get_biggest_num(n1,n2,n3,n4,n5));
}