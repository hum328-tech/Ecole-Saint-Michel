const A1_LESSONS = {

    saludar: {
        title: "Saludar",
        subtitle: "Pista 1 · Saludos básicos",
        goal: "Reconocer y pronunciar saludos básicos del francés cotidiano.",
        phrases: [
            {
                fr: "Bonjour",
                es: "Buenos días",
                tip: "La j francesa suena suave, como una sh ligera.",
                ok: ["bonjour", "bon jour"]
            },
            {
                fr: "Bonsoir",
                es: "Buenas tardes / buenas noches",
                tip: "No pronuncies la r final con fuerza.",
                ok: ["bonsoir"]
            },
            {
                fr: "Bonne nuit",
                es: "Buenas noches",
                tip: "Une bonne liaison douce entre bonne y nuit.",
                ok: ["bonne nuit"]
            },
            {
                fr: "Salut",
                es: "Hola",
                tip: "La t final normalmente no se pronuncia.",
                ok: ["salut"]
            },
            {
                fr: "Comment ça va ?",
                es: "¿Qué tal?",
                tip: "Ça va se pronuncia como una unidad corta.",
                ok: ["comment ça va", "comment ca va", "ça va", "ca va"]
            },
            {
                fr: "Très bien, merci",
                es: "Muy bien, gracias",
                tip: "Très se pronuncia con una e abierta.",
                ok: ["très bien merci", "tres bien merci"]
            },
            {
                fr: "Et toi ?",
                es: "¿Y tú?",
                tip: "Toi suena parecido a twa.",
                ok: ["et toi"]
            },
            {
                fr: "Et vous ?",
                es: "¿Y usted?",
                tip: "Vous mantiene una u cerrada francesa.",
                ok: ["et vous"]
            }
        ],
        dialogue: [
            {
                system: "Bonjour !",
                expected: "Bonjour"
            },
            {
                system: "Comment ça va ?",
                expected: "Très bien, merci"
            },
            {
                system: "Et toi ?",
                expected: "Très bien, merci"
            }
        ],
        grammar: [
            {
                title: "Bonjour",
                text: "Saludo general. Puede usarse durante el día para decir buenos días u hola de forma educada."
            },
            {
                title: "Comment ça va ?",
                text: "Literalmente significa algo como ¿cómo va eso?, pero se usa naturalmente como ¿qué tal?"
            },
            {
                title: "Et toi ? / Et vous ?",
                text: "Et toi se usa con confianza. Et vous es formal o plural."
            }
        ]
    },


    despedirse: {
        title: "Despedirse",
        subtitle: "Pista 2 · Fórmulas de despedida",
        goal: "Practicar despedidas frecuentes en francés con ritmo y entonación natural.",
        phrases: [
            {
                fr: "Au revoir",
                es: "Adiós",
                tip: "La r francesa es suave. No pronuncies como la r española fuerte.",
                ok: ["au revoir", "aurevoir"]
            },
            {
                fr: "À tout à l’heure",
                es: "Hasta luego",
                tip: "Es una frase larga: practícala por partes.",
                ok: ["à tout à l'heure", "a tout a l'heure", "tout a l'heure"]
            },
            {
                fr: "À demain",
                es: "Hasta mañana",
                tip: "Demain contiene sonido nasal al final.",
                ok: ["à demain", "a demain", "demain"]
            },
            {
                fr: "À mardi",
                es: "Hasta el martes",
                tip: "La r de mardi es suave.",
                ok: ["à mardi", "a mardi", "mardi"]
            },
            {
                fr: "À la prochaine",
                es: "Hasta la próxima",
                tip: "Prochaine contiene el sonido ch francés.",
                ok: ["à la prochaine", "a la prochaine"]
            },
            {
                fr: "Bon voyage",
                es: "Buen viaje",
                tip: "Voyage tiene sonido parecido a vwa-yazh.",
                ok: ["bon voyage"]
            },
            {
                fr: "Bonne nuit, repose-toi bien",
                es: "Buenas noches, que descanses",
                tip: "Frase larga: prioriza ritmo antes de perfección.",
                ok: ["bonne nuit repose toi bien", "bonne nuit repose-toi bien"]
            }
        ],
        dialogue: [
            {
                system: "Au revoir !",
                expected: "Au revoir"
            },
            {
                system: "À demain !",
                expected: "À demain"
            },
            {
                system: "Bon voyage !",
                expected: "Merci"
            }
        ],
        grammar: [
            {
                title: "À + momento",
                text: "À demain, À mardi y À la prochaine indican cuándo volverás a ver a la persona."
            },
            {
                title: "Bon / Bonne",
                text: "Bon se usa con palabras masculinas y bonne con palabras femeninas."
            }
        ]
    },


    nombre: {
        title: "Nombre",
        subtitle: "Pista 3 · Información personal",
        goal: "Preguntar y decir el nombre usando frases básicas.",
        phrases: [
            {
                fr: "Comment tu t’appelles ?",
                es: "¿Cómo te llamas?",
                tip: "T’appelles une dos palabras. Practica despacio.",
                ok: ["comment tu t'appelles", "comment tu tappelles", "tu t'appelles"]
            },
            {
                fr: "Je m’appelle Pablo",
                es: "Me llamo Pablo",
                tip: "Je m’appelle se pronuncia unido.",
                ok: ["je m'appelle pablo", "je mappelle pablo"]
            },
            {
                fr: "Et toi ?",
                es: "¿Y tú?",
                tip: "Toi suena como twa.",
                ok: ["et toi"]
            },
            {
                fr: "Comment vous appelez-vous ?",
                es: "¿Cómo se llama usted?",
                tip: "Forma formal. Tiene vous al inicio y al final.",
                ok: ["comment vous appelez vous", "comment vous appelez-vous"]
            },
            {
                fr: "Quel est votre nom ?",
                es: "¿Cuál es su nombre?",
                tip: "Votre se usa para hablar formalmente.",
                ok: ["quel est votre nom"]
            },
            {
                fr: "C’est moi",
                es: "Soy yo",
                tip: "Moi suena parecido a mwa.",
                ok: ["c'est moi", "cest moi"]
            }
        ],
        dialogue: [
            {
                system: "Comment tu t’appelles ?",
                expected: "Je m’appelle Pablo"
            },
            {
                system: "Et toi ?",
                expected: "Je m’appelle Luis"
            },
            {
                system: "Bonjour !",
                expected: "Bonjour"
            }
        ],
        grammar: [
            {
                title: "Je m’appelle",
                text: "Es la forma básica para decir me llamo. El verbo es pronominal: s’appeler."
            },
            {
                title: "Tu / Vous",
                text: "Tu es informal. Vous es formal o plural."
            }
        ]
    },


    procedencia: {
        title: "Procedencia",
        subtitle: "Pista 4 · Origen y lugar",
        goal: "Decir de dónde eres y dónde vives.",
        phrases: [
            {
                fr: "Je suis espagnol",
                es: "Soy español",
                tip: "Je suis se pronuncia muy unido.",
                ok: ["je suis espagnol"]
            },
            {
                fr: "Je suis de Séville",
                es: "Soy de Sevilla",
                tip: "Séville mantiene sonido v francés.",
                ok: ["je suis de séville", "je suis de seville"]
            },
            {
                fr: "J’habite à Madrid",
                es: "Vivo en Madrid",
                tip: "J’habite empieza con sonido unido.",
                ok: ["j'habite à madrid", "jhabite a madrid", "habite a madrid"]
            },
            {
                fr: "D’où es-tu ?",
                es: "¿De dónde eres?",
                tip: "D’où se pronuncia muy corto.",
                ok: ["d'où es-tu", "d ou es tu", "d'où es tu"]
            },
            {
                fr: "D’où êtes-vous ?",
                es: "¿De dónde es usted?",
                tip: "Forma formal con vous.",
                ok: ["d'où êtes-vous", "d ou etes vous", "d'où êtes vous"]
            },
            {
                fr: "Vous êtes d’ici ?",
                es: "¿Es usted de aquí?",
                tip: "D’ici se pronuncia unido.",
                ok: ["vous êtes d'ici", "vous etes d'ici", "vous etes dici"]
            }
        ],
        dialogue: [
            {
                system: "D’où es-tu ?",
                expected: "Je suis de Mexico"
            },
            {
                system: "Tu habites où ?",
                expected: "J’habite à Mexico"
            },
            {
                system: "Vous êtes d’ici ?",
                expected: "Oui"
            }
        ],
        grammar: [
            {
                title: "Je suis de...",
                text: "Se usa para decir soy de un lugar."
            },
            {
                title: "J’habite à...",
                text: "Se usa para decir vivo en una ciudad."
            }
        ]
    },


    presentaciones: {
        title: "Presentaciones",
        subtitle: "Pista 8 · Presentar a otras personas",
        goal: "Presentar a alguien y responder con cortesía.",
        phrases: [
            {
                fr: "Voici Thomas",
                es: "Este es Tomás",
                tip: "Voici significa este es / esta es.",
                ok: ["voici thomas", "voici tomas"]
            },
            {
                fr: "Voici Maria",
                es: "Esta es María",
                tip: "Voici se usa para presentar.",
                ok: ["voici maria"]
            },
            {
                fr: "Ma sœur",
                es: "Mi hermana",
                tip: "Sœur tiene un sonido francés difícil; repite despacio.",
                ok: ["ma sœur", "ma soeur"]
            },
            {
                fr: "Je vous présente M. Leblanc",
                es: "Le presento al señor Leblanc",
                tip: "Frase formal. Practícala en partes.",
                ok: ["je vous présente monsieur leblanc", "je vous presente monsieur leblanc"]
            },
            {
                fr: "Bonjour",
                es: "Hola / buenos días",
                tip: "La j francesa es suave.",
                ok: ["bonjour", "bon jour"]
            },
            {
                fr: "Enchanté",
                es: "Encantado",
                tip: "La terminación é suena como e cerrada.",
                ok: ["enchanté", "enchante"]
            }
        ],
        dialogue: [
            {
                system: "Voici Maria",
                expected: "Bonjour Maria"
            },
            {
                system: "Je vous présente M. Leblanc",
                expected: "Enchanté"
            },
            {
                system: "Bonjour",
                expected: "Bonjour"
            }
        ],
        grammar: [
            {
                title: "Voici",
                text: "Sirve para presentar a una persona: voici Maria, voici Thomas."
            },
            {
                title: "Je vous présente",
                text: "Forma más formal para presentar a alguien."
            },
            {
                title: "Enchanté",
                text: "Respuesta social equivalente a encantado."
            }
               ]
    },

    pruebaB1: {
        title: "Prueba oral B1",
        subtitle: "Frases largas · Fluidez y pronunciación",
        goal: "Evaluar la pronunciación de frases largas con ritmo, claridad y fluidez.",

        phrases: [
            {
                fr: "Je voudrais réserver une table pour quatre personnes ce soir à huit heures.",
                es: "Quisiera reservar una mesa para cuatro personas esta noche a las ocho.",
                tip: "Practica la frase en bloques pequeños.",
                ok: [
                    "je voudrais réserver une table pour quatre personnes ce soir à huit heures",
                    "je voudrais reserver une table pour quatre personnes ce soir a huit heures"
                ]
            },

            {
                fr: "Pendant les vacances, nous avons visité plusieurs villes et découvert beaucoup de traditions locales.",
                es: "Durante las vacaciones visitamos varias ciudades y descubrimos muchas tradiciones locales.",
                tip: "Escucha primero el ritmo completo.",
                ok: [
                    "pendant les vacances nous avons visité plusieurs villes et découvert beaucoup de traditions locales",
                    "pendant les vacances nous avons visite plusieurs villes et decouvert beaucoup de traditions locales"
                ]
            },

            {
                fr: "À mon avis, apprendre une langue étrangère permet de mieux comprendre la culture des autres.",
                es: "En mi opinión, aprender una lengua extranjera permite comprender mejor la cultura de los demás.",
                tip: "Pon atención a la pronunciación de étrangère.",
                ok: [
                    "à mon avis apprendre une langue étrangère permet de mieux comprendre la culture des autres",
                    "a mon avis apprendre une langue etrangere permet de mieux comprendre la culture des autres"
                ]
            }
        ],

        dialogue: [
            {
                system: "Pourquoi veux-tu apprendre le français ?",
                expected: "Je veux apprendre le français parce que j’aime la culture française."
            },

            {
                system: "Qu’est-ce que tu as fait le week-end dernier ?",
                expected: "Le week-end dernier, j’ai passé du temps avec ma famille."
            }
        ],

        grammar: [
            {
                title: "Je voudrais",
                text: "Se utiliza para expresar deseos o hacer peticiones de manera cortés."
            },

            {
                title: "À mon avis",
                text: "Expresión utilizada para introducir una opinión personal."
            },

            {
                title: "Langue étrangère",
                text: "Significa lengua extranjera."
            }
        ]
    }
};
let currentLesson;
let currentPhraseIndex = 0;
let currentChunkIndex = 0;
let currentDialogueIndex = 0;
let scoreCount = 0;


