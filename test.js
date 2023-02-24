function evenOrOdd(number) {
  number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));

const camelCase = (string) => {
  const words = string.split('/?=[A-Z]/');
  console.log(words);
};

camelCase('helloWorld');
