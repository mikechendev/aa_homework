// window.setTimeout(() => {
//     alert('HAMMERTIME');
// }, 5000)

// const hammerTime = (time) => {
//     window.setTimeout(() => {
//         alert(`${time} is hammertime!`)
//     }, time)
// } 

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reader.question('Would you like some biscuits?', (res) => {
//     console.log(`${res}`);
//     reader.close();
// })

function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);

      reader.question('Would you like some biscuits?', (res) => {
        second = res;
        console.log(`You replied ${res}.`);

        const firstRes = (first === 'yes') ? 'do' : 'don\'t';
        const secondRes = (second === 'yes') ? 'do' : 'don\'t';
        console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
        reader.close();
    });
  });
}

teaAndBiscuits();