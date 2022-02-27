let input = [
    '25',
    '-10',
    '6'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function validate_nums(n1,n2,n3,n4,n5){
    if(n1 >= -1000 && n1 <= 1000 && n2 >= -1000 && 
        n2 <= 1000 && n3 >= -1000 && n3 <= 1000){
            return true;
        }
        return false;
}

function sort(n1,n2,n3){
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;

    if(n1 <= n2 && n1 <= n3){
        b1 = n1;
        if(n2 <= n3){
            b2 = n2;
            b3 = n3;
        }else{
            b2 = n3;
            b3 = n2;
        }
    }else if(n2 <= n1 && n2 <= n3){
        b1 = n2;
        if(n1 <= n3){
            b2 = n1;
            b3 = n3;
        }else{
            b2 = n3;
            b3 = n1;
        }
    }else if(n3 <= n1 && n3 <= n2){
        b1 = n3;
        if(n2 <= n1){
            b2 = n2;
            b3 = n1;
        }else{
            b2 = n1;
            b3 = n2;
        }
    }
    print(b3,b2,b1);
}

let n1 = +gets(input, 0);
let n2 = +gets(input, 1);
let n3 = +gets(input, 2);

if(validate_nums(n1,n2,n3)){
    sort(n1,n2,n3);
}