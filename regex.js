
const words = ['Apple', 'banana', 'Carrot', 'dog', 'Elephant', 'frog', 'Giraffe', 'Lioness', 'Monkey'];
const pattern = /[^Aa]{6}/g;

function findSymbols(wordsArr, regularExp) {

    const result = []
    for (const word of wordsArr) {

        if (word.match(regularExp)) {
            result.push(...word.match(regularExp));
        } 
    }
    if (result.length === 0) {
        return 'There are no matches'
    }
    return result
}
console.log(findSymbols(words, pattern));



