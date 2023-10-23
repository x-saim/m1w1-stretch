//Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

let args = process.argv;
args = args.splice(2);

const pigLatinTranslator = (args) => {
  let newWord = '';
  let translatedString = '';

  args.forEach((element) => {
    newWord = element.slice(1) + element[0] + 'ay';
    translatedString += newWord + ' ';
  });

  console.log(translatedString.trim());
};

pigLatinTranslator(args);
