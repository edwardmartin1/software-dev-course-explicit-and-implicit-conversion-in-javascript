/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/* no changes made here, the result is correct and uses type coercion */
let result = "5" - 2;
console.log("The result is: " + result);

/* to fix this I created a strict equality check inside the Boolean() function to see if the value */
/* on the left side is equal to the string "true" */
let isValid = Boolean("false" === "true");
console.log(isValid);
console.log(typeof isValid);
if (isValid) {
    console.log("This is valid!");
}

/* to fix this I used the Number() function to first convert the string "25" to a number */
/* the addition operation was then able to add 25 and 5 to get a result of 30 */
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

/* example of implicit type conversion */
console.log("Example of implicit type conversion:");
let numberDays = 10;
console.log(typeof numberDays);
let erruptionMessage = "Number of days since volcano eruption: " + numberDays;
console.log(typeof erruptionMessage);
console.log(erruptionMessage);


/* example of explicit type conversion */
console.log("Example of explicit type conversion:");
let isActive;
console.log(typeof isActive);
isActive = Boolean(isActive);
console.log(typeof isActive);
console.log(isActive);

if (isActive)
{
  console.log("Volcano is active");
}
else
{
  console.log("Volcano is dormant");
}
