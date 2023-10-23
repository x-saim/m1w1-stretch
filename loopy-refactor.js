const loopyLighthouse = (range, multiples, words) => {
  let x = range[0];
  while (x >= range[0] && x <= range[1]) {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (x % multiples[0] === 0) {
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }

    x += 1;
  }
};

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
