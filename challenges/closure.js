// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Because it is declared inside of myFunction, nestedFunction is in myFunction's scope and can access other items in that scope.
// Technically this isn't closure, because nestedFunction is being invoked while also in myFunction's scope. If it were passed out of that scope (such as by being returned) JS would create a closure to allow it to continue accessing internal no matter where it was invoked.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const summation = num => {
  if(num <= 0) return 0;
  return num + summation(num - 1);
};

console.log(summation(4));