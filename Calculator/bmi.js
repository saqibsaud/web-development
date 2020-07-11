function fibonacciGenerator (n){

  var output = [];

  if(n == 1){
    output = [0];
  }
  else if (n == 2){
    output = [0,1];
  }
  else{
    output = [0,1];

    for (var i=2 ; i<n ; i++){
      output.push(output[output.length -2] + output[output.length-1])
    }
  }
  return output;
}

console.log(fibonacciGenerator(1));

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

function bmiCalculator (weight, height) {
    var check =  Math.round(weight / (height * height));
    if (check < 18.5){
        return "Your BMI is " + check + ", so you are underweight.";
    }
    else if(check > 18.5 && check < 24.9){
        return "Your BMI is " + check + ", so you have a normal weight.";
    }
    else{
        return "Your BMI is " + check + ", so you are overweight.";
    }
}

bmiCalculator(60, 2);

//bmi should equal 20 when it's rounded to the nearest whole number.


function whosPaying(names) {

/******Don't change the code above*******/

    var namesLength = names.length();
    var randomNamePosition = Math.floor(Math.random() * nameLength);
    var randonPerson = names[randomNamePosition];

    console.log(randomPerson + " is going to buy lunch today!");
/******Don't change the code below*******/
}
var names = ["Angela", "Ben", "Jenny"];
whosPaying(names);
