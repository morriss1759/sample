var whole = [];
var number = 1;

function fizzBuzz(){
    while(number<=100){

        if(number % 3 === 0 && number % 5 === 0){
            whole.push('Fizzbuzz');
        }else if(number % 3 === 0){
            whole.push('Fizz');
        }else if(number % 5 === 0){
            whole.push('Buzz');
        }else{
          whole.push(number)
        }
         number++;
    }
    console.log(whole)
}
