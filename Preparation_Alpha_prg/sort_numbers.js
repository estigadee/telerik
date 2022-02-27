let input = [
    '8, 14, 5, 1, 5, 5, 18',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function sort(arr){
    let len = arr.length;
    let buff = 0;
    for(let i = 0; i < len - 1 ; i++){
        for(let j = i +1; j < len; j++ ){
            print(` arr[i] = ${arr[i]}`);
            print(arr[j]);
            if(Number(arr[i]) < Number(arr[j])){
                print('slap');
                buff = arr[i];
                arr[i] = arr[j];
                arr[j] = buff;
            }
        }
    }
    return arr;
}

let arr = gets();
arr = arr.split(', ');
print(arr);
let sorted_arr = [];
sorted_arr = sort(arr);
sorted_arr = sorted_arr.join(', ');
print(sorted_arr);