const madLib = (verb, adj, noun) => {
    return console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`)
};

//> madLib('make', 'best', 'guac');
//"We shall MAKE the BEST GUAC."

const isSubstring = (searchString, subString) => {
    return searchString.includes(subString);
}; 

//console.log(isSubstring("time to program", "time"));
//true

//console.log(isSubstring("Jump for joy", "joys"));
//false

const fizzBuzz = (array) => {
    const result = [];
    array.forEach(num => {
        if ((num % 3 === 0) ^ (num % 5 === 0)) {
            result.push(num);
        }
    });
    return result;
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        } 
    }
    return true;
};

console.log(isPrime(2));
//true

console.log(isPrime(10));
//false

console.log(isPrime(15485863));
//true

console.log(isPrime(3548563));
//false

const sumOfNPrimes = (n) => {
    let sum = 0;
    let i = 2;
    let primes = 0;

    while (n > primes) {
        if (isPrime(i)) {
            sum += i;
            primes ++;
        };
        i++;
    };
    return sum;
};

console.log(sumOfNPrimes(0));
//0

console.log(sumOfNPrimes(1));
//2

console.log(sumOfNPrimes(4));
//17
