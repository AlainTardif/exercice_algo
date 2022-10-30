// Equivalent Algo (exercice_5_1) en Javascript

var N = 0;

prompt("Entrez un nombre entre 1 et 3") 
    while ((N < 1) || (N > 3)){
        alert("Saisie incorrecte, veuillez recommencer")
        N = prompt("Entrez un nombre entre 1 et 3") 
}
alert("C'est parfait")

