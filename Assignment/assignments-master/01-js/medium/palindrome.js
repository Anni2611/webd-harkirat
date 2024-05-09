/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let k= str.toLowerCase();
  let a=k.replaceAll(" ","");
  let b=a.replaceAll(",","");
  let c=b.replaceAll("!","");
   let d=c.replaceAll("?","");
   let st=d.replaceAll(".","");
  // console.log(a);
  for(let i=0;i<st.length/2;i++){
      if(st[i]!=st[st.length-i-1]) return false;
  }
  return true;
}
// let s="he,llO! ";
// isPalindrome(s);
// isPalindrome('A man a plan a canal Panama');
module.exports = isPalindrome;
