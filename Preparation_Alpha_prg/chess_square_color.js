let input = [
    'a',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function verify_input(L, R){
    return (L >= 'a' && L <= 'h') && (R >= 1 && R <= 8);
}

function get_color(L, R){
    if( ((R%2 == 0) && (L =='a' || L =='c' || L =='e' || L =='g')) ||
        ((R%2 == 1) && (L =='b' || L =='d' || L =='f' || L =='h')) ){
        return 'light';
    }else{
        return 'dark';
    }
}

let L = gets(input, 0);
let R = gets(input, 1);

if(!verify_input(L, R)){
    return;
} else{
    print(get_color(L, R));
}