function countChar (input,char){
    for (var count = -1,index = -2; index != -1;count++, index=input.indexOf(char,index+1));
    if (count == 0){
        return 'Not Found!';
    }
    return count;
}

console.log(countChar('arkademy', 'a')); //2
console.log(countChar('javascript', 'x')); // Not Found!
console.log(countChar('peace!', '!')); // 1