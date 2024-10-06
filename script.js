const phrases = [
    "<tb><strong class='jor'>JOR</strong> convierte los días comunes en los meJORes.</tb>",
    "<tb><strong class='jor'>JOR</strong> llena de energía y hace todo meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> sabe cómo hacer que cualquier día sea meJOR.</tb>",
    "<tb>Todo es más brillante cuando <strong class='jor'>JOR</strong> está cerca.</tb>",
    "<tb>Con <strong class='jor'>JOR</strong>, cada momento es meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> aporta calma y todo parece meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> transforma cualquier momento en algo meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> inspira a todos a ser meJORes cada día.</tb>",
    "<tb>La vida es meJOR cuando <strong class='jor'>JOR</strong> está en ella.</tb>",
    "<tb>Siempre que <strong class='jor'>JOR</strong> está presente, el día mejora.</tb>",
    "<tb>No importa el desafío, con <strong class='jor'>JOR</strong> todo sale meJOR.</tb>",
    "<tb>Con <strong class='jor'>JOR</strong>, incluso los retos se sienten meJORes.</tb>",
    "<tb>No hay compañía meJOR que la de <strong class='jor'>JOR</strong>.</tb>",
    "<tb>Cada conversación con <strong class='jor'>JOR</strong> te deja sintiéndote meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> tiene una manera única de hacer que todo sea meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> hace que cualquier lugar se sienta como el meJOR.</tb>",
    "<tb>Los momentos simples con <strong class='jor'>JOR</strong> siempre son los meJORes.</tb>",
    "<tb><strong class='jor'>JOR</strong> tiene el don de hacer que todo se vea meJOR de lo que es.</tb>",
    "<tb>No hay problema que <strong class='jor'>JOR</strong> no pueda convertir en algo meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> trae consigo una energía que lo hace todo meJOR.</tb>",
    "<tb>El ambiente cambia y se vuelve meJOR cuando <strong class='jor'>JOR</strong> llega.</tb>",
    "<tb><strong class='jor'>JOR</strong> siempre encuentra una manera de hacer todo meJOR.</tb>",
    "<tb>Con <strong class='jor'>JOR</strong>, el futuro siempre se ve mucho meJOR.</tb>",
    "<tb><strong class='jor'>JOR</strong> tiene la capacidad de sacar lo meJOR de las personas.</tb>",
    "<tb>Todo es más sencillo y meJOR con <strong class='jor'>JOR</strong>.</tb>",
    "<tb>Cualquier plan es meJOR si <strong class='jor'>JOR</strong> está involucrado.</tb>",
    "<tb><strong class='jor'>JOR</strong> inspira meJORía en cada aspecto de la vida.</tb>",
    "<tb><strong class='jor'>JOR</strong> es esa chispa que hace que todo sea meJOR.</tb>",
    "<tb>Con <strong class='jor'>JOR</strong>, hasta las pequeñas cosas se ven meJORes.</tb>",
    "<tb><strong class='jor'>JOR</strong> convierte los días comunes en los meJORes.</tb>"
];

let index = 0;
const phraseElement = document.getElementById("phrase");

function updatePhrase() {
    phraseElement.innerHTML = phrases[index];
    index = (index + 1) % phrases.length;  // Bucle infinito
}

setInterval(updatePhrase, 2000);  // Cambia la frase cada 5 segundos
