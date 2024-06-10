function isPalindrome1(x) {
  let str = x.toString();
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

function isPalindrome2(x) {
  let str = x.toString();
  let rev = str.split("").reverse().join("");

  if (rev == str) {
    return true;
  }
  return false;
}

let str1 = 121;
let str2 = -121;
let str3 = 10;

console.log(isPalindrome1(str1));
console.log(isPalindrome1(str2));
console.log(isPalindrome2(str3));
