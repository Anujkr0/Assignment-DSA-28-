function ispalindrome(str){
    return ispalindrome_helper(str, 0 , Array.length-1)
}
function ispalindrome_helper(str,start , end){
    if(start>=end){
        return console.log(true);
    }elseif(str.charat(start)!==str.charat(end))
    return console.log(false);
    return ispalindrome_helper(str, start+1, end-1);

}
ispalindrome("abccba")