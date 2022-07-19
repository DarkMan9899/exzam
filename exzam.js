

//    Use array methods to turn data into result
/*
let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"], 
    ["this","is","a","long","sentence"]
  ]

  let newData  = data.map((val)=>{
    return val.join(" ")
  })
  console.log(newData)


  //Create a constructor function to produce calculator instances (+,-,*,? operations).

  function Calculator(first = 0, second = 0, operator) {
    switch(operator) {
        case '+':  return first + second;
        case '-':  return first - second;
        case '/':  return first / second;
        case '*':  return first * second;
        default: return 'invalid opertator';
    }
};
let calc = new Calculator();
console.log(calc)




///Remove duplicates in an array.




let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];
function removeDups(arr) {


  let dupes =  arr.filter((c, index) => {
    return arr.indexOf(c) === index;
});

    return dupes
}

console.log(removeDups(dupes))
//result => [1,2,3,’a’, ‘f’, 4, ‘d’];


//Groupe by property

let arr = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];




function groupe(arr, prop) {

        return arr.reduce(function( acc , itm){
          let key = itm[prop]
      
          if(!acc[key]){
      
            acc[key]=[]
            
          }
          acc[key].push(itm)
      
          return acc
      
        },[])
      }
console.log(groupe(arr,"country"))

*/
    
 
// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.





function reverseString(str) {
    
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0) + str.split(".");
  }
  console.log(reverseString("much.very.program.this.like.i"));
/*
Example 1
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
Much.very.program.this.like.i

Example 2
Input:
S = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole
string , the input string becomes
mno.pqr


*/