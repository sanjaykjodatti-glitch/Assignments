//String Declaraiton
let firstName:string="sanjay";
let lastName:string="jodatti";
let fullname:string=`${firstName} ${lastName}`;
console.log(fullname);

//String methods
//1.storing string in a variable
let originalString:string=" username:admin| password:Admin@123 ";
console.log(originalString);

//2.calculate total number of characters in the string
let totalNumberOfCharacters:number=originalString.length;
console.log("total number of characters in a string: " +totalNumberOfCharacters);

//3.get specific character of string at specific index
//let charcterAt4=originalString.charAt(4);
let charcterAt35=originalString.charAt(35);
//console.log("character at index 4 is: "+charcterAt4);
console.log("character at index 35 is: "+charcterAt35);

//4.reverse the string
let reverseString:String="";
for(let i:number=originalString.length-1; i>=0; i--)
{
reverseString=reverseString+originalString.charAt(i);
}
console.log(reverseString);

//remove the space at begining and end of the string
let removeUnwantedSpace:string=originalString.trim();
console.log(removeUnwantedSpace);

//removing all the spaces from string
let removeUnwantedSpace1:string=originalString.replace(/ /g,'');
console.log(removeUnwantedSpace);

//convert string to uppercase
let convertoUpperCase:string=originalString.toUpperCase();
console.log(convertoUpperCase);

//convert string to lowercase
let convertoLowerCase:string=originalString.toLowerCase();
console.log(convertoLowerCase);

//extract the specific part of the string using starting index and ending index
let username=originalString.substring(10,15);
console.log(username);
let password=originalString.substring(26);
console.log(password);

//extract the specific part of the string from dynamic text using split methods
let extractString:string[]=originalString.split(" ");
console.log(extractString);
console.log(extractString[2]);
