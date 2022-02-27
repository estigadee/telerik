let input = [
    'April',
    '6'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function month_to_number(month) {
    switch (month) {
        case 'January':
            return 1;
        case 'February':
            return 2;
        case 'March':
            return 3;
        case 'April':
            return 4;
        case 'May':
            return 5;
        case 'June':
            return 6;
        case 'July':
            return 7;
        case 'August':
            return 8;
        case 'September':
            return 9;
        case 'October':
            return 10;
        case 'November':
            return 11;
        case 'December':
            return 12;
    }
}

function get_season(number_of_month, date) {

    if (number_of_month == 3 && date < 20) {
        return 'Winter';
    } else if ((number_of_month >= 3 && number_of_month <= 5) ||
        (number_of_month == 6 && date <= 21)) {
        return 'Spring';
    } else if (number_of_month == 9 && date > 21) {
        return 'Autumn';
    } else if ((number_of_month >= 6 && number_of_month <= 9) ||
        (number_of_month == 6 && date > 21)) {
        return 'Summer';
    } else if (number_of_month == 12 && date > 21) {
        return 'Winter';
    } else if (number_of_month >= 9 && number_of_month <= 12) {
        return 'Autumn';
    } else if (number_of_month >= 1 && number_of_month <=3){
        return 'Winter';
    }
}


let number_of_month = month_to_number(gets(input,0));
let date = gets(input, 1);

print(get_season(number_of_month, date));