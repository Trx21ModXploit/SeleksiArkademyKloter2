function validateColor(hex){
    
    var panjang = hex.length;
    var validPanjang = panjang > 3 && panjang <= 7;
    var hasil = '#';
    
        for (var i = 1; i < panjang; i ++){
            if (hex[i] === 'a'){ 
                hasil += hex[i]
            }else if(hex[i] === 'b'){
                hasil += hex[i];
            }else if(hex[i] === 'c'){
                hasil += hex[i];
            }else if(hex[i] === 'd'){
                hasil += hex[i];
            }else if(hex[i] === 'e'){
                hasil += hex[i];
            }else if(hex[i] === 'f'){
                hasil += hex[i];
            }else if(hex[i] === 'A'){
                hasil += hex[i];
            }else if(hex[i] === 'B'){
                hasil += hex[i];
            }else if(hex[i] === 'C'){
                hasil += hex[i];
            }else if(hex[i] === 'D'){
                hasil += hex[i];
            }else if(hex[i] === 'E'){
                hasil += hex[i];
            }else if(hex[i] === 'F'){
                hasil += hex[i];
            }else if(hex[i] === '0'){
                hasil += hex[i];
            }else if(hex[i] === '1'){
                hasil += hex[i];
            }else if(hex[i] === '2'){
                hasil += hex[i];
            }else if(hex[i] === '3'){
                hasil += hex[i];
            }else if(hex[i] === '4'){
                hasil += hex[i];
            }else if(hex[i] === '5'){
                hasil += hex[i];
            }else if(hex[i] === '6'){
                hasil += hex[i];
            }else if(hex[i] === '7'){
                hasil += hex[i];
            }else if(hex[i] === '8'){
                hasil += hex[i];
            }else if(hex[i] === '9'){
                hasil += hex[i];
            }
        }

    if (validPanjang && hex.startsWith('#') && hasil === hex){
        return 'Format Hex Code benar!';    
    }
    return 'Format Hex Code salah!';
}



console.log(validateColor('#FFF')); // Format Hex Code benar!
console.log(validateColor('#e3e3e3')); // Format Hex Code benar!
console.log(validateColor('#ata910')); // Format Hex Code salah!
console.log(validateColor('#zz')); // Format Hex Code salah!
