let input = [
    '1975'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function zodiak(number) {
    switch (number % 12) {
        case 8:
            print('Dragon');
            break;
        case 9:
            print('Snake');
            break;
        case 10:
            print('Horse');
            break;
        case 11:
            print('Sheep');
            break;
        case 0:
            print('Monkey');
            break;
        case 1:
            print('Rooster');
            break;
        case 2:
            print('Dog');
            break;
        case 3:
            print('Pig');
            break;
        case 4:
            print('Rat');
            break;
        case 5:
            print('Ox');
            break;
        case 6:
            print('Tiger');
            break;
        case 7:
            print('Hare');
            break;
        default:
            print('err');
            break;
    }
}

let year = +gets(input, 0);

zodiak(year);

