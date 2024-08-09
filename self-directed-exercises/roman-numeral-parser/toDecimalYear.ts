type RomanNumeral = 'I'
    | 'V'
    | 'X'
    | 'L'
    | 'C'
    | 'D'
    | 'M';

function isRomanNumeral(candidate: unknown): candidate is RomanNumeral {
    return typeof candidate === 'string' && Object.keys(mapping).find((romanNumeral) => {
        return romanNumeral === candidate
    }) !== undefined;
}

const validModifier: Record<RomanNumeral, RomanNumeral | null> = {
    I: null,
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
}
const mapping: Record<RomanNumeral, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function toDecimalYear(
    romanNumeralYear: string
): number | null {
    if (romanNumeralYear.length === 0) {
        console.error("Encountered empty string");
        return null;
    }

    let runningTotal = 0;
    let repeatedTokenCount = 0;
    for (let index = 0; index < romanNumeralYear.length; index++) {
        const currentToken: string = romanNumeralYear[index];

        if (!isRomanNumeral(currentToken)) {
            // escape with invalid token
            console.error("Encountered invalid token", currentToken);
            return null;
        }

        if (index === 0) {
            // first token is simply added
            runningTotal += mapping[currentToken];
            continue;
        }

        // compare current token to previous token
        const previousToken: string = romanNumeralYear[index - 1];
        if (!isRomanNumeral(previousToken)) {
            // escape with invalid token
            console.error("Encountered invalid token", currentToken);
            return null;
        }

        if (mapping[currentToken] < mapping[previousToken]) {
            repeatedTokenCount = 0;
            runningTotal += mapping[currentToken];
        } else if (mapping[currentToken] > mapping[previousToken]) {
            repeatedTokenCount = 0;
            // subtract the value previously added
            runningTotal = runningTotal - mapping[previousToken] + (mapping[currentToken] - mapping[previousToken]);
        } else {
            // current and previous tokens are identical
            if (++repeatedTokenCount === 3) {
                // escape with >3 repeated tokens
                console.error("Encountered token repeated more than maximum of 3", currentToken);
                return null;
            }
            runningTotal += mapping[currentToken];
        }

    }
    return runningTotal;
}

function main() {
    for (const inputTuple of testInputs) {
        const [romanNumeralYear, expectedDecimalValue] = inputTuple;
        console.log(romanNumeralYear, toDecimalYear(romanNumeralYear), toDecimalYear(romanNumeralYear) === expectedDecimalValue);
    }
}

const testInputs: Array<[string, number | null]> = [
    ["", null],
    ["VL", null],
    ["XLV", 45],
    ["CDXCIX", 499],
    ["M", 1000],
    ["CM", 900], // 900
    ["MC", 1100], // 1100 
    ["MCM", 1900], // 1900
    ["MDCCCL", 1850],
    ["MCML", 1950],
    ["MCMXCII", 1992],
    ["IX", 9],
    ["X", 10],
    ["II", 2],
    ["III", 3],
    ["IIII", null],
    ["IV", 4],
    ["XI", 11],
    ["IXI", null],// invalid
    ["XCX", null],// invalid
    ["MMV", 2005],
    ["MD", 1500],
    ["MMXC", 2090],
    ["MMXCI", 2091],
    ["MMXCII", 2092],
    ["MMXCIII", 2093],
    ["MMXCIV", 2094],
    ["MMXCV", 2095],
    ["MMXCVI", 2096],
    ["MMXCVII", 2097],
    ["MMXCVIII", 2098],
    ["MMIC", null],
    ["MMXCIX", 2099],
    ["MMXCX", null],
    ["MMC", 2100],
    ["MMCI", 2101],
];

main();
