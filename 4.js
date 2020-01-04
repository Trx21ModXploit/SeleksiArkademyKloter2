function palindrome(kata){
    
   var ambilHuruf = kata.match(/([a-zA-Z]+)/g);
   var checkPalindrome = /([a-zA-Z])/gmi;
   var kapital = /([a-z]{4})([A-Z]{1})/g;
   var kecil = /([A-Z]{4})([a-z]{1})/g;
   var mix = /([A-Za-z]{2})/g;
   var murni = /()/g;
   var tampung = ambilHuruf.join('');
   var palindrom = [];
   var hasil = '';


   for (var i = tampung.length; i >= 0; i--){
       palindrom.push(tampung[i]);
   }
   hasil = palindrom.join('');

   if (kapital.exec(hasil)){
       return 'kapital';
   }
   if (kecil.exec(hasil)){
       return 'kecil';
   }
   if (mix.exec(hasil)){
       return 'mix';
   }
}

console.log(palindrome('Malam890'));
console.log(palindrome('M77ALAm'));
console.log(palindrome('MalaM'));