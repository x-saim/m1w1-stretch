//A program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

let args = process.argv;

args = args.slice(2);

const reverseString = (args) => {
  args.forEach((element) => {
    let left = 0;
    let right = element.length - 1;

    const arr = element.split('');

    //Two Pointer Method

    while (left <= right) {
      let temp = arr[left]; //temporary storage
      arr[left] = arr[right];

      arr[right] = temp;
      left++;
      right--;
    }
    const reversedString = arr.join('');
    console.log(reversedString);
  });
};

reverseString(args);
