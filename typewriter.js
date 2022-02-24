const sentence = "hello there from lighthouse labs";
// const sentence = "hello \nthere \nfrom \nlighthouse \nlabs";
// print each word has a new line
const hello = "Hey, world";


const animation = data => {
  let result = 0;
  for (const char of data) {
    setTimeout(()=> {
      process.stdout.write(char);
    }, result += 50);
  }
  setTimeout(()=> {
    process.stdout.write('\n');
  },(data.length + 1) * 50);
};
animation(sentence);

// animation(hello);