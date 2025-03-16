var Random_Number_1 = Math.floor(Math.random() * 6) + 1;
console.log("Dice_1 Value is " + Random_Number_1);

var Random_Dice_Image_1 = "dice" + Random_Number_1 + ".png" ;

var Random_Dice_Source_1 = "images/" + Random_Dice_Image_1 ;

var Image_1 = document.querySelectorAll("img")[0];
Image_1.setAttribute("src" , Random_Dice_Source_1)

var Random_Number_2 = Math.floor(Math.random() * 6) + 1;
console.log("Dice_2 value is " + Random_Number_2);

var Random_Dice_Image_2 = "dice" + Random_Number_2 + ".png" ;

var Random_Dice_Source_2 = "images/" + Random_Dice_Image_2 ;

var Image_2 = document.querySelectorAll("img")[1];
Image_2.setAttribute("src" , Random_Dice_Source_2)

if (Random_Number_1 > Random_Number_2) {
    document.querySelector("h1").innerHTML = "Player1 Wins !!!!"
}

else if (Random_Number_1 < Random_Number_2) {
    document.querySelector("h1").innerHTML = "Player2 Wins !!!!"
}

else{
    document.querySelector("h1").innerHTML = "Draw !!!!"
}