document.addEventListener("DOMContentLoaded", function(){

    const params = new URLSearchParams(window.location.search);

    let lessonKey = params.get("lesson");

    console.log("LECCIÓN RECIBIDA:", lessonKey);

    if(!lessonKey){
        lessonKey = "saludar";
    }

    if(!A1_LESSONS[lessonKey]){
        console.warn("No existe esta lección:", lessonKey);
        lessonKey = "saludar";
    }
console.log("LECCIONES DISPONIBLES:", Object.keys(A1_LESSONS));
    currentLesson = A1_LESSONS[lessonKey];

    loadLesson();

});


function loadLesson(){

    document.getElementById("lessonTitle").textContent =
        currentLesson.title;

    document.getElementById("lessonSubtitle").textContent =
        currentLesson.subtitle;

    document.getElementById("lessonGoal").textContent =
        currentLesson.goal;

    renderPhrase();
    renderChunks();
    renderDialogue();
    renderGrammar();
    updateProgress();

}


function showActivity(id){

    document.querySelectorAll(".activity")
        .forEach(activity => {
            activity.classList.remove("active");
        });

    document.getElementById(id)
        .classList.add("active");

}


function renderPhrase(){

    const phrase = currentLesson.phrases[currentPhraseIndex];

    document.getElementById("phraseBox").innerHTML = `
        <div class="phrase-fr">
            ${phrase.fr}
        </div>

        <div class="phrase-es">
            ${phrase.es}
        </div>

        <div class="phrase-tip">
            💡 ${phrase.tip}
        </div>
    `;

}


