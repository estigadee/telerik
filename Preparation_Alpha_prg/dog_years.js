let input = [
    '2'
];

const Two_dog_years=20;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function hy_to_dy(hy){
    if(hy > 2){
        return (hy-2)*4+Two_dog_years;
    }else{
        return hy*10;
    }
}

function check_input(hy){
    return (hy >=1 || hy <= 15);
}

let hy = gets();
print(hy_to_dy(hy));