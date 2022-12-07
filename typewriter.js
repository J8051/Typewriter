const sentence = "hello there from Lighthouse Labs"

let typewritter = function (phrase) { 
  phrase += "\n";
  let time = 1000; 
  for (let char of phrase) {
    setTimeout(() => { 
      process.stdout.write(char);
      
    }, time)
    time += 50;   
  }; 
}
console.log(typewritter(sentence));