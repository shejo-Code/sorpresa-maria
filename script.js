// CONFIGURACIÓN DE LA HISTORIA - LAS 14 ESCENAS PARA MARIA
const storySteps = [
    { id: 1, theme: "emergency", text: "MENSAJE IMPORTANTE PARA MARIA. Haz clic para abrir la carta 🚨📢", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L0qTl8hl84S64/giphy.gif" },
    { id: 2, theme: "dark", text: "Solo remito esta carta para informarte que eres linda <3 , y que te bañes :v", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vA5mj9v6M5IA0/giphy.gif" },
    { id: 3, theme: "dark", text: "Ya tenemos 8 presidentes en menos de 10 años y nosotros aun no aplicamos 🤨 ¿QUE?", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LpLd2NGvpaiys/giphy.gif" },
    { id: 4, theme: "dark", text: "No te asustes, te comento: estos últimos meses me interesó la ProGRAMACION, estoy estudiando en casa (Python, Linux, GIS, automatización). Veo que los que trabajan en esto ganan mucho dinero 💸✨. Pero igual seguiré trabajando... y como parte de mi aprendizaje te envío esta CARTA virtual Maria. Utilicé HTML, JS, CSS y mi repositorio de GitHub.", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif" },
    { id: 5, theme: "dark", text: "Pero... tengo un problema...", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif" },
    { id: 6, theme: "dark", text: "Sucede que soy Gay u.u", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9K6UscvH7gMU/giphy.gif" },
    { id: 7, theme: "dark", text: "Ok no, pongámonos serios XD. El problema es que cada día te recuerdo más seguido. Por momentos se siente bonito, pero por otros momentos un poco vacío ❤️🍺", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46C6z7vYdvZBYzBK/giphy.gif" },
    { id: 8, theme: "dark", text: "Por el momento no tengo muchos recursos, está lo de mi casa y la tesis también :,v, así que a veces me da un poco de pena no tener a donde llevarte o invitarte 😭", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M28rUlcjueK9a/giphy.gif" },
    { id: 9, theme: "dark", text: "Además está que llueve mucho XD, no da ganas de salir ☔️", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5atf8EVf9isAg8yYv5/giphy.gif" },
    { id: 10, theme: "gamer-choice", text: "¿ASI QUE ESTAS LISTA PARA LA AVENTURA?", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7L963Gv2x7q9y/giphy.gif" },
    { id: 11, theme: "gamer-missions", text: "Y por todo eso propongo hacer algo mañana. ELIGE TU MISIÓN:", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIX2v1/giphy.gif" },
    { id: 12, theme: "dark", text: "Entonces...", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t6XmH9Y8Rk-16/giphy.gif" },
    { id: 13, theme: "final-question", text: "Maria, ¿te gustaría salir conmigo este fin de semana? 😳", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SshMv0y0K16Bq/giphy.gif" },
    { id: 14, theme: "dark", text: "¡GENIAL! 💖 PSDTA: Con cariño, Jose", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZubZqIeC0O8og/giphy.gif" }
];

// ELEMENTOS DOM
const screen = document.getElementById('story-screen');
const mainText = document.getElementById('main-text');
const mainImage = document.getElementById('main-image');
const btnNext = document.getElementById('btn-next');
const gamerContainer = document.getElementById('gamer-container');
const gamerChoice10 = document.getElementById('gamer-choice-10');
const missionList = document.getElementById('mission-list');
const btnGamerYes = document.getElementById('btn-gamer-yes');
const btnGamerNo = document.getElementById('btn-gamer-no');
const emergencyLight = document.getElementById('emergency-light');
const finalChoice = document.getElementById('final-choice');
const btnYesFinal = document.getElementById('btn-yes-final');
const btnNoFinal = document.getElementById('btn-no-final');

let currentStepIndex = 0;
let yesButtonScale = 1;

function showStep() {
    const step = storySteps[currentStepIndex];
    document.body.className = "theme-" + step.theme;
    
    // Visibilidad de contenedores
    emergencyLight.classList.toggle('hidden', step.theme !== 'emergency');
    gamerContainer.classList.toggle('hidden', !step.theme.startsWith('gamer'));
    gamerChoice10.classList.toggle('hidden', step.theme !== 'gamer-choice');
    missionList.classList.toggle('hidden', step.theme !== 'gamer-missions');
    finalChoice.classList.toggle('hidden', step.theme !== 'final-question');
    btnNext.classList.toggle('hidden', step.theme === 'final-question' || step.theme === 'gamer-missions' || step.theme === 'gamer-choice');

    // Reset de botones esquivadores
    resetDodgingButton(btnGamerNo);

    if (step.id === 10) {
        setupDodgingButton(btnGamerNo);
    }

    mainImage.src = step.image;
    typeWriter(step.text, mainText);
}

function typeWriter(text, element) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 20);
        }
    }
    type();
}

// CAMBIO DE PÁGINA GENÉRICO
function nextStep() {
    screen.classList.add('page-flip-exit');
    setTimeout(() => {
        currentStepIndex++;
        showStep();
        screen.classList.remove('page-flip-exit');
        screen.classList.add('page-flip-enter');
        setTimeout(() => screen.classList.remove('page-flip-enter'), 50);
    }, 400);
}

btnNext.addEventListener('click', nextStep);
btnGamerYes.addEventListener('click', nextStep);

function selectMission(id) {
    alert("Has seleccionado la Misión " + id + ". ¡Preparando aventura!");
    nextStep();
}

// BOTÓN ESQUIVADOR
function setupDodgingButton(btn) {
    const move = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        const x = Math.random() * (window.innerWidth - btn.offsetWidth - 40) + 20;
        const y = Math.random() * (window.innerHeight - btn.offsetHeight - 40) + 20;
        btn.style.position = 'fixed';
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        btn.style.zIndex = "1000";
    };
    btn.onmouseover = move;
    btn.ontouchstart = move;
}

function resetDodgingButton(btn) {
    btn.onmouseover = null;
    btn.ontouchstart = null;
    btn.style.position = 'static';
}

// BOTÓN FINAL GIGANTE
btnNoFinal.addEventListener('click', () => {
    yesButtonScale += 0.8;
    btnYesFinal.style.transform = `scale(${yesButtonScale})`;
    if (yesButtonScale > 12) btnYesFinal.click();
});

btnYesFinal.addEventListener('click', () => {
    currentStepIndex = 13;
    showStep();
});

showStep();
