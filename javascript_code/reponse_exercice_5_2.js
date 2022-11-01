// Equivalent Algo (exercice_5_2) en Javascript

var nB = 0;

prompt("Ecrire un nombre entre 10 et 20")
  while(nB < 10) {
    alert('Plus grand')
    nB = prompt("Ecrire un nombre entre 10 et 20")
  }
  while(nB > 20) {
    alert('Plus petit')
    nB = prompt("Ecrire un nombre entre 10 et 20")
  }
  alert("C'est parfait")