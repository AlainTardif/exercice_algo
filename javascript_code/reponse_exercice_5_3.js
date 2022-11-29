// Equivalent Algo (exercice_5_3) en Javascript

var iCompteur = 0;
var iNbr = 0; 
var iResult = "";


prompt("Ecrire un nombre")
iCompteur = 0;
while (iCompteur < 10) {
  iCompteur++;
  iNbr++;
  iResult += iCompteur + " ";
}
alert(iResult);
