// CONFIGURACIÓN DE LA HISTORIA CON IMÁGENES REALES (imX)
const storySteps = [
    { 
        id: 1, theme: "emergency", 
        text: "MENSAJE IMPORTANTE PARA MARIA. Haz clic para abrir la carta 🚨📢", 
        image: "img/im1.jpeg", 
        btnText: "ABRIR CARTA"
    },
    { 
        id: 2, theme: "dark", 
        text: "Querida Maria,\nSolo remito esta carta para informarte que eres linda <3 , y que te bañes :v", 
        image: "img/im2.png" 
    },
    { 
        id: 3, theme: "dark", 
        text: "Ya tenemos 8 presidentes en menos de 10 años y nosotros aun no aplicamos... ¿qué esperamos xd?", 
        images: ["img/im3.png", "img/im4.png", "img/im5.png"] 
    },
    { 
        id: 4, theme: "dark", 
        text: "No te asustes, te comento: estos últimos meses me interesó la ProGRAMACION, estoy estudiando en casa (Python, Linux, GIS, automatización). Veo que los que trabajan en esto ganan mucho dinero. Pero igual seguiré trabajando... y como parte de mi aprendizaje te envío esta CARTA virtual Maria. Utilicé HTML, JS, CSS y mi repositorio de GitHub.", 
        images: ["img/im6.png", "img/im7.png"] 
    },
    { id: 5, theme: "dark", text: "Pero... tengo un problema...", image: "img/im8.png" },
    { id: 6, theme: "dark", text: "Sucede que soy Gay u.u", image: "img/im9.png" },
    { id: 7, theme: "dark", text: "", image: "img/im10.png", fullImage: true },
    { 
        id: 8, theme: "dark", 
        text: "Ok no, pongámonos serios XD. El problema es que cada día te recuerdo más seguido. Por momentos se siente bonito, pero por otros momentos un poco vacío ❤️🍺", 
        images: ["img/im11.png", "img/im12.png"] 
    },
    { id: 9, theme: "dark", text: "Por el momento no tengo muchos recursos, está lo de mi casa y la tesis también :,v, así que a veces me da un poco de pena no tener a donde llevarte o invitarte 😭", image: "img/im13.png" },
    { id: 10, theme: "dark", text: "Además está que llueve mucho XD, no da ganas de salir ☔️📰", image: "img/im14.png", isNews: true },
    { id: 11, theme: "gamer-choice", text: "¿ASI QUE ESTAS LISTA PARA LA AVENTURA?", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7L963Gv2x7q9y/giphy.gif" },
    { id: 12, theme: "gamer-missions", text: "Y por todo eso propongo hacer algo mañana. ELIGE TU MISIÓN:", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I4YmRjNDRkYjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZDI0YjY0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIX2v1/giphy.gif" },
    { id: 13, theme: "final-question", text: "Maria, ¿te gustaría salir conmigo este fin de semana? 😳", image: "img/im16.png" },
    { id: 14, theme: "dark", text: "¡GENIAL! 💖 PSDTA: Con cariño, Jose", images: ["img/im17.jpeg", "img/im18.jpeg"], isAlbum: true }
];

// ELEMENTOS DOM
const screen = document.getElementById('story-screen');
const mainText = document.getElementById('main-text');
const mainImage = document.getElementById('main-image');
const imageWrapper = document.getElementById('image-wrapper');
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
    
    // Configuración de UI
    emergencyLight.classList.toggle('hidden', step.theme !== 'emergency');
    gamerContainer.classList.toggle('hidden', !step.theme.startsWith('gamer'));
    gamerChoice10.classList.toggle('hidden', step.theme !== 'gamer-choice');
    missionList.classList.toggle('hidden', step.theme !== 'gamer-missions');
    finalChoice.classList.toggle('hidden', step.theme !== 'final-question');
    
    const hideNext = (step.id === 1 || step.id === 11 || step.id === 12 || step.id === 13);
    btnNext.classList.toggle('hidden', hideNext);
    btnNext.innerText = step.btnText || "Continuar";

    // Manejo de Imágenes Dinámicas
    imageWrapper.innerHTML = ''; 
    if (step.isAlbum) {
        // Estilo Álbum Vintage para pág 14
        step.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = "album-img";
            imageWrapper.appendChild(img);
        });
    } else if (step.images) {
        // Rotación de imágenes (Pág 3, 4, 8)
        const img = document.createElement('img');
        img.src = step.images[0];
        img.id = "main-image";
        imageWrapper.appendChild(img);
        
        // Cambiar imagen después de un tiempo (secuencia)
        if (step.id === 4) {
            setTimeout(() => { img.src = step.images[1]; }, 3000);
        } else if (step.id === 3) {
            setTimeout(() => { 
                const img2 = document.createElement('img');
                img2.src = step.images[1];
                img2.className = "side-img";
                imageWrapper.appendChild(img2);
            }, 2000);
        }
    } else {
        const img = document.createElement('img');
        img.src = step.image;
        img.id = "main-image";
        if (step.fullImage) img.className = "full-screen-img";
        imageWrapper.appendChild(img);
    }

    resetDodgingButton(btnGamerNo);
    if (step.id === 11) setupDodgingButton(btnGamerNo);

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

function addClickAndTouch(element, callback) {
    if (!element) return;
    element.addEventListener('click', (e) => {
        e.preventDefault();
        callback();
    });
    element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        callback();
    }, { passive: false });
}

addClickAndTouch(btnNext, nextStep);
addClickAndTouch(btnGamerYes, nextStep);

window.selectMission = function(id) {
    nextStep();
};

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

addClickAndTouch(btnNoFinal, () => {
    yesButtonScale += 0.8;
    btnYesFinal.style.transform = `scale(${yesButtonScale})`;
    if (yesButtonScale > 12) btnYesFinal.click();
});

addClickAndTouch(btnYesFinal, () => {
    currentStepIndex = 13;
    showStep();
});

showStep();
