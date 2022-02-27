let input = [
    '1.92',
    '5'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function count_number_of_change_part1_sotitnki(part){
    if(part%2 == 0){
        switch(part){
            case 2:
                print('1 x 20 stotinki');
                break;
            case 4:
                print('2 x 20 stotinki');
                break;
            case 6:
                print('1 x 50 stotinki');
                print('1 x 10 stotinki');
                break;
            case 8:
                print('1 x 50 stotinki');
                print('1 x 20 stotinki');
                print('1 x 10 stotinki');
                break;
            default:
                print('error1');
                break;
        }
    }else{
        switch(part){
            case 1:
                print('1 x 10 stotinki');
                break;
            case 3:
                print('1 x 20 stotinki');
                print('1 x 10 stotinki');
                break;
            case 5:
                print('1 x 50 stotinki');
                break;
            case 7:
                print('1 x 50 stotinki');
                print('1 x 20 stotinki');
                break;
            case 9:
                print('1 x 50 stotinki');
                print('2 x 20 stotinki');
                break;
            default:
                print('error2');
                break;

        }
    }
}

function count_number_of_change_part2_sotitnki(part){
    if(part%2 == 0){
        switch(part){
            case 2:
                print('1 x 2 stotinki');
                break;
            case 4:
                print('2 x 2 stotinki');
                break;
            case 6:
                print('1 x 5 stotinki');
                print('1 x 1 stotinki');
                break;
            case 8:
                print('1 x 5 stotinki');
                print('1 x 2 stotinki');
                print('1 x 1 stotinki');
                break;
            default:
                print('error3');
                break;
        }
    }else{
        switch(part){
            case 1:
                print('1 x 1 stotinki');
                break;
            case 3:
                print('1 x 2 stotinki');
                print('1 x 1 stotinki');
                break;
            case 5:
                print('1 x 5 stotinki');
                break;
            case 7:
                print('1 x 5 stotinki');
                print('1 x 2 stotinki');
                break;
            case 9:
                print('1 x 5 stotinki');
                print('2 x 2 stotinki');
                break;
            default:
                print('error4');
                break;

    }
 
}}

function count_leva_change(change_leva){
    change_leva = String(change_leva);
    print(`${change_leva} x 1 lev`);
}


function count_change_stotinki(change_stotinki){
    change_stotinki = change_stotinki*100;
    let part1 = parseInt(change_stotinki/10);
    let part2 = parseInt(change_stotinki%10);
    if (part1 > 0){
        count_number_of_change_part1_sotitnki(part1);
    }
    if(part2 > 0){
        count_number_of_change_part2_sotitnki(part2);
    }
}


let prise = +gets(input, 0);
let paid = +gets(input, 1);
let change = paid - prise;

let change_leva = 0;
let change_stotinki = 0;

if (change == 0){
    print('0 x lev');
    print('0 x stotinki');
    return;
}else if (change > 1){
    change_leva = change.toFixed();
    change_stotinki = change - change_leva;
    count_leva_change(change_leva);
    count_change_stotinki(change_stotinki);
}else{
    change_stotinki = change - change_leva;
    count_change_stotinki(change_stotinki);
}



//-------------------

// let input = [
//     '1.92',
//     '5'
// ]

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// function count_number_of_change_part1_sotitnki(part){
//     if(part%2 == 0){
//         switch(part){
//             case 2:
//                 print(`${1} x ${20} stotinki`);
//                 break;
//             case 4:
//                 print(`${2} x ${20} stotinki`);
//                 break;
//             case 6:
//                 print(`${1} x ${50} stotinki`);
//                 print(`${1} x ${10} stotinki`);
//                 break;
//             case 8:
//                 print(`${1} x ${50} stotinki`);
//                 print(`${1} x ${20} stotinki`);
//                 print(`${1} x ${10} stotinki`);
//                 break;
//             default:
//                 print('error3');
//                 break;
//         }
//     }else{
//         switch(part){
//             case 1:
//                 print(`${1} x ${10} stotinki`);
//                 break;
//             case 3:
//                 print(`${1} x ${20} stotinki`);
//                 print(`${1} x ${10} stotinki`);
//                 break;
//             case 5:
//                 print(`${1} x ${50} stotinki`);
//                 break;
//             case 7:
//                 print(`${1} x ${50} stotinki`);
//                 print(`${1} x ${20} stotinki`);
//                 break;
//             case 9:
//                 print(`${1} x ${50} stotinki`);
//                 print(`${2} x ${20} stotinki`);
//                 break;
//             default:
//                 print('error4');
//                 break;

//         }
//     }
// }

// function count_number_of_change_part2_sotitnki(part){
//     if(part%2 == 0){
//         switch(part){
//             case 2:
//                 print(`${1} x ${2} stotinki`);
//                 break;
//             case 4:
//                 print(`${2} x ${2} stotinki`);
//                 break;
//             case 6:
//                 print(`${1} x ${5} stotinki`);
//                 print(`${1} x ${1} stotinki`);
//                 break;
//             case 8:
//                 print(`${1} x ${5} stotinki`);
//                 print(`${1} x ${2} stotinki`);
//                 print(`${1} x ${1} stotinki`);
//                 break;
//             default:
//                 print('error3');
//                 break;
//         }
//     }else{
//         switch(part){
//             case 1:
//                 print(`${1} x ${1} stotinki`);
//                 break;
//             case 3:
//                 print(`${1} x ${2} stotinki`);
//                 print(`${1} x ${1} stotinki`);
//                 break;
//             case 5:
//                 print(`${1} x ${5} stotinki`);
//                 break;
//             case 7:
//                 print(`${1} x ${5} stotinki`);
//                 print(`${1} x ${2} stotinki`);
//                 break;
//             case 9:
//                 print(`${1} x ${5} stotinki`);
//                 print(`${2} x ${2} stotinki`);
//                 break;
//             default:
//                 print('error4');
//                 break;

//     }
 
// }}

// function count_leva_change(change_leva){
//     change_leva = change_leva;
//     print(`${change_leva} x 1 lev`);
// }


// function count_change_stotinki(change_stotinki){
//     change_stotinki = change_stotinki*100;
//     let part1 = parseInt(change_stotinki/10);
//     let part2 = parseInt(change_stotinki%10);
//     if (part1 > 0){
//         count_number_of_change_part1_sotitnki(part1);
//     }
//     if(part2 > 0){
//         count_number_of_change_part2_sotitnki(part2);
//     }
// }


// let prise = +gets(input, 0);
// let paid = +gets(input, 1);
// let change = paid - prise;

// let change_leva = 0;
// let change_stotinki = 0;

// if (change == 0){
//     print(`${0} x lev`);
//     print(`${0} x stotinki`);
//     return;
// }else if (change > 1){
//     change_leva = change.toFixed();
//     change_stotinki = change - change_leva;
//     count_leva_change(change_leva);
//     count_change_stotinki(change_stotinki);
// }else{
//     change_stotinki = change - change_leva;
//     count_change_stotinki(change_stotinki);
// }