function playCurrentPhrase(){

    const phrase = currentLesson.phrases[currentPhraseIndex];

    speakFrench(phrase.fr);

    document.getElementById("feedback").textContent =
        "Escucha el modelo. Luego repite con calma.";

}


function startRecognition(){

    const phrase = currentLesson.phrases[currentPhraseIndex];

    recognizeFrench(
        phrase.ok,
        "feedback",
        function(){
            scoreCount++;
            updateProgress();
        }
    );

}


function nextPhrase(){

    currentPhraseIndex++;

    if(currentPhraseIndex >= currentLesson.phrases.length){
        currentPhraseIndex = 0;
    }

    renderPhrase();

    document.getElementById("feedback").textContent =
        "Nueva frase. Escucha y repite.";

}


function renderChunks(){

    const phrase = currentLesson.phrases[currentPhraseIndex];
    const chunks = phrase.fr.split(" ");

    document.getElementById("chunkBox").innerHTML =
        chunks.map((chunk, index) => {
            return `
                <div class="chunk ${index === currentChunkIndex ? "active-chunk" : ""}">
                    ${chunk}
                </div>
            `;
        }).join("");

}


function playChunk(){

    const phrase = currentLesson.phrases[currentPhraseIndex];
    const chunks = phrase.fr.split(" ");
    const chunk = chunks[currentChunkIndex];

    speakFrench(chunk);

    document.getElementById("chunkFeedback").textContent =
        "Escucha esta parte y repítela.";

}


