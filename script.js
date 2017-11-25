let birthyear = prompt("In what year were you born?");

var president1991 = "George H. W. Bush";
var president1992 = "George H. W. Bush";
var president1993 = "Bill Clinton";

var president = [president1991, president1992, president1993];

var personoftheyear1991 = "Ted Turner";
var personoftheyear1992 = "Bill Clinton";
var personoftheyear1993 = "The Peacemakers";

var personoftheyear = [personoftheyear1991, personoftheyear1992, personoftheyear1993];

var nobelpeaceprize1991 = "Aung San Suu Kyi";
var nobelpeaceprize1992 = "Rigoberta Menchú Tum";
var nobelpeaceprize1993 = "Nelson Mandela ";

var nobelpeaceprize = [nobelpeaceprize1991, nobelpeaceprize1992, nobelpeaceprize1993];

if (birthyear == "1991") {
    document.getElementById("thatyear").innerHTML = "The year you were born, " + president[0] + " was the president of the United States, and " + personoftheyear[0] + " was elected Person of the Year by TIME Magazine. " + nobelpeaceprize[0] + ' won the Nobel Peace Prize.';
};

if (birthyear == "1992") {
    document.getElementById("thatyear").innerHTML = "The year you were born, " + president[1] + " was the president of the United States, and " + personoftheyear[1] + " was elected Person of the Year by TIME Magazine. " + nobelpeaceprize[1] + ' won the Nobel Peace Prize.';
};

if (birthyear == "1993") {
    document.getElementById("thatyear").innerHTML = "The year you were born, " + president[2] + " was the president of the United States, and " + personoftheyear[2] + " was elected Person of the Year by TIME Magazine. " + nobelpeaceprize[2] + ' won the Nobel Peace Prize.';
};


