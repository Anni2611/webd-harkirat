/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
         if(str1.length!=str2.length) return false;
         let a=str1.toLowerCase();
         let b=str2.toLowerCase();
         let sortedStr1 = a.split('').sort().join('');
         let sortedStr2 = b.split('').sort().join('');
        //  console.log(sortedStr1);
        //  console.log(sortedStr2);
         for(let i=0;i<str1.length;i++){
                   if(sortedStr1[i]!==sortedStr2[i]) return false;
         }
         return true;
}

module.exports = isAnagram;