function startChunkRecognition(){

    const phrase = currentLesson.phrases[currentPhraseIndex];
    const chunks = phrase.fr.split(" ");
    const chunk = chunks[currentChunkIndex];

    recognizeFrench(
        [chunk],
        "chunkFeedback",
        function(){
            scoreCount++;
            updateProgress();
        }
    );

}


function nextChunk(){

    const phrase = currentLesson.phrases[currentPhraseIndex];
    const chunks = phrase.fr.split(" ");

    currentChunkIndex++;

    if(currentChunkIndex >= chunks.length){
        currentChunkIndex = 0;
    }

    renderChunks();

    document.getElementById("chunkFeedback").textContent =
        "Nueva parte. Escucha y repite.";

}


function renderDialogue(){

    const turn = currentLesson.dialogue[currentDialogueIndex];

    document.getElementById("dialogueBox").innerHTML = `
        <div class="dialogue-line system-line">
            👩‍🏫 Sistema: ${turn.system}
        </div>

        <div class="dialogue-line student-line">
            🧒 Alumno debe responder: ${turn.expected}
        </div>
    `;

}


function playDialoguePrompt(){

    const turn = currentLesson.dialogue[currentDialogueIndex];

    speakFrench(turn.system);

    document.getElementById("dialogueFeedback").textContent =
        "Escucha el turno y responde.";

}


