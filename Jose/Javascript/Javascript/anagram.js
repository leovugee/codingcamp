var word1 = prompt("Enter the first word: ");
var word2 = prompt("Enter the second word: ");
var temp1 = word1;
var temp2 = word2;
var check = true;

word1 = word1.split("");
word2 = word2.split("");




if(temp1 != temp2){
    if(word1.length == word2.length){
    
        word1 = word1.sort();
        word2 = word2.sort();

        for(var i = 0; i < word1.length; i++){
            if(word1[i] != word2[i] ){
                check = false;
               }
        }
        if(check == true){

            document.getElementById("text").innerHTML = "the words " + temp1 + " and " + temp2 + " are anagrams.";
        }else{
            document.getElementById("text").innerHTML = "the words " + temp1 + " and " + temp2 + " are not anagrams.";
        }

    }else{
    document.getElementById("text").innerHTML = "the words " + temp1 + " and " + temp2 + " are not anagrams.";
    }
}else{
    document.getElementById("text").innerHTML = "the words " + temp1 + " and " + temp2 + " are not anagrams.";
}