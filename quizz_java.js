var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var reponses = ["vrai", "vrai", "vrai", "vrai", "vrai", "vrai", "vrai", "vrai", "vrai", "vrai"];
var resultat = 0


function correction(numero) {
    var radios = document.getElementsByName(questions[numero]);
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == reponses[numero]) {
                document.getElementsByClassName("resultat")[numero].innerHTML = "Juste!";
                resultat += 1
            }
            else {
                document.getElementsByClassName("resultat")[numero].innerHTML = "Faux!" ;
            }
        }
    }
}