//Funcion para calcular

let text = prompt();


function stringCalculator(text){

      let input = text;
  
      const numbers = input.split(",");

      const test = numbers.reduce((a,b)=> Number(a)+Number(b),0);

     return console.log(test)

}

stringCalculator(text);