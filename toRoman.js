function convertToRoman(num) {
    let roman = "";
    for (let i = 0; i < Math.floor(num / 1000); i++){
        roman += "M";
    }
    num -= Math.floor(num / 1000) * 1000;
    roman += convertHundreds(Math.floor(num/100));
    num -= Math.floor(num / 100) * 100;
    roman += convertTens(Math.floor(num / 10));    
    num -= Math.floor(num / 10) * 10;
    roman += convertLastDigit(num);
 return roman;
}

function convertLastDigit(digit){
    switch(digit){
        case 1: return "I";
        case 2: return "II";
        case 3: return "III";
        case 4: return "IV";
        case 5: return "V";
        case 6: return "VI";
        case 7: return "VII";
        case 8: return "VIII";
        case 9: return "IX";
        default: return "";
    }
}

function convertTens(tens){
switch(tens){
        case 1: return "X";
        case 2: return "XX";
        case 3: return "XXX";
        case 4: return "XL";
        case 5: return "L";
        case 6: return "LX";
        case 7: return "LXX";
        case 8: return "LXXX";
        case 9: return "XC";
        default: return "";
    }
}

function convertHundreds(hundreds){
    switch(hundreds){
        case 1: return "C";
        case 2: return "CC";
        case 3: return "CCC";
        case 4: return "CD";
        case 5: return "D";
        case 6: return "DC";
        case 7: return "DCC";
        case 8: return "DCCC";
        case 9: return "CM";
        default: return "";
    }
}
convertToRoman(36);
