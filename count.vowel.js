const vowels = ["a", "e", "i", "o", "u"]

function countVowel1(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count
}
console.log('The no. of vowels is', countVowel1('Baranwal'))

//vowelcount by callback function.

function countVowel(word, display) {
    setTimeout(() => {
        display(word)
    }, 3000);
}
function count(word) {
    console.log("/////////////////////doing by callback")
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log('The no. of vowels by callback is', count);
    console.log('Counting vowels completed!');
}

countVowel('vinay', count);

//vowelcount by promises.

function func1(word) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("/////////////////////doing by promise");
            const vowels = ["a", "e", "i", "o", "u"]
            let count = 0;
            for (let char of word.toLowerCase()) {
                if (vowels.includes(char)) {
                    count++;
                }
            }
            if (count) {
                console.log('Your promise has been resolved')
                resolve(count);
            }
            else {
                console.log('Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1('Rohan').then((result) => console.log('No. of vowels by promise',result))
.catch((error) => {
    console.log("Could not find vowel: " + error)
})