function startDialogueRecognition(){

    const turn = currentLesson.dialogue[currentDialogueIndex];

    recognizeFrench(
        [turn.expected],
        "dialogueFeedback",
        function(){
            scoreCount++;
            updateProgress();
        }
    );

}


function nextDialogueTurn(){

    currentDialogueIndex++;

    if(currentDialogueIndex >= currentLesson.dialogue.length){
        currentDialogueIndex = 0;
    }

    renderDialogue();

    document.getElementById("dialogueFeedback").textContent =
        "Nuevo turno. Escucha y responde.";

}


function renderGrammar(){

    document.getElementById("grammarBox").innerHTML =
        currentLesson.grammar.map(item => {
            return `
                <div class="grammar-item">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            `;
        }).join("");

}


function speakFrench(text){

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "fr-FR";
    utterance.rate = 0.75;
    utterance.pitch = 1.05;

    speechSynthesis.cancel();

    setTimeout(function(){
        speechSynthesis.speak(utterance);
    }, 120);

}


function recognizeFrench(expectedList, feedbackId, successCallback){

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    const feedback = document.getElementById(feedbackId);

    if(!SpeechRecognition){

        feedback.textContent =
            "Este navegador no permite reconocimiento de voz. Prueba Chrome/Edge en Windows o Android. En iPhone usa Safari con HTTPS.";

        return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "fr-FR";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 5;

    feedback.textContent =
        "Te escucho... habla claro y cerca del micrófono.";

    recognition.onresult = function(event){

        const results = Array.from(event.results[0])
            .map(result => result.transcript);

        const score = checkFlexiblePronunciation(results, expectedList);

        if(score >= 55){

            feedback.textContent =
                `✅ Très bien. Escuché: "${results[0]}". Puntaje: ${score}%`;

            successCallback();

        }else{

            feedback.textContent =
                `🔁 Buen intento. Escuché: "${results[0]}". Intenta repetir más despacio. Puntaje: ${score}%`;

        }

    };

    recognition.onerror = function(){

        feedback.textContent =
            "No pude escucharte bien. Revisa el permiso del micrófono e intenta otra vez.";

    };

    recognition.start();

}


function checkFlexiblePronunciation(results, expectedList){

    let best = 0;

    const accepted = expectedList.map(normalizeText);

    results.forEach(result => {

        const said = normalizeText(result);

        accepted.forEach(target => {

            if(said.includes(target) || target.includes(said)){

                best = Math.max(best, 100);

            }else{

                best = Math.max(best, similarity(said, target));

            }

        });

    });

    return Math.round(best);

}


function normalizeText(text){

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}


function similarity(a, b){

    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;

    if(longer.length === 0){
        return 100;
    }

    const distance = levenshtein(longer, shorter);

    return ((longer.length - distance) / longer.length) * 100;

}


function levenshtein(a, b){

    const matrix = [];

    for(let i = 0; i <= b.length; i++){
        matrix[i] = [i];
    }

    for(let j = 0; j <= a.length; j++){
        matrix[0][j] = j;
    }

    for(let i = 1; i <= b.length; i++){

        for(let j = 1; j <= a.length; j++){

            matrix[i][j] =
                b.charAt(i - 1) === a.charAt(j - 1)
                    ? matrix[i - 1][j - 1]
                    : Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );

        }

    }

    return matrix[b.length][a.length];

}


function updateProgress(){

    const total =
        currentLesson.phrases.length +
        currentLesson.dialogue.length +
        5;

    const percent = Math.min(
        100,
        Math.round((scoreCount / total) * 100)
    );

    document.getElementById("progressFill").style.width =
        percent + "%";

    document.getElementById("progressText").textContent =
        percent + "%";

}
