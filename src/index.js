module.exports = function toReadable(number) {
    const arrNumberText = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const groupsNumber = [" hundred", " thousand", " million", " billion"];

    if (number < 20) return arrNumberText[number];

    let res = "";
    if (number < 100) {
        res = tens[parseInt(number / 10 - 2)];
        if (number % 10 > 0) {
            res += " " + arrNumberText[number % 10];
        }

        return res;
    }

    if (number < 1000) {
        res += toReadable(parseInt(number / 100)) + groupsNumber[0];
        if (number - parseInt(number / 100) * 100 > 0) {
            res += " " + toReadable(number - parseInt(number / 100) * 100);
        }

        return res;
    }

    if (number < 1000000) {
        res += toReadable(parseInt(number / 1000)) + groupsNumber[1];
        res += " " + toReadable(number - parseInt(number / 1000) * 1000);
        return res;
    }

    if (number < 1000000000) {
        res += toReadable(parseInt(number / 1000000)) + groupsNumber[2];
        res += " " + toReadable(number - parseInt(number / 1000000) * 1000000);

        return res;
    }

    if (number < 1000000000000) {
        res += toReadable(parseInt(number / 1000000000)) + groupsNumber[3];
        res +=
            " " +
            toReadable(number - parseInt(number / 1000000000) * 1000000000);

        return res;
    }
};
